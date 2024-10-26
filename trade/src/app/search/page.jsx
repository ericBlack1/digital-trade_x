"use client";
import React, { useState } from "react";
import { Camera, X } from "lucide-react";
import Image from "next/image";

// Main wrapper component to handle navigation
const ShopNavigator = () => {
  const [currentView, setCurrentView] = useState("search");
  const [selectedShop, setSelectedShop] = useState(null);

  const handleShopSelect = (shop) => {
    setSelectedShop(shop);
    setCurrentView("shop");
  };

  const handleBackToSearch = () => {
    setCurrentView("search");
    setSelectedShop(null);
  };

  return (
    <div className="bg-white w-full h-full md:h-screen mx-auto p-4">
      {currentView === "search" ? (
        <SearchView onShopSelect={handleShopSelect} />
      ) : (
        <ShopView shop={selectedShop} onBack={handleBackToSearch} />
      )}
    </div>
  );
};

// Search view component
const SearchView = ({ onShopSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory] = useState([
    "Socks",
    "Red Dress",
    "Sunglasses",
    "Mustard Pants",
    "80-s Skirt",
  ]);

  const [recommendations] = useState([
    "Skirt",
    "Accessories",
    "Black T-Shirt",
    "Jeans",
    "White Shoes",
  ]);

  const [shops] = useState([
    {
      id: 1,
      name: "Fashion Store 1",
      preview:
        "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    {
      id: 2,
      name: "Fashion Store 2",
      preview:
        "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image: 
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    // Add more shops here
  ]);

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="w-full p-3 pr-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Camera size={20} />
          </button>
        </div>
      </div>

      {/* Search History */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Search history</h2>
        <div className="flex flex-wrap gap-2">
          {searchHistory.map((term, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Recommendations</h2>
        <div className="flex flex-wrap gap-2">
          {recommendations.map((term, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Discover Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Discover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onShopSelect(shop)}
            >
              <img
                src={shop.preview}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {shop.description}
                </p>
                <p className="text-lg font-semibold mt-1">
                  ${shop.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Shop view component
const ShopView = ({ shop, onBack }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Shop</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
          >
            <span className="bg-blue-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              Socks <X size={14} />
            </span>
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Camera size={20} />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shop?.products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
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
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNavigator;
