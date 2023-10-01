import React from "react";

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

export default ServiceHeader;
