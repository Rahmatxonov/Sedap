import React from 'react';
import { FaBell, FaEnvelope, FaShoppingCart, FaCog } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

const Panel = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2 w-1/2">
        <input
          type="text"
          placeholder="Search here"
          className="outline-none w-full text-sm text-gray-700"
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
      <div className="flex items-center space-x-2">
        <span className="text-gray-700 text-sm">
          Hello, <span className="font-semibold">User</span>
        </span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OD1jGOrDGvKMyPnUg2OK7UZD6sejCvRkPg&s"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Panel;
