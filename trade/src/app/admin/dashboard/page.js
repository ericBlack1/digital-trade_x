'use client'
import React from 'react';
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  ShoppingCart,
  Users,
  DollarSign,
  User,
  ChevronDown,
  Search,
  Bell,
  MessageSquare,
  Settings,
  MoreHorizontal,
  Edit,
  Trash
} from 'lucide-react';

// Sample data
const statisticsData = Array(12).fill().map((_, i) => ({
  name: `Month ${i + 1}`,
  revenue: Math.floor(Math.random() * 5000) + 2000,
  sales: Math.floor(Math.random() * 3000) + 1000,
}));

const expensesData = [
  { name: 'Google Ads', value: 10000, color: '#FF6B6B' },
  { name: 'Facebook Ads', value: 10000, color: '#4ECDC4' },
  { name: 'Shipping', value: 10000, color: '#FFD93D' },
  { name: 'Entertainment', value: 10000, color: '#6C5CE7' },
];

const orders = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      productName: "Product Name 1",
      category: "Category 1",
      customerName: "John Doe",
      price: "$299.00",
      status: "Delivered",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      productName: "Product Name 2",
      category: "Category 2",
      customerName: "Jane Smith",
      price: "$149.00",
      status: "Pending",
    },
    // Add more orders as needed
  ];
  

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <StatCard
            icon={<ShoppingCart className="w-6 h-6 text-blue-500" />}
            title="Revenue"
            value="$75,000"
            change="+16%"
            period="since last month"
          />
          <StatCard
            icon={<Users className="w-6 h-6 text-green-500" />}
            title="Orders"
            value="31,500"
            change="+12%"
            period="since last month"
          />
          <StatCard
            icon={<DollarSign className="w-6 h-6 text-yellow-500" />}
            title="Balance"
            value="$51,250"
            change="+15%"
            period="since last month"
          />
          <StatCard
            icon={<User className="w-6 h-6 text-purple-500" />}
            title="Customers"
            value="11,300"
            change="+18%"
            period="since last month"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Target Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Target</h2>
              <span className="text-sm text-gray-700">Revenue Target</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={statisticsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Statistics Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Statistics</h2>
              <span className="text-sm text-gray-700">Income and Expenses</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statisticsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#2563eb" />
                  <Bar dataKey="sales" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expenses Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">All Expenses</h2>
              <span className="text-sm text-gray-700">${expensesData.reduce((acc, curr) => acc + curr.value, 0)}</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expensesData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                  >
                    {expensesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {expensesData.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">${item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <OrderTable/>
        </div>
      </main>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, title, value, change, period }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-700 text-sm">{title}</p>
          <h3 className="text-2xl text-blue-950 font-semibold mt-1">{value}</h3>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="mt-4">
        <span className="text-green-500 text-sm font-medium">{change}</span>
        <span className="text-gray-700 text-sm ml-1">{period}</span>
      </div>
    </div>
  );
};

const OrderTable = () => (
    <div className="bg-white p-6 rounded-lg shadow overflow-x-auto text-nowrap">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-blue-950">Recent Orders</h2>
        <span className="text-sm text-blue-500">View All</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-600">
              <th className="pb-4">Product</th>
              <th className="pb-4">Customer</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="py-4">
                  <div className="flex items-center">
                    <img src={order.image} className="w-10 h-10 rounded-lg mr-3" alt={order.productName} />
                    <div>
                      <div className="font-medium">{order.productName}</div>
                      <div className="text-gray-500">{order.category}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">{order.customerName}</td>
                <td className="py-4">{order.price}</td>
                <td className="py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Trash className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

export default Dashboard;