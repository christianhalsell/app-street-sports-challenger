import React from 'react';

import styles from './Button.module.css';
import Colors from '../constants/Colors';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Button = ({ children, onClick, buttonType, type, disabled }) => {
  let buttonStyle;
  let disabledStyle = disabled ? styles.disabled : null;

  switch (buttonType) {
    case 'alert':
      buttonStyle = styles.alert;
      break;

    case 'warning':
      buttonStyle = styles.warning;
      break;

    case 'white':
      buttonStyle = styles.white;
      break;

    case 'text':
      buttonStyle = styles.text;
      break;

    case 'info':
    default:
      buttonStyle = null;
      break;
  }

  return (
    <button
      className={`${styles.button} ${disabledStyle} ${buttonStyle}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
