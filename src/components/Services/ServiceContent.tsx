import React from "react";

interface ServiceContentProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  points: string[];
  paragraph?: string;
}

const ServiceContent: React.FC<ServiceContentProps> = ({
  title,
  imageSrc,
  imageAlt,
  points,
  paragraph,
}) => {
  return (
    <div className="service-box">
      <div className="service-section">
        <div className="image-container">
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{

            }}
          />
        </div>
        <div className="service-content">
          <div className="service-subheader">
            <h3>{title}</h3>
          </div>
          {paragraph && <p>{paragraph}</p>}
          {points && (
            <ul className="bulletpoints">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
