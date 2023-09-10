import React from 'react';
import ButtonBase from '../ButtonBase';
import '../../styles.css';

const LoginButton: React.FC = () => {
  return (
        <>

            
            
        <ButtonBase
            className="LoginButton"
            onClick={() => {
            console.log("Sign in button clicked"); //firebase login goes here
            }}
        >
            <img
            src="signin_nobg.png"
            alt="sign in icon"
            style={{
                marginRight: "1px",
                justifyContent: 'center',
                transform: "scale(0.4)",
            }}
            />

        </ButtonBase>
      </>
  );
};

export default LoginButton