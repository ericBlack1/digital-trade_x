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
    title: "Home Hair Cut",
    image:
      "https://media.istockphoto.com/id/1373622602/photo/mother-doing-head-lice-cleaning-on-her-daughter-hair.webp?a=1&b=1&s=612x612&w=0&k=20&c=25Iv49HpcRUcSyZalU28bPySYFIBz2ZXCCJNmrVUmFk=",
    status: "Live",
  },
  {
    id: 2,
    title: "Home Cleaning",
    image:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Manicure",
    image:
      "https://images.pexels.com/photos/7755285/pexels-photo-7755285.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Phone Repairs",
    image:
      "https://images.pexels.com/photos/1388947/technology-telephone-mobile-smart-1388947.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// data/recentlyViewed.js
export const recentlyViewedData = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1071030302/photo/female-inventory-manager-shows-digital-tablet-information-to-a-worker-holding-cardboard-box.jpg?b=1&s=612x612&w=0&k=20&c=m7EaMINJWM7RRcdJfhT_H3AK-cTutHyi2jCyDd7YZ_Q=",
  },
];

// data/reviews.js
export const reviewsData = {
  cl_001: [
    {
      id: 1,
      username: "Sarah M.",
      rating: 4.5,
      comment: "Great quality, fits perfectly!",
      date: "2024-03-15",
    },
    {
      id: 2,
      username: "Mike R.",
      rating: 5,
      comment: "Excellent material and stitching",
      date: "2024-03-10",
    },
  ],
};

