// components/profile/ServicesGrid.jsx

import { ServiceCard } from "./ServiceCard";



export const ServicesGrid = ({ services }) => {
    return (
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Services</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    );
  };
  