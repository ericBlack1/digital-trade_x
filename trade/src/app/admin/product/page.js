'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Star, 
  Package, 
  Trash2, 
  Edit, 
  ZoomIn,
  Circle,
  Clock,
  CheckCircle2,
  XCircle,
  User
} from 'lucide-react';
import AdminSpinner from '@/components/admin/AdminSpinner';

const ProductDetails = ({id}) => {
  const [activeTab, setActiveTab] = useState('details');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [product, setProduct] = useState(null);

  //handle deletion
  const handleDeleteProduct = useCallback(async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`, {
        method: 'DELETE'
      });
      window.location.href = `/admin/products`
      if (!response.ok) {
        throw new Error('Failed to delete product');

      }
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product. Please try again.');
    }
  }, []);

  const getProductID = () => {
    const id = localStorage.getItem('productID');
    return id; // Return null if not found
  };

  useEffect(() => {
    //console.log("product id: ",getProductID())
    fetch("http://localhost:5000/products/"+getProductID())
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  if (!product) return <AdminSpinner/>;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600 bg-green-50';
      case 'Processing':
        return 'text-blue-600 bg-blue-50';
      case 'Cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const renderDetails = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative aspect-square bg-gray-100 border-[1.5px] border-gray-200 rounded-lg overflow-hidden">
          <img 
            src={product.images[selectedImage]} 
            alt="Product" 
            className="w-full h-full object-contain"
          />
          <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:bg-gray-50">
            <ZoomIn size={20} className="text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              className={`aspect-square border-[1.5px] border-gray-200 rounded-lg overflow-hidden border-2 ${
                selectedImage === idx ? 'border-blue-500' : ''
              }`}
              onClick={() => setSelectedImage(idx)}
            >
              <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6 border-[1.5px] border-gray-200 p-6 rounded-lg relative">
        <div className="">
          <div>
            <h1 className="text-xl text-gray-700 font-semibold">
              {/* Smartwatch E2 */}
              {product.name}
            </h1>
            <div className="mt-2 flex items-center space-x-4 w-full text-sm text-gray-600">
              <span className="flex items-center">
                <Package size={16} className="mr-1" />
                {/* Sold: 1,316 */}
                {`Sold: ${product.sold}`}
              </span>
              <span className="flex items-center">
                <Star size={16} className="mr-1 text-yellow-400" />
                {/* 4.5/5 */}
                {`${product.rating}/5`}
              </span>
              <span className="flex items-center">
                <Package size={16} className="mr-1" />
                {/* Stock: 140 */}
                {`Stock: ${product.stock}`}
              </span>
            </div>
          </div>
          <div className="absolute right-2 top-2">
            <button onClick={()=>handleDeleteProduct(getProductID())}className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-baseline">
          <span className="text-2xl font-light text-sky-950">
            {/* $400.00 */}
            {`${product.price}`}
          </span>
          <span className="ml-2 text-sm text-green-500 px-2 py-1 bg-green-50 rounded">
            {/* Published */}
            {product.status}
          </span>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-xs font-medium text-gray-400 mb-2">Description:</h3>
          <p className="text-gray-700 text-sm">
            {/* Smartwatch for men women notify you incoming calls, SMS notifications. when you connect 
            the smartphone with fitness tracker. Connect fitness tracker with your phone, you will never 
            miss a call and a message. The smart watches for android phones will vibrate to alert you if 
            your phone receives any notifications. You can reject calls and view messages directly from 
            your watch. A best gift for family and friends */}
            {product.description}
          </p>
        </div>

        {/* Weight & Dimensions */}
        <div>
          <h3 className="text-xs font-medium text-gray-400 mb-2">Weight & Dimension:</h3>
          <p className="text-gray-700 text-sm">
            {/* 0.25kg / 10 CM,10 CM,7 CM (H,L,W) */}
            {product.dimension}
          </p>
        </div>

        {/* SKU & Created Date */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>
            {/* SKU: #302012 */}
            {`SKU: ${product.sku}`}
          </span>
          <span>
            {/* Created: 14 January 2022 */}
            {`Created: ${product.createdAt}`}
          </span>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {product.orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {order.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.customer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderReviews = () => (
    <div className="space-y-6">
      {product.reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="mr-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User size={20} className="text-gray-500" />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <h4 className="text-sm font-medium text-gray-900">{review.user}</h4>
                  {review.verified && (
                    <CheckCircle2 size={16} className="ml-2 text-green-500" />
                  )}
                </div>
                <div className="mt-1 flex items-center">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow">
          {/* Tabs */}
          <div className="border-b">
            <div className="flex space-x-6 px-6 text-sm">
              <button 
                className={`py-4 font-medium border-b-2 ${
                  activeTab === 'details' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button 
                className={`py-4 font-medium border-b-2 ${
                  activeTab === 'orders' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('orders')}
              >
                Orders
              </button>
              <button 
                className={`py-4 font-medium border-b-2 ${
                  activeTab === 'reviews' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'details' && renderDetails()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'reviews' && renderReviews()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;