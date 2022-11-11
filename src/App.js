import React from 'react';
import {
  BrowserRouter as Router, // URL will navigate
  Routes,
  Route
  // MemoryRouter as Router // URL will not navigate
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import HowToUsePage from './pages/HowToUsePage';
import InputAddPlayersPage from './pages/InputAddPlayersPage';
import FinalScoresPage from './pages/FinalScoresPage';
import NameEntryPage from './pages/NameEntryPage';
import ScoresPage from './pages/ScoresPage';
import RoundsPage from './pages/RoundsPage';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/howtouse' element={<HowToUsePage />} />
            <Route path='/inputaddplayers' element={<InputAddPlayersPage />} />
            <Route path='/nameentry' element={<NameEntryPage />} />
            <Route path='/rounds' element={<RoundsPage />} />
            <Route path='/scores' element={<ScoresPage />} />
            <Route path='/final' element={<FinalScoresPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
