import { NewItemsSection } from "./NewItemsSection";
import { PopularItemsSection } from "./PopularItemsSection";
import { CategorySection } from "./CategorySection";
// Wrap the entire ShopSection with error boundary and data validation
export const ShopSection = ({ categoryData }) => {
  return (
    <div className="bg-white pt-6">
      <NewItemsSection />
      <PopularItemsSection />
      <CategorySection categoryData={categoryData} />
    </div>
  );
};

// Add proper prop types validation
ShopSection.defaultProps = {
  categoryData: {}
};