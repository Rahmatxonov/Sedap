import React from 'react';
import { FiCalendar } from 'react-icons/fi'; // Calendar icon for filter
import { BsChevronDown } from 'react-icons/bs';

const Reviews = ({ isDarkMode }) => {
  const reviews = [
    {
      id: 1,
      image: '/path-to-image1.jpg',
      title: 'Chicken Curry Special with Cucumber',
      category: 'MAIN COURSE',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      reviewer: {
        name: 'Roberto Jr.',
        avatar: '/path-to-avatar1.jpg',
        profession: 'Graphic Designer',
      },
      rating: 4.5,
    },
    {
      id: 2,
      image: '/path-to-image2.jpg',
      title: 'Spaghetti with Tomato Sauce',
      category: 'PASTA',
      description:
        'Delicious spaghetti served with freshly made tomato sauce, garnished with basil and parmesan.',
      reviewer: {
        name: 'Emily Stone',
        avatar: '/path-to-avatar2.jpg',
        profession: 'Food Blogger',
      },
      rating: 4.8,
    },
    {
      id: 3,
      image: '/path-to-image3.jpg',
      title: 'Italiano Pizza with Mozzarella',
      category: 'PIZZA',
      description:
        'Classic Italiano pizza with rich mozzarella, fresh tomatoes, and a hint of basil.',
      reviewer: {
        name: 'John Doe',
        avatar: '/path-to-avatar3.jpg',
        profession: 'Chef',
      },
      rating: 4.7,
    },
  ];

  return (
    <div
      className={`p-6 ${
        isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Reviews</h1>
            <p className="text-sm">
              <span className="text-green-500 cursor-pointer">Dashboard</span> /
              Customer Reviews
            </p>
          </div>
          <div
            className={`flex items-center ${
              isDarkMode
                ? 'bg-gray-700 text-gray-200'
                : 'bg-white text-gray-600'
            } shadow rounded-lg px-4 py-2 space-x-2`}
          >
            <FiCalendar className="text-blue-500 w-5 h-5" />
            <span className="text-sm">Filter Period</span>
            <BsChevronDown className="text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`shadow-lg rounded-lg p-6 ${
                isDarkMode
                  ? 'bg-gray-800 text-gray-200'
                  : 'bg-white text-gray-800'
              }`}
            >
              <img
                src={review.image}
                alt={review.title}
                className="w-full h-32 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-4">{review.title}</h2>
              <p className="text-sm text-green-500">{review.category}</p>
              <p className="text-sm mt-2">{review.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={review.reviewer.avatar}
                    alt={review.reviewer.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">
                      {review.reviewer.name}
                    </h4>
                    <p className="text-xs">{review.reviewer.profession}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.188 3.647a1 1 0 00.95.69h3.832c.969 0 1.371 1.24.588 1.81l-3.1 2.253a1 1 0 00-.364 1.118l1.188 3.646c.3.922-.755 1.688-1.54 1.118l-3.1-2.253a1 1 0 00-1.175 0l-3.1 2.253c-.784.57-1.838-.196-1.54-1.118l1.188-3.646a1 1 0 00-.364-1.118L2.23 9.074c-.784-.57-.38-1.81.588-1.81h3.832a1 1 0 00.95-.69l1.188-3.647z" />
                  </svg>
                  <span className="text-sm font-semibold">{review.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`min-h-screen p-6 mt-20 ${
            isDarkMode
              ? 'bg-gray-900 text-gray-200'
              : 'bg-gray-50 text-gray-800'
          }`}
        >
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Others Review</h1>
            <p className="text-gray-500">
              Here is customer review about your restaurant
            </p>
          </div>

          <div className="flex justify-end items-center mb-4">
            <div
              className={`flex items-center shadow rounded-lg px-4 py-2 space-x-2 ${
                isDarkMode
                  ? 'bg-gray-800 text-gray-200'
                  : 'bg-white text-gray-600'
              }`}
            >
              <span>Latest</span>
              <BsChevronDown className="text-gray-400 w-4 h-4" />
            </div>
          </div>

          <div className="space-y-6">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className={`shadow rounded-lg p-6 flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 ${
                    isDarkMode
                      ? 'bg-gray-800 text-gray-200'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <img
                    src={`/path-to-avatar${index + 1}.jpg`}
                    alt="Reviewer"
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">
                        Reviewer Name {index + 1}
                      </h4>
                      <p className="text-sm text-gray-500">24 June 2020</p>
                    </div>
                    <p className="text-sm">
                      We recently had dinner with friends at David CC and we all
                      walked away with a great experience. Good food, pleasant
                      environment, personal attention through all the evening.
                      Thanks to the team and we will be back! I will give a good
                      recommendation to my friend, family and people what I
                      look.
                    </p>

                    <div className="mt-3 space-x-2">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        Good Services
                      </span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        Good Places
                      </span>
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                        Excellent
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mt-2 sm:mt-0">
                    <span className="text-lg font-semibold">3.5</span>
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.188 3.647a1 1 0 00.95.69h3.832c.969 0 1.371 1.24.588 1.81l-3.1 2.253a1 1 0 00-.364 1.118l1.188 3.646c.3.922-.755 1.688-1.54 1.118l-3.1-2.253a1 1 0 00-1.175 0l-3.1 2.253c-.784.57-1.838-.196-1.54-1.118l1.188-3.646a1 1 0 00-.364-1.118L2.23 9.074c-.784-.57-.38-1.81.588-1.81h3.832a1 1 0 00.95-.69l1.188-3.647z" />
                    </svg>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
