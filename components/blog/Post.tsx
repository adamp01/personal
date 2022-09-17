import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import type { BlogPostBinding } from '../../types/blog';

export default function PostItem({ post }: BlogPostBinding) {
    return (
        <div className={styles.blogPost}>
            <h3>
                <Link href={`/blog/posts/${post.slug}`}>{post.data.title}</Link>
            </h3>
            <p>{post.data.excerpt}</p>
            <Link href={`/blog/posts/${post.slug}`}>➥ Read more</Link>
        </div>
    );
};
