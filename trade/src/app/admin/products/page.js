'use client'
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Calendar, 
  SlidersHorizontal, 
  Eye, 
  Pencil, 
  Trash2,
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';
import { useRouter } from 'next/router';

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;
  const router = useRouter()

  // Sample data - replace with your actual data
  const products = [
    {
      id: '302012',
      name: 'Handmade Pouch',
      variants: 3,
      category: 'Bag & Pouch',
      stock: 10,
      price: 121.00,
      status: 'Low Stock',
      added: '29 Dec 2022',
      image: 'https://m.media-amazon.com/images/I/51kh1vgB9aL._AC_UL480_QL65_.jpg'
    },
    {
      id: '302013',
      name: 'Leather Wallet',
      variants: 2,
      category: 'Wallets',
      stock: 25,
      price: 75.50,
      status: 'In Stock',
      added: '15 Jan 2023',
      image: 'https://m.media-amazon.com/images/I/91w-z3hEn9L._AC_UL480_QL65_.jpg'
    },
    {
      id: '302014',
      name: 'Canvas Backpack',
      variants: 5,
      category: 'Bags',
      stock: 18,
      price: 89.99,
      status: 'In Stock',
      added: '22 Feb 2023',
      image: 'https://m.media-amazon.com/images/I/61sFu-oDQAL._AC_UL480_QL65_.jpg'
    },
    {
      id: '302015',
      name: 'Cotton Tote',
      variants: 4,
      category: 'Bag & Pouch',
      stock: 30,
      price: 45.00,
      status: 'In Stock',
      added: '10 Mar 2023',
      image: 'https://m.media-amazon.com/images/I/51b7v9aySiL._AC_UL480_QL65_.jpg'
    },
    {
      id: '302016',
      name: 'Lunch Box',
      variants: 1,
      category: 'Kitchenware',
      stock: 15,
      price: 28.75,
      status: 'In Stock',
      added: '18 Apr 2023',
      image: 'https://m.media-amazon.com/images/I/617bs4ICrPL._AC_UL480_QL65_.jpg'
    },
    {
      id: '302017',
      name: 'Ceramic Mug',
      variants: 3,
      category: 'Kitchenware',
      stock: 20,
      price: 15.99,
      status: 'In Stock',
      added: '05 May 2023',
      image: 'https://m.media-amazon.com/images/I/610fgmDhAFL._AC_UL480_QL65_.jpg'
    }
  ];

  // Filtered products based on search term
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [currentPage, filteredProducts, itemsPerPage]);

  const navigateToPage = (path) => {
    router.push(path);
  };

  return (
    <div className="bg-white p-6">
      {/* Header */}
      <div className="flex flex-col text-sm sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex gap-3 w-full justify-between">
          <button className="flex items-center gap-2 text-gray-600 px-3 py-2 border rounded-lg">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button onClick={()=>navigateToPage('/admin/products/add')} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
            + Add Product
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col text-sm sm:flex-row justify-between items-stretch sm:items-center mb-6 gap-4">
        <div className="relative text-gray-700">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search product..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-gray-600">
            <Calendar className="w-4 h-4" />
            Select Dates
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-gray-600">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-4 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Product</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600"></th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">SKU</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Category</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Stock</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Price</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Added</th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-nowrap">
            {currentItems.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                  </div>
                </td>
                <td className="p-4">
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.variants} Variants</div>
                  </div>
                </td>
                <td className="p-4 text-gray-600">{product.id}</td>
                <td className="p-4 text-gray-600">{product.category}</td>
                <td className="p-4 text-gray-600">{product.stock}</td>
                <td className="p-4 text-gray-900">${product.price.toFixed(2)}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs 
                    ${product.status === 'Published' ? 'bg-green-100 text-green-800' : 
                      product.status === 'Low Stock' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'}`}>
                    {product.status}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{product.added}</td>
                <td className="p-4">
                  <div className="flex gap-2 text-gray-500">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:text-red-400 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm mt-6">
        <div className="text-gray-600">
          Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 bg-gray-100 rounded-lg disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 bg-gray-100 rounded-lg disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
