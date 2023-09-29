import React from "react";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-section">
        <div className="service-header">
          <h2>Services</h2>
        </div>
      </div>
      <div className="service-section">
        <div className="service-content">
          <div className="service-subheader">
            <h3 style={{ fontSize: "30px" }}>
              WebSlate Development and Design
            </h3>
            <img
              src="test.png"
              alt="WebSlate Development and Design"
              style={{
                marginRight: "10%",
                width: "250px",
                height: "250px",
                float: "right",
              }}
            />
          </div>
          <p style={{marginLeft: "10px"
              }}>
            At WebSlate, we specialize in crafting your business's online
            presence. Our comprehensive services encompass:
          </p>
          <ol className="numbered-list">
            <li>
              <h4>Graphic Design Excellence:</h4>
              <p>
                Logos, branding, and company voice tailored to your unique
                identity.
              </p>
            </li>
            <li>
              <h4>Website Development Expertise:</h4>
              <p>
                Building and enhancing your business website and online space.
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className="service-section">
        <div className="service-content">
          <div className="service-subheader">
            <h3>Our Approach</h3>
            <img
              src="icons-01.png"
              alt="Our Approach"
              style={{
                marginRight: "10%",
                width: "250px",
                height: "250px",
                float: "right",
              }}
            />
          </div>
          <ul className="bulletpoints">
            <li>
              Responsive Design: Ensuring your website looks stunning and
              functions seamlessly on all devices, from desktop to mobile.
            </li>
            <li>
              Interactivity: Creating a smooth and interactive experience for
              users across various platforms.
            </li>
            <li>
              Modern Aesthetics: Delivering clean, modern, and visually
              captivating designs.
            </li>
            <li>
              Customer-Centric: Tailoring designs to your target audience to
              maximize engagement.
            </li>
          </ul>
        </div>
      </div>
      <div className="service-section">
        <div className="service-content">
          <div className="service-subheader">
            <h3>Hosted with Confidence</h3>
            <img
              src="hosticon-01.png"
              alt="Hosted with Confidence"
              style={{
                marginRight: "10%",
                width: "250px",
                height: "250px",
                float: "right",
              }}
            />
          </div>
          <ul className="bulletpoints">
            <li>
              Dependable Uptime: Ensuring your website is accessible 24/7.
            </li>
            <li>
              Google AdSense Integration: Monetize your site with targeted ads.
            </li>
            <li>
              Comprehensive Analytics: Gain valuable insights into your online
              performance.
            </li>
            <li>
              Ongoing Support: Count on WebSlate's continued assistance and
              guidance.
            </li>
          </ul>
          <p style={{ clear: "both" }}>
            Elevate your online presence with WebSlate. Let's bring your vision
            to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
