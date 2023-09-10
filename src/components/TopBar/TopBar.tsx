import React from 'react';
import Logo from './Logo';
import LoginButton from './LoginButton';
import CenterArea from './CenterArea';
import '../../styles.css';

interface TopBarProps {
  setSelectedComponent: React.Dispatch<React.SetStateAction<number>>;
  setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
}

const TopBar: React.FC<TopBarProps> = ({ setSelectedComponent, setSelectedButton }) => {
  return (
    <div className = 'TopBar'>
        <Logo setSelectedComponent={setSelectedComponent} setSelectedButton={setSelectedButton} />
        <CenterArea />
        <LoginButton />
    </div>
  );
};

export default TopBar;
