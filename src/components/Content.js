import React from 'react';

import styles from './Content.module.css';

const Content = ({ children, position, type }) => {
  let flexPosition;
  const displayImage = type === 'image' ? styles.contentImage : null;

  switch (position) {
    case 'bottom':
      flexPosition = styles.flexEnd;
      break;

    case 'center':
      flexPosition = styles.flexCenter;
      break;

    default:
      flexPosition = styles.flexStart;
      break;
  }

  return (
    <div className={`${styles.content} ${displayImage} ${flexPosition}`}>
      {children}
    </div>
  );
};

export default Content;
