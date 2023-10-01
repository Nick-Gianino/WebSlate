import React from 'react';

interface BoxProps {
  content: string;
  text: string;
  subheader: string;
  imageSrc: string;
  index: number;
  setSelectedComponent: (index: number) => void;
  setSelectedButton:  (index: number) => void;
}

const BoxBase: React.FC<BoxProps> = ({ content, text, subheader, imageSrc, index, setSelectedComponent, setSelectedButton }) => {
  const handleBoxClick = () => {
    switch(content) {
      case 'About Us':
        setSelectedComponent(1);
        setSelectedButton(1);
        break;
      case 'Services':
        setSelectedComponent(2);
        setSelectedButton(2);
        break;
      case 'Submit':
        setSelectedComponent(3);
        setSelectedButton(3);
        break;
      default:
        console.log('Unknown box content');
    }  
  }

  return (
    <div className="box" onClick={handleBoxClick}>
      <div className="box-image-container">
        <img
          src={imageSrc}
          alt={`This is the context for Box ${index + 1}`}
          className="box-context"
          style={index === 2 ? { width: '38%', height: 'auto', paddingTop: '30px', } : index === 1 ? {width: '55%', height: 'auto', paddingTop: '10px', paddingLeft: '' } : index === 0 ? {width: '53%', height: 'auto', paddingLeft: '10px', paddingTop: '' } : {}}
        />
      </div>
      <div className="header" style={{ padding: '0 5px', paddingTop:'20px', marginLeft: '10px' }}>{content}</div>
      <div className="subheader" style={{ padding: '0 20px', marginBottom: '5px', paddingTop: "12px", marginLeft: '50px' }}>{text}</div>
      <p className="paragraph" style={{ padding: '0 10px', margin: '5px', paddingTop: '5px' }}>{subheader}</p>
    </div>
  );
};

export default BoxBase;

