const categoryData = {
    clothing: {
      displayName: "Clothing",
      itemCount: 109,
      shops: [
        {
          shopId: "shop_001",
          shopName: "Fashion Forever",
          items: [
            {
              id: "cl_001",
              name: "Winter Jacket",
              price: 178.00,
              inventoryCount: 25,
              status: "in_stock",
              variants: ["S", "M", "L", "XL"]
            },
            {
              id: "cl_002",
              name: "Summer Dress",
              price: 89.00,
              inventoryCount: 15,
              status: "low_stock",
              variants: ["S", "M", "L"]
            }
          ],
          totalItems: 45
        },
        {
          shopId: "shop_002",
          shopName: "Trendy Threads",
          items: [
            {
              id: "cl_003",
              name: "Denim Jeans",
              price: 120.00,
              inventoryCount: 30,
              status: "in_stock",
              variants: ["28", "30", "32", "34"]
            }
          ],
          totalItems: 64
        }
      ]
    },
    shoes: {
      displayName: "Shoes",
      itemCount: 526,
      shops: [
        {
          shopId: "shop_003",
          shopName: "Footwear Hub",
          items: [
            {
              id: "sh_001",
              name: "Running Sneakers",
              price: 89.99,
              inventoryCount: 30,
              status: "in_stock",
              variants: {
                sizes: ["US 6", "US 7", "US 8", "US 9"],
                colors: ["Blue", "Black", "White"]
              }
            }
          ],
          totalItems: 126
        }
      ]
    },
    bags: {
      displayName: "Bags",
      itemCount: 87,
      shops: [
        {
          shopId: "shop_004",
          shopName: "Bag Boutique",
          items: [
            {
              id: "bg_001",
              name: "Leather Tote",
              price: 135.00,
              inventoryCount: 15,
              status: "low_stock",
              variants: {
                colors: ["Brown", "Black", "Tan"]
              }
            }
          ],
          totalItems: 32
        }
      ]
    },
    lingerie: {
      displayName: "Lingerie",
      itemCount: 218,
      shops: [
        {
          shopId: "shop_005",
          shopName: "Night wear",
          items: [
            {
              id: "ln_001",
              name: "Silk Robe",
              price: 68.00,
              inventoryCount: 20,
              status: "in_stock",
              variants: {
                sizes: ["S", "M", "L"],
                colors: ["Pink", "Black", "White"]
              }
            }
          ],
          totalItems: 54
        }
      ]
    }
  };
  
  export default categoryData;


  // data/services.js
export const servicesData = [
    {
      id: 1,
      title: 'Home Cleaning',
      image: '/images/wash.jpg',
      status: 'Live'
    },
    {
      id: 2,
      title: 'hair',
      image: '/images/hair.jpg'
    },
    {
      id: 3,
      title: 'Manicure',
      image: '/images/nails.jpg'
    },
    {
      id: 4,
      title: 'Phone Repair',
      image: '/images/phone.jpg'
    }
  ];

  
// data/recentlyViewed.js
export const recentlyViewedData = 
  [
   {
    id: 1,
    image: '/images/mirror.jpg'
   },
   {
    id: 2,
    image: '/images/nails.jpg'
   } , {
    id: 3,
    image: '/images/cosmetics.jpg'
   }
  ]

  