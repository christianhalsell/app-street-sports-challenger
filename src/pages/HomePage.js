import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
};

export default HomePage;
