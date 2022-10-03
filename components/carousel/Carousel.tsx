import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import styles from './Carousel.module.css';

type CarouselProps = {
  data: Array<{
    src: string;
    caption: string;
  }>;
  width: string;
  height: string;
  transition: number;
};

export default function Carousel({
  data,
  width,
  height,
  transition
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const loadNextImage = () => {
    if (activeIndex + 1 > data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    setTimeout(loadNextImage, transition);
  }, [activeIndex]);

  return (
    <div className={styles.carousel}>
      {data.map((item, index) => (
        <div
          className={`${styles.inner} ${
            index === activeIndex ? styles.active : styles.inactive
          }`}
          key={item.src}
        >
          <Image src={item.src} width={width} height={height} />
          <br />
          <p className={styles.caption}>{item.caption}</p>
        </div>
      ))}
    </div>
  );
}
