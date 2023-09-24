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
                    <div className="box-image-container"> {/* Add this div */}
                        <img
                            src={box.imageSrc}
                            alt={`Image for Box ${index + 1}`}
                            className="box-img"
                            style={index === 2 ? { width: '38%', height: 'auto', paddingTop: '30px', } : index === 1 ? {width: '55%', height: 'auto', paddingTop: '10px', paddingLeft: '' } : index === 0 ? {width: '53%', height: 'auto', paddingLeft: '10px', paddingTop: '' } : {}}
                        />
                    </div>
                    <div className="header" style={{ padding: '0 5px', paddingTop:'20px', marginLeft: '25px' }}>{box.content}</div>
                    <div className="subheader" style={{ padding: '0 20px', marginBottom: '5px', paddingTop: "12px", marginLeft: '50px' }}>{box.text}</div>
                    <p className="paragraph" style={{ padding: '0 10px', margin: '5px', paddingTop: '5px' }}>{box.subheader}</p>
                </div>
            ))}
        </div>
    );
};

export default LoggedInHomePage;
