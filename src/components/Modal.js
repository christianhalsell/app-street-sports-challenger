import React from 'react';
import Modal from 'react-modal';
import Button from './Button';

import Colors from '../constants/Colors';
import styles from './Modal.module.css';

const customStyles = {
  content: {
    borderColor: Colors.LightGray,
    borderRadius: '20px',
    bottom: 'auto',
    boxSizing: 'border-box',
    left: '50%',
    marginRight: '-50%',
    padding: '10px 0',
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

const ErrorModal = ({
  modalIsOpen,
  closeModal,
  modalTitle,
  modalMessage,
  modalType,
  modalConfirm
}) => {
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
          {modalType === 'confirm' ? 'Cancel' : 'Close'}
        </Button>
        {modalType === 'confirm' ? (
          <Button onClick={modalConfirm}>OK</Button>
        ) : null}
      </div>
    </Modal>
  );
};

export default ErrorModal;
