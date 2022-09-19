import styles from '../../styles/Home.module.css'

type CodeProps = {
    children: string;
}

export default function Code({ children }: CodeProps) {
    return (
        <div className={styles.codeParent}>
            <code className={styles.code}>{children}</code>
            <br />
        </div>
    )
}