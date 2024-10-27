// components/ProductCard.jsx
import Link from 'next/link';

const ProductCard = ({ product }) => (
  <Link href={`search/products/${product.id}`}>
    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <img
        src={product.image}
        alt={product.description}
        className="w-full aspect-square object-cover"
      />
      <div className="p-3">
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        <p className="text-lg font-semibold mt-1">
          FCFA {product.price.toFixed(2)}
        </p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
