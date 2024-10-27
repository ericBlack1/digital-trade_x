// components/SearchBar.jsx
import { Camera } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
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
);

export default SearchBar
