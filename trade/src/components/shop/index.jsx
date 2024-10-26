
import { CategorySection } from '../../components/shop/CategorySection';
import { CategoryGrid } from '../../components/shop/CategoryGrid';
import categoryData from '../../data/categoryData';

export default function ShopPage() {
  // Get new items
  const newItems = Object.values(categoryData)
    .flatMap(category => 
      category.shops.flatMap(shop => 
        shop.items.map(item => ({
          ...item,
          shopName: shop.shopName
        }))
      )
    )
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <CategorySection 
        title="New Items" 
        items={newItems}
        viewAll="/shop/new"
      />
      
      <CategoryGrid categories={categoryData} />
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Flash Sale</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Flash sale items would go here */}
        </div>
      </div>
    </div>
  );
}
