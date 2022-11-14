import React, { useState, useEffect, useCallback } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addNames } from '../features/scores/scoresSlice';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';
import Modal from '../components/Modal';

import styles from './NameEntryPage.module.css';

const NameEntryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { playersCount } = useSelector((state) => state.scores);

  // State
  // const [modalMessage, setModalMessage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [playerNames, setPlayerNames] = useState(
    Array.from({ length: playersCount })
  );

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, [setModalIsOpen]);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, [setModalIsOpen]);

  // Add names to playerNames state
  const nameInputHandler = (e, index) => {
    setPlayerNames((prev) => {
      const tempArray = [...prev];
      tempArray[index] = e.target.value;
      return tempArray;
    });
  };

  return (
    <Container>
      <Header
        title='Name Entry (Optional)'
        leftContent={
          <Button buttonType='text' onClick={() => navigate(-1)}>
            <FaLessThan size={20} />{' '}
            <span style={{ paddingLeft: 6 }}>Back</span>
          </Button>
        }
        rightContent={
          <Button buttonType='text' onClick={() => openModal()}>
            <FaHome size={26} />
          </Button>
        }
      />
      <Content>
        {playerNames.map((item, idx) => {
          return (
            <div className={styles.nameEntryArea_Wrapper} key={idx}>
              <div className={styles.nameEntryArea_Name}>
                <div>Player #{idx + 1}: </div>
              </div>
              <div className={styles.nameEntryArea_Input}>
                <input
                  className={styles.scoreInput}
                  maxLength={50}
                  onChange={(e) => nameInputHandler(e, idx)}
                />
              </div>
            </div>
          );
        })}
      </Content>

      <Content position='bottom'>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              dispatch(addNames(playerNames));
              navigate('/rounds');
            }}
          >
            Begin Game
          </Button>
        </div>
      </Content>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalMessage='Going to the home screen will cancel current game. Continue?'
        modalTitle='Warning'
        modalType='confirm'
        modalConfirm={() => navigate('/')}
      />
    </Container>
  );
};

export default NameEntryPage;
