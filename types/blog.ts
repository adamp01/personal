import { MDXRemoteProps } from 'next-mdx-remote'
// Types for blog post files.
export type BlogPostsBinding = { posts: BlogPosts; pageIncrement: number; postIncrement: string; };
export type BlogPosts = Array<BlogPostData>;
export type BlogPostData = { data: { [key: string]: any; }; content: string; slug: string; };
export type BlogPostCardBinding = { post: BlogPostData; };
export type BlogPostBinding = { source: MDXRemoteProps; frontmatter: frontmatter; }
export type DynamicSlugBinding = { params: { slug: string } };

// Internal types
type frontmatter = { author: string; title: string; publishedOn: string; excerpt: string; tags: string; featured: string; }
