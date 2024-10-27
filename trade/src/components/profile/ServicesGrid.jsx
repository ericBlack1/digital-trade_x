import { ServiceCard } from "./ServiceCard";

export const ServicesGrid = ({ services }) => {
    return (
        <div className="mb-6">
            <h2 className="font-semibold mb-3">Services</h2>
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                {services.map((service) => (
                    <div key={service.id} className="flex-shrink-0 w-64">
                        <ServiceCard service={service} />
                    </div>
                ))}
            </div>
        </div>
    );
};
