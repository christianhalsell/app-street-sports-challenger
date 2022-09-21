import React from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
            <FaLessThan size={20} />{' '}
            <span style={{ paddingLeft: 6 }}>Back</span>
          </Button>
        }
        rightContent={
          ''
          // <Button type='text' onClick={() => navigate('/')}>
          //   <FaHome size={26} />
          // </Button>
        }
      />
      <Content>
        <PlayerInputForm />
      </Content>
    </Container>
  );
};

export default InputAddPlayersPage;
