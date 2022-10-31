import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DEFAULT_ROUNDS = 1;
const DEFAULT_PLAYERS_COUNT = 8;
const DEFAULT_TEAMS_COUNT = 4;
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
      state.round = DEFAULT_ROUNDS;
      state.playersCount = DEFAULT_PLAYERS_COUNT;
      state.teamsCount = DEFAULT_TEAMS_COUNT;
      state.pointsWin = DEFAULT_WIN_POINTS;
      state.pointsLoss = DEFAULT_LOSE_POINTS;
      state.pointsTie = DEFAULT_TIE_POINTS;
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
  addScore
} = scoresSlice.actions;
export default scoresSlice.reducer;
