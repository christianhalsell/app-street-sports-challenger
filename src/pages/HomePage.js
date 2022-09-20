import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div style={{ backgroundColor: 'yellow', height: 30 }}>Header</div>
      <div
        style={{
          backgroundColor: 'lime',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '100%',
          textAlign: 'center'
        }}
      >
        <div>Home Page</div>
        <div>
          <button
            onClick={() => {
              navigate('/howtouse');
            }}
          >
            click me
          </button>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
