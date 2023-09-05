import React from 'react';
import ButtonBase from './ButtonBase';

interface Props {
  selectComponent: (index: number) => void;
}

const BottomBar: React.FC<Props> = ({ selectComponent }) => {
  const buttons = [
    { name: 'Home', class: 'HomeButton' },
    { name: 'About Us', class: 'AboutButton' },
    { name: 'Services', class: 'ServicesButton' },
    { name: 'Contact Us', class: 'ContactButton' },
    { name: 'Previous Work', class: 'PreviousWorkButton' },
  ];

  return (
    <div className="BottomBar">
      {buttons.map((button, index) => (
        <ButtonBase 
          key={index}
          className={button.class}
          onClick={() => selectComponent(index)}
        >
          {button.name}
        </ButtonBase>
      ))}
    </div>
  );
};

export default BottomBar;