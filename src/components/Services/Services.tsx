import React from "react";
import ServiceContent from './ServiceContent';

const Services: React.FC = () => {
  return (
    <>
      <div className="service-title">
        <h2>Our Service</h2>
      </div>
      <div className="services-wrapper">
        
        <div className="services-container" id="box1"  >
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
            paragraph="See how we'll craft your business' webspace."
          />
        </div>
        <div className="services-container" id="box2">
          <ServiceContent
            title="WebSlate Design"
            imageSrc="slatewebsitelogo3.png"
            imageAlt="WebSlate Design"
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
    </>
  );
};

export default Services;
