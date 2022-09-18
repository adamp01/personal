import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getBlogPosts = (pageIndex: number, postsPerPage: number, all = false) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'blog', 'posts'), {
    withFileTypes: true,
  });

  let posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'blog', 'posts', file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');

      return { data, content, slug };
    })
    .filter(post => post)

  if (!all) {
    posts = posts
      .slice((pageIndex - 1) * postsPerPage, pageIndex * postsPerPage);
  }

  return posts;
};

// Add function to get ordered blog posts
export const getOrderedBlogPosts = (pageIndex: number, postsPerPage: number, orderBy: string) => {
  switch (orderBy) {
    case 'dateDesc':
      const posts = getBlogPosts(pageIndex, postsPerPage, true);
      return posts
        .sort((a, b) => { return +b?.data.publishedOn - +a?.data.publishedOn; })
        .slice((pageIndex - 1) * postsPerPage, pageIndex * postsPerPage);
  }
}