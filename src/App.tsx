import React, { useState } from 'react';
import './styles.css';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import NonLoginHomePage from './components/NonLoginHomePage';
import LoggedInHomePage from './components/LoggedInHomePage';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import Services from './components/Services';
import PreviousWork from './components/PreviousWork';
import webslateLogo from './public/slatewebsitelogo3.png';

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<number>(0);

  const selectComponent = (index: number) => {
    setSelectedComponent(index);
  };

  return (
    <div className="App">

      <div className="TopBar">
        <TopBar />
        <img src={webslateLogo} alt="WebSlateLogo" />

        <div className="logo">
          
        </div>
      </div>

      <div className = "Data">
        {selectedComponent === 0 && <NonLoginHomePage />}
        {selectedComponent === 1 && <LoggedInHomePage />}
        {selectedComponent === 2 && <AboutUs />}
        {selectedComponent === 3 && <Pricing />}
        {selectedComponent === 4 && <Services  />}
        {selectedComponent === 5 && <PreviousWork />}
      </div>
      
      <div className = "BottomBar">
        <BottomBar selectComponent={selectComponent} />
      </div>
      
    </div>
  );
};

export default App;
