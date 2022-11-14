import React from 'react';

import styles from './Content.module.css';

const Content = ({ children, position, background }) => {
  let flexPosition;
  let backgroundType = background === 'image' ? styles.contentImage : null;

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

  switch (background) {
    case 'image':
      backgroundType = styles.contentImage;
      break;

    case 'green':
      backgroundType = styles.backgroundGreen;
      break;

    case 'full':
      backgroundType = styles.full;
      break;

    default:
      backgroundType = styles.backgroundGray;
      break;
  }

  return (
    <div className={`${styles.content} ${backgroundType} ${flexPosition}`}>
      {children}
    </div>
  );
};

export default Content;
