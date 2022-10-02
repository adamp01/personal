import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Navigation() {
    return (
        <div className={styles.navigation}>
            <Link href="/">
                <div className={styles['navigation-button']}>Home</div>
            </Link>
            <Link href="/portfolio">
                <div className={styles['navigation-button']}>Portfolio</div>
            </Link>
            <Link href="/blog">
                <div className={styles['navigation-button']}>Blog</div>
            </Link>
        </div >
    );
}
