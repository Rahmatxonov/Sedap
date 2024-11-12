import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';
import Dashboard from './pages/dashboard/Dashboard';
import Analytics from './pages/analytics/Analytics';
import Calendar from './pages/calendar/Calendar';
import Chat from './pages/chat/Chat';
import Customer from './pages/customer/Customer';
import CustomerDetail from './pages/customerDetail/CustomerDetail';
import FoodDetail from './pages/foodDetail/FoodDetail';
import Foods from './pages/foods/Foods';
import OrderDetail from './pages/orderDetail/OrderDetail';
import OrderList from './pages/orderList/OrderList';
import Reviews from './pages/reviews/Reviews';
import Wallet from './pages/wallet/Wallet';
import NotFound from './pages/not-found/NotFound';
import { useState, useEffect } from 'react';

const App = () => {
  const storedDarkMode = localStorage.getItem('isDarkMode') === 'true';
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex">
      <Sidebar isDarkMode={isDarkMode} />
      <div className="flex-1 ml-[320px] flex flex-col">
        <Panel isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex-1 h-screen overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Dashboard isDarkMode={isDarkMode} />} />
            <Route
              path="/order-list"
              element={<OrderList isDarkMode={isDarkMode} />}
            />
            <Route
              path="/order-detail"
              element={<OrderDetail isDarkMode={isDarkMode} />}
            />
            <Route
              path="/customer"
              element={<Customer isDarkMode={isDarkMode} />}
            />
            <Route
              path="/analytics"
              element={<Analytics isDarkMode={isDarkMode} />}
            />
            <Route
              path="/reviews"
              element={<Reviews isDarkMode={isDarkMode} />}
            />
            <Route path="/foods" element={<Foods isDarkMode={isDarkMode} />} />
            <Route
              path="/food-detail"
              element={<FoodDetail isDarkMode={isDarkMode} />}
            />
            <Route
              path="/customer-detail"
              element={<CustomerDetail isDarkMode={isDarkMode} />}
            />
            <Route
              path="/calendar"
              element={<Calendar isDarkMode={isDarkMode} />}
            />
            <Route path="/chat" element={<Chat isDarkMode={isDarkMode} />} />
            <Route
              path="/wallet"
              element={<Wallet isDarkMode={isDarkMode} />}
            />
            <Route path="*" element={<NotFound isDarkMode={isDarkMode} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
