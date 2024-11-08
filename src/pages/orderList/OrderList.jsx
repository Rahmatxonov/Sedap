import './OrderList.css';
import React, { useState } from 'react';

const orders = [
  { id: '#565231', date: '28 March 2020', name: 'Mikasa Ackerman', location: 'Corner Street 5th London', amount: '$564.52', status: 'New Order' },
  { id: '#565232', date: '28 March 2020', name: 'Eren Yeager', location: "John's Road London 57", amount: '$824.62', status: 'On Delivery' },
  { id: '#565233', date: '28 March 2020', name: 'Grisha Yeager', location: '31 The Green London', amount: '$356.45', status: 'Delivered' },
  { id: '#565234', date: '28 March 2020', name: 'Historia Reiss', location: '11 Church Road London', amount: '$634.52', status: 'Delivered' },
  { id: '#565235', date: '28 March 2020', name: 'Levi Ackerman', location: '21 King Street London', amount: '$556.42', status: 'On Delivery' },
  { id: '#565236', date: '28 March 2020', name: 'Armin Hallery', location: '14 The Drive London', amount: '$186.52', status: 'New Order' },
  { id: '#565237', date: '28 March 2020', name: 'Ronald Jamez', location: '89 Station Road London', amount: '$993.52', status: 'Delivered' },
  { id: '#565238', date: '28 March 2020', name: 'Anandamayiah', location: '45 Brighton Hills Road London', amount: '$124.62', status: 'Delivered' },
  { id: '#565239', date: '28 March 2020', name: 'Putra Prawira', location: '15 Leicester Street Road', amount: '$454.32', status: 'On Delivery' },
  { id: '#565240', date: '28 March 2020', name: 'John Snow', location: '7th The Avenue Apartment', amount: '$987.45', status: 'Delivered' },
  { id: '#565241', date: '28 March 2020', name: 'Snowden Spy', location: '72 Manchester Street', amount: '$266.42', status: 'On Delivery' },
  { id: '#565242', date: '28 March 2020', name: 'John Wickerman', location: '12 Chelsea Road London', amount: '$876.56', status: 'New Order' }
];



const OrderList = () => {
  const [showMenu, setShowMenu] = useState(null);

  const toggleMenu = (orderId) => {
    setShowMenu(showMenu === orderId ? null : orderId);
  };

  return (
    <div className="order-list">
      <h1>Your Orders</h1>
      <h4>This is your order </h4>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Location</th>
            <th>Amount</th>
            <th>Status Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.name}</td>
                <td>{order.location}</td>
                <td>{order.amount}</td>
                <td className={`status ${order.status.toLowerCase().replace(" ", "-")}`}>
                  {order.status}
                </td>


                <td>
                  <div
                    className="action-container"
                    onMouseEnter={() => setShowMenu(order.id)}  // Menyu faqat shu buyurtma uchun ochiladi
                    onMouseLeave={() => setShowMenu(null)}     // Menyu boshqa buyurtma ustiga o'tganda yopiladi
                  >
                    <button className="menu-button">...</button>
                    {showMenu === order.id && (
                      <div className="dropdown-menu">
                        <button className="dropdown-button" onClick={() => alert('Accepted Order')}>Accept Order</button>
                        <button className="dropdown-button" onClick={() => alert('Rejected Order')}>Reject Order</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
