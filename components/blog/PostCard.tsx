import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import type { BlogPostCardBinding } from '../../types/blog';

export default function PostCard({ post }: BlogPostCardBinding) {
    return (
        <div className={styles.blogCard}>
            <h3>
                <Link href={`/blog/${post.slug}`}>{post.data.title}</Link>

            </h3>
            <p>{post.data.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>➥ Read more</Link>
        </div >
    );
};
