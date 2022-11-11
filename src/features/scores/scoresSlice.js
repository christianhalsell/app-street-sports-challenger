import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DEFAULT_ROUNDS = 1;
const DEFAULT_PLAYERS_COUNT = 8;
const DEFAULT_TEAMS_COUNT = 2;
const DEFAULT_WIN_POINTS = 3;
const DEFAULT_LOSE_POINTS = 1;
const DEFAULT_TIE_POINTS = 2;

const initialState = {
  clearInputs: true,
  highestScore: 0,
  playersScores: [],
  playersCount: DEFAULT_PLAYERS_COUNT,
  pointsWin: DEFAULT_WIN_POINTS,
  pointsLoss: DEFAULT_LOSE_POINTS,
  pointsTie: DEFAULT_TIE_POINTS,
  round: DEFAULT_ROUNDS,
  roundSubmitDisabled: true,
  scoresRound: [],
  teamsCount: DEFAULT_TEAMS_COUNT,
  teamsRound: []
};

// Randomly generate teams based on player count and team count
const createTeams = (playersCount, teamsCount) => {
  const tempPlayersArray = [];
  const tempTeams = [];
  const tempPlayersCount = playersCount;
  const tempTeamsCount = teamsCount;

  // List out players
  for (let i = 0; i < tempPlayersCount; i++) {
    tempPlayersArray.push(i + 1);
  }

  // Create empty teams
  for (let i = 0; i < tempTeamsCount / 2; i++) {
    tempTeams.push([[], []]);
  }

  // Randomize players
  for (let i = tempPlayersArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = tempPlayersArray[i];
    tempPlayersArray[i] = tempPlayersArray[j];
    tempPlayersArray[j] = temp;
  }

  // Create team
  let fieldIterator = 0;
  let teamIterator = 0;

  for (let i = 0; i < tempPlayersArray.length; i++) {
    if (teamIterator >= 2) {
      teamIterator = 0;
      fieldIterator++;
    }
    if (i % tempTeamsCount === 0) {
      fieldIterator = 0;
    }
    tempTeams[fieldIterator][teamIterator].push(tempPlayersArray[i]);
    teamIterator++;
  }

  return tempTeams;
};

// Create the two-dimentional array while entering scores
const createRoundScores = (teamsCount) => {
  const tempRoundScores = [];

  // Create empty scores
  for (let i = 0; i < teamsCount / 2; i++) {
    tempRoundScores.push([null, null]);
  }

  return tempRoundScores;
};

// Check for empty scores
const enableSubmitScoresCheck = (scoresRound) => {
  const tempArray = JSON.parse(JSON.stringify(scoresRound)); // TODO: find other way to do this

  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray[i].length; j++) {
      if (tempArray[i][j] === undefined || tempArray[i][j] === null) {
        return true;
      }
    }
  }

  return false;
};

