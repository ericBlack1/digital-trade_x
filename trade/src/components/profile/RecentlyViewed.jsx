// components/profile/RecentlyViewed.jsx
export const RecentlyViewed = ({ items }) => {
    return (
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Recently viewed</h2>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0">
              <img 
                src={item.image} 
                alt={`Recent ${item.id}`} 
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>
          ))}
        </div>
      </div>
    );
};
  