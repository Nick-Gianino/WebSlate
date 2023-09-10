import React from 'react';
import webslateLogo from '../../public/slatewebsitelogo3.png';
import '../../styles.css';

const Logo: React.FC = () => {
  return (
    <>
        <div className='logo'>
            <a href="app.tsx">
                <img src={webslateLogo} alt="WebSlateLogo"/>
            </a>
        </div>
    </>
  );
};

export default Logo;