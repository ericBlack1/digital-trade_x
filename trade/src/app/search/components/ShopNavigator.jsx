// components/ShopNavigator.jsx
import React, { useState } from "react";
import { Camera, X } from "lucide-react";
import shops from "@/data/page";
import SearchView from "./SearchView";
import ShopView from "./ShopView";

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

export default ShopNavigator;