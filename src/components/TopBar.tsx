import React from 'react';
import ButtonBase from './ButtonBase';


const TopBar: React.FC = () => {
  return (
    <div className="topbarholder">

      <div className="MiddleArea">

      </div>

      
      <ButtonBase 
          className="LoginButton"
          onClick={() => {
          console.log("Sign in button clicked");  //firebase login goes here
          }}
      >
        Sign in
      </ButtonBase>
    

    </div>
  );
};

export default TopBar;