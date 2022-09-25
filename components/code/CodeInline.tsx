import styles from '../../styles/Home.module.css'

type CodeProps = {
    children: string;
}

export default function CodeBlock({ children }: CodeProps) {
    return <code className={styles.codeInline}>{children}</code>
}