'use client'
import React from 'react';
import {motion} from 'framer-motion'
import CountUp from 'react-countup';
import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryPie,
  VictoryTooltip,
} from 'victory';
import {
  ShoppingCart,
  Users,
  DollarSign,
  User,
  Edit,
  Trash,
} from 'lucide-react';

// Sample data
const statisticsData = Array(12).fill().map((_, i) => ({
  name: `${i + 1}`,
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
            value="75000"
            change="+16%"
            period="since last month"
          />
          <StatCard
            icon={<Users className="w-6 h-6 text-green-500" />}
            title="Orders"
            value="31500"
            change="+12%"
            period="since last month"
          />
          <StatCard
            icon={<DollarSign className="w-6 h-6 text-yellow-500" />}
            title="Balance"
            value="51250"
            change="+15%"
            period="since last month"
          />
          <StatCard
            icon={<User className="w-6 h-6 text-purple-500" />}
            title="Customers"
            value="11300"
            change="+18%"
            period="since last month"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Target Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-blue-950">Target</h2>
              <span className="text-sm text-gray-700">Revenue Target</span>
            </div>
            <div className="h-64">
              <VictoryChart domainPadding={20}>
                <VictoryAxis />
                <VictoryAxis dependentAxis />
                <VictoryLine
                  data={statisticsData}
                  x="name"
                  y="revenue"
                  style={{ data: { stroke: "#2563eb" } }}
                   animate={{ duration: 1000, onLoad: { duration: 1000 } }}
                />
              </VictoryChart>
            </div>
          </div>

          {/* Statistics Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-blue-950">Statistics</h2>
              <span className="text-sm text-gray-700">Income and Expenses</span>
            </div>
            <div className="h-64">
              <VictoryChart>
                <VictoryAxis />
                <VictoryAxis dependentAxis />
                <VictoryBar
                  data={statisticsData}
                  x="name"
                  y="revenue"
                  style={{ data: { fill: "#2563eb" } }}
                   animate={{ duration: 1000, onLoad: { duration: 1000 } }}
                />
                <VictoryBar
                  data={statisticsData}
                  x="name"
                  y="sales"
                  style={{ data: { fill: "#10b981" } }}
                   animate={{ duration: 1000, onLoad: { duration: 1000 } }}
                />
              </VictoryChart>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expenses Chart */}
          <div className="bg-white p-6 rounded-lg shadow text-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-blue-950">All Expenses</h2>
              <span className="text-sm text-gray-700">${expensesData.reduce((acc, curr) => acc + curr.value, 0)}</span>
            </div>
            <div className="h-64">
              <ExpensesChart/>
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
          <OrderTable />
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
          <h3 className="text-2xl text-blue-950 font-semibold mt-1">
          <CountUp end={parseFloat(value)} duration={1.5} separator="," prefix="$" />
          </h3>
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
  <div className="bg-white p-6 rounded-lg shadow text-nowrap overflow-x-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-blue-950">Recent Orders</h2>
      <span className="text-sm text-blue-500">View All</span>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-600">
            <th className="pb-4">Product</th>
            <th className="pb-4"></th>
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
                  <img src={order.image} className="w-10 h-10 rounded" alt={order.productName} />
                </div>
              </td>
              <td className="py-4">{order.productName}</td>
              <td className="py-4">{order.customerName}</td>
              <td className="py-4">{order.price}</td>
              <td className="py-4">
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${order.status === 'Delivered' ? 'bg-green-200 text-green-600' : 'bg-yellow-200 text-yellow-600'}`}>
                  {order.status}
                </span>
              </td>
              <td className="py-4">
                <div className="flex space-x-2">
                  <Edit className="w-4 h-4 text-blue-600" />
                  <Trash className="w-4 h-4 text-red-600" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ExpensesChart = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="h-64"
    >
      <VictoryPie
        data={expensesData}
        x="name"
        y="value"
        colorScale={expensesData.map(item => item.color)}
        labels={({ datum }) => `${datum.name}: $${datum.value}`}
        labelComponent={<VictoryTooltip />}
        animate={{
          duration: 1500,
          easing: "cubicInOut",
          onLoad: { duration: 1500 },
        }}
      />
    </motion.div>
  );

export default Dashboard;
