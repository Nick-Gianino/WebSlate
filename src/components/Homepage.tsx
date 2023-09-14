import React from 'react';
import '../styles.css';

const LoggedInHomePage = () => {
    
    const boxes = [
        { content: 'About Us', text: 'Discover WebSlate', subheader: 'Learn about WebSlate and why we should be your choice in creating your business online web presence', imageSrc: '/sample-01.png'},
        { content: 'Services', text: 'Explore our range of services', subheader: 'Find the perfect solutions for your business online presence from graphic design to website development', imageSrc: '/sample-01.png' },
        { content: 'Submit', text: 'Get in touch with us', subheader: 'Get in touch with us to receive a quote or ask any questions about our services', imageSrc: '/sample-01.png'},
    ];

    return (
        <div className="container">
            {boxes.map((box, index) => (
                <div className="box" key={index}>
                    <img src={box.imageSrc} alt={`Image for Box ${index + 1}`} className="boximg" />
                    <div className="header">{box.content}</div>
                    <div className="subheader">{box.text}</div>
                    <p className="paragraph">{box.subheader}</p>
                </div>
            ))}
        </div>
    );
};

export default LoggedInHomePage;