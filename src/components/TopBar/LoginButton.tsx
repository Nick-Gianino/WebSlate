import React from 'react';
import ButtonBase from '../ButtonBase';
import '../../styles.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

interface LogoProps {
  setSelectedComponent: React.Dispatch<React.SetStateAction<number>>;
  setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
}

const LoginButton: React.FC<LogoProps> = ({ setSelectedComponent, setSelectedButton }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        if(user){
          setSelectedComponent(5); 
          setSelectedButton(5);
        }
    } catch (error) {
        console.log(error);
    }
};

  return (
        <>
          <ButtonBase
            className="LoginButton"
            onClick={signInWithGoogle}
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