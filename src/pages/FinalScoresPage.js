import React, { useState, useEffect } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import RoundCard from '../components/RoundCard';
import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';

import styles from './FinalScoresPage.module.css';

const FinalScoresPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { round, playersScores, highestScore } = useSelector(
    (state) => state.scores
  );

  const sortedPlayersScores = [...playersScores].sort(
    (a, b) => b.score - a.score
  );

  return (
    <Container>
      <Header
        title='Final Scores'
        leftContent={
          ''
          // <Button buttonType='text' onClick={() => navigate(-1)}>
          //   <FaLessThan size={20} />{' '}
          //   <span className={{ paddingLeft: 6 }}>Back</span>
          // </Button>
        }
        rightContent={
          <Button buttonType='text' onClick={() => navigate('/')}>
            <FaHome size={26} />
          </Button>
        }
      />
      <Content background='full'>
        <div className={styles.winnerArea}>
          <div className={styles.winnerAreaText}>
            Highest Score:{' '}
            <span className={styles.finalHighScoreText}>{highestScore}</span>
          </div>
          {sortedPlayersScores.map((item) => {
            if (item.score === highestScore) {
              return (
                <div key={item.id} className={styles.winnersList}>
                  {item.name ? item.name : `#${item.id}`}
                </div>
              );
            }
          })}
        </div>

        <div>
          {sortedPlayersScores.map((item, idx) => {
            if (item.score < highestScore) {
              return (
                <div className={styles.runnerupScoreArea} key={item.id}>
                  <div className={styles.runnerupScoreArea_Section}>
                    <div className={styles.runnerupScoreArea_NameText}>
                      {item.name ? item.name : `#${item.id}`}
                    </div>
                  </div>
                  <div className={styles.runnerupScoreArea_Section}>
                    <div className={styles.runnerupScoreArea_ScoreText}>
                      {item.score}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Content>

      <Content position='bottom'>
        <div className={styles.buttonWrapper}>
          <Button
            buttonType='text'
            onClick={() => {
              navigate('/');
            }}
          >
            Back to Home
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default FinalScoresPage;
