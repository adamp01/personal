import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import CodeBlock from '../code/CodeBlock';
import CodeInline from '../code/CodeInline';
import Figure from './Figure';
import AdjacentPosts from './AdjacentPosts';
import styles from '../../styles/Home.module.css';

import type { BlogPostBinding } from '../../types/blog';

export default function Post({
  source,
  frontmatter,
  adjacentPosts
}: BlogPostBinding) {
  return (
    <div className={styles['blogPost']}>
      <h1 className={styles.title}>{frontmatter.title}</h1>
      <div>
        <MDXRemote
          {...source}
          components={{ CodeBlock, CodeInline, Image, Figure }}
        />
      </div>
      <AdjacentPosts
        previous={adjacentPosts?.previous}
        next={adjacentPosts?.next}
      />
    </div>
  );
}
