import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Content from '../components/Content';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { reset } from '../features/scores/scoresSlice';

import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, []);

  return (
    <Container>
      <Content position='bottom' background='image'>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              navigate('/howtouse');
            }}
          >
            How To Use
          </Button>
          <Button
            onClick={() => {
              navigate('/inputaddplayers');
            }}
            buttonType='white'
          >
            New Game
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default HomePage;
