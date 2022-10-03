import styles from '../../styles/Home.module.css';

type CodeProps = {
  children: string;
};

export default function CodeBlock({ children }: CodeProps) {
  return (
    <div className={styles['code-parent']}>
      <code className={styles['code-block']}>{children}</code>
      <br />
    </div>
  );
}
