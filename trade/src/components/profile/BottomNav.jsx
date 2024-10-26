// components/profile/BottomNav.jsx
import { Home, Heart, ShoppingBag, User } from 'lucide-react';

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-6">
      <div className="flex justify-between max-w-md mx-auto">
        <Home className="w-6 h-6 text-blue-600" />
        <Heart className="w-6 h-6 text-gray-600" />
        <ShoppingBag className="w-6 h-6 text-gray-600" />
        <User className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
};
