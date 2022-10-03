import React from 'react';

import styles from './Scrolling.module.css';

type ScrollingTextBinding = {
  children: string;
};

const ScrollingLink = React.forwardRef(({ onClick, href, children }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <ScrollingText>{children}</ScrollingText>
      </a>
    )
  })

function ScrollingText({ children }: ScrollingTextBinding) {
  return <div className={styles['scrolling-text']}>{children}</div>;
}

export {
    ScrollingLink,
    ScrollingText
}