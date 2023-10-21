import React from 'react';

const ChatMessage = (props) => {
  return (
    <div
      className={`flex items-end ${
        props.role === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      {/* {props.side === 'left' && (
        <img
          src="https://randomuser.me/api/portraits/women/41.jpg"
          alt="My profile"
          className="w-6 h-6 rounded-full order-1"
        />
      )} */}
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        <div>
          <span
            className={
              'px-4 py-2 rounded-lg inline-block text-left' +
              (props.role === 'assistant'
                ? ' rounded-tl-none bg-gray-300'
                : ' text-white rounded-tr-none bg-blue-600')
            }
          >
            {props.message}
          </span>
        </div>
      </div>
      {/* {props.side === 'right' && (
        <img
          src="https://randomuser.me/api/portraits/men/41.jpg"
          alt="My profile"
          className="w-6 h-6 rounded-full order-1"
        />
      )} */}
    </div>
  );
};

export default ChatMessage;
