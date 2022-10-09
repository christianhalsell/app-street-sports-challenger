import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';

import styles from './PlayerInputForm.module.css';

const PlayerInputForm = ({ setModalMessage }) => {
  const dispatch = useDispatch();
  const { round, playersCount, teamsCount, pointsWin, pointsLoss, pointsTie } =
    useSelector((state) => state.scores);

  useEffect(() => {
    console.log(
      '%c%s',
      'background-color: cyan; padding: 4px; color: black',
      'playersCount:',
      playersCount
    );
  }, []);

  // Selectors

  // Local State
  const [numberOfPlayersValue, setNumberOfPlayersValue] =
    useState(playersCount);
  const [numberOfTeamsValue, setNumberOfTeamsValue] = useState(teamsCount);
  const [winPointsValue, setWinPointsValue] = useState(pointsWin);
  const [lossPointsValue, setLossPointsValue] = useState(pointsLoss);
  const [tiePointsValue, setTiePointsValue] = useState(pointsTie);

  const navigate = useNavigate();

  // Input Handlers
  const playersInputHandler = (e) => {
    setNumberOfPlayersValue(e.target.value.replace(/[^0-9]/g, ''));
  };
  const teamsInputHandler = (e) => {
    setNumberOfTeamsValue(e.target.value.replace(/[^0-9]/g, ''));
  };

  const winPointsInputHandler = (e) => {
    setWinPointsValue(e.target.value.replace(/[^0-9]/g, ''));
  };

  const lossPointsInputHandler = (e) => {
    setLossPointsValue(e.target.value.replace(/[^0-9]/g, ''));
  };

  const tiePointsInputHandler = (e) => {
    setTiePointsValue(e.target.value.replace(/[^0-9]/g, ''));
  };

  const playersAndTeamsNumberCheck = (e) => {
    e.preventDefault();

    // If there are more teams than players
    if (parseInt(numberOfTeamsValue) > parseInt(numberOfPlayersValue)) {
      setModalMessage(
        'Number of players must be greater than or equal to number of teams.'
      );
      return;
    }
    // If there are less than 2 players
    if (parseInt(numberOfPlayersValue) <= 1) {
      setModalMessage('Please select 2 or more players.');
      return;
    }
    // If there are an odd number of teams
    if (numberOfTeamsValue % 2 !== 0) {
      setModalMessage('Please select an even number of teams.');
      return;
    }
    // If the number of teams is 0
    if (parseInt(numberOfTeamsValue) === 0) {
      setModalMessage('Please select 2 or more teams.');
      return;
    }

    // dispatchPlayersTeams();
    navigate('/nameentry'); // GO TO NEXT PAGE
  };

  return (
    <div className={styles.playerInputForm}>
      <form>
        {/* Number of Players */}
        <div className={styles.inputRow}>
          <div className={styles.inputLabel}>Number of Players:</div>
          <div className={styles.inputArea}>
            <input
              className={styles.inputBox}
              maxLength={2}
              onChange={playersInputHandler}
              value={numberOfPlayersValue}
            />
          </div>
        </div>
        {/* Number of Teams */}
        <div className={styles.inputRow}>
          <div className={styles.inputLabel}>Number of Teams:</div>
          <div className={styles.inputArea}>
            <input
              className={styles.inputBox}
              maxLength={2}
              onChange={teamsInputHandler}
              value={numberOfTeamsValue}
            />
          </div>
        </div>

        <div className={styles.hr} />

        {/* Win Points */}
        <div className={styles.inputRow}>
          <div className={styles.inputLabel}>Win Points:</div>
          <div className={styles.inputArea}>
            <input
              className={styles.inputBox}
              maxLength={2}
              onChange={winPointsInputHandler}
              value={winPointsValue}
            />
          </div>
        </div>

        {/* Loss Points */}
        <div className={styles.inputRow}>
          <div className={styles.inputLabel}>Loss Points:</div>
          <div className={styles.inputArea}>
            <input
              className={styles.inputBox}
              maxLength={2}
              onChange={lossPointsInputHandler}
              value={lossPointsValue}
            />
          </div>
        </div>

        {/* Tie Points */}
        <div className={styles.inputRow}>
          <div className={styles.inputLabel}>Tie Points:</div>
          <div className={styles.inputArea}>
            <input
              className={styles.inputBox}
              maxLength={2}
              onChange={tiePointsInputHandler}
              value={tiePointsValue}
            />
          </div>
        </div>

        <div className={styles.inputRowButton}>
          <Button buttonType='text' onClick={playersAndTeamsNumberCheck}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PlayerInputForm;
