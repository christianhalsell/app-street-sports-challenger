import React from 'react';

import styles from './Button.module.css';
import Colors from '../constants/Colors';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Button = ({ children, onClick, buttonType }) => {
  let buttonStyle = {
    color: 'white',
    backgroundColor: Colors.ScoreBlue
  };

  switch (buttonType) {
    case 'alert': {
      buttonStyle = {
        backgroundColor: Colors.AlertRed,
        color: 'white'
      };
      break;
    }
    case 'warning': {
      buttonStyle = {
        backgroundColor: Colors.WarningOrange,
        color: 'white'
      };
      break;
    }
    case 'white': {
      buttonStyle = {
        backgroundColor: 'white',
        color: Colors.ScoreBlue
      };
      break;
    }
    case 'text': {
      buttonStyle = {
        backgroundColor: 'transparent',
        color: Colors.ScoreBlue,
        padding: 0,
        width: 'inherit'
      };
      break;
    }
    case 'info':
    default: {
      buttonStyle = {
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
      style={{ ...buttonStyle }}
    >
      {children}
    </button>
  );
};

export default Button;
