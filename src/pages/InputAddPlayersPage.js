import React, { useState, useEffect } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';
import PlayerInputForm from '../components/PlayerInputForm';
import Modal from '../components/Modal';

const InputAddPlayersPage = () => {
  const [modalMessage, setModalMessage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalMessage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalMessage !== null) {
      openModal();
    }
  }, [modalMessage]);

  return (
    <Container>
      <Header
        title='Add Players'
        leftContent={
          <Button buttonType='text' onClick={() => navigate(-1)}>
            <FaLessThan size={16} />{' '}
            <span style={{ paddingLeft: 6 }}>Back</span>
          </Button>
        }
        rightContent={
          ''
          // <Button buttonType='text' onClick={() => navigate('/')}>
          //   <FaHome size={26} />
          // </Button>
        }
      />
      <Content>
        <PlayerInputForm setModalMessage={setModalMessage} />
        <Modal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          modalMessage={modalMessage}
          modalTitle='Error'
        />
      </Content>
    </Container>
  );
};

export default InputAddPlayersPage;
