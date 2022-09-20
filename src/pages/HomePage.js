import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header title='Home Page' leftContent='left' rightContent='right' />
      <Content position='bottom'>
        <div>Home Page content</div>
        <div>
          <button
            onClick={() => {
              navigate('/howtouse');
            }}
          >
            click me
          </button>
        </div>
      </Content>
    </Container>
  );
};

export default HomePage;
