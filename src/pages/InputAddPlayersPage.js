import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';
import PlayerInputForm from '../components/PlayerInputForm';

const InputAddPlayersPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header
        title='Add Players'
        leftContent={
          <Button type='text' onClick={() => navigate(-1)}>
            &lt; Back
          </Button>
        }
        rightContent=''
      />
      <Content>
        <div>Hello world!</div>
        <PlayerInputForm />
      </Content>
    </Container>
  );
};

export default InputAddPlayersPage;
