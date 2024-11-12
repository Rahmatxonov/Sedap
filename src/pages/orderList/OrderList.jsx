import React, { useState } from 'react';

const orders = [
  {
    id: '#565231',
    date: '28 March 2020',
    name: 'Mikasa Ackerman',
    location: 'Corner Street 5th London',
    amount: '$564.52',
    status: 'New Order',
  },
  {
    id: '#565232',
    date: '28 March 2020',
    name: 'Eren Yeager',
    location: "John's Road London 57",
    amount: '$824.62',
    status: 'On Delivery',
  },
  {
    id: '#565233',
    date: '28 March 2020',
    name: 'Grisha Yeager',
    location: '31 The Green London',
    amount: '$356.45',
    status: 'Delivered',
  },
  {
    id: '#565234',
    date: '28 March 2020',
    name: 'Historia Reiss',
    location: '11 Church Road London',
    amount: '$634.52',
    status: 'Delivered',
  },
  {
    id: '#565235',
    date: '28 March 2020',
    name: 'Levi Ackerman',
    location: '21 King Street London',
    amount: '$556.42',
    status: 'On Delivery',
  },
  {
    id: '#565236',
    date: '28 March 2020',
    name: 'Armin Hallery',
    location: '14 The Drive London',
    amount: '$186.52',
    status: 'New Order',
  },
  {
    id: '#565237',
    date: '28 March 2020',
    name: 'Ronald Jamez',
    location: '89 Station Road London',
    amount: '$993.52',
    status: 'Delivered',
  },
  {
    id: '#565238',
    date: '28 March 2020',
    name: 'Anandamayiah',
    location: '45 Brighton Hills Road London',
    amount: '$124.62',
    status: 'Delivered',
  },
  {
    id: '#565239',
    date: '28 March 2020',
    name: 'Putra Prawira',
    location: '15 Leicester Street Road',
    amount: '$454.32',
    status: 'On Delivery',
  },
  {
    id: '#565240',
    date: '28 March 2020',
    name: 'John Snow',
    location: '7th The Avenue Apartment',
    amount: '$987.45',
    status: 'Delivered',
  },
  {
    id: '#565241',
    date: '28 March 2020',
    name: 'Snowden Spy',
    location: '72 Manchester Street',
    amount: '$266.42',
    status: 'On Delivery',
  },
  {
    id: '#565242',
    date: '28 March 2020',
    name: 'John Wickerman',
    location: '12 Chelsea Road London',
    amount: '$876.56',
    status: 'New Order',
  },
];

const OrderList = ({ isDarkMode }) => {
  const [showMenu, setShowMenu] = useState(null);

  return (
    <div
      className={`p-4 ${
        isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Your Orders</h1>
          <h4 className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            This is your order
          </h4>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className={`px-4 py-2 ${
              isDarkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-white'
            } hover:bg-green-800 rounded-md`}
          >
            All Status
          </button>
          <button
            className={`px-4 py-2 ${
              isDarkMode
                ? 'bg-gray-700 text-gray-200'
                : 'bg-gray-200 text-gray-600'
            } hover:bg-gray-500 rounded-md`}
          >
            Today
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-4 py-2 rounded-md ${
              isDarkMode
                ? 'bg-gray-700 text-gray-200'
                : 'bg-gray-200 text-gray-600'
            } hover:bg-gray-500`}
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>

      <table
        className={`min-w-full ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-300'
        } rounded-lg shadow-md`}
      >
        <thead>
          <tr
            className={`${
              isDarkMode
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-200 text-gray-600'
            } uppercase text-sm leading-normal`}
          >
            <th className="py-3 px-6 text-left">Order ID</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Customer Name</th>
            <th className="py-3 px-6 text-left">Location</th>
            <th className="py-3 px-6 text-left">Amount</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm font-light">
          {orders.map((order) => (
            <tr
              key={order.id}
              className={`border-b ${
                isDarkMode
                  ? 'border-gray-700 hover:bg-gray-700'
                  : 'border-gray-200 hover:bg-gray-100'
              }`}
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {order.id}
              </td>
              <td className="py-3 px-6 text-left">{order.date}</td>
              <td className="py-3 px-6 text-left">{order.name}</td>
              <td className="py-3 px-6 text-left">{order.location}</td>
              <td className="py-3 px-6 text-left">{order.amount}</td>
              <td
                className={`py-2.5 w-40 text-xs text-center rounded-lg cursor-pointer ${
                  order.status === 'New Order'
                    ? isDarkMode
                      ? 'text-red-400 bg-red-800 hover:bg-red-700'
                      : 'text-red-600 bg-red-100 hover:bg-red-300'
                    : order.status === 'On Delivery'
                    ? isDarkMode
                      ? 'text-blue-400 bg-blue-800 hover:bg-blue-700'
                      : 'text-blue-600 bg-blue-100 hover:bg-blue-300'
                    : isDarkMode
                    ? 'text-green-400 bg-green-800 hover:bg-green-700'
                    : 'text-green-600 bg-green-100 hover:bg-green-300'
                }`}
              >
                {order.status}
              </td>

              <td className="py-3 px-6 text-left">
                <div
                  className="relative inline-block"
                  onMouseEnter={() => setShowMenu(order.id)}
                  onMouseLeave={() => setShowMenu(null)}
                >
                  <button className="text-gray-600 hover:text-gray-900 ml-5 text-xl">
                    ...
                  </button>
                  {showMenu === order.id && (
                    <div
                      className={`absolute right-0 mt-2 w-48 ${
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-white border-gray-300'
                      } rounded-lg shadow-lg`}
                    >
                      <button
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        onClick={() => alert('Accept Order')}
                      >
                        Accept Order
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        onClick={() => alert('Reject Order')}
                      >
                        Reject Order
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
