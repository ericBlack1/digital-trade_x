// components/shop/ProductCard.jsx
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="relative h-48 w-full">
          <Image
            src={product.image || "/api/placeholder/400/400"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-3">
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <p className="text-blue-600 font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};