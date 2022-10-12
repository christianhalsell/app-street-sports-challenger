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

  useEffect(() => {
    console.log(
      '%c%s',
      'background-color: yellow; padding: 4px; color: black',
      'playerNames:',
      playerNames
    );
  }, [playerNames]);

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
          <Button buttonType='text' onClick={() => navigate('/')}>
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

      <div style={{ backgroundColor: 'yellow', height: 10 }} />
      <Content position='bottom'>
        <div className='button-wrapper'>
          <Button
            onClick={() => {
              navigate('/rounds');
            }}
          >
            Begin Game
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default NameEntryPage;
