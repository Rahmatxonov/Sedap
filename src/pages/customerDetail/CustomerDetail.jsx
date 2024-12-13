import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { SiMastercard } from 'react-icons/si';
import { MdOutlineMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaToolbox } from 'react-icons/fa';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CustomerDetail = ({ isDarkMode }) => {
  const chartData = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        label: 'Spaghetti',
        data: [69, 50, 72, 55, 62, 77, 763],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Pizza',
        data: [321, 240, 310, 275, 289, 341, 154],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Burger',
        data: [154, 200, 180, 190, 220, 250, 180],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Sprite',
        data: [154, 120, 140, 160, 190, 210, 154],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDarkMode ? '#fff' : '#000',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? '#fff' : '#000',
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? '#fff' : '#000',
        },
      },
    },
  };

  return (
    <div
      className={`min-h-screen p-8 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <h2 className="text-[26px] font-bold">Customer Detail</h2>
      <p className="pt-3 pb-10 text-gray-400">
        Here your Customer Detail Profile
      </p>
      <div
        className={`flex items-center justify-between p-6 rounded-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}
      >
        <div className="flex items-center space-x-4">
          <img
            src="path_to_image.jpg"
            alt="Customer"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-semibold">Eren Yeager</h1>
            <p
              className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              UX Designer
            </p>
            <p
              className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              St. Kings Road 57th, Garden Hills, Chelsea - London
            </p>
            <div className="flex space-x-4 mt-4">
              <span className="flex items-center space-x-3">
                <MdOutlineMessage className="text-blue-500" />
                <a
                  href="mailto:eren.yeager@mail.co.id"
                  className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}
                >
                  eren.yeager@mail.co.id
                </a>
              </span>
              <span className="flex items-center space-x-4">
                <FaPhoneAlt className="text-green-500" />
                <a
                  href="tel:+0123456789"
                  className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}
                >
                  +012 345 6789
                </a>
              </span>
              <span className="flex items-center space-x-4">
                <FaToolbox className="text-red-500" />
                <a
                  href="tel:+0123456789"
                  className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}
                >
                  Highspeed Studios
                </a>
              </span>
            </div>
          </div>
        </div>

        <div
          className={` p-6 rounded-lg w-64 ${
            isDarkMode
              ? 'bg-green-600 text-gray-200'
              : 'bg-green-600 text-gray-100'
          }`}
        >
          <h2 className="text-lg text-gray-300">Your Balance</h2>
          <p className="text-3xl font-semibold mt-2">$ 9,425</p>
          <div className="text-gray-300 mt-4">
            <p>2451 **** **** ****</p>
            <p>02/21</p>
          </div>
          <div className="flex items-center mt-4 justify-between">
            <span className="text-gray-300">Mastercard</span>
            <SiMastercard className="text-[40px]" />
          </div>
        </div>
      </div>

      <div
        className={`mt-8 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 ${
          isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
        }`}
      >
        <div>
          <h2 className="text-xl font-semibold mb-4">Most Ordered Food</h2>
          <div className="space-y-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={`path_to_food_image_${index}.jpg`}
                      alt="Food Item"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium">
                        Medium Spicy Spaghetti Italiano
                      </h3>
                      <p
                        className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        Serves 4 Persons | 24 mins
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">$12.56</p>
                </div>
              ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Most Liked Food</h2>
            <div className="flex space-x-2 bg-gray-800">
              <button
                className={`px-4 py-2 rounded-lg text-sm ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              >
                Weekly
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              >
                Daily
              </button>
            </div>
          </div>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
