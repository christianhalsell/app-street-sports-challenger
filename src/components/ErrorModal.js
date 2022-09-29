import React from 'react';
import Modal from 'react-modal';
import Button from '../components/Button';

import styles from './ErrorModal.module.css';

const customStyles = {
  content: {
    borderColor: '#ddd',
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    padding: 0,
    boxSizing: 'border-box',
    right: 'auto',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .5)'
  }
};

const ErrorModal = ({ modalIsOpen, closeModal, modalTitle, modalMessage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={styles.title}>{modalTitle}</div>
      <div className={styles.content}>{modalMessage}</div>
      <div className={styles.bottom}>
        <Button buttonType='text' onClick={closeModal}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ErrorModal;
