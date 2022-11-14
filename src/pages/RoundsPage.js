import React, { useState, useEffect, useCallback } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addRoundScores } from '../features/scores/scoresSlice';

import RoundCard from '../components/RoundCard';
import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';
import Modal from '../components/Modal';

import styles from './RoundsPage.module.css';

const RoundsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { round, teamsRound, roundSubmitDisabled } = useSelector(
    (state) => state.scores
  );

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, [setModalIsOpen]);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, [setModalIsOpen]);

  return (
    <Container>
      <Header
        title={`Round ${round}`}
        leftContent={
          ''
          // <Button buttonType='text' onClick={() => navigate(-1)}>
          //   <FaLessThan size={16} />{' '}
          //   <span style={{ paddingLeft: 6 }}>Back</span>
          // </Button>
        }
        rightContent={
          <Button buttonType='text' onClick={() => openModal()}>
            <FaHome size={26} />
          </Button>
        }
      />
      <Content background='green'>
        <div className={styles.contentWrapper}>
          {teamsRound.map((item, index) => {
            return (
              <RoundCard key={index} teamMembers={item} field={index + 1} />
            );
          })}
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            buttonType='white'
            disabled={roundSubmitDisabled}
            onClick={() => {
              dispatch(addRoundScores());
              navigate('/scores');
            }}
          >
            Submit
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

export default RoundsPage;
