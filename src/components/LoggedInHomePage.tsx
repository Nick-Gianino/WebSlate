import React from 'react';
import '../styles.css';

const LoggedInHomePage = () => {
    const imageSrc = '/sample-01.png'; // Image source for all boxes

    // Create an array of three identical boxes with the same image
    const boxes = [
        { content: 'Sample Header', imageSrc },
        { content: 'Sample Header', imageSrc },
        { content: 'Sample Header', imageSrc },
    ];

    return (
        <div className="container">
            {boxes.map((box, index) => (
                <div className="box" key={index}>
                    <img src={box.imageSrc} alt={`Image for Box ${index + 1}`} className="boximg" />
                    <div>{box.content}</div>
                </div>
            ))}
        </div>
    );
};

export default LoggedInHomePage;