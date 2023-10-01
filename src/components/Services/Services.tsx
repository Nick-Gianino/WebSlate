import React from "react";

// Define the types for your props
interface ServiceHeaderProps {
  title: string;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ title }) => {
  return (
    <div className="service-header">
      <h2>{title}</h2>
    </div>
  );
};

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
              display: "block",
              margin: "0 auto", // Center the image horizontally
              width: "auto",
              height: "250px",
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

const Services: React.FC = () => {
  return (
    <div className="services-wrapper">
      <div className="services-container" id="box1">
        <ServiceContent
          title="Our Approach"
          imageSrc="icons-01.png"
          imageAlt="Our Approach"
          points={[
            "Responsive Design: Ensuring your website looks stunning and functions seamlessly on all devices, from desktop to mobile.",
            "Interactivity: Creating a smooth and interactive experience for users across various platforms.",
            "Modern Aesthetics: Delivering clean, modern, and visually captivating designs.",
            "Customer-Centric: Tailoring designs to your target audience to maximize engagement.",
          ]}
        />
      </div>
      <div className="services-container" id="box2">
        <ServiceContent
          title="WebSlate Development and Design"
          imageSrc="slatewebsitelogo3.png"
          imageAlt="WebSlate Development and Design"
          points={[
            "Graphic Design Excellence: Logos, branding, and company voice tailored to your unique identity.",
            "Website Development Expertise: Building and enhancing your business website and online space.",
            "Hosting: Secure and reliable webservice."
          ]}
          paragraph="At WebSlate, we specialize in crafting your business's online presence. Our comprehensive services encompass:"
        />
      </div>
      <div className="services-container" id="box3">
        <ServiceContent
          title="Hosted with Confidence"
          imageSrc="hosticon-01.png"
          imageAlt="Hosted with Confidence"
          points={[
            "Dependable Uptime: Ensuring your website is accessible 24/7.",
            "Google AdSense Integration: Monetize your site with targeted ads.",
            "Comprehensive Analytics: Gain valuable insights into your online performance.",
            "Ongoing Support: Count on WebSlate's continued assistance and guidance.",
          ]}
          paragraph="Elevate your online presence with WebSlate. Let's bring your vision to life."
        />
      </div>
    </div>
  );
};

export default Services;
