import React, { useState } from 'react';
import { FiSearch, FiPlus, FiCheck, FiSend } from 'react-icons/fi';

const Chat = ({ isDarkMode }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi everyone! Let's start our discussion now about the kick-off meeting next week.",
      sender: 'other',
    },
    { id: 2, text: 'Is everyone ok with that schedule?', sender: 'other' },
    { id: 3, text: 'Uhm, can I reschedule the meeting?', sender: 'me' },
    {
      id: 4,
      text: 'I still have 2 tasks left on that day. I’m worried I can’t attend that meeting.',
      sender: 'me',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([
      ...messages,
      { id: Date.now(), text: newMessage, sender: 'me' },
    ]);
    setNewMessage('');
  };

  return (
    <div
      className={`h-screen flex space-x-5 justify-between p-5 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div
        className={`w-1/3 p-4 border-r rounded-lg ${
          isDarkMode
            ? 'border-gray-700 bg-gray-800'
            : 'border-gray-300 bg-white'
        }`}
      >
        <div
          className={`flex items-center rounded-lg px-3 py-2 mb-4 ${
            isDarkMode
              ? 'bg-gray-700 text-gray-100'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">
            Pinned Message
          </h2>
          <div
            className={`flex items-center justify-between p-3 rounded-lg mb-3 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}
          >
            <div>
              <p className="text-sm font-medium">Robert Johanson</p>
              <p className="text-xs text-gray-400">2 min ago</p>
            </div>
            <span className="bg-green-500 text-xs font-bold text-white px-2 py-1 rounded-full">
              2
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div
          className={`flex items-center justify-between p-4 border-b rounded-lg ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-gray-100'
              : 'bg-gray-100 border-gray-300 text-gray-900'
          }`}
        >
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 rounded-full ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            ></div>
            <div>
              <p className="text-sm font-medium">Roberto</p>
              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>
          <div className="flex space-x-3 text-gray-400">
            <FiSearch />
            <FiPlus />
          </div>
        </div>

        <div
          className={`flex-1 p-4 space-y-4 overflow-y-auto ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${
                message.sender === 'me'
                  ? 'self-end bg-blue-500 text-white'
                  : 'self-start bg-gray-700 text-gray-200'
              } px-4 py-2 rounded-lg w-fit`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div
          className={`flex items-center p-4 border-t rounded-lg ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-gray-100'
              : 'bg-gray-100 border-gray-300 text-gray-900'
          }`}
        >
          <input
            type="text"
            placeholder="Write your message here..."
            className="flex-1 bg-transparent outline-none text-sm"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            onClick={handleSendMessage}
          >
            <FiSend />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
