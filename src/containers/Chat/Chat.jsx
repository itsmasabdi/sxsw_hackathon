import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState('');

  const submitChat = () => {
    const newMessages = [...messages, { role: 'user', content: textMessage }];
    setMessages(newMessages);

    chrome.runtime.sendMessage(
      {
        type: 'CALL_OPENAI',
        messages: newMessages,
      },
      (response) => {
        console.log('Received response:', response);
        setMessages([...newMessages, { role: 'assistant', content: response }]);
      }
    );

    chrome.runtime.sendMessage(
      {
        type: 'GET_PAGE_CONTENT',
        messages: 'get page content',
      },
      (response) => {
        console.log('Received response:', response);
      }
    );

    setTextMessage('');
  };

  const handleTextMessageChange = (event) => {
    setTextMessage(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      submitChat();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="overflow-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg.content} role={msg.role} />
        ))}
      </div>
      <div className="border-t-2 border-gray-200 p-4 mb-2 fixed bottom-0 w-full left-0">
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-smile w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </button>
          </span>
          <input
            type="text"
            placeholder="Write Something"
            onChange={handleTextMessageChange}
            value={textMessage}
            onKeyDown={handleEnterKeyPress}
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 flex">
            <button
              type="button"
              onClick={submitChat}
              className="inline-flex items-center justify-center rounded-full h-8 w-8 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="feather feather-send w-4 h-4"
                viewBox="0 0 24 24"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
