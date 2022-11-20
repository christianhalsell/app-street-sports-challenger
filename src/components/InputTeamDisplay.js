import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addScore } from '../features/scores/scoresSlice';

import styles from './InputTeamDisplay.module.css';
import Colors from '../constants/Colors';

const InputTeamDisplay = (props) => {
  // State
  const [enteredValue, setEnteredValue] = useState('');
  const [teamNames, setTeamNames] = useState([]);

  // Selectors
  const clearInputs = useSelector((state) => state.scores.clearInputs);
  const playerNames = useSelector((state) => state.scores.playersScores);

  const dispatch = useDispatch();

  useEffect(() => {
    if (clearInputs) {
      setEnteredValue('');
    }
  }, [clearInputs]);

  // update global state and check if button should be disabled
  useEffect(() => {
    dispatch(
      addScore({
        fieldIndex: props.fieldIndex,
        teamIndex: props.teamIndex,
        scoreValue: parseInt(enteredValue)
      })
    );
  }, [enteredValue]);

  // make sure values entered are numbers
  const numberInputHandler = (e) => {
    setEnteredValue(e.target.value.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    const tempArray = [];
    for (let i = 0; i < props.team.length; i++) {
      const findPlayer = playerNames.find(
        (player) => player.id === props.team[i]
      );
      if (findPlayer.name !== undefined) {
        tempArray.push(findPlayer.name);
      } else {
        tempArray.push(`#${findPlayer.id}`);
      }
    }

    setTeamNames(tempArray.join(', '));
  }, []);

  return (
    <div
      className={styles.teamWrapper}
      style={
        props.teamIndex === 0
          ? { backgroundColor: Colors.ScoreRed }
          : { backgroundColor: Colors.ScoreBlue }
      }
    >
      <div className={styles.playersWrapper}>
        <div className={styles.playersInfo}>
          <div className={styles.playersText}>{teamNames}</div>
        </div>
      </div>
      <div className={styles.scoreWrapper}>
        <input
          className={styles.scoreInput}
          inputMode='numeric'
          maxLength={2}
          onChange={numberInputHandler}
          value={enteredValue}
        />
      </div>
    </div>
  );
};

export default InputTeamDisplay;
