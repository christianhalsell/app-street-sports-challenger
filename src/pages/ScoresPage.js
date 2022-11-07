import React, { useState, useEffect } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import RoundCard from '../components/RoundCard';
import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';

import styles from './ScoresPage.module.css';

const ScoresPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { round, playersScores } = useSelector((state) => state.scores);

  console.log(
    '%c%s',
    'background-color: yellow; padding: 4px; color: black',
    'playersScores:',
    playersScores
  );

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
          <Button buttonType='text' onClick={() => navigate('/')}>
            <FaHome size={26} />
          </Button>
        }
      />
      <Content background='green'>
        <div>Yo</div>
      </Content>
    </Container>
  );
};

export default ScoresPage;
