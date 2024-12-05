import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import LineChart from "./food-detail-chart";
import { Rate } from "antd";

const FoodDetail = ({ isDarkMode }) => {
  const cardItems = [
    {
      name: "Johnny Ahmad ",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui?",
      img:
        "https://t4.ftcdn.net/jpg/06/78/09/75/360_F_678097580_mgsNEISedI7fngOwIipYtEU0T6SN8qKv.jpg",
    },
    {
      name: "Maria Vania ",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui?",
      img:
        "https://t4.ftcdn.net/jpg/06/78/09/75/360_F_678097580_mgsNEISedI7fngOwIipYtEU0T6SN8qKv.jpg",
    },
    {
      name: "Sarah Ahmad ",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, qui?",
      img:
        "https://t4.ftcdn.net/jpg/06/78/09/75/360_F_678097580_mgsNEISedI7fngOwIipYtEU0T6SN8qKv.jpg",
    },
  ];
  return (
    <div
      className={`${
        isDarkMode ? "dark:bg-gray-900" : "bg-gray-100"
      } p-6 min-h-screen`}
    >
      <div
        className={`flex justify-between items-center mb-8 ${
          isDarkMode ? "dark:bg-gray-900" : "bg-gray-100"
        } py-4 px-6 rounded-lg`}
      >
        <div>
          <h1
            className={`text-xl font-bold  ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Foods
          </h1>
          <p className="text-sm text-gray-500">
            Here is your menus summary with graph view
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className={`pl-10 pr-4 py-2 text-sm  border ${
                isDarkMode ? "dark:bg-gray-800" : "bg-white"
              } border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-300`}
            />
            <svg
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
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

          <div className="flex items-center space-x-2">
            <button
              className={`w-8 h-8 flex justify-center items-center ${
                isDarkMode ? "dark:bg-gray-800" : "bg-white"
              } border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="16"
                height="16"
                className="text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <button
              className={`w-8 h-8 flex justify-center items-center ${
                isDarkMode ? "dark:bg-gray-800" : " bg-white"
              } border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width="16"
                height="16"
                className="text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h8V3h4v7h8v4h-8v7h-4v-7H3v-4z"
                />
              </svg>
            </button>
          </div>

          <button className="bg-[#01B075] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600">
            + New Menu
          </button>
        </div>
      </div>
      <div className={"max-w-full gap-6 flex justify-between"}>
        <div
          className={`${
            isDarkMode ? "dark:bg-gray-800" : "bg-gray-100"
          } w-2/4 py-4 bg-white rounded-lg shadow-md shadow-offset-b-4`}
        >
          <div className="px-4 flex justify-between items-center ">
            <span
              className={`${
                isDarkMode ? "text-white" : ""
              }  font-barlow text-[20px] leading-[38.4px] font-semibold `}
            >
              Detail Menus
            </span>
            <p
              className={`${
                isDarkMode ? "text-white" : ""
              } font-barlow opacity-60 font-medium`}
            >
              Category:Food / <span className=" text-[#01B075]">Burger</span>
            </p>
          </div>
          <div className="my-5 gap-4 px-4 flex ">
            <div>
              <img
                className="rounded-lg  h-[200px] object-cover"
                src="https://cdn.pixabay.com/photo/2022/08/31/10/17/burger-7422970_640.jpg"
                alt=""
              />
            </div>
            <div>
              <span className="font-barlow flex items-center font-bold text-sm text-[#01B075]">
                <GoDotFill />
                Stock Available
              </span>
              <h2
                className={`${
                  isDarkMode ? "text-white" : ""
                } font-bold font-barlow text-[25px] leading-7 opacity-90`}
              >
                Burger Jumbo Special with Spicy
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-white" : ""
                } my-3 text-[13px] font-barlow opacity-60 font-semibold`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                tempore.
              </p>
              <div className="flex justify-between max-w-[270px] flex-wrap ">
                <button className="bg-[#01B075] font-barlow gap-2 rounded-lg text-white flex items-center py-1 px-3">
                  <CiCirclePlus className=" text-[30px]" />
                  Add Menu
                </button>
                <button
                  className={`${
                    isDarkMode ? "bg-[#17161E] text-white " : "bg-[#F3F2F7]"
                  } mt-2 xl:mt-0 font-barlow gap-2 rounded-lg text-black flex items-center py-1 px-7`}
                >
                  Edit Menu
                </button>
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-dashed border-gray-400 my-4" />
          <div>
            <div className=" px-4">
              <h2
                className={`${
                  isDarkMode ? "text-white" : ""
                } font-barlow text-[25px] font-semibold`}
              >
                Ingredients
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-white" : ""
                } my-2 text-[13px] font-barlow opacity-60 font-semibold`}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta, ab natus? Exercitationem, nam tempora sit ab odit
                reprehenderit facere distinctio.
              </p>
            </div>
            <hr className="border-t-2 border-dashed border-gray-400 my-4" />
            <div className=" px-4">
              <h2
                className={`${
                  isDarkMode ? "text-white" : ""
                } font-barlow text-[25px] font-semibold`}
              >
                Nutrition info
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-white" : ""
                } my-2 text-[13px] font-barlow opacity-60 font-semibold`}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Soluta, ab natus? Exercitationem, nam tempora sit ab odit
                reprehenderit facere distinctio.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`rounded-lg w-2/4  ${
            isDarkMode ? "dark:bg-gray-800" : "bg-white"
          } p-3 shadow-md shadow-offset-b-4`}
        >
          <LineChart />
        </div>
      </div>
      <div>
        <h1
          className={`font-barlow font-semibold text-[25px] py-5 ${
            isDarkMode ? "text-white" : "dark:text-gray-800"
          }`}
        >
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {cardItems?.map((item, index) => (
            <div
              className={`${
                isDarkMode ? "dark:bg-gray-800" : "bg-white"
              } rounded-lg px-5 py-3 shadow-md shadow-offset-b-4`}
              key={index}
            >
              <div
                className={`flex items-center font-barlow  gap-3 ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                <img
                  className="object-cover rounded-full w-[45px] h-[45px]"
                  src={item?.img}
                  alt="#"
                />
                <div>
                  <span className="font-semibold">{item?.name}</span>
                  <p className="text-[13px] opacity-60">1 hours ago</p>
                </div>
              </div>
              <p
                className={`font-barlow  opacity-55 text-[14px] leading-5 py-3  ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                {item?.comment}
              </p>
              <div className="text-yellow-500">
                <Rate allowHalf defaultValue={4.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
