import Link from 'next/link';

import { ScrollingLink } from '../scrolling/ScrollingText';
import styles from '../../styles/Home.module.css';

import type { AdjacentPostBinding, AdjacentPosts } from '../../types/blog';

function AdjacentPost({ data, previous, next }: AdjacentPostBinding) {
  return (
    <div
      className={`${previous ? styles['previous-post'] : styles['next-post']}`}
    >
      <p>{`${previous ? 'Previous' : 'Next'}`}</p>
      <h3>
        <Link href={`/blog/${data?.slug}`} passHref>
          {data?.data.title.length > 30 ? (
            <ScrollingLink>{data?.data.title}</ScrollingLink>
          ) : (
            data?.data.title
          )}
        </Link>
      </h3>
    </div>
  );
}

export default function AdjacentPosts({ previous, next }: AdjacentPosts) {
  return (
    <div>
      {previous ? <AdjacentPost data={previous} previous={'true'} /> : <div />}
      {next ? <AdjacentPost data={next} next={'true'} /> : <div />}
    </div>
  );
}
