// import React from 'react';

// const Analytics = () => {
//   return (
//     <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-2xl font-semibold">Analytics</h1>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Here is your restaurant summary with graph view
//           </p>
//         </div>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
//           Filter Period
//         </button>
//       </div>

//       {/* Main Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Chart Orders */}
//         <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 className="text-lg font-medium mb-4">Chart Orders</h2>
//           <div className="flex justify-between mb-4">
//             <div>
//               <p className="text-xl font-bold">257k</p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Total Sales
//               </p>
//             </div>
//             <div>
//               <p className="text-xl font-bold">1,245</p>
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Avg. Sales per day
//               </p>
//             </div>
//           </div>
//           {/* Chart Placeholder */}
//           <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
//             Chart Placeholder
//           </div>
//         </div>

//         {/* Most Selling Items */}
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 className="text-lg font-medium mb-4">Most Selling Items</h2>
//           <ul className="space-y-4">
//             {[...Array(5)].map((_, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center text-sm"
//               >
//                 <div className="flex items-center">
//                   <img
//                     src={`https://via.placeholder.com/40?text=Img${index + 1}`}
//                     alt={`Item ${index + 1}`}
//                     className="w-10 h-10 rounded-lg mr-4"
//                   />
//                   <span>Item {index + 1} Description</span>
//                 </div>
//                 <span>$10.00</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 className="text-lg font-medium mb-4">Trending Items</h2>
//           <ul>
//             {[
//               {
//                 name: 'Tuna soup spinach with himalayan salt',
//                 sales: '524',
//                 trend: '+12%',
//                 image: 'https://via.placeholder.com/40',
//               },
//               {
//                 name: 'Chicken curry special with cucumber',
//                 sales: '215',
//                 trend: '-7.3%',
//                 image: 'https://via.placeholder.com/40',
//               },
//               {
//                 name: 'Italiano pizza mozzarella with garlic',
//                 sales: '120',
//                 trend: '+5%',
//                 image: 'https://via.placeholder.com/40',
//               },
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center mb-4 text-sm"
//               >
//                 <div className="flex items-center">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-10 h-10 rounded-lg mr-4"
//                   />
//                   <div>
//                     <p>{item.name}</p>
//                     <p className="text-gray-500 text-xs">
//                       {item.sales} Sales ({item.trend})
//                     </p>
//                   </div>
//                 </div>
//                 <span
//                   className={`${
//                     item.trend.includes('+') ? 'text-green-500' : 'text-red-500'
//                   }`}
//                 >
//                   {item.trend}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 className="text-lg font-medium mb-4">Revenue</h2>
//           <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
//             Revenue Chart Placeholder
//           </div>
//         </div>

//         {/* Most Favourite Items */}
//         <div className="col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-medium">Most Favourite Items</h2>
//             <div className="flex space-x-2">
//               {['Monthly', 'Weekly', 'Daily'].map((tab) => (
//                 <button
//                   key={tab}
//                   className="text-sm px-3 py-1 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200"
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
//             {[
//               {
//                 title: 'Medium Spicy Pizza with Kemangi Leaf',
//                 image: 'https://via.placeholder.com/150',
//                 likes: '256k',
//                 reviews: 454,
//               },
//               {
//                 title: 'Chicken Curry Specials With Cucumbers',
//                 image: 'https://via.placeholder.com/150',
//                 likes: '256k',
//                 reviews: 454,
//               },
//               {
//                 title: 'Watermelon Mix Chocolate Juice with Ice',
//                 image: 'https://via.placeholder.com/150',
//                 likes: '256k',
//                 reviews: 454,
//               },
//               {
//                 title: 'Italiano Pizza with Mozarella Spicy',
//                 image: 'https://via.placeholder.com/150',
//                 likes: '256k',
//                 reviews: 454,
//               },
//               {
//                 title: 'Burger Jumbo la Piazza with Barbeque',
//                 image: 'https://via.placeholder.com/150',
//                 likes: '256k',
//                 reviews: 454,
//               },
//               {
//                 title: 'Bread Fried with Nuggets Specials',
//                 image: 'https://via.placeholder.com/150',
//                 likes: '256k',
//                 reviews: 454,
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-24 object-cover rounded-lg mb-3"
//                 />
//                 <h3 className="text-sm font-medium">{item.title}</h3>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   {item.reviews} reviews
//                 </p>
//                 <div className="flex justify-center items-center text-xs mt-2">
//                   <span className="text-blue-500 mr-2">{item.likes} Likes</span>
//                   <button className="text-gray-500 dark:text-gray-400">
//                     ♥
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;

