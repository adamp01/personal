import { MDXRemoteProps } from 'next-mdx-remote'
// Types for blog post files.
export type BlogPostsBinding = { posts: BlogPosts; pageIncrement: number; postIncrement: string; totalPages: number; };
export type BlogPosts = Array<BlogPostData>;
export type BlogPostData = { data: { [key: string]: any; }; content: string; slug: string; };
export type BlogPostCardBinding = { post: BlogPostCardData; previous?: string; next?: string; };
export type BlogPostCardData = { data: { [key: string]: any; }; slug: string; };
export type BlogPostBinding = { source: MDXRemoteProps; frontmatter: frontmatter; adjacentPosts: AdjacentPosts };
export type DynamicSlugBinding = { params: { slug: string } };

// Internal types
type frontmatter = { author: string; title: string; publishedOn: string; excerpt: string; tags: string; featured: string; }
type AdjacentPosts = {
    previous: {
        slug: string;
        data: {
            title: string;
            excerpt: string;
        }
    } | null;
    next: {
        slug: string;
        data: {
            title: string;
            excerpt: string;
        }
    } | null;
}
