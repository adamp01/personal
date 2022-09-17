import Navigation from './Navigation'
import styles from '../../styles/Home.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerName}>Adam Wood</div>
            <Navigation></Navigation>
        </div>
    )
}