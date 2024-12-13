import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const Wallet = ({ isDarkMode }) => {
  const doughnutData = {
    labels: ['Income', 'Expense', 'Unknown'],
    datasets: [
      {
        data: [30, 46, 10],
        backgroundColor: ['#10B981', '#EF4444', '#6B7280'],
        borderWidth: 0,
      },
    ],
  };

  const lineData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Income',
        data: [10, 20, 15, 30, 25, 35, 40],
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Expense',
        data: [20, 15, 25, 20, 30, 25, 35],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const containerClass = isDarkMode
    ? 'bg-gray-900 text-gray-100'
    : 'bg-gray-100 text-gray-900';

  const cardClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textMutedClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const textSuccessClass = isDarkMode ? 'text-green-500' : 'text-green-600';
  const progressBarClass = isDarkMode ? 'bg-gray-700' : 'bg-gray-300';
  const avatarClass = isDarkMode ? 'bg-gray-600' : 'bg-gray-200';

  return (
    <>
      <div className={`h-screen p-5 flex space-x-5 ${containerClass}`}>
        <div className={`${cardClass} flex-1 p-5 rounded-lg shadow-md`}>
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className={`text-sm ${textMutedClass}`}>Main Balance</p>
              <h1 className="text-3xl font-bold">$673,412.66</h1>
            </div>
            <FiMoreVertical className={textMutedClass} />
          </div>

          <div className={`${progressBarClass} h-2 rounded-full mb-5`}>
            <div className="bg-green-500 h-full rounded-full w-3/5"></div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className={`text-sm ${textMutedClass} mb-2`}>
                Earning Category
              </p>
              <Doughnut data={doughnutData} />
            </div>

            <div>
              <Line data={lineData} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        <div className={`${cardClass} w-1/3 p-5 rounded-lg shadow-md`}>
          <div className="mb-5">
            <p className={`text-sm ${textMutedClass}`}>Wallet Balance</p>
            <h1 className="text-3xl font-bold">$824,571.93</h1>
            <p className={`text-sm ${textSuccessClass}`}>
              +0.8% than last week
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <button className="bg-blue-500 text-white py-3 rounded-lg font-medium">
              Top Up
            </button>
            <button className="bg-green-500 text-white py-3 rounded-lg font-medium">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <div
        className={`flex space-x-5 mt-5 m-5 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <div className={`${cardClass} flex-1 p-5 rounded-lg shadow-md`}>
          <h2 className="text-lg font-bold mb-3">Payment History</h2>
          <p className={`text-sm ${textMutedClass} mb-5`}>
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="space-y-3">
            {[
              'Peterdraw',
              'Olivia Brownlee',
              'Angela Moss',
              'XYZ Store ID',
              'Peter Parkur',
            ].map((name, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  index === 1 ? progressBarClass : cardClass
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 ${avatarClass} rounded-full`}
                  ></div>
                  <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className={`text-xs ${textMutedClass}`}>Online Shop</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">+$5,553</p>
                  <p className={`text-xs ${textMutedClass}`}>MasterCard 404</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${cardClass} w-1/3 p-5 rounded-lg shadow-md`}>
          <h2 className="text-lg font-bold mb-3">Invoices Sent</h2>
          <p className={`text-sm ${textMutedClass} mb-5`}>
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="space-y-3">
            {[
              'Stevan Story',
              'David Ignis',
              'Olivia Johanson',
              'Melanie Wong',
              'Roberto',
            ].map((name, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 ${avatarClass} rounded-full`}
                  ></div>
                  <p className="text-sm font-medium">{name}</p>
                </div>
                <p className="text-sm font-medium">
                  ${Math.floor(Math.random() * 1000)}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full bg-blue-500 text-white py-3 rounded-lg font-medium">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Wallet;
