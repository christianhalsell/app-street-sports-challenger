import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  reset,
  addPlayers,
  addTeams,
  addWinPoints,
  addLossPoints,
  addTiePoints,
  setTeams
} from '../features/scores/scoresSlice';

import styles from './PlayerInputForm.module.css';

const PlayerInputForm = ({ setModalMessage }) => {
  const dispatch = useDispatch();

  // Selectors
  const { playersCount, teamsCount, pointsWin, pointsLoss, pointsTie } =
    useSelector((state) => state.scores);

  // Local State
  const [numberOfPlayersValue, setNumberOfPlayersValue] = useState(
    playersCount.toString()
  );
  const [numberOfTeamsValue, setNumberOfTeamsValue] = useState(
    teamsCount.toString()
  );
  const [winPointsValue, setWinPointsValue] = useState(pointsWin.toString());
  const [lossPointsValue, setLossPointsValue] = useState(pointsLoss.toString());
  const [tiePointsValue, setTiePointsValue] = useState(pointsTie.toString());

  const navigate = useNavigate();

  // Make sure input values reflect global state
  useEffect(() => {
    setNumberOfPlayersValue(playersCount.toString());
    setNumberOfTeamsValue(teamsCount.toString());
    setWinPointsValue(pointsWin.toString());
    setLossPointsValue(pointsLoss.toString());
    setTiePointsValue(pointsTie.toString());
  }, [playersCount, teamsCount, pointsWin, pointsLoss, pointsTie]);

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

  const resetForm = (e) => {
    e.preventDefault();

    setNumberOfPlayersValue(playersCount.toString());
    setNumberOfTeamsValue(teamsCount.toString());
    setWinPointsValue(pointsWin.toString());
    setLossPointsValue(pointsLoss.toString());
    setTiePointsValue(pointsTie.toString());
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
    // If there are an odd number of teams
    if (numberOfTeamsValue % 2 !== 0) {
      setModalMessage('Please select an even number of teams.');
      return;
    }
    // If the number of players is less than 2 or empty
    if (parseInt(numberOfPlayersValue) < 2 || numberOfPlayersValue === '') {
      setModalMessage('Please select 2 or more players.');
      return;
    }
    // If the number of teams is less than 2 or empty
    if (parseInt(numberOfTeamsValue) < 2 || numberOfTeamsValue === '') {
      setModalMessage('Please select 2 or more teams.');
      return;
    }

    // If the number of win points is empty
    if (winPointsValue === '') {
      setModalMessage('Please select a value for Win Points');
      return;
    }

    // If the number of loss points is empty
    if (lossPointsValue === '') {
      setModalMessage('Please select a value for Loss Points');
      return;
    }

    // If the number of tie points is empty
    if (tiePointsValue === '') {
      setModalMessage('Please select a value for Tie Points');
      return;
    }

    dispatch(addPlayers(numberOfPlayersValue));
    dispatch(addTeams(numberOfTeamsValue));
    dispatch(addWinPoints(winPointsValue));
    dispatch(addLossPoints(lossPointsValue));
    dispatch(addTiePoints(tiePointsValue));

    dispatch(setTeams());
    navigate('/nameentry'); // GO TO NEXT PAGE
  };

  return (
    <div className={styles.playerInputForm}>
      <form onSubmit={playersAndTeamsNumberCheck}>
        {/* Number of Players */}
        <div className={styles.inputRow}>
          <div className={styles.inputLabel}>Number of Players:</div>
          <div className={styles.inputArea}>
            <input
              className={styles.inputBox}
              inputMode='numeric'
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
              inputMode='numeric'
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
              inputMode='numeric'
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
              inputMode='numeric'
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
              inputMode='numeric'
              maxLength={2}
              onChange={tiePointsInputHandler}
              value={tiePointsValue}
            />
          </div>
        </div>

        <div className={styles.inputRowButton}>
          <Button buttonType='text' type='submit'>
            Next
          </Button>
        </div>

        <div className={styles.inputRowButton}>
          <Button buttonType='warning' onClick={resetForm}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PlayerInputForm;
