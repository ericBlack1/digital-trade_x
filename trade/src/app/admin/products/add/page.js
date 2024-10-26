'use client'
import React, { useState } from 'react';
import { Image, Video, Package, Truck, X, Plus } from 'lucide-react';

const ProductForm = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleImageUpload = (e) => {
    // Handle image upload logic here
    console.log('Image upload:', e.target.files);
  };

  const handleVideoUpload = (e) => {
    // Handle video upload logic here
    console.log('Video upload:', e.target.files);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-6 text-sm">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-blue-950">Add Product</h1>
            <button className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          <form className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full outline-none px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 outline-none py-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  placeholder="Enter product description"
                />
              </div>
            </div>

            {/* Media Upload */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Images
                </label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Image className="text-gray-400" size={24} />
                  </div>
                  <p className="text-sm text-gray-500">
                    Drag and drop images here or click to upload
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Videos
                </label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Video className="text-gray-400" size={24} />
                  </div>
                  <p className="text-sm text-gray-500">
                    Drag and drop videos here or click to upload
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept="video/*"
                    multiple
                    onChange={handleVideoUpload}
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">$</span>
                <input
                  type="number"
                  className="w-full px-3 py-2 border outline-none rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Inventory */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border outline-none rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter quantity"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md flex items-center"
              >
                <Plus size={16} className="mr-2" />
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;