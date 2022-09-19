import styles from '../../styles/Home.module.css';
import Image from 'next/image'

type FigureProps = {
    caption: string;
    src: string;
    width: string;
    height: string;
}

export default function Figure({ caption, src, width, height }: FigureProps) {
    return (
        <div className={styles.figure}>
            <Image src={src} width={width} height={height} />
            <br/>
            <p className={styles.caption}>
                {caption}
            </p>
        </div>
    );
};
