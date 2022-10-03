import Link from 'next/link';

import styles from '../../styles/Home.module.css';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <div className={styles['nav-button']}>Home</div>
      </Link>
      <Link href="/portfolio">
        <div className={styles['nav-button']}>Portfolio</div>
      </Link>
      <Link href="/blog">
        <div className={styles['nav-button']}>Blog</div>
      </Link>
    </div>
  );
}
