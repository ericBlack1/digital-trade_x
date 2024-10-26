// components/shop/StarRating.jsx
export const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  // components/shop/ProductDetails.jsx
  export const ProductDetails = ({ product, reviews }) => {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="relative h-96 w-full mb-6 rounded-lg overflow-hidden">
          <Image
            src={product.image || "/api/placeholder/600/600"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
  
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-3xl text-blue-600 font-bold mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
  
          <div className="flex space-x-4 mb-6">
            {product.variants && (
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Size</label>
                <select className="w-full p-2 border rounded-lg">
                  {product.variants.map((variant) => (
                    <option key={variant}>{variant}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
  
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Buy now
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50">
              Add to cart
            </button>
          </div>
        </div>
  
        <div className="border-t pt-6">
          <h2 className="text-xl font-bold mb-4">Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{review.username}</p>
                    <StarRating rating={review.rating} />
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  