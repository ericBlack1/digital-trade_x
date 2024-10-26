// components/profile/ServiceCard.jsx
export const ServiceCard = ({ service }) => {
    return (
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-40 object-cover"
        />
        {service.status === 'Live' && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
            Live
          </span>
        )}
      </div>
    );
  };
  