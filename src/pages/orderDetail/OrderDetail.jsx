import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";

const OrderDetail = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center ">
        <div>
          <span className="font-barlow  text-[32px] leading-[38.4px] font-semibold">
            Order ID #6515654
          </span>
          <span className="flex font-barlow font-medium text-[18px] leading-[21.6px] pt-1">
            <p className="text-green-500 ">Order/</p>
            <p>Order Details</p>
          </span>
        </div>
        <div className="flex font-barlow font-medium  gap-3">
          <button className="border px-6 py-2 text-red-600  border-red-600 rounded-xl">
            Cancel Order
          </button>
          <button className=" flex  items-center gap-2 border px-3 py-2 text-white bg-green-600 rounded-xl">
            <TbTruckDelivery />
            On Delivery
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="max-w-[30%] ">
          <div className="flex flex-col items-center rounded-xl rounded-b-none  bg-white text-center py-6 ">
            <img
              className="max-w-[120px] rounded-full "
              src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png"
              alt="#img_user"
            />
            <p className="my-2">user name</p>
            <button>send</button>
          </div>
          <div className="bg-[#5E6B96] text-white relative top-[-10px] rounded-xl rounded-b-none py-4 px-5">
            <span className="font-barlow ">Note Order</span>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              laboriosam fugiat sunt aperiam laudantium dignissimos quaerat
              cumque pariatur minima magnam.
            </p>
          </div>
          <div className="bg-[#2C9DD9] gap-4 rounded-xl flex items-center relative px-5 py-5 bottom-[20px]">
            <div className=" rounded-full  p-3 flex items-center justify-center bg-white">
              <TbTruckDelivery className="text-[30px]  text-blue-500" />
            </div>
            <div className="text-white ">
              <p>Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
        <div className="max-w-[70%]"></div>
      </div>
    </div>
  );
};

export default OrderDetail;
