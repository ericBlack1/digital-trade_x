'use client'
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  Search, 
  Calendar, 
  SlidersHorizontal, 
  Eye, 
  Pencil, 
  Trash2,
  ChevronLeft,
  ChevronRight,
  Download,
} from 'lucide-react';
import AdminSpinner from '@/components/admin/AdminSpinner';

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(new Set());
  const itemsPerPage = 10;

  // Fetch products with error handling and loading state
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const prods = data.filter(prod=>prod.storeID===localStorage.getItem('userID'))
        setProducts(prods);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Reset pagination when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(product => 
      product?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product?.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [currentPage, filteredProducts, itemsPerPage]);

  // Handle checkbox selection
  const handleSelectAll = useCallback((e) => {
    if (e.target.checked) {
      setSelectedProducts(new Set(currentItems.map(product => product.id)));
    } else {
      setSelectedProducts(new Set());
    }
  }, [currentItems]);

  const handleSelectProduct = useCallback((productId) => {
    setSelectedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  }, []);

  const setProductID = (id) => {
      localStorage.setItem('productID', id.toString());
  };

  // Handle product deletion
  const handleDeleteProduct = useCallback(async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      setProducts(prev => prev.filter(product => product.id !== productId));
      setSelectedProducts(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product. Please try again.');
    }
  }, []);

  // Export selected products
  const handleExport = useCallback(() => {
    const selectedData = products.filter(product => selectedProducts.has(product.id));
    const csv = convertToCSV(selectedData);
    downloadCSV(csv, 'products-export.csv');
  }, [products, selectedProducts]);

  if (loading) {
    return (
      <AdminSpinner/>
    );
  }

  if (error) {
    return (
      <div className="text-center p-6 text-red-500">
        <p>Error loading products: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6">
      {/* Header */}
      <div className="flex flex-col text-sm sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex gap-3 w-full justify-between">
          <button 
            className="flex items-center gap-2 text-gray-600 px-3 py-2 border rounded-lg disabled:opacity-50"
            onClick={handleExport}
            disabled={selectedProducts.size === 0}
          >
            <Download className="w-4 h-4" />
            Export ({selectedProducts.size})
          </button>
          <a href='/admin/products/add'>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              + Add Product
            </button>
          </a>
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
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            Select Dates
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
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
                <input 
                  type="checkbox" 
                  className="rounded"
                  checked={currentItems.length > 0 && currentItems.every(product => selectedProducts.has(product.id))}
                  onChange={handleSelectAll}
                />
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
                  <input 
                    type="checkbox" 
                    className="rounded"
                    checked={selectedProducts.has(product.id)}
                    onChange={() => handleSelectProduct(product.id)}
                  />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images?.[0] || '/placeholder-image.jpg'}
                      alt={product.name}
                      className="w-10 h-10 rounded-lg object-cover"
                      onError={(e) => {
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                  </div>
                </td>
                <td className="p-4">
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.variants || 0} Variants</div>
                  </div>
                </td>
                <td className="p-4 text-gray-600">{product.id}</td>
                <td className="p-4 text-gray-600">{product.category}</td>
                <td className="p-4 text-gray-600">{product.stock}</td>
                <td className="p-4 text-gray-900">{product.price}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs 
                    ${product.status === 'Published' ? 'bg-green-100 text-green-800' : 
                      product.status === 'Low Stock' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'}`}>
                    {product.status}
                  </span>
                </td>
                <td className="p-4 text-gray-600">{product.createdAt}</td>
                <td className="p-4">
                  <div className="flex gap-2 text-gray-500">
                    <button 
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => {
                        setProductID(product.id)
                        window.location.href = `/admin/product`}}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      className="p-1 hover:bg-gray-100 rounded"
                      // onClick={() => window.location.href = `/admin/products/edit/${product.id}`}
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button 
                      className="p-1 hover:text-red-400 rounded"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
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
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm mt-6 gap-4">
        <div className="text-gray-600">
          Showing {filteredProducts.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 bg-gray-100 rounded-lg disabled:opacity-50 hover:bg-gray-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="text-gray-600">
            Page {currentPage} of {totalPages || 1}
          </div>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-2 bg-gray-100 rounded-lg disabled:opacity-50 hover:bg-gray-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Utility functions for CSV export
const convertToCSV = (data) => {
  const headers = Object.keys(data[0]);
  const csv = [
    headers.join(','),
    ...data.map(row => headers.map(header => JSON.stringify(row[header])).join(','))
  ].join('\n');
  return csv;
};

const downloadCSV = (csv, filename) => {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default ProductTable;