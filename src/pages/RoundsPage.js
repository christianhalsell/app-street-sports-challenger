import React, { useState, useEffect } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';

import styles from './RoundsPage.module.css';

const RoundsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { round, teamsRound } = useSelector((state) => state.scores);

  // State

  return (
    <Container>
      <Header
        title={`Round ${round}`}
        leftContent={
          <Button buttonType='text' onClick={() => navigate(-1)}>
            <FaLessThan size={20} />{' '}
            <span style={{ paddingLeft: 6 }}>Back</span>
          </Button>
        }
        rightContent={
          <Button buttonType='text' onClick={() => navigate('/')}>
            <FaHome size={26} />
          </Button>
        }
      />
      <Content>
        <div>Content here</div>
        {teamsRound.map((item, index) => {
          // return <RoundCard key={index} teamMembers={item} field={index + 1} />;
        })}
      </Content>

      <Content position='bottom'>
        <div className={styles.buttonWrapper}>
          <Button
            buttonType='text'
            onClick={() => {
              navigate('/scores');
            }}
          >
            Submit
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default RoundsPage;
