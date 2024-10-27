// const categoryData = {
//     clothing: {
//       displayName: "Clothing",
//       itemCount: 109,
//       shops: [
//         {
//           shopId: "shop_001",
//           shopName: "Fashion Forever",
//           items: [
//             {
//               id: "cl_001",
//               name: "Winter Jacket",
//               price: 178.00,
//               inventoryCount: 25,
//               status: "in_stock",
//               variants: ["S", "M", "L", "XL"]
//             },
//             {
//               id: "cl_002",
//               name: "Summer Dress",
//               price: 89.00,
//               inventoryCount: 15,
//               status: "low_stock",
//               variants: ["S", "M", "L"]
//             }
//           ],
//           totalItems: 45
//         },
//         {
//           shopId: "shop_002",
//           shopName: "Trendy Threads",
//           items: [
//             {
//               id: "cl_003",
//               name: "Denim Jeans",
//               price: 120.00,
//               inventoryCount: 30,
//               status: "in_stock",
//               variants: ["28", "30", "32", "34"]
//             }
//           ],
//           totalItems: 64
//         }
//       ]
//     },
//     shoes: {
//       displayName: "Shoes",
//       itemCount: 526,
//       shops: [
//         {
//           shopId: "shop_003",
//           shopName: "Footwear Hub",
//           items: [
//             {
//               id: "sh_001",
//               name: "Running Sneakers",
//               price: 89.99,
//               inventoryCount: 30,
//               status: "in_stock",
//               variants: {
//                 sizes: ["US 6", "US 7", "US 8", "US 9"],
//                 colors: ["Blue", "Black", "White"]
//               }
//             }
//           ],
//           totalItems: 126
//         }
//       ]
//     },
//     bags: {
//       displayName: "Bags",
//       itemCount: 87,
//       shops: [
//         {
//           shopId: "shop_004",
//           shopName: "Bag Boutique",
//           items: [
//             {
//               id: "bg_001",
//               name: "Leather Tote",
//               price: 135.00,
//               inventoryCount: 15,
//               status: "low_stock",
//               variants: {
//                 colors: ["Brown", "Black", "Tan"]
//               }
//             }
//           ],
//           totalItems: 32
//         }
//       ]
//     },
//     electronics: {
//       displayName: "electronics",
//       itemCount: 218,
//       shops: [
//         {
//           shopId: "shop_005",
//           shopName: "Night wear",
//           items: [
//             {
//               id: "ln_001",
//               name: "Silk Robe",
//               price: 68.00,
//               inventoryCount: 20,
//               status: "in_stock",
//               variants: {
//                 sizes: ["S", "M", "L"],
//                 colors: ["Pink", "Black", "White"]
//               }
//             }
//           ],
//           totalItems: 54
//         }
//       ]
//     }
//   };
  
//   export default categoryData;


  // data/services.js
export const servicesData = [
    {
      id: 1,
      title: 'Home Cleaning',
      image: "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
      status: 'Live'
    },
    {
      id: 2,
      title: 'hair',
      image: "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
    },
    {
      id: 3,
      title: 'Manicure',
      image: "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
    },
    {
      id: 4,
      title: 'Phone Repair',
      image: "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
    }
  ];

  
// data/recentlyViewed.js
export const recentlyViewedData = 
  [
   {
    id: 1,
    image: "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
   },
   {
    id: 2,
    image: "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
   } , {
    id: 3,
    image: "https://media.istockphoto.com/id/1338720994/photo/middle-aged-mature-woman-with-blond-hair-wearing-sunglasses-walking-on-city-streets-while.webp?s=2048x2048&w=is&k=20&c=RLQV_a0umaXEM1UBdXvRVOmVrRIEN7q76VeBmo686iU=",
   }
  ]

  
// data/reviews.js
export const reviewsData = {
  cl_001: [
    {
      id: 1,
      username: "Sarah M.",
      rating: 4.5,
      comment: "Great quality, fits perfectly!",
      date: "2024-03-15"
    },
    {
      id: 2,
      username: "Mike R.",
      rating: 5,
      comment: "Excellent material and stitching",
      date: "2024-03-10"
    }
  ]
};

