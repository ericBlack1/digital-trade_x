'use client'
import React from 'react';
import { X } from 'lucide-react';

const AdminAlert = ({ children, onDismiss }) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded relative mb-4">
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="absolute right-0 top-0 p-4"
        >
          <X size={16} />
        </button>
      )}
      <div className="flex items-start">
        <svg 
          className="w-4 h-4 mr-2 mt-0.5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminAlert;