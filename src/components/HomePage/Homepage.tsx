import React from 'react';
import BoxBase from '../Bases/BoxBase';
import '../../styles.css';

interface HomepageProps {
    setSelectedComponent: React.Dispatch<React.SetStateAction<number>>;
    setSelectedButton: React.Dispatch<React.SetStateAction<number>>;
  }

const Homepage: React.FC<HomepageProps> = ({ setSelectedComponent, setSelectedButton }) => {
    
    const boxes = [
        { content: 'About Us', text: 'Discover WebSlate', subheader: 'Learn about WebSlate and why we should be your choice in creating your business\' online web presence', imageSrc: '/card_1.png'},
        { content: 'Services', text: 'Explore our range of services', subheader: 'Find the perfect solutions for your business\' online presence from graphic design to website development.', imageSrc: 'card_2.png'},
        { content: 'Submit', text: 'Get in touch with us', subheader: 'Get in touch with us by sending us an email to receive a quote or ask any questions about the services we provide.', imageSrc: '/card_3.png'},
    ];
    
    

    return (
        <div className="container">
            {boxes.map((box, index) => (
                <BoxBase 
                  key={index} 
                  index={index} 
                  content={box.content} 
                  text={box.text} 
                  subheader={box.subheader} 
                  imageSrc={box.imageSrc} 
                  setSelectedComponent={setSelectedComponent} 
                  setSelectedButton={setSelectedButton} 
                />
            ))}
        </div>
    );
};

export default Homepage;
