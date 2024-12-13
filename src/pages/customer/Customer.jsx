import React from 'react';
import { FiFilter } from 'react-icons/fi';

const Customer = ({ isDarkMode }) => {
  const tableHeaderClass = isDarkMode
    ? 'bg-gray-800 text-gray-100'
    : 'bg-blue-100 text-gray-900';
  const tableRowClass = isDarkMode
    ? 'bg-gray-700 text-gray-100'
    : 'bg-white text-gray-900';
  const tableHoverClass = isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50';
  const textMutedClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const buttonClass = isDarkMode
    ? 'bg-gray-600 text-gray-100'
    : 'bg-gray-200 text-gray-900';

  return (
    <div
      className={`min-h-screen p-5 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          General Customer
        </h1>
        <div className="flex items-center space-x-2">
          <button
            className={`flex items-center space-x-2 py-2 px-4 rounded-lg ${buttonClass}`}
          >
            <FiFilter className="text-lg" />
            <span className="text-sm">Filter</span>
          </button>
        </div>
      </div>

      <p className={`text-sm ${textMutedClass}`}>
        Here is your general customers list data
      </p>

      <table className="w-full mt-5 table-auto border-collapse">
        <thead className={tableHeaderClass}>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
              Customer ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
              Join Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
              Customer Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
              Total Spent
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
              Last Order
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              id: '#C-004560',
              date: '27 March 2020',
              name: 'Veronica',
              location: 'Corner Street 5th, London',
              totalSpent: '$78.92',
              lastOrder: '$35.35',
            },
            {
              id: '#C-004561',
              date: '28 March 2020',
              name: 'Rio Da Luca',
              location: 'Emerald Tower 6th, London',
              totalSpent: '$8.90',
              lastOrder: '$16.75',
            },
            {
              id: '#C-004562',
              date: '29 March 2020',
              name: 'Fernando',
              location: 'Blessing Hills 1st, London',
              totalSpent: '$16.87',
              lastOrder: '$75.55',
            },
            {
              id: '#C-004563',
              date: '30 March 2020',
              name: 'Yenni Tan',
              location: 'Greensand 2nd, London',
              totalSpent: '$18.8',
              lastOrder: '$57.75',
            },
            {
              id: '#C-004564',
              date: '5 April 2020',
              name: 'Denny Chang',
              location: 'St. Bakerfield 3rd, London',
              totalSpent: '$38.92',
              lastOrder: '$21.75',
            },
            {
              id: '#C-004565',
              date: '8 April 2020',
              name: 'Andrea Liaw',
              location: 'Kingsroad 45th, London',
              totalSpent: '$74.92',
              lastOrder: '$75.55',
            },
            {
              id: '#C-004566',
              date: '9 April 2020',
              name: 'Siangny The',
              location: '11 Church Road, London',
              totalSpent: '$78.52',
              lastOrder: '$21.61',
            },
            {
              id: '#C-004567',
              date: '11 April 2020',
              name: 'Wanda Maximoff',
              location: '21 Long Beach Tower',
              totalSpent: '$88.92',
              lastOrder: '$61.65',
            },
            {
              id: '#C-004568',
              date: '15 April 2020',
              name: 'Natasya Romanoff',
              location: '13 Boulevard Dreams',
              totalSpent: '$98.92',
              lastOrder: '$65.92',
            },
            {
              id: '#C-004569',
              date: '19 April 2020',
              name: 'Tony Stark',
              location: 'Sandbay San Tower',
              totalSpent: '$28.93',
              lastOrder: '$21.75',
            },
            {
              id: '#C-004570',
              date: '10 May 2020',
              name: 'John Banner',
              location: 'La Plaza de Tower',
              totalSpent: '$18.21',
              lastOrder: '$21.16',
            },
            {
              id: '#C-004571',
              date: '26 May 2020',
              name: 'Arthur da Roca',
              location: '19 St. John Road, London',
              totalSpent: '$87.98',
              lastOrder: '$16.65',
            },
          ].map((customer, index) => (
            <tr key={index} className={`${tableRowClass} ${tableHoverClass}`}>
              <td className="px-6 py-4 text-sm font-medium">{customer.id}</td>
              <td className="px-6 py-4 text-sm font-medium">{customer.date}</td>
              <td className="px-6 py-4 text-sm font-medium">{customer.name}</td>
              <td className="px-6 py-4 text-sm font-medium">
                {customer.location}
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                {customer.totalSpent}
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                {customer.lastOrder}
              </td>
              <td className="px-6 py-4 text-sm font-medium">
                <button className={`py-1 px-4 rounded-lg ${buttonClass}`}>
                  View Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-5">
        <p className={`text-sm ${textMutedClass}`}>Showing 12 from 46 data</p>
      </div>
    </div>
  );
};

export default Customer;
