import { useState } from 'react';
import { Camera } from 'lucide-react';
import { shops } from '@/data/page';

const SearchView = ({ onShopSelect }) => {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShops, setFilteredShops] = useState(shops);

  // Search history and recommendations data
  const searchHistory = [
    "Socks",
    "Red Dress",
    "Sunglasses",
    "Mustard Pants",
    "80-s Skirt",
  ];

  const recommendations = [
    "Skirt",
    "Accessories",
    "Black T-Shirt",
    "Jeans",
    "White Shoes",
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    // Filter shops based on search query
    const filtered = shops.filter(shop => 
      shop.name.toLowerCase().includes(query) || 
      shop.description.toLowerCase().includes(query)
    );
    setFilteredShops(filtered);
  };

  // Handle search history or recommendation tag click
  const handleTagClick = (term) => {
    setSearchQuery(term);
    const filtered = shops.filter(shop => 
      shop.name.toLowerCase().includes(term.toLowerCase()) || 
      shop.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredShops(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search shops and products..."
          className="w-full p-3 pr-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Camera size={20} />
          </button>
        </div>
      </div>

      {/* Search History Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Search history</h2>
        <div className="flex flex-wrap gap-2">
          {searchHistory.map((term, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(term)}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Recommendations</h2>
        <div className="flex flex-wrap gap-2">
          {recommendations.map((term, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(term)}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Discover/Results Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">
          {searchQuery ? 'Search Results' : 'Discover'}
        </h2>
        {filteredShops.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No shops found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredShops.map((shop) => (
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
                  <h3 className="text-lg font-bold mb-1">{shop.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {shop.description}
                  </p>
                  <p className="text-sm font-bold mt-2">
                    Starting from FCFA {shop.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;