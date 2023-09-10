import React from 'react';
import Logo from './Logo';
import LoginButton from './LoginButton';
import CenterArea from './CenterArea';
import '../../styles.css';

const TopBar: React.FC = () => {
  return (
    <>
      <div className = 'TopBar'>
        <Logo />
        <CenterArea />
        <LoginButton />
      </div>
      
    </>
  );
};

export default TopBar;