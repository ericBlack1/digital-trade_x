"use client"
import React, { useState } from 'react';
import { Search, Camera } from 'lucide-react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory] = useState([
    'Socks', 'Red Dress', 'Sunglasses', 'Mustard Pants', '80-s Skirt'
  ]);
  
  const [recommendations] = useState([
    'Skirt', 'Accessories', 'Black T-Shirt', 'Jeans', 'White Shoes'
  ]);
  
  const [products] = useState([
    {
      id: 1,
      image: '/api/placeholder/200/250',
      title: 'Lorem ipsum dolor sit amet consectetur',
      price: 125.00
    },
    {
      id: 2,
      image: '/api/placeholder/200/250',
      title: 'Lorem ipsum dolor sit amet consectetur',
      price: 32.00
    },
    {
      id: 3,
      image: '/api/placeholder/200/250',
      title: 'Lorem ipsum dolor sit amet consectetur',
      price: 21.00
    }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Search Bar */}
      <div className="relative mb-6">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="w-full p-3 pr-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
              <Camera size={20} />
            </button>
            <button type="submit" className="p-2 text-gray-500 hover:text-gray-700">
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>

      {/* Search History */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Search history</h2>
        <div className="flex flex-wrap gap-2">
          {searchHistory.map((term, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
              onClick={() => setSearchQuery(term)}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Recommendations</h2>
        <div className="flex flex-wrap gap-2">
          {recommendations.map((term, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
              onClick={() => setSearchQuery(term)}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Discover Section */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Discover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <p className="text-sm text-gray-600 line-clamp-2">{product.title}</p>
                <p className="text-lg font-semibold mt-1">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;