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

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[320px] flex flex-col">
        <Panel />
        <div className="flex-1 h-screen overflow-y-scroll mt-5">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/order-detail" element={<OrderDetail />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/food-detail" element={<FoodDetail />} />
            <Route path="/customer-detail" element={<CustomerDetail />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
