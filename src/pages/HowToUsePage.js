import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';

import styles from './HowToUsePage.module.css';

const HowToUsePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header
        title='How To Use'
        leftContent={
          <Button buttonType='text' onClick={() => navigate(-1)}>
            <FaLessThan size={16} />{' '}
            <span style={{ paddingLeft: 6 }}>Home</span>
          </Button>
        }
        rightContent={''}
      />
      <Content>
        <div className={styles.textWrapper}>
          <div className={styles.paragraph}>
            Attention coaches, camp and rec directors, teachers, and parents!!
            Are you looking for a quick and easy way to create teams for fun
            pick-up games? The app allows you to randomize the players on each
            team for each match and at the end of each round, points are
            assigned to all players and the teams are randomized again. This
            prevents team stacking and makes it fair and fun for everyone!
          </div>

          <div className={styles.titleTwo}>HOW TO USE</div>

          <div className={styles.paragraph}>Click NEW GAME to begin.</div>

          <div className={styles.paragraph}>
            In the slide-up screen, choose the total number of players and the
            number of teams. You can also change the default value for points
            awarded for a Win, Lose and Tie. Click Next.
          </div>

          <div className={styles.paragraph}>
            On the optional Name Entry screen and assign a name to a player. If
            you decide not to assign a name, the player will default to the
            player number. Click Begin Game.
          </div>

          <div className={styles.paragraph}>
            Players will be randomly assigned to a team and field. When the
            round is over, enter the score of each game. When all the scores
            have been completed, click Submit.
          </div>

          <div className={styles.paragraph}>
            You will be taken to the “Round 1 Scores” page where the
            predetermined points will be assigned to each player. Players on the
            winning team will be assigned 3 points while losing team players
            will be assigned 1 point. In the event of a tie, players will be
            assigned 2 points.
          </div>

          <div className={styles.paragraph}>
            If you wish to play another round, click the Next Round button and
            the next round will begin. Repeat as many times as desired.
          </div>

          <div className={styles.paragraph}>
            At the end of a round, if you wish to declare the winner(s) click
            the End Game button and the app will show the highest number of
            points and the players who achieved those points.
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default HowToUsePage;