import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Analytics = () => {
  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 15000, 17000, 20000, 22000, 25000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const ordersData = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        label: 'Orders',
        data: [120, 200, 180, 240, 220, 300],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-800">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Analytics</h1>
          <p className="text-sm text-gray-500">
            Here is your restaurant summary with graph view
          </p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
          Filter Period
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Chart Orders</h2>
          <Bar data={ordersData} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Most Selling Items</h2>
          <ul className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-sm"
              >
                <div className="flex items-center">
                  <img
                    src={`https://via.placeholder.com/40?text=Img${index + 1}`}
                    alt={`Item ${index + 1}`}
                    className="w-10 h-10 rounded-lg mr-4"
                  />
                  <span>Item {index + 1} Description</span>
                </div>
                <span>$10.00</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white  rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Trending Items</h2>
          <ul>
            {[
              {
                name: 'Tuna soup spinach with himalayan salt',
                sales: '524',
                trend: '+12%',
                image: 'https://via.placeholder.com/40',
              },
              {
                name: 'Chicken curry special with cucumber',
                sales: '215',
                trend: '-7.3%',
                image: 'https://via.placeholder.com/40',
              },
              {
                name: 'Italiano pizza mozzarella with garlic',
                sales: '120',
                trend: '+5%',
                image: 'https://via.placeholder.com/40',
              },
              {
                name: 'Tuna soup spinach with himalayan salt',
                sales: '524',
                trend: '+12%',
                image: 'https://via.placeholder.com/40',
              },
              {
                name: 'Chicken curry special with cucumber',
                sales: '215',
                trend: '-7.3%',
                image: 'https://via.placeholder.com/40',
              },
              {
                name: 'Italiano pizza mozzarella with garlic',
                sales: '120',
                trend: '+5%',
                image: 'https://via.placeholder.com/40',
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-4 text-sm"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-lg mr-4"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p className="text-gray-500 text-xs">
                      {item.sales} Sales ({item.trend})
                    </p>
                  </div>
                </div>
                <span
                  className={`${
                    item.trend.includes('+') ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {item.trend}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium mb-4">Revenue</h2>
          <Line data={revenueData} />
        </div>

        <div className="col-span-3 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Most Favourite Items</h2>
            <div className="flex space-x-2">
              {['Monthly', 'Weekly', 'Daily'].map((tab) => (
                <button
                  key={tab}
                  className="text-sm px-3 py-1 rounded-lg bg-blue-100 text-blue-600"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              {
                title: 'Medium Spicy Pizza with Kemangi Leaf',
                image: 'https://via.placeholder.com/150',
                likes: '256k',
                reviews: 454,
              },
              {
                title: 'Chicken Curry Specials With Cucumbers',
                image: 'https://via.placeholder.com/150',
                likes: '256k',
                reviews: 454,
              },
              {
                title: 'Watermelon Mix Chocolate Juice with Ice',
                image: 'https://via.placeholder.com/150',
                likes: '256k',
                reviews: 454,
              },
              {
                title: 'Italiano Pizza with Mozarella Spicy',
                image: 'https://via.placeholder.com/150',
                likes: '256k',
                reviews: 454,
              },
              {
                title: 'Burger Jumbo la Piazza with Barbeque',
                image: 'https://via.placeholder.com/150',
                likes: '256k',
                reviews: 454,
              },
              {
                title: 'Bread Fried with Nuggets Specials',
                image: 'https://via.placeholder.com/150',
                likes: '256k',
                reviews: 454,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-24 object-cover rounded-lg mb-3"
                />
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.reviews} reviews</p>
                <div className="flex justify-center items-center text-xs mt-2">
                  <span className="text-blue-500 mr-2">{item.likes} Likes</span>
                  <button className="text-gray-500">♥</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
