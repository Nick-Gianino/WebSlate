import React, { useState } from 'react';
import './styles.css';
import TopBar from './components/TopBar/TopBar';
import BottomBar from './components/BottomBar';
import LoggedInHomePage from './components/LoggedInHomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';
import PreviousWork from './components/PreviousWork';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<number>(0);
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  const selectComponent = (index: number) => {
    setSelectedComponent(index);
    setSelectedButton(index);
  };

  return (
    <div className="App">

      <TopBar setSelectedComponent={setSelectedComponent} setSelectedButton={setSelectedButton} />

      <div className = "Data">
        {selectedComponent === 0 && <LoggedInHomePage />}
        {selectedComponent === 1 && <AboutUs />}
        {selectedComponent === 2 && <Services />}
        {selectedComponent === 3 && <ContactUs />}
        {selectedComponent === 4 && <PreviousWork />}
      </div>

      <div className = "BottomBar">
      <BottomBar selectComponent={selectComponent} selectedButton={selectedButton} />
      </div>

    </div>
  );
};

export default App;