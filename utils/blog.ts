import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sync } from 'glob';

const postsPath = path.join(process.cwd(), 'pages', 'blog', 'posts');

export const getSlug = async () => {
  const paths = sync(`${postsPath}/*.mdx`);

  return paths.map((path: string) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

export const getPostBySlug = (slug: string) => {
  const fileContent = fs.readFileSync(
    path.join(postsPath, slug + '.mdx'),
    'utf-8'
  );
  const { data, content } = matter(fileContent);

  return { data, content, slug };
}

export const getBlogPosts = (pageIndex: number, postsPerPage: number, all = false) => {
  const dirFiles = fs.readdirSync(postsPath, {
    withFileTypes: true,
  });

  let posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const slug = file.name.replace(/.mdx$/, '');

      return getPostBySlug(slug);
    })
    .filter(post => post)

  if (!all) {
    posts = posts
      .slice((pageIndex - 1) * postsPerPage, pageIndex * postsPerPage);
  }

  return posts;
}

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
