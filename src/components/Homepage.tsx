import React from 'react';
import '../styles.css';

const LoggedInHomePage = () => {
    
    const boxes = [
        { content: 'About Us', text: 'Discover WebSlate', subheader: 'Learn about WebSlate and why we should be your choice in creating your business online web presence', imageSrc: '/card_1.png'},
        { content: 'Services', text: 'Explore our range of services', subheader: 'Find the perfect solutions for your business online presence from graphic design to website development.', imageSrc: 'card_2.png' },
        { content: 'Submit', text: 'Get in touch with us', subheader: 'Get in touch with us by sending us an email to receive a quote or ask any questions about the services we provide.', imageSrc: '/card_3.png' },
    ];

    return (
        <div className="container">
            {boxes.map((box, index) => (
                <div className="box" key={index}>
                    <img
                        src={box.imageSrc}
                        alt={`Image for Box ${index + 1}`}
                        className="boximg"
                        style={index === 2 ? { width: '225px', height: '310px', paddingLeft: '10px', paddingTop: '10px',} : index === 1 ? {paddingTop: '10px', paddingLeft: '' } : index === 0 ? {paddingLeft:'10px', paddingTop: ''} : {}} 
                    />
                    <div className="header" style={{ padding: '0 5px' }}>{box.content}</div>
                    <div className="subheader" style={{ padding: '0 20px', marginBottom: '5px', paddingTop: "8px" }}>{box.text}</div>
                    <p className="paragraph" style={{ padding: '0 10px', margin: '0', paddingTop: '15px' }}>{box.subheader}</p>
                </div>
            ))}
        </div>
    );
};

export default LoggedInHomePage;
