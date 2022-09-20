import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: '960px',
        height: '100vh',
        margin: '0 auto',
        backgroundColor: 'red',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
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
        <div>inner</div>
        {/* <div>Home Page</div>
        <div>
          <button
            onClick={() => {
              navigate('/howtouse');
            }}
          >
            click me
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
