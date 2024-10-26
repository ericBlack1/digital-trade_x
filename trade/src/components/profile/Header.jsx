import { Bell, Settings } from 'lucide-react';
import Image from 'next/image'


export const Header = () => {
  return (
    <div className="flex items-center justify-between mb-6 mt-4">
      <div className="flex items-center space-x-3">
        <img
          src="https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=" 
          alt="Profile" 
          className="w-12 h-12 rounded-full"
          
        />
        
        <h1 className="text-lg font-thin bg-[#004CFF] text-white px-3 py-1 rounded-full">My Activity</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600" />
        <Settings className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
};