export const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    reset: (state) => {
      // state.round = DEFAULT_ROUNDS;
      // state.playersCount = DEFAULT_PLAYERS_COUNT;
      // state.teamsCount = DEFAULT_TEAMS_COUNT;
      // state.pointsWin = DEFAULT_WIN_POINTS;
      // state.pointsLoss = DEFAULT_LOSE_POINTS;
      // state.pointsTie = DEFAULT_TIE_POINTS;
      state.clearInputs = true;
      state.highestScore = 0;
      state.playersScores = [];
      state.playersCount = DEFAULT_PLAYERS_COUNT;
      state.pointsWin = DEFAULT_WIN_POINTS;
      state.pointsLoss = DEFAULT_LOSE_POINTS;
      state.pointsTie = DEFAULT_TIE_POINTS;
      state.round = DEFAULT_ROUNDS;
      state.roundSubmitDisabled = true;
      state.scoresRound = [];
      state.teamsCount = DEFAULT_TEAMS_COUNT;
      state.teamsRound = [];
    },
    addPlayers: (state, action) => {
      state.playersCount = parseInt(action.payload);
    },
    addTeams: (state, action) => {
      state.teamsCount = parseInt(action.payload);
    },
    addWinPoints: (state, action) => {
      state.pointsWin = parseInt(action.payload);
    },
    addLossPoints: (state, action) => {
      state.pointsLoss = parseInt(action.payload);
    },
    addTiePoints: (state, action) => {
      state.pointsTie = parseInt(action.payload);
    },
    setTeams: (state) => {
      const teamsRound = createTeams(state.playersCount, state.teamsCount);
      const scoresRound = createRoundScores(state.teamsCount);

      state.clearInputs = false;
      state.roundSubmitDisabled = true;
      state.scoresRound = scoresRound;
      state.teamsRound = teamsRound;
    },
    addNames: (state, action) => {
      const tempFinalObjForNames = [];
      const tempNamesArrayForNames = action.payload;

      // Creates the PlayersScores object
      for (let i = 0; i < tempNamesArrayForNames.length; i++) {
        tempFinalObjForNames.push({
          id: i + 1,
          name: tempNamesArrayForNames[i]
        });
      }

      state.playersScores = tempFinalObjForNames;
    },
    addScore: (state, action) => {
      const tempArray = state.scoresRound;
      let tempRoundSubmitDisabled = state.roundSubmitDisabled;

      tempArray[action.payload.fieldIndex][action.payload.teamIndex] =
        action.payload.scoreValue;

      // Check if all score slots are filled to enable submit
      tempRoundSubmitDisabled = enableSubmitScoresCheck(tempArray);

      state.scoresRound = tempArray;
      state.roundSubmitDisabled = tempRoundSubmitDisabled;
    },
    addRoundScores: (state, action) => {
      const teamObj = [];
      const tempFinalObj = state.playersScores.sort((a, b) => a.id - b.id); // need to sort by id to reset order
      const roundScore = state.scoresRound;
      const playerTeams = state.teamsRound;
      const gameRound = state.round;

      // Create temporary object
      for (let x = 0; x < state.playersCount; x++) {
        teamObj[x] = { id: x + 1, score: 0 };
      }

      // Check if scores exist. If not, leave score at zero
      for (let i = 0; i < teamObj.length; i++) {
        if (tempFinalObj[i]?.score) {
          teamObj[i].score = tempFinalObj[i].score;
        }
      }

      // Assign points to teamObj
      for (let i = 0; i < roundScore.length; i++) {
        // IT'S A TIE
        if (roundScore[i][0] === roundScore[i][1]) {
          for (let j = 0; j < playerTeams[i][0].length; j++) {
            const firstTeam = playerTeams[i][0][j];

            for (let k in teamObj) {
              if (teamObj[k].id === firstTeam) {
                teamObj[k].score += state.pointsTie;
              }
            }
          }

          for (let j = 0; j < playerTeams[i][1].length; j++) {
            const secondTeam = playerTeams[i][1][j];

            for (let k in teamObj) {
              if (teamObj[k].id === secondTeam) {
                teamObj[k].score += state.pointsTie;
              }
            }
          }
        } else if (roundScore[i][0] < roundScore[i][1]) {
          // HOME TEAM WINS
          for (let j = 0; j < playerTeams[i][0].length; j++) {
            const firstTeam = playerTeams[i][0][j];

            for (let k in teamObj) {
              if (teamObj[k].id === firstTeam) {
                teamObj[k].score += state.pointsLoss;
              }
            }
          }
          for (let j = 0; j < playerTeams[i][1].length; j++) {
            const secondTeam = playerTeams[i][1][j];

            for (let k in teamObj) {
              if (teamObj[k].id === secondTeam) {
                teamObj[k].score += state.pointsWin;
              }
            }
          }
        } else if (roundScore[i][0] > roundScore[i][1]) {
          // AWAY TEAM WINS
          for (let j = 0; j < playerTeams[i][0].length; j++) {
            const firstTeam = playerTeams[i][0][j];
            for (let k in teamObj) {
              if (teamObj[k].id === firstTeam) {
                teamObj[k].score += state.pointsWin;
              }
            }
          }
          for (let j = 0; j < playerTeams[i][1].length; j++) {
            const secondTeam = playerTeams[i][1][j];
            for (let k in teamObj) {
              if (teamObj[k].id === secondTeam) {
                teamObj[k].score += state.pointsLoss;
              }
            }
          }
        }
      }

      for (let i = 0; i < teamObj.length; i++) {
        tempFinalObj[i].score = teamObj[i].score;
      }

      const highestValue = Math.max.apply(
        Math,
        teamObj.map((item) => item.score)
      );

      state.clearInputs = true;
      state.highestScore = highestValue;
      state.playersScores = tempFinalObj;
      // state.round = gameRound;
    },
    nextRound: (state, action) => {
      const nextTeamsRound = createTeams(state.playersCount, state.teamsCount);
      const nextScoresRound = createRoundScores(state.teamsCount);

      state.clearInputs = false;
      state.roundSubmitDisabled = true;
      state.scoresRound = nextScoresRound;
      state.teamsRound = nextTeamsRound;
      state.round += 1;
    }
  },
  extraReducers: (builder) => {} // async reducers
});

export const {
  reset,
  addPlayers,
  addTeams,
  addWinPoints,
  addLossPoints,
  addTiePoints,
  setTeams,
  addNames,
  addScore,
  addRoundScores,
  nextRound
} = scoresSlice.actions;
export default scoresSlice.reducer;
