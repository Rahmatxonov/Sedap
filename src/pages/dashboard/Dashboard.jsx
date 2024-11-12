import { Pie, Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import {
  FaBox,
  FaCheckCircle,
  FaTimesCircle,
  FaDollarSign,
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { Rate } from 'antd';
const Dashboard = ({ isDarkMode }) => {
  const [timePeriod, setTimePeriod] = useState('Weekly');

  const pieChartData = {
    labels: ['Total Order', 'Customer Growth', 'Total Revenue'],
    datasets: [
      {
        label: 'Statistics',
        data: [81, 22, 62],
        backgroundColor: ['#f87171', '#34d399', '#60a5fa'],
        hoverOffset: 4,
      },
    ],
  };

  const lineChartData = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        label: 'Order Count',
        data: [120, 210, 456, 300, 200, 320, 400],
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        tension: 0.4,
      },
    ],
  };

  const ChartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: '2020',
        data: [
          20000, 25000, 22000, 28000, 30753, 29000, 27000, 31000, 29500, 26000,
          27000, 30000,
        ],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: '2021',
        data: [
          15000, 23000, 25000, 26000, 27000, 28000, 29000, 31000, 30000, 31257,
          29000, 31500,
        ],
        borderColor: '#f87171',
        backgroundColor: 'rgba(248, 113, 113, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const stats = [
    { title: 'Total Orders', value: 75, icon: <FaBox /> },
    { title: 'Total Delivered', value: 357, icon: <FaCheckCircle /> },
    { title: 'Total Canceled', value: 65, icon: <FaTimesCircle /> },
    { title: 'Total Revenue', value: '$128', icon: <FaDollarSign /> },
  ];

  const reviews = [
    {
      name: 'Jons Sena',
      daysAgo: 2,
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 4.5,
      imgSrc:
        'https://zamin.uz/uploads/posts/2016-09/1473936816_7sbhx3ig1dbz1b4f3ncko031v.jpg',
    },
    {
      name: 'Sofia',
      daysAgo: 2,
      review: "Lorem Ipsum has been the industry's standard dummy text.",
      rating: 4.0,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLzE0DlqCxDKYee2ecWVjIHWqE5dWXGZe1amVuNfTNsLaHRmTXnBGDeB2JUe9JrlcW3M&usqp=CAU',
    },
    {
      name: 'Anandreansyah',
      daysAgo: 2,
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 4.5,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OFmtUjSRfxyr5RY11AgDBy5Sy0dZxrnmnQ&s',
    },
  ];

  const barChartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: '2020',
        data: [30, 40, 50, 60, 70, 80, 60],
        backgroundColor: '#f87171',
      },
      {
        label: '2021',
        data: [50, 60, 55, 70, 65, 75, 80],
        backgroundColor: '#facc15',
      },
    ],
  };

  return (
    <div className={`${isDarkMode ? 'dark:bg-gray-900' : 'bg-[#faf6ff]'}`}>
      <div className="p-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h1
                className={`text-3xl font-semibold ${
                  isDarkMode ? 'dark:text-gray-100' : 'text-black'
                }`}
              >
                Dashboard
              </h1>
              <p
                className={`text-gray-600 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-400'
                } text-lg`}
              >
                Hi, Samantha. Welcome back to Sedap Admin!
              </p>
            </div>
          </header>

          <section className="mb-8">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {stats.map((stat, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`bg-white ${
                      isDarkMode
                        ? 'dark:bg-gray-800'
                        : 'bg-white border border-[#f6f1fd]'
                    } p-6 rounded-lg shadow-md flex items-center space-x-5`}
                  >
                    <div className="text-3xl text-green-500">{stat.icon}</div>
                    <div>
                      <p
                        className={`text-3xl font-semibold ${
                          isDarkMode ? 'dark:text-gray-100' : 'text-gray-800'
                        }  `}
                      >
                        {stat.value}
                      </p>
                      <p
                        className={`text-gray-500 ${
                          isDarkMode ? 'dark:text-gray-400' : 'text-gray-600'
                        } `}
                      >
                        {stat.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="flex items-center justify-between gap-4 mb-8">
            <div
              className={` ${
                isDarkMode
                  ? 'dark:bg-gray-800'
                  : 'bg-white border border-[#f6f1fd]'
              }  p-6 rounded-lg shadow-md flex-grow sm:w-1/2 md:w-1/3`}
            >
              <h2
                className={`font-semibold text-xl ${
                  isDarkMode ? 'dark:text-gray-100' : 'text-gray-800 '
                }   mb-4`}
              >
                Pie Chart
              </h2>
              <Pie data={pieChartData} options={{ responsive: true }} />
            </div>

            <div
              className={`${
                isDarkMode
                  ? 'dark:bg-gray-800'
                  : 'bg-white border border-[#f6f1fd]'
              }  p-10 rounded-lg shadow-md flex-grow sm:w-1/2 md:w-2/3`}
            >
              <h2
                className={`font-semibold text-xl ${
                  isDarkMode ? 'dark:text-gray-100' : 'text-gray-800'
                }   mb-4`}
              >
                Chart Order
              </h2>
              <div className="h-[245px]">
                <Line
                  data={lineChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: { grid: { display: false } },
                      y: {
                        grid: { color: 'rgba(200, 200, 200, 0.3)' },
                        beginAtZero: true,
                      },
                    },
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Save Report
              </button>
            </div>
          </section>

          <section className="flex items-start justify-between gap-4 mb-8">
            <div
              className={`p-6 rounded-lg shadow-md flex-grow ${
                isDarkMode ? 'dark:bg-gray-800' : 'bg-white'
              }`}
            >
              <h2
                className={`font-semibold text-xl ${
                  isDarkMode ? 'dark:text-gray-100' : 'text-gray-800'
                } mb-4`}
              >
                Total Revenue
              </h2>
              <div className="h-[245px]">
                <Line
                  data={ChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: true,
                        position: 'top',
                      },
                    },
                    scales: {
                      x: { grid: { display: false } },
                      y: {
                        grid: { color: 'rgba(200, 200, 200, 0.3)' },
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div
              className={`p-6 rounded-lg shadow-md w-1/3 ${
                isDarkMode ? 'dark:bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2
                  className={`font-semibold text-xl ${
                    isDarkMode ? 'dark:text-gray-100' : 'text-gray-800'
                  }`}
                >
                  Customer Map
                </h2>
                <select
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className={`border bg-transparent rounded px-2 py-1 ${
                    isDarkMode
                      ? 'dark:bg-gray-700 dark:text-white'
                      : 'bg-white text-gray-600'
                  }`}
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div className="h-[245px]">
                <Bar
                  data={barChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: { grid: { display: false } },
                      y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(200, 200, 200, 0.3)' },
                      },
                    },
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            </div>
          </section>

          <section>
            <h2
              className={`text-2xl font-semibold ${
                isDarkMode ? 'dark:text-gray-100' : 'text-gray-800'
              }   mb-4`}
            >
              Customer Review
            </h2>
            <p
              className={`text-md font-semibold ${
                isDarkMode ? 'dark:text-gray-500' : 'text-gray-800'
              }   mb-4`}
            >
              Eum fuga consequuntur utadsjn et.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`${
                    isDarkMode
                      ? 'dark:bg-gray-800'
                      : 'bg-white border border-[#f6f1fd]'
                  }  p-6 rounded-lg shadow-md text-center flex items-center`}
                >
                  <div className="text-left">
                    <h3
                      className={`font-semibold text-lg ${
                        isDarkMode ? 'dark:text-gray-100' : 'text-gray-800'
                      }  `}
                    >
                      {review.name}
                    </h3>
                    <p
                      className={`  ${
                        isDarkMode ? 'dark:text-gray-500' : 'text-gray-400'
                      }`}
                    >
                      {review.daysAgo} days ago
                    </p>
                    <p
                      className={`${
                        isDarkMode ? 'dark:text-gray-400' : 'text-gray-600'
                      }  mt-2`}
                    >
                      {review.review}
                    </p>
                    <div className="text-yellow-500">
                      <Rate allowHalf defaultValue={4.5} />
                    </div>
                  </div>
                  <img
                    src={review.imgSrc}
                    alt={review.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
