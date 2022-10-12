import React, { useState, useEffect } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';

import styles from './NameEntryPage.module.css';

const NameEntryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Selectors
  const { round, playersCount, teamsCount, pointsWin, pointsLoss, pointsTie } =
    useSelector((state) => state.scores);

  // State
  const [playerNames, setPlayerNames] = useState(
    Array.from({ length: playersCount })
  );

  // Add names to playerNames state
  const nameInputHandler = (index, name) => {
    setPlayerNames((prev) => {
      const tempArray = [...prev];
      tempArray[index] = name;
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
          <Button buttonType='text' onClick={() => navigate('/')}>
            <FaHome size={26} />
          </Button>
        }
      />
      <Content>
        <div style={{ backgroundColor: 'orange', margin: 30 }}>
          <div>Round: {round}</div>
          <div>Number of Players: {playersCount}</div>
          <div>Number of Teams: {teamsCount}</div>
          <div>Win Points: {pointsWin}</div>
          <div>Lose Points: {pointsLoss}</div>
          <div>Tie Points: {pointsTie}</div>
        </div>

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
                  onChangeText={(e) => nameInputHandler(idx, e)}
                />
              </div>
            </div>
          );
        })}
      </Content>
    </Container>
  );
};

export default NameEntryPage;
