import React from 'react';
import { FaEye, FaEdit, FaTrash, FaCopy } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Foods = () => {
  const menuItems = Array.from({ length: 10 }, (_, i) => ({
    name: `Menu Item ${i + 1}`,
    category: `Category ${i + 1}`,
    image: 'https://via.placeholder.com/150',
  }));

  const chartData = [
    { label: 'Burger', value: 75, color: '#4CAF50' },
    { label: 'Pizza', value: 32, color: '#F44336' },
    { label: 'Soft Drink', value: 67, color: '#FFEB3B' },
  ];

  const doughnutData = (value, color) => ({
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, '#E0E0E0'],
        borderWidth: 0,
      },
    ],
  });

  const doughnutOptions = {
    cutout: '75%',
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
      <div className="flex justify-between items-center mb-8 py-4 px-6 rounded-lg bg-gray-100 dark:bg-gray-800">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Foods
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Here is your menus summary with graph view
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
            />
            <svg
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>

          <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600">
            + New Menu
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {item.category}
              </p>
              <div className="flex justify-around">
                <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600">
                  <FaEye />
                </button>
                <button className="flex items-center bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-yellow-600">
                  <FaEdit />
                </button>
                <button className="flex items-center bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600">
                  <FaTrash />
                </button>
                <button className="flex items-center bg-gray-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600">
                  <FaCopy />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing 15 from 100 Menu
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-2 py-1 rounded-md bg-white dark:bg-gray-700 shadow hover:shadow-md">
            &laquo;
          </button>
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={`px-3 py-1 rounded-md ${
                num === 1
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  : 'bg-white dark:bg-gray-700 shadow hover:shadow-md'
              }`}
            >
              {num}
            </button>
          ))}
          <button className="px-2 py-1 rounded-md bg-white dark:bg-gray-700 shadow hover:shadow-md">
            &raquo;
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Menu Comparison
          </h2>
          <div className="flex items-center gap-4">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                className="form-checkbox rounded text-gray-600 dark:bg-gray-700 mr-2"
              />
              Chart
            </label>
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                className="form-checkbox rounded text-green-500 dark:bg-gray-700 mr-2"
                checked
              />
              Show Value
            </label>
          </div>
        </div>
        <div className="flex justify-around">
          {chartData.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <Doughnut
                  data={doughnutData(data.value, data.color)}
                  options={doughnutOptions}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {data.value}%
                  </span>
                </div>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;
