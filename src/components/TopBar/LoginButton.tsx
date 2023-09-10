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
            src="signin_nobg_text.png"
            alt="sign in icon"
            />

        </ButtonBase>
      </>
  );
};

export default LoginButton