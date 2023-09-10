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

  const firebaseConfig = {
    apiKey: "AIzaSyCW_zN-SgZhVUPNpLW7QQj-7m4oCPzuEUU",
    authDomain: "webslate-13366.firebaseapp.com",
    projectId: "webslate-13366",
    storageBucket: "webslate-13366.appspot.com",
    messagingSenderId: "911902414208",
    appId: "1:911902414208:web:ee6988e0dcb5e2b5639d65",
    measurementId: "G-85CG97H43N"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const selectComponent = (index: number) => {
    setSelectedComponent(index);
  };


  return (
    <div className="App">
        <TopBar />
     


      <div className = "Data">
        {selectedComponent === 0 && <LoggedInHomePage />}
        {selectedComponent === 1 && <AboutUs />}
        {selectedComponent === 2 && <Services />}
        {selectedComponent === 3 && <ContactUs />}
        {selectedComponent === 4 && <PreviousWork />}
      </div>
      
      <div className = "BottomBar">
        <BottomBar selectComponent={selectComponent} />
      </div>
      
    </div>
  );
};

export default App;
