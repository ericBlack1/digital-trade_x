import { SectionHeader } from "./SectionHeader";
// components/shop/PopularItemsSection.jsx
export const PopularItemsSection = () => (
    <section className="mb-8 px-5">
      <SectionHeader title="Most Popular Shops" link="/popular" />
      <div className="grid grid-cols-4 gap-2 overflow-x-auto">
        {[
          { price: 1780, label: 'New' },
          { price: 1780, label: 'Sale' },
          { price: 1780, label: 'Hot' },
          { price: 1780, label: 'New' },
        ].map((item, index) => (
          <div key={index} className="relative">
            <img
              src="https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU="
              alt="Popular product"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 flex items-center space-x-2">
              <span className="text-sm font-semibold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                ${item.price}
              </span>
              <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  