import Post from '../../components/blog/Post'
import { getBlogPosts } from '../../utils/blog';
import type { BlogPostData, BlogPostsBinding } from '../../types/blog'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import React, { useState } from 'react'

export const getStaticProps = () => {
    // TODO: Filter by date
    console.log("We are getting static props, which is the first 5 blog posts.")
    const postIncrement = 5;
    const pageIncrement = 1;
    const posts = getBlogPosts(pageIncrement, postIncrement);

    return {
        props: {
            posts,
            pageIncrement,
            postIncrement
        },
    };
};



const Blog = ({ posts, pageIncrement, postIncrement }: BlogPostsBinding) => {
    const [pageNumber, setPageNumber] = useState(pageIncrement)
    const [postsPerPage, setPostsPerPage] = useState(postIncrement);
    const [loadedPosts, setLoadedPosts] = useState(posts);

    const loadPosts = async (increment = true) => {
        // If pageNumber is 1 and we try to decrement, don't allow it.
        if (pageNumber == 1 && !increment) {
            return;
        }
        // Amend pageNumber
        const newPageNumber = increment ? pageNumber + pageIncrement : pageNumber - pageIncrement; 
        
        // Call API to get more posts
        const res = await fetch(`/api/blog?page=${newPageNumber}&range=${postsPerPage}`); // absolute url is supported here
        const posts = await res.json();

        // setLoadedPosts && pageNumber on success
        setLoadedPosts(posts);
        setPageNumber(newPageNumber);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Adam Wood</title>
                <meta name="description" content="Adam Wood's Blog" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Blog
                </h1>

                {/* <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p> */}

                {loadedPosts.map((post: BlogPostData) => (
                    <Post key={post.slug} post={post} />
                ))}
                {/* Add some component that displays the current page number, total pages, back and forward buttons. */}
                <button onClick={() => loadPosts()} />
                <div>{pageNumber}</div>
                <button onClick={() => loadPosts(false)} />
            </main>

            <footer className={styles.footer}>
                ©2022 Adam Wood
            </footer>
        </div>
    )
}

export default Blog
