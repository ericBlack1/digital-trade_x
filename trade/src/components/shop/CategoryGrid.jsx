
// components/shop/CategoryGrid.jsx
export const CategoryGrid = ({ categories }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(categories).map(([key, category]) => (
          <Link key={key} href={`/category/${key}`} className="relative group">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={`/images/categories/${key}.jpg`}
                alt={category.displayName}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <div className="text-white">
                  <p className="font-medium">{category.displayName}</p>
                  <p className="text-sm">{category.itemCount} items</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  