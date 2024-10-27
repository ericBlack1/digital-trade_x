// pages/EscrowCheckoutPage.js

"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { shops } from "@/data/page";
import { ReceiptDownloadButton } from "@/components/receipt/ReceiptDocument";
import { generateReceiptData } from "@/components/receipt/generateReceiptData";

const EscrowCheckoutPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [escrowStatus, setEscrowStatus] = useState("initial");
  const [statusMessage, setStatusMessage] = useState("");
  const [receiptData, setReceiptData] = useState(null);

  const product = shops
    .flatMap((shop) => shop.products)
    .find((item) => item.id === parseInt(productId));

  if (!product) return <p>Product not found</p>;

  const handleEscrowPayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setStatusMessage("");

    try {
      const receipt = generateReceiptData(
        { name, email, phoneNumber, paymentMethod, deliveryMethod },
        product
      );
      setReceiptData(receipt);

      await simulateApiCall("Initializing escrow account...", 1000);
      setEscrowStatus("funded");
      setStatusMessage(
        "Payment held in escrow. Awaiting seller to ship the item."
      );

      await simulateApiCall("Notifying seller...", 1000);
      setTimeout(() => {
        setEscrowStatus("delivered");
        setStatusMessage(
          "Item marked as delivered. Please confirm receipt to release payment."
        );
      }, 3000);
    } catch (error) {
      setStatusMessage("Error processing escrow payment: " + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleConfirmDelivery = async () => {
    setIsProcessing(true);
    try {
      await simulateApiCall("Verifying delivery...", 1000);
      setEscrowStatus("completed");
      setStatusMessage("Transaction completed! Funds released to the seller.");
    } catch (error) {
      setStatusMessage("Error confirming delivery: " + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const simulateApiCall = (message, delay) => {
    console.log(message);
    return new Promise((resolve) => setTimeout(resolve, delay));
  };

  const getProgress = () => {
    switch (escrowStatus) {
      case "initial":
        return "0%";
      case "funded":
        return "33%";
      case "delivered":
        return "66%";
      case "completed":
        return "100%";
      default:
        return "0%";
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Secure Escrow Checkout</h1>

      <div className="bg-gray-200 rounded-full h-4 w-full mb-6 overflow-hidden">
        <div
          className="bg-blue-500 h-4 transition-all"
          style={{ width: getProgress() }}
        />
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="font-semibold mb-2">How Our Escrow Works:</h2>
        <ol className="list-decimal pl-4 space-y-2 text-sm">
          <li>You submit payment to our secure escrow account</li>
          <li>We notify the seller to ship your item</li>
          <li>Once you receive and verify the item</li>
          <li>We release the payment to the seller</li>
        </ol>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="font-semibold mb-2">{product.description}</h2>
        <p className="text-blue-600 font-bold">
          FCFA {product.price.toFixed(2)}
        </p>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            escrowStatus === "completed"
              ? "bg-green-100 text-green-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {statusMessage}
        </div>
      )}

      {escrowStatus === "delivered" && (
        <button
          onClick={handleConfirmDelivery}
          disabled={isProcessing}
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          Confirm Receipt & Release Payment
        </button>
      )}

      {escrowStatus === "initial" && (
        <form onSubmit={handleEscrowPayment} className="space-y-6">
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
            <label className="block text-sm font-medium mb-2">
              Delivery Method
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="yes"
                  checked={deliveryMethod === "yes"}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  required
                />
                <span>Need Delivery</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="no"
                  checked={deliveryMethod === "no"}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                />
                <span>Self Pickup</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Payment Method
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="mtn"
                  checked={paymentMethod === "mtn"}
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
                  checked={paymentMethod === "orange"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Orange Money</span>
              </label>
            </div>
          </div>

          {paymentMethod && (
            <div>
              <label className="block text-sm font-medium mb-2">
                {paymentMethod === "mtn" ? "MTN" : "Orange"} Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder={
                  paymentMethod === "mtn" ? "6xx xxx xxx" : "6xx xxx xxx"
                }
                className="w-full p-2 border rounded-lg"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                pattern="\d{9}"
                maxLength={9}
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter 9 digits without country code
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full py-5 mb-[10px] rounded-lg text-bold text-white font-medium ${
              isProcessing ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } transition-colors`}
          >
            {isProcessing ? "Processing..." : "Pay Securely via Escrow"}
          </button>
        </form>
      )}

      {/* {escrowStatus === "completed" && receiptData && (
        <div className="mt-4">
          <ReceiptDownloadButton orderData={receiptData} />
        </div>
      )} */}
    </div>
  );
};

export default EscrowCheckoutPage;

// "use client";
// import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { shops } from "@/data/page";

// const EscrowCheckoutPage = () => {
//   const searchParams = useSearchParams();
//   const productId = searchParams.get("productId");
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [deliveryMethod, setDeliveryMethod] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [escrowStatus, setEscrowStatus] = useState("initial"); // initial, funded, delivered, completed
//   const [statusMessage, setStatusMessage] = useState("");
//   const [receiptData, setReceiptData] = useState(null);

//   const product = shops
//     .flatMap((shop) => shop.products)
//     .find((item) => item.id === parseInt(productId));

//   if (!product) return <p>Product not found</p>;

//   const handleEscrowPayment = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);
//     setStatusMessage("");

//     try {
//       // Generate receipt data
//       const receipt = generateReceiptData(
//         { name, email, phoneNumber, paymentMethod, deliveryMethod },
//         product
//       );
//       setReceiptData(receipt);

//       // Step 1: Initialize escrow
//       await simulateApiCall("Initializing escrow account...", 1000);

//       // Step 2: Buyer funds escrow
//       await simulateApiCall("Processing payment to escrow account...", 1500);
//       setEscrowStatus("funded");
//       setStatusMessage(
//         "Payment held in escrow. Awaiting seller to ship the item."
//       );

//       // Step 3: Simulate seller notification
//       await simulateApiCall("Notifying seller...", 1000);

//       // Simulate seller shipping (in real app, seller would confirm)
//       setTimeout(() => {
//         setEscrowStatus("delivered");
//         setStatusMessage(
//           "Item marked as delivered. Please confirm receipt to release payment."
//         );
//       }, 5000);
//     } catch (error) {
//       setStatusMessage("Error processing escrow payment: " + error.message);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const handleConfirmDelivery = async () => {
//     setIsProcessing(true);
//     try {
//       // Release funds to seller
//       await simulateApiCall("Verifying delivery...", 1000);
//       await simulateApiCall("Releasing funds to seller...", 1500);
//       setEscrowStatus("completed");
//       setStatusMessage(
//         `Transaction completed successfully! Funds have been released to the seller.`
//       );
//     } catch (error) {
//       setStatusMessage("Error confirming delivery: " + error.message);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const simulateApiCall = (message, delay) => {
//     console.log(message);
//     return new Promise((resolve) => setTimeout(resolve, delay));
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//!End Here
// <h1 className="text-2xl font-bold mb-6">Secure Escrow Checkout</h1>

// <div className="bg-white shadow-md rounded-lg p-4 mb-6">
//   <h2 className="font-semibold mb-2">How Our Escrow Works:</h2>
//   <ol className="list-decimal pl-4 space-y-2 text-sm">
//     <li>You submit payment to our secure escrow account</li>
//     <li>We notify the seller to ship your item</li>
//     <li>Once you receive and verify the item</li>
//     <li>We release the payment to the seller</li>
//   </ol>
// </div>

// <div className="bg-gray-50 p-4 rounded-lg mb-6">
//   <h2 className="font-semibold mb-2">{product.description}</h2>
//   <p className="text-blue-600 font-bold">
//     FCFA {product.price.toFixed(2)}
//   </p>
// </div>

// {statusMessage && (
//   <div
//     className={`p-4 rounded-lg mb-6 ${
//       escrowStatus === "completed"
//         ? "bg-green-100 text-green-800"
//         : "bg-blue-100 text-blue-800"
//     }`}
//   >
//     {statusMessage}
//   </div>
// )}

// {escrowStatus === "delivered" && (
//   <div className="mb-6">
//     <button
//       onClick={handleConfirmDelivery}
//       disabled={isProcessing}
//       className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg"
//     >
//       Confirm Receipt & Release Payment
//     </button>
//   </div>
// )}

// {escrowStatus === "initial" && (
//   <form onSubmit={handleEscrowPayment} className="space-y-6">
//     {/* Customer Information */}
//     <div>
//       <label className="block text-sm font-medium mb-2">Full Name</label>
//       <input
//         type="text"
//         required
//         className="w-full p-2 border rounded-lg"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//     </div>

//     <div>
//       <label className="block text-sm font-medium mb-2">Email</label>
//       <input
//         type="email"
//         required
//         className="w-full p-2 border rounded-lg"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </div>

//     <div>
//       <label className="block text-sm font-medium mb-2">
//         Delivery Method
//       </label>
//       <div className="space-y-2">
//         <label className="flex items-center space-x-2">
//           <input
//             type="radio"
//             name="deliveryMethod"
//             value="yes"
//             checked={deliveryMethod === "yes"}
//             onChange={(e) => setDeliveryMethod(e.target.value)}
//             required
//           />
//           <span>Need Delivery</span>
//         </label>
//         <label className="flex items-center space-x-2">
//           <input
//             type="radio"
//             name="deliveryMethod"
//             value="no"
//             checked={deliveryMethod === "no"}
//             onChange={(e) => setDeliveryMethod(e.target.value)}
//           />
//           <span>Self Pickup</span>
//         </label>
//       </div>
//     </div>

//     <div>
//       <label className="block text-sm font-medium mb-2">
//         Payment Method
//       </label>
//       <div className="space-y-2">
//         <label className="flex items-center space-x-2">
//           <input
//             type="radio"
//             name="paymentMethod"
//             value="mtn"
//             checked={paymentMethod === "mtn"}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             required
//           />
//           <span>MTN Mobile Money</span>
//         </label>
//         <label className="flex items-center space-x-2">
//           <input
//             type="radio"
//             name="paymentMethod"
//             value="orange"
//             checked={paymentMethod === "orange"}
//             onChange={(e) => setPaymentMethod(e.target.value)}
//           />
//           <span>Orange Money</span>
//         </label>
//       </div>
//     </div>

//     {paymentMethod && (
//       <div>
//         <label className="block text-sm font-medium mb-2">
//           {paymentMethod === "mtn" ? "MTN" : "Orange"} Phone Number
//         </label>
//         <input
//           type="tel"
//           required
//           placeholder={
//             paymentMethod === "mtn" ? "6xx xxx xxx" : "6xx xxx xxx"
//           }
//           className="w-full p-2 border rounded-lg"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           pattern="\d{9}"
//           maxLength={9}
//         />
//         <p className="text-sm text-gray-500 mt-1">
//           Enter 9 digits without country code
//         </p>
//       </div>
//     )}

//     <button
//       type="submit"
//       disabled={isProcessing}
//       className={`w-full py-3 rounded-lg text-white font-medium ${
//         isProcessing ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
//       } transition-colors`}
//     >
//       {isProcessing ? "Processing..." : "Pay Securely via Escrow"}
//     </button>

//     {escrowStatus === "completed" && receiptData && (
//       <div className="mt-4">
//         <ReceiptDownloadButton orderData={receiptData} />
//       </div>
//     )}
//   </form>
// )}
//     </div>
//   );
// };

// export default EscrowCheckoutPage;

// "use client"
// import React, { useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { shops } from '@/data/page';

// const CheckoutPage = () => {
//   const searchParams = useSearchParams();
//   const productId = searchParams.get('productId');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [deliveryMethod, setDeliveryMethod] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   const product = shops
//     .flatMap((shop) => shop.products)
//     .find((item) => item.id === parseInt(productId));

//   if (!product) return <p>Product not found</p>;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);
//     setSuccessMessage('');

//     // Simulate API call
//     try {
//       console.log('Processing payment with:', {
//         method: paymentMethod,
//         delivery: deliveryMethod,
//         phone: phoneNumber,
//         amount: product.price,
//         productId,
//         name,
//         email,
//       });

//       // Simulate successful payment processing
//       setTimeout(() => {
//         setSuccessMessage(`Payment successful! Your order for ${product.description} has been processed. A confirmation message has been sent to ${phoneNumber}.`);
//         setIsProcessing(false);
//       }, 2000);
//     } catch (error) {
//       alert('Error processing payment: ' + error.message);
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Checkout</h1>

//       {/* Product Summary */}
//       <div className="bg-gray-50 p-4 rounded-lg mb-6">
//         <h2 className="font-semibold mb-2">{product.description}</h2>
//         <p className="text-blue-600 font-bold">FCFA {product.price.toFixed(2)}</p>
//       </div>

//       {successMessage && (
//         <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
//           {successMessage}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Customer Information */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Full Name</label>
//           <input
//             type="text"
//             required
//             className="w-full p-2 border rounded-lg"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Email</label>
//           <input
//             type="email"
//             required
//             className="w-full p-2 border rounded-lg"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Do You Need Delivery ?</label>
//           <div className="space-y-2">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="deliveryMethod"
//                 value="yes"
//                 checked={deliveryMethod === 'yes'}
//                 onChange={(e) => setDeliveryMethod(e.target.value)}
//                 required
//               />
//               <span>Yes</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="deliveryMethod"
//                 value="no"
//                 checked={deliveryMethod === 'no'}
//                 onChange={(e) => setDeliveryMethod(e.target.value)}
//               />
//               <span>No</span>
//             </label>
//           </div>
//         </div>

//         {/* Payment Method Selection */}
//         <div>
//           <label className="block text-sm font-medium mb-2">Payment Method</label>
//           <div className="space-y-2">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="mtn"
//                 checked={paymentMethod === 'mtn'}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 required
//               />
//               <span>MTN Mobile Money</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="orange"
//                 checked={paymentMethod === 'orange'}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               <span>Orange Money</span>
//             </label>
//           </div>
//         </div>

//         {/* Phone Number Input */}
//         {paymentMethod && (
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               {paymentMethod === 'mtn' ? 'MTN' : 'Orange'} Phone Number
//             </label>
//             <input
//               type="tel"
//               required
//               placeholder={paymentMethod === 'mtn' ? '6xx xxx xxx' : '6xx xxx xxx'}
//               className="w-full p-2 border rounded-lg"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               pattern="\d{9}"
//               maxLength={9}
//             />
//             <p className="text-sm text-gray-500 mt-1">Enter 9 digits without country code</p>
//           </div>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isProcessing}
//           className={`w-full py-3 rounded-lg text-white font-medium ${
//             isProcessing
//               ? 'bg-gray-400'
//               : paymentMethod === 'mtn'
//                 ? 'bg-yellow-500 hover:bg-yellow-600'
//                 : 'bg-orange-500 hover:bg-orange-600'
//           } transition-colors`}
//         >
//           {isProcessing
//             ? 'Processing...'
//             : `Pay with ${paymentMethod === 'mtn' ? 'MTN Mobile Money' : 'Orange Money'}`
//           }
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;
