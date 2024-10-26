'use client';
import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

// Sample data for the chart
const statisticsData = [
  { name: 'Jan', revenue: 1000 },
  { name: 'Feb', revenue: 2000 },
  { name: 'Mar', revenue: 1500 },
  { name: 'Apr', revenue: 2500 },
  { name: 'May', revenue: 3000 },
];

const BasicLineChart = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-900">Target</h2>
      <span className="text-sm text-gray-700">Revenue Target</span>
    </div>
    <div className="h-64">
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={statisticsData.map(data => data.name)}
          label="Months"
        />
        <VictoryAxis dependentAxis label="Revenue" />
        <VictoryLine
          data={statisticsData}
          x="name"
          y="revenue"
          style={{ data: { stroke: "#2563eb" } }}
        />
      </VictoryChart>
    </div>
  </div>
);

export default BasicLineChart;
