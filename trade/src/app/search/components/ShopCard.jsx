// components/ShopCard.jsx
const ShopCard = ({ shop, onClick }) => (
    <div
      className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onClick(shop)}
    >
      <img
        src={shop.preview}
        alt={shop.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h1 className="text-2xl font-bold">{shop.name}</h1>
        <p className="text-sm text-gray-600 line-clamp-2">
          {shop.description}
        </p>
        <p className="text-sm font-bold mt-1">
          FCFA {shop.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
  export default ShopCard
  