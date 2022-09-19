import { MDXRemote } from 'next-mdx-remote'
import styles from '../../styles/Home.module.css';
import Code from '../code/Code'
import Image from 'next/image'
import Figure from './Figure'
import type { BlogPostBinding } from '../../types/blog';

export default function Post({ source, frontmatter }: BlogPostBinding) {
    return (
        <div className={styles.blogPost}>
            <h1 className={styles.title}>
                {frontmatter.title}
            </h1>
            <div>
                <MDXRemote {...source} components={{ Code, Image, Figure }} />
            </div>
        </div >
    );
};
