import React, { useEffect, useState } from 'react';
import './styles.css'; 
import TopBar from './components/TopBar/TopBar';
import BottomBar from './components/BottomBar/BottomBar';
import Homepage from './components/HomePage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Services from './components/Services/Services';
import UserDashboard from './components/UserDashboard/UserDashboard';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from 'firebase/analytics';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import 'firebase/auth';


const App = () => {
    const [selectedComponent, setSelectedComponent] = useState<number>(0);
    const [selectedButton, setSelectedButton] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);
  
    const firebaseConfig = {
      apiKey: "AIzaSyCW_zN-SgZhVUPNpLW7QQj-7m4oCPzuEUU",
      authDomain: "webslate-13366.firebaseapp.com",
      projectId: "webslate-13366",
      storageBucket: "webslate-13366.appspot.com",
      messagingSenderId: "911902414208",
      appId: "1:911902414208:web:ee6988e0dcb5e2b5639d65",
      measurementId: "G-85CG97H43N"
    };
   
    
    initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
  
    const auth = getAuth();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setUser(user);
        if(user) {
          setSelectedComponent(5);
          setSelectedButton(5);
        }
      });
  
      return () => unsubscribe();
    }, [auth]);
    const selectComponent = (index: number) => {
      setSelectedComponent(index);
      setSelectedButton(index);
    };
  
    return (
      <div className="App">
  
        <TopBar setSelectedComponent={setSelectedComponent} setSelectedButton={setSelectedButton} />
  
        <div className = "Data">
          {selectedComponent === 0 && (<Homepage setSelectedComponent={setSelectedComponent} setSelectedButton={setSelectedButton} />)}
          {selectedComponent === 1 && <AboutUs />}
          {selectedComponent === 2 && <Services />}
          {selectedComponent === 3 && <ContactUs />}
          {selectedComponent === 4 && <UserDashboard />}
        </div>
  
        <div className = "BottomBar">
        <BottomBar selectComponent={selectComponent} selectedButton={selectedButton} />
        </div>
  
      </div>
    );
};

export default App;
