import React, { useEffect, useState } from 'react';
import webslateLogo from '../../public/slatewebsitelogo3.png';
import '../../styles.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface LogoProps {
  setSelectedComponent: React.Dispatch<React.SetStateAction<number>>;
  setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
}

const Logo: React.FC<LogoProps> = ({ setSelectedComponent, setSelectedButton }) => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setIsUserLoggedIn(!!user);
    });
  }, [auth]);

  const handleLogoClick = () => {
    if (isUserLoggedIn) {
      setSelectedComponent(5); // If logged in, set state to 5
      setSelectedButton(5);
    } else {
      setSelectedComponent(0); // If not logged in, set state to 0
      setSelectedButton(0);
    }
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
