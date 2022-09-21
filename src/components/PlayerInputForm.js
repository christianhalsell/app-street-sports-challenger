import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

import styles from './PlayerInputForm.module.css';

const PlayerInputForm = () => {
  // Selectors

  // Local State
  const [numberOfPlayersValue, setNumberOfPlayersValue] = useState(8);
  const [numberOfTeamsValue, setNumberOfTeamsValue] = useState(2);
  const [winPointsValue, setWinPointsValue] = useState(3);
  const [lossPointsValue, setLossPointsValue] = useState(2);
  const [tiePointsValue, setTiePointsValue] = useState(1);

  // TESTS
  useEffect(() => {
    //
  }, []);

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

  return (
    <div className={styles.playerInputForm}>
      <form onSubmit={(e) => e.preventDefault()}>
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
          <Button type='text' onClick={() => alert('next')}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PlayerInputForm;
