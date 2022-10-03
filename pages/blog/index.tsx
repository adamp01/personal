import Head from 'next/head';
import React, { useState } from 'react';

import PostCard from '../../components/blog/PostCard';
import { getOrderedBlogPosts } from '../../utils/blog';
import styles from '../../styles/Home.module.css';

import type { BlogPostData, BlogPostsBinding } from '../../types/blog';

export const getStaticProps = () => {
  const postIncrement = 5;
  const pageIncrement = 1;
  const { posts, totalPosts } = getOrderedBlogPosts(
    pageIncrement,
    postIncrement,
    'dateDesc'
  );
  const totalPages = Math.ceil(totalPosts / postIncrement);

  return {
    props: {
      posts,
      pageIncrement,
      postIncrement,
      totalPages
    }
  };
};

const Blog = ({
  posts,
  pageIncrement,
  postIncrement,
  totalPages
}: BlogPostsBinding) => {
  const [pageNumber, setPageNumber] = useState(pageIncrement);
  const [postsPerPage, setPostsPerPage] = useState(postIncrement);
  const [loadedPosts, setLoadedPosts] = useState(posts);
  const [pages, setPages] = useState(totalPages); // Will use this when number of items per page can be changed.

  const loadPosts = async (increment = true) => {
    // If pageNumber is 1 and we try to decrement, don't allow it.
    if (pageNumber == 1 && !increment) {
      return;
    }
    // TODO: If pageNumber is 1 or maxPages, grey out and disable the relevant increment button

    // Amend pageNumber
    const newPageNumber = increment
      ? pageNumber + pageIncrement
      : pageNumber - pageIncrement;

    // Call API to get more posts
    const res = await fetch(
      `/api/blog?page=${newPageNumber}&range=${postsPerPage}`
    ); // absolute url is supported here
    const posts = await res.json();

    // setLoadedPosts && pageNumber on success
    setLoadedPosts(posts);
    setPageNumber(newPageNumber);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Adam Wood's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Blog</h1>

        {/* <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p> */}

        {loadedPosts.map((post: BlogPostData) => (
          <PostCard key={post.slug} post={post} />
        ))}

        <div className={styles.pagination}>
          <div onClick={() => loadPosts(false)}>&lt;</div>
          <div>
            {pageNumber} / {pages}
          </div>
          <div onClick={() => loadPosts()}>&gt;</div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
