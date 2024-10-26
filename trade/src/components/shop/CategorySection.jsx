import { SectionHeader } from "./SectionHeader";
import Image from "next/image"


export const CategorySection = ({ categoryData }) => {
  // Add safety check for categoryData
  if (!categoryData || typeof categoryData !== 'object') {
    return null;
  }

  // Convert the categoryData to an array of entries we can safely map over
  const categories = Object.entries(categoryData).map(([key, category]) => ({
    key,
    displayName: category?.displayName || '',
    itemCount: category?.itemCount || 0,
    images: Array(4).fill('https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=') // Placeholder images
  }));

  return (
    <section className="px-5 mb-8">
      <SectionHeader title="Categories" />
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <div key={category.key} className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {category.images.map((imageSrc, idx) => (
                <div 
                  key={`${category.key}-${idx}`} 
                  className="aspect-square rounded-2xl overflow-hidden bg-gray-100"
                >
                  <Image
                    src={imageSrc}
                    alt={`${category.displayName} ${idx + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center px-1">
              <span className="font-medium text-gray-900">
                {category.displayName}
              </span>
              <span className="text-sm text-gray-500">
                {category.itemCount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};