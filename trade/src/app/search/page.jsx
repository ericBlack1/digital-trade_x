"use client";
import React, { useState } from "react";
import { Camera, X } from "lucide-react";
import Image from "next/image";

// Main wrapper component to handle navigation
const ShopNavigator = () => {
  const [currentView, setCurrentView] = useState("search");
  const [selectedShop, setSelectedShop] = useState(null);

  const handleShopSelect = (shop) => {
    setSelectedShop(shop);
    setCurrentView("shop");
  };

  const handleBackToSearch = () => {
    setCurrentView("search");
    setSelectedShop(null);
  };

  return (
    <div className="bg-white w-full h-full md:h-screen mx-auto p-4">
      {currentView === "search" ? (
        <SearchView onShopSelect={handleShopSelect} />
      ) : (
        <ShopView shop={selectedShop} onBack={handleBackToSearch} />
      )}
    </div>
  );
};

// Search view component
const SearchView = ({ onShopSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory] = useState([
    "Socks",
    "Red Dress",
    "Sunglasses",
    "Mustard Pants",
    "80-s Skirt",
  ]);

  const [recommendations] = useState([
    "Skirt",
    "Accessories",
    "Black T-Shirt",
    "Jeans",
    "White Shoes",
  ]);

  const [shops] = useState([
    //1 Fashion
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
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1464961579/photo/african-woman-in-portrait-with-face-painting-and-headdress.webp?a=1&b=1&s=612x612&w=0&k=20&c=BhoyKFxKKiMjd7dH7ppZug7xoF_JYhDPdFoi3-hq-2M=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/911756438/photo/beautiful-african-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=2RVpS0l4sZfA8O731mt-2pB8uksiNS-POuFZ7vGknhQ=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://plus.unsplash.com/premium_photo-1668665110887-9f7e932dddeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFmcmljYW4lMjBjbG90aGVzfGVufDB8fDB8fHww",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1504218531034-0914083ad68d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjBjbG90aGVzfGVufDB8fDB8fHww",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjBjbG90aGVzfGVufDB8fDB8fHww",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //2 Phones
    {
      id: 2,
      name: "Leonard iPhones",
      preview:
        "https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1711967299865-c88350fddb70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1628489481436-e8cb20576a9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1606293459209-958d5c67c84b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZXN8ZW58MHx8MHx8fDA%3D",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZXN8ZW58MHx8MHx8fDA%3D",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1597664607810-e59e0318e775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1731402068/photo/smartphone-with-a-blank-screen-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=w5Z5fEQTo0sU6LH1mjXCuPtFHjsS30Qg9hxEd3dX-vw=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //3 Wigs
    {
      id: 3,
      name: "Dina's Wigs",
      preview:
        "https://media.istockphoto.com/id/2158608230/photo/portrait-of-young-woman-with-middle-length-blonde-straight-hair-dressed-in-a-delicate-evening.webp?a=1&b=1&s=612x612&w=0&k=20&c=OKrfBsRsZikIEPEw7wCuBJGygCQSl5Agd4kX_z1yEMI=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1816354006/photo/natural-looking-blonde-wig-on-white-mannequin-head-long-hair-on-the-plastic-wig-holder.webp?a=1&b=1&s=612x612&w=0&k=20&c=dCynAuviDAvWmsv0tEMdOLy8wrRk8Eo5taXBsjksVLI=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1816330819/photo/natural-looking-dark-brunet-wig-on-white-mannequin-head-middle-length-brown-hair-on-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=VO1pYMoIm0MswSpZQU8r83BnzZH4Qe8bb9rrGzn0AhQ=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/2060355304/photo/multi-colored-wigs-are-worn-on-the-heads-of-mannequins.webp?a=1&b=1&s=612x612&w=0&k=20&c=W-ljSBpoQGI1H6l6kxTdxYahC_Tu9k_kDB_jfymjv8g=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1872774126/photo/wig-with-straight-brown-and-slightly-long-hair.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZTs-pf36aAJ4LDdZDUAT48d7jCBTmfDrJHIIbW0Mu6o=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1816353467/photo/natural-looking-blonde-fair-wig-on-white-mannequin-head-short-hair-cut-on-the-plastic-wig.webp?a=1&b=1&s=612x612&w=0&k=20&c=vtaMxPJTKjUk8RO7py9nVNhAcXXWPgHWlg1kw-oyh30=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //4 Watches
    {
      id: 5,
      name: "Basil's Watches",
      preview:
        "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1455651512878-0ddbb4c4d0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1507679622673-989605832e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/photo-1554151447-b9d2197448f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://images.unsplash.com/photo-1516461240763-822a87484851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //5 Electonics
    {
      id: 5,
      name: "Emmanuel's Electronis",
      preview:
        "https://media.istockphoto.com/id/1689098415/photo/microchip-semiconductor-macrophotography-on-motherboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=thFCbg0qixo_ow6GrE1QA0Uy5cefzMxf2Y0sjpK7Jeg=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //6 Beauty Products
    {
      id: 6,
      name: "Clara's Beauty Shop",
      preview:
        "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ql3p5GHtPm33_C5mDIz4P0BJ3ya2I9Rj8w6rcZw9Av0=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //7 Sara's Food
    {
      id: 7,
      name: "Sara's Food",
      preview:
        "https://media.istockphoto.com/id/1399461342/photo/cameroonian-food-fufu-eru-and-garri.webp?a=1&b=1&s=612x612&w=0&k=20&c=BRsVY1aa2GVMkZLlTvb_YNgWuPZsd58T29SZ4duNkpw=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //8 Household Equipments
    {
      id: 8,
      name: "Jacob's Household",
      preview:
        "https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=mZGkkHCqKVeoEzs66Lj7FRLDa1YosxsGeeBHsnv9cBU=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //9 Dora's Bags
    {
      id: 9,
      name: "Dora's Bags",
      preview:
        "https://media.istockphoto.com/id/1553810014/photo/stylish-womens-handbag-a-fashionable-female-pink-luxury-handbag-isolated-on-white-fashionable.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z_hldp9bzxIl2hfKWG6g6MnTEXcADzDnQ-8VwIerSf0=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    //10 Ivo Tech
    {
      id: 10,
      name: "Ivo Tech",
      preview:
        "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIZaVsQl6mMcOPgyPrVm8ZlCSBwKdwWju4TTnM7BM4Q=",
      description: "Lorem ipsum dolor sit amet consectetur",
      price: 125.0,
      products: [
        {
          id: 1,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 2,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 3,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 4,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 5,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 17.0,
          description: "Lorem ipsum dolor sit",
        },
        {
          id: 6,
          image:
            "https://media.istockphoto.com/id/1499424212/photo/charming-elegant-lady-with-perfect-wavy-hair-sits-in-summer-dress-isolated-on-beige.jpg?s=2048x2048&w=is&k=20&c=KB148pplH0KnSwr_sSnrNBMyHy_jtGHu2LPhaNOl_xA=",
          price: 47.0,
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    // Add more shops here
  ]);

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="w-full p-3 pr-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Camera size={20} />
          </button>
        </div>
      </div>

      {/* Search History */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Search history</h2>
        <div className="flex flex-wrap gap-2">
          {searchHistory.map((term, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Recommendations</h2>
        <div className="flex flex-wrap gap-2">
          {recommendations.map((term, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Discover Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Discover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onShopSelect(shop)}
            >
              <img
                src={shop.preview}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h1 className="text-2xl font-bold ">{shop.name} </h1>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {shop.description}
                </p>
                <p className="text-sm font-bold mt-1">
                  FCFA {shop.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Shop view component
const ShopView = ({ shop, onBack }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Shop</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
          >
            <span className="bg-blue-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
              Socks <X size={14} />
            </span>
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Camera size={20} />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shop?.products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={product.image}
              alt={product.description}
              className="w-full aspect-square object-cover"
            />
            <div className="p-3">
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-semibold mt-1">
                FCFA {product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopNavigator;
