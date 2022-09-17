// Types for blog post files.
export type BlogPostsBinding = { posts: BlogPosts; pageIncrement: number; postIncrement: string; };
export type BlogPosts = Array<BlogPostData>;
export type BlogPostData = { data: { [key: string]: any; }; content: string; slug: string; };
export type BlogPostBinding = { post: BlogPostData; };
