import Link from 'next/link';

import Navigation from './Navigation'

import styles from '../../styles/Home.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/">
                <div className={styles["header-name"]}>Adam Wood</div>
            </Link>
            <Navigation></Navigation>
        </div>
    )
}