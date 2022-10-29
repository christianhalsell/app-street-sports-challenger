import React from 'react';

import InputTeamDisplay from './InputTeamDisplay';

import styles from './RoundCard.module.css';

const RoundCard = (props) => {
  console.log(
    '%c%s',
    'background-color: magenta; padding: 4px; color: black',
    'props:',
    props
  );
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.fieldTextWrapper}>
        <div className={styles.fieldText}>Field {props.field}</div>
      </div>

      <InputTeamDisplay
        fieldIndex={props.field - 1}
        teamIndex={0}
        colors={{ ...styles.away }}
        team={props.teamMembers[0]}
      />
      <InputTeamDisplay
        fieldIndex={props.field - 1}
        teamIndex={1}
        colors={{ ...styles.home }}
        team={props.teamMembers[1]}
      />
    </div>
  );
};

export default RoundCard;
