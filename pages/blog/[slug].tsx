import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'

import Post from '../../components/blog/Post'
import { getSlug, getPostBySlug } from '../../utils/blog';
import styles from '../../styles/Home.module.css'

import type { BlogPostBinding, DynamicSlugBinding } from '../../types/blog'

// Generate the static paths that are required
export const getStaticPaths = async () => {
    const paths = (await getSlug()).map((slug: string) => ({ params: { slug } }))

    return {
        paths,
        fallback: false, // 404 if a path does not exist
    }
}

export const getStaticProps = async ({ params }: DynamicSlugBinding) => {
    const { slug } = params;
    const post = getPostBySlug(slug);
    const source = await serialize(post.content, {})
    return {
        props: {
            source,
            frontmatter: post.data
        },
    };
};

const BlogPost = ({ source, frontmatter }: BlogPostBinding) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{frontmatter.title}</title>
                <meta name="description" content={frontmatter.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Post source={source} frontmatter={frontmatter} />
            </main>
        </div>
    )
}

export default BlogPost
