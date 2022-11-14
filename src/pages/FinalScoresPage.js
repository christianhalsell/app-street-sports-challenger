import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';

import styles from './FinalScoresPage.module.css';

const FinalScoresPage = () => {
  const navigate = useNavigate();

  // Selectors
  const { playersScores, highestScore } = useSelector((state) => state.scores);

  const sortedPlayersScores = [...playersScores].sort(
    (a, b) => b.score - a.score
  );

  return (
    <Container>
      <Header title='Final Scores' leftContent={''} rightContent={''} />
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
          {sortedPlayersScores.map((item) => {
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
