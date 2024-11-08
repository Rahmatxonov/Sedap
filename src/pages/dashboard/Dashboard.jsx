import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-600">
          Hi, Samantha. Welcome back to Sedap Admin!
        </p>
      </header>

      <section className="grid grid-cols-4 gap-4 mb-8">
        {[
          'Total Orders',
          'Total Delivered',
          'Total Canceled',
          'Total Revenue',
        ].map((title, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <p className="text-2xl font-semibold mb-2">
              {[75, 357, 65, 128][index]}
            </p>
            <p className="text-gray-500">{title}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold mb-4">Pie Chart</h2>
          <div className="flex justify-around">
            <div className="bg-red-200 rounded-full w-20 h-20 flex items-center justify-center">
              <p className="text-lg font-semibold">81%</p>
            </div>
            <div className="bg-green-200 rounded-full w-20 h-20 flex items-center justify-center">
              <p className="text-lg font-semibold">22%</p>
            </div>
            <div className="bg-blue-200 rounded-full w-20 h-20 flex items-center justify-center">
              <p className="text-lg font-semibold">62%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold mb-4">Chart Order</h2>
          <p className="text-gray-500">Chart preview goes here</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Save Report
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold mb-4">Total Revenue</h2>
          <p className="text-gray-500">Revenue chart preview goes here</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="font-semibold mb-4">Customer Map</h2>
          <p className="text-gray-500">Map preview goes here</p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-semibold mb-4">Customer Review</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg w-1/3">
              <p className="font-semibold">User Name</p>
              <p className="text-sm text-gray-500">2 days ago</p>
              <p className="mt-2 text-gray-600">"Lorem ipsum review text..."</p>
              <div className="mt-2">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
