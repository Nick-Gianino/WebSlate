import React, { useEffect, useState } from 'react';
import ButtonBase from '../Bases/ButtonBase';
import '../../styles.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, User, signOut, onAuthStateChanged } from "firebase/auth";

interface LogoProps {
  setSelectedComponent: React.Dispatch<React.SetStateAction<number>>;
  setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
}

const LoginButton: React.FC<LogoProps> = ({ setSelectedComponent, setSelectedButton }) => {
  const [user, setUser] = useState<User | null>(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        if(user){
          setSelectedComponent(4); 
          setSelectedButton(4);
        }
    } catch (error) {
        console.log(error);
    }
};

    const handleSignOut = () => {
      signOut(auth).then(() => {
        console.log("User signed out");
          setSelectedComponent(0); 
          setSelectedButton(0);
      }).catch((error) => {
        console.error("Error signing out: ", error);
      });
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setUser(user);
      });
      return () => unsubscribe();
    }, [auth]);

  return (
    <>
    {user ? (
      <ButtonBase
        className="LogoutButton"
        onClick={handleSignOut}
      >
        <img
          src="signout_nobg_text.png" 
          alt="logout icon"
        />
      </ButtonBase>
    ) : (
      <ButtonBase
        className="LoginButton"
        onClick={signInWithGoogle}
      >
        <img
          src="signin_nobg_text.png"
          alt="sign in icon"
        />
      </ButtonBase>
    )}
  </>
  );
};

export default LoginButton