import { SectionHeader } from "./SectionHeader";



export const NewItemsSection = () => (
    <section className="mb-8 px-5">
      <SectionHeader title="New Items" link="/new" />
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="space-y-2">
            <img
              src="https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU="
              alt="Product"
              className="w-full h-40 object-cover rounded-lg"
            />
            <p className="text-sm text-gray-600 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="font-semibold">${(Math.random() * 30 + 15).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );