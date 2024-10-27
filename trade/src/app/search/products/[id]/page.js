"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { shops } from '@/data/page';
import { ShoppingCart } from "lucide-react";

const Toast = ({ message, isVisible, onClose }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in-up">
      <span>{message}</span>
    </div>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showMessageArea, setShowMessageArea] = useState(false);
  const [message, setMessage] = useState('');

  const product = shops
    .flatMap((shop) => shop.products)
    .find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, product]);
    setToastMessage(`${product.description} has been added to your cart`);
    setShowToast(true);
  };

  const handleBuyNow = () => {
    router.push(`/checkout?productId=${product.id}`);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setToastMessage("Message sent successfully");
      setShowToast(true);
      setMessage(''); // Clear the text area after sending
      setShowMessageArea(false); // Hide the text area after sending
    }
  };

  return (
    <div className="px-4 py-8 max-w-md mx-auto relative">
      <img
        src={product.image}
        alt={product.description}
        className="w-full rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.description}</h1>
      <p className="text-lg font-semibold mb-4">FCFA {product.price.toFixed(2)}</p>
      <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, at.</p>
      
      {/* Cart Items Counter */}
      <div className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-2">
        <ShoppingCart className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
          {cartItems.length}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Add to cart
        </button>
        <button 
          onClick={handleBuyNow}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Buy now
        </button>
      </div>

      {/* Message Vendor Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowMessageArea(!showMessageArea)}
          className="w-full bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Message Vendor
        </button>
      </div>

      {/* Message Area */}
      {showMessageArea && (
        <div className="m-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            className="w-full p-2 border rounded-lg resize-none focus:outline-none"
            rows="4"
          />
          <button
            onClick={handleSendMessage}
            className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      )}

      {/* Custom Toast */}
      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default ProductDetails;
