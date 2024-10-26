
// components/profile/OrderSection.jsx
export const OrderSection = () => {
    const orderTypes = ['To Pay', 'To Receive', 'To Review'];
    
    return (
      <div className="mb-6">
        <h2 className="font-semibold mb-3">My Orders</h2>
        <div className="flex space-x-3">
          {orderTypes.map((type) => (
            <button 
              key={type}
              className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    );
  };
  