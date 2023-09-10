import React from 'react';
import webslateLogo from '../../public/slatewebsitelogo3.png';
import '../../styles.css';

interface LogoProps {
  setSelectedComponent: React.Dispatch<React.SetStateAction<number>>;
  setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
}

const Logo: React.FC<LogoProps> = ({ setSelectedComponent, setSelectedButton }) => {

  const handleLogoClick = () => {
    setSelectedComponent(0); // This will show the LoggedInHomePage
    setSelectedButton(0);
  };

  return (
    <div className='logo'>
        <img src={webslateLogo} alt="WebSlateLogo"
          onClick={handleLogoClick}
          width="200px"
          height="200px"/> 
    </div>
  );
};

export default Logo;
