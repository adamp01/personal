import Image from 'next/image';

import styles from '../../styles/Home.module.css';

type FigureProps = {
  caption: string;
  src: string;
  width?: string;
  height?: string;
  layout: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined;
};

export default function Figure({
  caption,
  src,
  width,
  height,
  layout
}: FigureProps) {
  return (
    <div className={styles.figure}>
      <Image src={src} height={height} width={width} layout={layout} />
      {layout === 'responsive' ? <div /> : <br />}
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}
