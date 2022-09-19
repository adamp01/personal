import styles from '../../styles/Home.module.css'

type CodeProps = {
    children: string;
}

export default function Code({ children }: CodeProps) {
    return (
        <div>
            <code className={styles.code}>{children}</code>
            <br />
        </div>
    )
}