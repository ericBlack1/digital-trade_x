"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { shops } from '@/data/page';

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const product = shops
    .flatMap((shop) => shop.products)
    .find((item) => item.id === parseInt(productId));

  if (!product) return <p>Product not found</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setSuccessMessage('');

    // Simulate API call
    try {
      console.log('Processing payment with:', {
        method: paymentMethod,
        delivery: deliveryMethod,
        phone: phoneNumber,
        amount: product.price,
        productId,
        name,
        email,
      });

      // Simulate successful payment processing
      setTimeout(() => {
        setSuccessMessage(`Payment successful! Your order for ${product.description} has been processed. A confirmation message has been sent to ${phoneNumber}.`);
        setIsProcessing(false);
      }, 2000);
    } catch (error) {
      alert('Error processing payment: ' + error.message);
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Product Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2">{product.description}</h2>
        <p className="text-blue-600 font-bold">FCFA {product.price.toFixed(2)}</p>
      </div>

      {successMessage && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Information */}
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full p-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Do You Need Delivery ?</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="deliveryMethod"
                value="yes"
                checked={deliveryMethod === 'yes'}
                onChange={(e) => setDeliveryMethod(e.target.value)}
                required
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="deliveryMethod"
                value="no"
                checked={deliveryMethod === 'no'}
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Payment Method</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="mtn"
                checked={paymentMethod === 'mtn'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              />
              <span>MTN Mobile Money</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="orange"
                checked={paymentMethod === 'orange'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Orange Money</span>
            </label>
          </div>
        </div>

        {/* Phone Number Input */}
        {paymentMethod && (
          <div>
            <label className="block text-sm font-medium mb-2">
              {paymentMethod === 'mtn' ? 'MTN' : 'Orange'} Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder={paymentMethod === 'mtn' ? '6xx xxx xxx' : '6xx xxx xxx'}
              className="w-full p-2 border rounded-lg"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="\d{9}"
              maxLength={9}
            />
            <p className="text-sm text-gray-500 mt-1">Enter 9 digits without country code</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-3 rounded-lg text-white font-medium ${
            isProcessing 
              ? 'bg-gray-400' 
              : paymentMethod === 'mtn' 
                ? 'bg-yellow-500 hover:bg-yellow-600' 
                : 'bg-orange-500 hover:bg-orange-600'
          } transition-colors`}
        >
          {isProcessing 
            ? 'Processing...' 
            : `Pay with ${paymentMethod === 'mtn' ? 'MTN Mobile Money' : 'Orange Money'}`
          }
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
