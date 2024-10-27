
// components/ShopView.jsx
import { Camera, X } from "lucide-react";
import ProductCard from "./ProductCard";
import shops from "@/data/page";

const ShopView = ({ shop, onBack }) => {
    return (
      <div>
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
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {shop?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
export default ShopView  