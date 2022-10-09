import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DEFAULT_ROUNDS = 1;
const DEFAULT_PLAYERS_COUNT = 4;
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
    }
  },
  extraReducers: (builder) => {} // async reducers
});

export const { reset } = scoresSlice.actions;
export default scoresSlice.reducer;
