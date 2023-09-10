import React from 'react';
import webslateLogo from '../../public/slatewebsitelogo3.png';
import '../../styles.css';

const Logo: React.FC = () => {
  return (
    <>
        <div className='logo'>
            <a href="app.tsx">
                <img src={webslateLogo} alt="WebSlateLogo"
                 width="200px"
                 height="200px"/>
            </a>
        </div>
    </>
  );
};

export default Logo;