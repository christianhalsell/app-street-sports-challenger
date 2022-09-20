import React from 'react';

import styles from './Content.module.css';

const Content = ({ children, position }) => {
  let flexPosition;

  switch (position) {
    case 'bottom':
      flexPosition = 'flex-end';
      break;

    case 'center':
      flexPosition = 'center';
      break;

    case 'top':
      flexPosition = 'flex-start';
      break;

    default:
      flexPosition = 'flex-start';
      break;
  }

  return (
    <div className={styles.content} style={{ justifyContent: flexPosition }}>
      {children}
    </div>
  );
};

export default Content;
