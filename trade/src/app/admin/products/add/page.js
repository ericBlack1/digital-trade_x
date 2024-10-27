'use client'
import React, { useState } from 'react';
import { Image, X, Plus, Loader2 } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import AdminAlert from '@/components/admin/AdminAlert';
import AdminSpinner from '@/components/admin/AdminSpinner';

// Initialize Firebase (you'll need to add your config)
const firebaseConfig = {
  apiKey: "AIzaSyAgQk13XNmVdd5wDDK438pIACLN_WGNfwQ",
  authDomain: "digitaltradecits.firebaseapp.com",
  projectId: "digitaltradecits",
  storageBucket: "digitaltradecits.appspot.com",
  messagingSenderId: "918306472972",
  appId: "1:918306472972:web:f404f4b5074117c0c7da29"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const ProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    sku: '',
    dimension: '',
    status: 'Draft',
    colors: [
      { name: 'Black', class: 'bg-black' },
      { name: 'Gray', class: 'bg-gray-400' },
      { name: 'Red', class: 'bg-red-500' }
    ],
    variants: 1
  });
  const [images, setImages] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setIsLoading(true);
    setError('');

    try {
      const uploadPromises = files.map(async (file) => {
        const storageRef = ref(storage, `products/${Date.now()}-${file.name}`);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
      });

      const urls = await Promise.all(uploadPromises);
      setUploadedImageUrls(urls);
      setIsLoading(false);
    } catch (error) {
      setError('Error uploading images. Please try again.');
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const productData = {
        ...formData,
        price: `$${parseFloat(formData.price).toFixed(2)}`,
        images: uploadedImageUrls,
        createdAt: new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        sold: 0,
        rating: 0,
        orders: [],
        reviews: []
      };

      // Add your API endpoint here
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      if (!response.ok) throw new Error('Failed to create product');

      window.location.href = '/admin/products';
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    window.location.href = '/admin/products';
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-6 text-sm">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-blue-950">Add Product</h1>
            <button 
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {error && (
            <AdminAlert>
              {error}
            </AdminAlert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full outline-none px-3 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 outline-none py-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  placeholder="Enter product description"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border outline-none rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter category"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SKU
                  </label>
                  <input
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border outline-none rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter SKU"
                    required
                  />
                </div>
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
                    {isLoading ? (
                      <AdminSpinner />
                    ) : (
                      <Image className="text-gray-400" size={24} />
                    )}
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
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="mt-4 inline-block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
                  >
                    Select Files
                  </label>
                </div>
                {uploadedImageUrls.length > 0 && (
                  <div className="mt-4 grid grid-cols-4 gap-4">
                    {uploadedImageUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Product ${index + 1}`}
                        className="w-full h-24 object-cover rounded-md"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Pricing and Inventory */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border outline-none rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0.00"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border outline-none rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter quantity"
                  required
                />
              </div>
            </div>

            {/* Dimensions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dimensions (H, L, W)
              </label>
              <input
                type="text"
                name="dimension"
                value={formData.dimension}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border outline-none rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.25kg / 10 CM, 10 CM, 7 CM"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border outline-none rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus size={16} className="mr-2" />
                    Add Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;