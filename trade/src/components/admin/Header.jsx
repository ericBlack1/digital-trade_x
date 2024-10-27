'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Search, X, LayoutGrid, ShoppingCart, User, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: LayoutGrid, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: ShoppingCart, label: 'Products', href: '/admin/products' },
  { icon: User, label: 'Profile', href: '/admin/profile' },
  { icon: Store, label: 'Store', href: '/admin/store' },
];

export default function Header({ avatar }) {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  // Extract the page name, stopping after the first slash
  const pageName = pathname.split('/').slice(2, 3).join('') || 'Dashboard';

  return (
    <>
      <div className="flex flex-col gap-3 items-center bg-white w-full p-4 border-b border-b-gray-200">
        <div className="flex justify-between items-center w-full">
          <button 
            onClick={toggleSidenav}
            className="text-lg text-gray-950 hover:text-gray-700 transition-colors"
          >
            <Menu />
          </button>
          <div className="text-lg text-blue-900 font-semibold capitalize">{pageName}</div>
          <div className="relative rounded-full border border-blue-100 h-10 w-10 overflow-hidden">
            <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search size={16} />
          </div>
          <input
            type="text"
            name="search"
            placeholder="Search something"
            className="bg-gray-50 w-full placeholder:text-sm placeholder:text-gray-500 outline-none text-sm border py-4 px-10 border-blue-100 rounded-full text-gray-950"
          />
        </div>
      </div>

      <AnimatePresence>
        {isSidenavOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidenav}
              className="fixed inset-0 bg-black z-40"
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="text-xl font-semibold text-blue-900">Menu</span>
                <button
                  onClick={toggleSidenav}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
