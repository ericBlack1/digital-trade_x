"use client"


// src/app/search/products/[id]/page.js



import { useParams } from 'next/navigation';
import { shops } from '@/data/page';

const ProductDetails = () => {
  const { id } = useParams();

  const product = shops
    .flatMap((shop) => shop.products)
    .find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="px-4 py-8 max-w-md mx-auto">
      <img
        src={product.image}
        alt={product.description}
        className="w-full rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.description}</h1>
      <p className="text-lg font-semibold mb-4">FCFA {product.price.toFixed(2)}</p>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, at.</p>
      <div className="flex gap-4 mt-6">
        <button className="flex-1 bg-black text-white py-2 rounded-lg">Add to cart</button>
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Buy now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
