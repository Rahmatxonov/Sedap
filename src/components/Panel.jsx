import React, { useEffect } from 'react';
import {
  FaBell,
  FaEnvelope,
  FaShoppingCart,
  FaCog,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component

const Panel = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex">
      <Sidebar isDarkMode={isDarkMode} />

      <div className="flex-1">
        <div
          className={`flex items-center justify-between p-4 shadow-sm ${
            isDarkMode ? 'bg-gray-900' : 'bg-[#faf6ff]'
          } transition-colors duration-300`}
        >
          <div
            className={`flex items-center rounded-md shadow-md px-4 py-2 w-1/2 ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            }`}
          >
            <input
              type="text"
              placeholder="Search here"
              className={`outline-none w-full text-sm p-1 rounded-md  ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              } ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
            />
            <AiOutlineSearch className="text-gray-400 mr-2 w-[25px] h-[25px]" />
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <FaBell className="text-blue-500 text-lg" />
              <span className="absolute -top-1 -right-2 bg-blue-500 text-white rounded-full text-xs px-1">
                2
              </span>
            </div>
            <div className="relative">
              <FaEnvelope className="text-blue-400 text-lg" />
              <span className="absolute -top-1 -right-2 bg-blue-400 text-white rounded-full text-xs px-1">
                8
              </span>
            </div>
            <div className="relative">
              <FaShoppingCart className="text-blue-600 text-lg" />
              <span className="absolute -top-1 -right-2 bg-blue-600 text-white rounded-full text-xs px-1">
                5
              </span>
            </div>
            <div className="relative">
              <FaCog className="text-red-500 text-lg" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                18
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="text-xl">
              {isDarkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-500" />
              )}
            </button>
            <span
              className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              } text-sm`}
            >
              Hello, <span className="font-semibold">User</span>
            </span>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OD1jGOrDGvKMyPnUg2OK7UZD6sejCvRkPg&s"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
