import React from 'react';
import ButtonBase from './ButtonBase';


const TopBar: React.FC = () => {
  return (
    <div className="topbarholder">
      <div className="MiddleArea"></div>

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
        Sign in
      </ButtonBase>
    </div>
  );
};

export default TopBar;