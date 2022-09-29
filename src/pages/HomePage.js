import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {/* <Header title='Home' leftContent='' rightContent='' /> */}
      <Content position='bottom' type='image'>
        <div className='button-wrapper'>
          <Button
            onClick={() => {
              navigate('/howtouse');
            }}
          >
            How To Use
          </Button>
          <Button
            onClick={() => {
              navigate('/inputaddplayers');
            }}
            buttonType='white'
          >
            New Game
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default HomePage;
