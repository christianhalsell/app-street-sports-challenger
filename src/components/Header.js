import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, leftContent, rightContent }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>{leftContent}</div>
      <div className={styles.headerCenter}>{title}</div>
      <div className={styles.headerRight}>{rightContent}</div>
    </div>
  );
};

export default Header;
