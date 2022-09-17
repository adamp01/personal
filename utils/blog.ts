import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getBlogPosts = (pageIndex: number, postsPerPage: number) => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'blog', 'posts'), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'blog', 'posts', file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');
      console.log(slug);
      return { data, content, slug };
    })
    .filter(post => post)
    .slice((pageIndex - 1) * postsPerPage, pageIndex * postsPerPage);

  return posts;
};

// Add function to get ordered blog posts
export const getOrderedBlogPosts = (pageIndex: number, postsPerPage: number, orderBy: string) => {
  switch (orderBy) {
    case 'dateDesc':
      const posts = getBlogPosts(pageIndex, postsPerPage);
      return posts.sort();
  }
}