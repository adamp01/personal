import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { sync } from 'glob';

const postsPath = path.join(process.cwd(), 'pages', 'blog', 'posts');

export const getSlug = async () => {
  const paths = sync(`${postsPath}/*.mdx`);

  return paths.map((path: string) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split('.');

    return slug;
  });
};

export const getPostBySlug = (slug: string) => {
  const fileContent = fs.readFileSync(
    path.join(postsPath, slug + '.mdx'),
    'utf-8'
  );
  const { data, content } = matter(fileContent);

  return { data, content, slug };
};

export const getBlogPosts = (
  pageIndex: number,
  postsPerPage: number,
  all = false
) => {
  const dirFiles = fs.readdirSync(postsPath, {
    withFileTypes: true
  });

  let posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return;

      const slug = file.name.replace(/.mdx$/, '');

      return getPostBySlug(slug);
    })
    .filter((post) => post);

  if (!all) {
    posts = posts.slice(
      (pageIndex - 1) * postsPerPage,
      pageIndex * postsPerPage
    );
  }

  return { posts, totalPosts: posts.length };
};

export const getAllBlogPostsByDateDesc = () => {
  const { posts, totalPosts } = getBlogPosts(0, 0, true);
  const filteredPosts = posts.sort((a, b) => {
    return +b?.data.publishedOn - +a?.data.publishedOn;
  });
  return { allPosts: filteredPosts, totalPosts };
};

// Add function to get ordered blog posts
export const getOrderedBlogPosts = (
  pageIndex: number,
  postsPerPage: number,
  orderBy: string
) => {
  switch (orderBy) {
    case 'dateDesc':
      const { allPosts, totalPosts } = getAllBlogPostsByDateDesc();
      const filteredPosts = allPosts.slice(
        (pageIndex - 1) * postsPerPage,
        pageIndex * postsPerPage
      );
      return { posts: filteredPosts, totalPosts };
  }
  return { posts: {}, totalPosts: 0 };
};

export const getAdjacentBlogPosts = (slug: string) => {
  const { allPosts, totalPosts } = getAllBlogPostsByDateDesc();
  const postIndex = allPosts.findIndex((post) => post?.slug === slug);
  return {
    previous:
      postIndex <= 0
        ? null
        : {
            slug: allPosts[postIndex - 1]!.slug,
            data: {
              title: allPosts[postIndex - 1]!.data.title,
              excerpt: allPosts[postIndex - 1]!.data.excerpt
            }
          },
    next:
      postIndex >= totalPosts - 1
        ? null
        : {
            slug: allPosts[postIndex + 1]!.slug,
            data: {
              title: allPosts[postIndex + 1]!.data.title,
              excerpt: allPosts[postIndex + 1]!.data.excerpt
            }
          }
  };
};
