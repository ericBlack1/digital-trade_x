// components/profile/BottomNav.jsx
import { Home, Heart, ShoppingBag, User , Search} from 'lucide-react';
import Link from "next/link"

export const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-6">
      <div className="flex justify-between max-w-md mx-auto">
        <Home className="w-6 h-6 text-gray-600 hover:text-blue-600 " />
       <Link href='/search'> <Search className='w-6-h-6 text-gray-600 hover:text-blue-600'/></Link>
        <Heart className="w-6 h-6 text-gray-600 hover:text-blue-600" />
       <Link href="/shopping"> <ShoppingBag className="w-6 h-6 text-gray-600" /></Link>
    
    <Link href="/info">    <User className="w-6 h-6 text-gray-600" /></Link>
      </div>
    </div>
  );
};
