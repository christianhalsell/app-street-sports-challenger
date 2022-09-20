import React from 'react';

import styles from './Button.module.css';
import Colors from '../constants/Colors';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Button = ({ children, onClick, type }) => {
  let buttonType = {
    color: 'white',
    backgroundColor: Colors.ScoreBlue
  };

  switch (type) {
    case 'alert': {
      buttonType = {
        backgroundColor: Colors.AlertRed,
        color: 'white'
      };
      break;
    }
    case 'warning': {
      buttonType = {
        backgroundColor: Colors.WarningOrange,
        color: 'white'
      };
      break;
    }
    case 'white': {
      buttonType = {
        backgroundColor: 'white',
        color: Colors.ScoreBlue
      };
      break;
    }
    case 'text': {
      buttonType = {
        backgroundColor: 'transparent',
        color: Colors.ScoreBlue,
        padding: 0,
        width: 'inherit'
      };
      break;
    }
    case 'info':
    default: {
      buttonType = {
        backgroundColor: Colors.ScoreBlue,
        color: 'white'
      };
      break;
    }
  }

  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ ...buttonType }}
    >
      {children}
    </button>
  );
};

export default Button;