export const shops = [
  // 1. Fashion
  {
    id: 1,
    name: "African Fashion Store",
    preview: "https://media.istockphoto.com/id/1408451530/photo/smiling-ghanaian-woman-wearing-elegant-traditional-clothing-in-a-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=Unban500eUd8K1XIaoPN_KrB9UuSV9CpqKHE7cRGKRI=",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "",
        price: 17.0,
        description: "Elegant African fabric"
      },
      {
        id: 2,
        image:  "https://media.istockphoto.com/id/1408451530/photo/smiling-ghanaian-woman-wearing-elegant-traditional-clothing-in-a-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=Unban500eUd8K1XIaoPN_KrB9UuSV9CpqKHE7cRGKRI=",
        price: 25.0,
        description: "Traditional African dress"
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/1408451530/photo/african-style-earrings.webp",
        price: 12.0,
        description: "Handmade African earrings"
      }
    ]
  },

  // 2. Phones
  {
    id: 2,
    name: "Leonard iPhones",
    preview: "https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?w=500&auto=format&fit=crop&q=60",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1506629082955-511b1e2e3b98?w=500&auto=format&fit=crop&q=60",
        price: 999.0,
        description: "iPhone 13 Pro"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1536743649844-195a02e9bc8b?w=500&auto=format&fit=crop&q=60",
        price: 799.0,
        description: "iPhone 12"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1580800930198-66d6dbd5a295?w=500&auto=format&fit=crop&q=60",
        price: 699.0,
        description: "iPhone SE"
      }
    ]
  },

  // 3. Wigs
  {
    id: 3,
    name: "Dina's Wigs",
    preview: "https://media.istockphoto.com/id/2158608230/photo/portrait-of-young-woman-with-middle-length-blonde-straight-hair-dressed-in-a-delicate-evening.webp",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://media.istockphoto.com/id/1047751422/photo/blonde-wig.webp",
        price: 45.0,
        description: "Blonde curly wig"
      },
      {
        id: 2,
        image: "https://media.istockphoto.com/id/172146987/photo/long-brown-wig.webp",
        price: 50.0,
        description: "Long brown wig"
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/1392386670/photo/short-black-wig.webp",
        price: 40.0,
        description: "Short black wig"
      }
    ]
  },

  // 4. Watches
  {
    id: 4,
    name: "Basil's Watches",
    preview: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1521804906463-f8a2fa4fa1a2?w=500&auto=format&fit=crop&q=60",
        price: 70.0,
        description: "Classic leather watch"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9b?w=500&auto=format&fit=crop&q=60",
        price: 120.0,
        description: "Luxury gold watch"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1514913583176-f0b921c47cb4?w=500&auto=format&fit=crop&q=60",
        price: 80.0,
        description: "Smartwatch"
      }
    ]
  },

  // 5. Electronics
  {
    id: 5,
    name: "Emmanuel's Electronics",
    preview: "https://media.istockphoto.com/id/1689098415/photo/microchip-semiconductor-macrophotography-on-motherboard.webp",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://media.istockphoto.com/id/466842992/photo/digital-camera.webp",
        price: 300.0,
        description: "Digital camera"
      },
      {
        id: 2,
        image: "https://media.istockphoto.com/id/469840824/photo/laptop.webp",
        price: 1000.0,
        description: "High-performance laptop"
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/1043196994/photo/flat-screen-tv.webp",
        price: 500.0,
        description: "Flat screen TV"
      }
    ]
  },

  // 6. Beauty Products
  {
    id: 6,
    name: "Clara's Beauty Shop",
    preview: "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.webp",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://media.istockphoto.com/id/466533526/photo/facial-cleanser.webp",
        price: 20.0,
        description: "Facial cleanser"
      },
      {
        id: 2,
        image: "https://media.istockphoto.com/id/1162452805/photo/lipstick.webp",
        price: 15.0,
        description: "Red lipstick"
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/471850121/photo/skin-moisturizer.webp",
        price: 25.0,
        description: "Skin moisturizer"
      }
    ]
  },

  // 7. Food
  {
    id: 7,
    name: "Sara's Food",
    preview: "https://media.istockphoto.com/id/1399461342/photo/cameroonian-food-fufu-eru-and-garri.webp",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://media.istockphoto.com/id/1211233401/photo/grilled-chicken.webp",
        price: 10.0,
        description: "Grilled chicken"
      },
      {
        id: 2,
        image: "https://media.istockphoto.com/id/1250134354/photo/pasta-dish.webp",
        price: 12.0,
        description: "Italian pasta"
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/470482387/photo/fruit-salad.webp",
        price: 8.0,
        description: "Fresh fruit salad"
      }
    ]
  },

  // 8. Household
  {
    id: 8,
    name: "Jacob's Household",
    preview: "https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.webp",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://media.istockphoto.com/id/471847912/photo/vacuum-cleaner.webp",
        price: 150.0,
        description: "Vacuum cleaner"
      },
      {
        id: 2,
        image: "https://media.istockphoto.com/id/470486432/photo/coffee-machine.webp",
        price: 120.0,
        description: "Coffee machine"
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/1301970526/photo/microwave.webp",
        price: 90.0,
        description: "Microwave oven"
      }
    ]
  },

  // 9. Furniture
  {
    id: 9,
    name: "Samuel's Furniture",
    preview: "https://media.istockphoto.com/id/1305292227/photo/modern-living-room-furniture.webp",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://media.istockphoto.com/id/1266585183/photo/modern-sofa.webp",
        price: 400.0,
        description: "Modern sofa"
      },
      {
        id: 2,
        image: "https://media.istockphoto.com/id/1263658283/photo/dining-table.webp",
        price: 250.0,
        description: "Wooden dining table"
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/1285191116/photo/wooden-shelf.webp",
        price: 100.0,
        description: "Wooden shelf"
      }
    ]
  },

  // 10. Groceries
  {
    id: 10,
    name: "Patrick's Groceries",
    preview: "https://media.istockphoto.com/id/1267870631/photo/grocery-store.webp",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image: "https://media.istockphoto.com/id/1284080025/photo/vegetables.webp",
        price: 15.0,
        description: "Fresh vegetables"
      },
      {
        id: 2,
        image: "https://media.istockphoto.com/id/1364110123/photo/dairy-products.webp",
        price: 20.0,
        description: "Assorted dairy products"
      },
      {
        id: 3,
        image: "https://media.istockphoto.com/id/1315795001/photo/fruits.webp",
        price: 12.0,
        description: "Seasonal fruits"
      }
    ]
  }
];