export const shops = [
  // 1. Fashion
  {
    id: 1,
    name: "African Fashion Store",
    preview:
      "https://media.istockphoto.com/id/1408451530/photo/smiling-ghanaian-woman-wearing-elegant-traditional-clothing-in-a-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=Unban500eUd8K1XIaoPN_KrB9UuSV9CpqKHE7cRGKRI=",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://media.istockphoto.com/id/483232645/photo/african-fabrics-from-ghana-west-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q7qKZ90DG9jawdE46858JJGyLTRxtVlHKs_9PC30AaM=",
        price: 17.0,
        description: "Elegant African fabric",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1630573989540-371ae483d179?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
        price: 25.0,
        description: "Traditional African dress",
      },
      {
        id: 3,
        image:
          "https://media.istockphoto.com/id/1387371971/photo/shot-of-a-beautiful-young-traditional-woman-posing-outside.webp?a=1&b=1&s=612x612&w=0&k=20&c=9S6MZP-0HxtxXyD4B4Q0BtZGbSZ05wEcgVd4ZpZJu2M=",
        price: 12.0,
        description: "Handmade African earrings",
      },
    ],
  },

  // 2. Phones
  {
    id: 2,
    name: "Leonard iPhones",
    preview:
      "https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?w=500&auto=format&fit=crop&q=60",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 999.0,
        description: "iPhone 13 Pro",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/6608247/pexels-photo-6608247.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 799.0,
        description: "iPhone 12",
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/8156983/pexels-photo-8156983.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 699.0,
        description: "iPhone SE",
      },
    ],
  },

  // 3. Wigs
  {
    id: 3,
    name: "Dina's Wigs",
    preview:
      "https://media.istockphoto.com/id/2066190279/photo/multi-colored-wigs-are-worn-on-the-heads-of-mannequins.webp?a=1&b=1&s=612x612&w=0&k=20&c=1cLOBPGtsgLCCmqWeI-lRnK4X4kc-d__mcyrk7-G6xs=",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://media.istockphoto.com/id/992352602/photo/mannequins-wearing-colorful-wigs-in-window-of-wig-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=tQMn7zEPyxjThTVrj8guCjwVARscHoYZEFIJoX1HBLQ=",
        price: 45.0,
        description: "Blonde curly wig",
      },
      {
        id: 2,
        image:
          "https://media.istockphoto.com/id/1816330306/photo/natural-looking-blonde-fair-wig-on-white-mannequin-head-short-hair-cut-on-the-plastic-wig.webp?a=1&b=1&s=612x612&w=0&k=20&c=FLtCpvM0e3Z9dHuLb4tBspwTIa-4m_HrwgVEO5Tokbo=",
        price: 50.0,
        description: "Long brown wig",
      },
      {
        id: 3,
        image:
          "https://media.istockphoto.com/id/1730720085/photo/a-wig-on-a-mannequin.webp?a=1&b=1&s=612x612&w=0&k=20&c=lra0e2LfM-dWzn1tcPuEdw7lkMk9lVWd3U_y9kXSjlk=",
        price: 40.0,
        description: "Short black wig",
      },
    ],
  },

  // 4. Watches
  {
    id: 4,
    name: "Basil's Watches",
    preview:
      "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 70.0,
        description: "Classic leather watch",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 120.0,
        description: "Luxury gold watch",
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 80.0,
        description: "Smartwatch",
      },
    ],
  },

  // 5. Electronics
  {
    id: 5,
    name: "Emmanuel's Electronics",
    preview:
      "https://images.pexels.com/photos/159220/printed-circuit-board-print-plate-via-macro-159220.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 300.0,
        description: "Digital camera",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 1000.0,
        description: "High-performance laptop",
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 500.0,
        description: "Flat screen TV",
      },
    ],
  },

  // 6. Beauty Products
  {
    id: 6,
    name: "Clara's Beauty Shop",
    preview:
      "https://images.pexels.com/photos/212236/pexels-photo-212236.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/9253766/pexels-photo-9253766.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 20.0,
        description: "Facial cleanser",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 15.0,
        description: "Lipstick",
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/7607279/pexels-photo-7607279.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 25.0,
        description: "Skin moisturizer",
      },
    ],
  },

  // 7. Food
  {
    id: 7,
    name: "Sara's Food",
    preview:
      "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 10.0,
        description: "Grilled chicken",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 12.0,
        description: "Italian pasta",
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 8.0,
        description: "Fresh fruit salad",
      },
    ],
  },

  // 8. Household
  {
    id: 8,
    name: "Jacob's Household",
    preview:
      "https://media.istockphoto.com/id/1343791228/photo/working-at-home-concept-with-sewing-machine-and-other-sewing-equipments-on-the-table-in-the.jpg?b=1&s=612x612&w=0&k=20&c=WEo8Na19gBH9LGak53G_IKCb5GtyJX_D1trNvE_grZU=",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 150.0,
        description: "Vacuum cleaner",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 120.0,
        description: "Coffee machine",
      },
      {
        id: 3,
        image:
          "https://media.istockphoto.com/id/489937746/photo/microwave-stove-isolated.jpg?b=1&s=612x612&w=0&k=20&c=fgFbHqEzmJ0JL1SSjmk58RXCWceiffrm2T_BtEfAJ-4=",
        price: 90.0,
        description: "Microwave oven",
      },
    ],
  },

  // 9. Furniture
  {
    id: 9,
    name: "Samuel's Furniture",
    preview:
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/8135269/pexels-photo-8135269.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 400.0,
        description: "Modern sofa",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/4170038/pexels-photo-4170038.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 250.0,
        description: "Wooden dining table",
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/29109679/pexels-photo-29109679/free-photo-of-elegant-sunlit-dining-room-with-wooden-interiors.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 100.0,
        description: "Wooden shelf",
      },
    ],
  },

  // 10. Groceries
  {
    id: 10,
    name: "Patrick's Groceries",
    preview:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur",
    price: 125.0,
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 15.0,
        description: "Fresh vegetables",
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/8287393/pexels-photo-8287393.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 20.0,
        description: "Assorted dairy products",
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 12.0,
        description: "Seasonal fruits",
      },
      {
        id: 4,
        image:
          "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: 15.0,
        description: "Fresh vegetables",
      },
    ],
  },
];
