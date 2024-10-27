// components/receipt/generateReceiptData.js

export const generateReceiptData = (formData, product) => ({
  receiptNumber: 'REC' + Date.now().toString().slice(-8),
  date: new Date().toLocaleDateString(),
  customerName: formData.name,
  email: formData.email,
  phoneNumber: formData.phoneNumber,
  productDescription: product.description,
  paymentMethod: formData.paymentMethod === 'mtn' ? 'MTN Mobile Money' : 'Orange Money',
  deliveryMethod: formData.deliveryMethod === 'yes' ? 'Home Delivery' : 'Self Pickup',
  amount: product.price,
});
