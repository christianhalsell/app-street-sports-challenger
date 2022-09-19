import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HowToUsePage from './pages/HowToUsePage';
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
            <Route path='/finalscores' element={<FinalScoresPage />} />
            <Route path='/nameentry' element={<NameEntryPage />} />
            <Route path='/scores' element={<ScoresPage />} />
            <Route path='/rounds' element={<RoundsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
