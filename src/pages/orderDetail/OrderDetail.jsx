import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import items from "./itemsGeneric";
import { CiStar } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineLocalPhone } from "react-icons/md";

const OrderDetail = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-barlow text-[32px] leading-[38.4px] font-semibold">
            Order ID #6515654
          </span>
          <span className="flex font-barlow font-medium text-[18px] leading-[21.6px] pt-1">
            <p className="text-green-500">Order/</p>
            <p>Order Details</p>
          </span>
        </div>
        <div className="flex font-barlow font-medium gap-3">
          <button className="border px-6 py-2 text-red-600 border-red-600 rounded-xl">
            Cancel Order
          </button>
          <button className="flex items-center gap-2 border px-3 py-2 text-white bg-[#01B075] rounded-xl">
            <TbTruckDelivery />
            On Delivery
            <IoIosArrowDown />
          </button>
        </div>
      </div>

      <div className="mt-5 flex gap-4 ">
        <div className="max-w-[30%] flex-1">
          <div>
            <div className="flex flex-col items-center rounded-xl rounded-b-none bg-white text-center py-6">
              <img
                className="max-w-[120px] rounded-full"
                src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png"
                alt="#img_user"
              />
              <p className="my-2">user name</p>
              <button>send</button>
            </div>
            <div className="bg-[#5E6B96] text-white relative top-[-10px] rounded-xl rounded-b-none py-4 px-5">
              <span className="font-barlow">Note Order</span>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                laboriosam fugiat sunt aperiam laudantium dignissimos quaerat
                cumque pariatur minima magnam.
              </p>
            </div>
            <div className="bg-[#2C9DD9] gap-4 rounded-xl flex items-center relative px-5 py-5 bottom-[20px]">
              <div className="rounded-full p-3 flex items-center justify-center bg-white">
                <TbTruckDelivery className="text-[30px] text-blue-500" />
              </div>
              <div className="text-white">
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="  rounded-xl bg-white border h-max">
            {/* delivery */}
          </div>
        </div>

        <div className="flex-[2] max-w-[70%] ">
          <table className="table-auto w-full overflow-hidden rounded-xl">
            <thead className="text-white bg-[#01B075]">
              <tr className="rounded-xl">
                <th className="text-left px-4 py-2">Items</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="bg-white  ">
              {items.map((item, index) => (
                <tr key={index} className="border-b ">
                  <td className="flex gap-4 px-4 py-3">
                    <div>
                      <img
                        className="rounded-xl object-cover w-16 h-16"
                        src={item?.img}
                        alt="#img"
                      />
                    </div>
                    <div>
                      <span className="text-gray-500">MAIN COURSE</span>
                      <p className="font-semibold">{item?.food_name}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <div className="flex">
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                        </div>
                        <p className="ml-2">(454 reviews)</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center px-4 py-3">{`${item?.quantity}x`}</td>
                  <td className="text-center px-4 py-3">{`${item?.price}$`}</td>
                  <td className="text-center px-4 py-3">{`${item?.total_price}$`}</td>
                  <td className="text-center px-4 py-3">
                    <button>
                      <TiDeleteOutline className="text-red-500 text-[25px]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="my-5 font-barlow bg-white p-3 rounded-xl ">
            <div className="h-[200px]"></div>
            <div>
              <span>Delivery by </span>
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <img
                    className="max-w-[60px] rounded-full"
                    src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png"
                    alt=""
                  />
                  <div>
                    <p>Kevin Hobs Jr</p>
                    <p className="text-[12px]">ID-412455</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex gap-3 items-center px-6 py-2 border border-[#288EC7] rounded-xl">
                    <MdOutlineLocalPhone className="text-[45px] bg-[#DFF0FA] p-2 rounded-xl text-[#288EC7]" />
                    <div className="text-left">
                      <p>Telephon</p>
                      <p>+12 345 5454 54</p>
                    </div>
                  </button>
                  <button className="flex gap-3 items-center px-6 py-2 border border-[#288EC7] rounded-xl">
                    <TbTruckDelivery className="text-[45px] bg-[#DFF0FA] p-2 rounded-xl text-[#288EC7]" />
                    <div className="text-left">
                      <p>Deliver Time</p>
                      <p>12:52</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
