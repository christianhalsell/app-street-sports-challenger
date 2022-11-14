import React, { useState, useEffect } from 'react';
import { FaLessThan, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Button from '../components/Button';
import PlayerInputForm from '../components/PlayerInputForm';
import Modal from '../components/Modal';

const HowToUsePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header
        title='How To'
        leftContent={
          <Button buttonType='text' onClick={() => navigate(-1)}>
            <FaLessThan size={16} />{' '}
            <span style={{ paddingLeft: 6 }}>Home</span>
          </Button>
        }
        rightContent={
          ''
          // <Button buttonType='text' onClick={() => navigate('/')}>
          //   <FaHome size={26} />
          // </Button>
        }
      />
      <Content>
        <div>How to Use</div>
      </Content>
    </Container>
  );
};

export default HowToUsePage;
