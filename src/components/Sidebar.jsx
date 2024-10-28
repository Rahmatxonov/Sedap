import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { VscListFlat } from 'react-icons/vsc';
import { CiFileOn } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { GoPencil } from 'react-icons/go';
import { BsCup } from 'react-icons/bs';
import { LuFileEdit } from 'react-icons/lu';
import { AiOutlineUser } from 'react-icons/ai';
import { CiCalendar } from 'react-icons/ci';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { CiWallet } from 'react-icons/ci';
import User from '../assets/icons/user.svg';
const Sidebar = () => {
  return (
    <div className="h-screen w-[320px] bg-white shadow-lg flex flex-col justify-between">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Sedap</h1>
        <p className="text-gray-400 text-sm mt-1">Modern Admin Dashboard</p>
      </div>
      <nav className="flex-1 px-6 space-y-3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <MdHomeFilled className="h-5 w-5 mr-2" /> Dashboard
        </NavLink>
        <NavLink
          to="/order-list"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <VscListFlat className="h-5 w-5 mr-2" />
          Order List
        </NavLink>
        <NavLink
          to="/order-detail"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <CiFileOn className="h-5 w-5 mr-2" />
          Order Detail
        </NavLink>
        <NavLink
          to="/customer"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <FiUsers className="h-5 w-5 mr-2" />
          Customer
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <TbBrandGoogleAnalytics className="h-5 w-5 mr-2" />
          Analytics
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <GoPencil className="h-5 w-5 mr-2" />
          Reviews
        </NavLink>
        <NavLink
          to="/foods"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <BsCup className="h-5 w-5 mr-2" />
          Foods
        </NavLink>
        <NavLink
          to="/food-detail"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <LuFileEdit className="h-5 w-5 mr-2" />
          Food Detail
        </NavLink>
        <NavLink
          to="/customer-detail"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <AiOutlineUser className="h-5 w-5 mr-2" />
          Customer Detail
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <CiCalendar className="h-5 w-5 mr-2" />
          Calendar
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <IoChatboxEllipsesOutline className="h-5 w-5 mr-2" />
          Chat
        </NavLink>
        <NavLink
          to="/wallet"
          className={({ isActive }) =>
            `flex items-center p-2 rounded-lg ${
              isActive
                ? 'text-green-500 bg-green-100 font-semibold'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-100'
            }`
          }
        >
          <CiWallet className="h-5 w-5 mr-2" />
          Wallet
        </NavLink>
      </nav>
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between bg-green-500 text-white p-4 rounded-lg mb-4">
          <div>
            <p>Please, organize your menus through button below!</p>
            <button className="mt-2 bg-white text-green-500 font-bold py-2 px-4 rounded-lg">
              +Add Menus
            </button>
          </div>
          <img src={User} alt="user" />
        </div>
        <p className="text-xs text-gray-400 text-center">
          Sedap Restaurant Admin Dashboard <br /> &copy; 2020 All Rights
          Reserved
        </p>
        <p className="text-center text-xs text-gray-400 mt-2">
          Made with <span className="text-red-500">❤️</span> by Peterdraw
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
