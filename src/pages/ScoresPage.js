import React, { useState, useEffect, useCallback } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { nextRound } from '../features/scores/scoresSlice';

import RoundCard from '../components/RoundCard';
import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';
import Modal from '../components/Modal';

import styles from './ScoresPage.module.css';

const ScoresPage = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [endGameModalIsOpen, setEndGameModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { round, playersScores } = useSelector((state) => state.scores);

  const sortedPlayersScores = [...playersScores].sort(
    (a, b) => b.score - a.score
  );

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, [setModalIsOpen]);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, [setModalIsOpen]);

  const openEndGameModal = useCallback(() => {
    setEndGameModalIsOpen(true);
  }, [setEndGameModalIsOpen]);

  const closeEndGameModal = useCallback(() => {
    setEndGameModalIsOpen(false);
  }, [setEndGameModalIsOpen]);

  return (
    <Container>
      <Header
        title={`Round ${round} Scores`}
        leftContent={
          ''
          // <Button buttonType='text' onClick={() => navigate(-1)}>
          //   <FaLessThan size={20} />{' '}
          //   <span style={{ paddingLeft: 6 }}>Back</span>
          // </Button>
        }
        rightContent={
          <Button buttonType='text' onClick={() => openModal()}>
            <FaHome size={26} />
          </Button>
        }
      />
      <Content background='full'>
        <div className={styles.flatList}>
          {sortedPlayersScores.map((item, idx) => (
            <div className={styles.playerScoreArea} key={idx}>
              <div className={styles.playerScoreArea_Section}>
                <div className={styles.playerScoreArea_NameText}>
                  {!item.name && `#${item.id}`} {item.name || ''}
                </div>
              </div>
              <div className={styles.playerScoreArea_Section}>
                <div className={styles.playerScoreArea_ScoreText}>
                  {item.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Content>

      <Content position='bottom'>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              dispatch(nextRound());
              navigate('/rounds');
            }}
          >
            Next Round
          </Button>
          <Button
            buttonType='text'
            onClick={() => {
              // navigate('/final');
              openEndGameModal();
            }}
          >
            End Game
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
      <Modal
        modalIsOpen={endGameModalIsOpen}
        closeModal={closeEndGameModal}
        modalMessage='Going to the final screen will end current game. Continue?'
        modalTitle='Warning'
        modalType='confirm'
        modalConfirm={() => navigate('/final')}
      />
    </Container>
  );
};

export default ScoresPage;
