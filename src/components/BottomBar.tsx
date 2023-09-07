import React from 'react';
import ButtonBase from './ButtonBase';

interface Props {
  selectComponent: (index: number) => void;
}

const BottomBar: React.FC<Props> = ({ selectComponent }) => {
  const buttons = [
    { name: 'Home', imageSrc: '/home_nobg.png', class: 'HomeButton' },
    { name: 'About Us', imageSrc: '/info_nobg.png', class: 'AboutButton' },
    { name: 'Services', imageSrc: '/gears_nobg.png', class: 'ServicesButton' },
    { name: 'Contact Us', imageSrc: '/email_nobg.png', class: 'ContactButton' },
    { name: 'Previous Work', imageSrc: '/prevwork_nobg.png', class: 'PreviousWorkButton' },
  ];

  return (
    <div className="BottomBar">
      {buttons.map((button, index) => (
        <ButtonBase 
          key={index}
          className={`BottomBarButton ${button.class} ${index === buttons.length - 1 ? 'LastButton' : ''}`}
          onClick={() => selectComponent(index)}
        >
          <img src={button.imageSrc} alt={button.name} />
        </ButtonBase>
      ))}
    </div>
  );
};

export default BottomBar;