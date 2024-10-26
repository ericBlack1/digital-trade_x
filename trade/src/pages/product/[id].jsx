// pages/product/[id].jsx
import { useRouter } from 'next/router';
import { ProductDetails } from '../../components/shop/ProductDetails';
import categoryData from '../../data/categoryData';
import { reviewsData } from '../../data/reviews';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find product in categoryData
  const product = Object.values(categoryData)
    .flatMap(category => 
      category.shops.flatMap(shop => 
        shop.items.map(item => ({
          ...item,
          shopName: shop.shopName
        }))
      )
    )
    .find(item => item.id === id);

  const reviews = reviewsData[id] || [];

  if (!product) return <div>Product not found</div>;

  return <ProductDetails product={product} reviews={reviews} />;
}