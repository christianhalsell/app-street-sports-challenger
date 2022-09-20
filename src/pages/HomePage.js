import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Header from '../components/Header';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header title='Homepage' leftContent='left' rightContent='right' />
      <div
        style={{
          backgroundColor: 'green',
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
