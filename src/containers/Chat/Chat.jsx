import React, { useState } from 'react';
import ChatIndividual from './ChatIndividual';
import Favourite from './Favourite';
import ChatFavourite from './ChatFavourite';
import './Chat.css';

const Chat = () => {
  const [tab, setTab] = useState('favourite');

  return (
    <div className="h-full">
      <div className="fixed top-0 left-0 w-full grid grid-cols-2 bg-white shadow-sm">
        <button
          className={`w-full px-3 py-4 flex space-x-2 items-center justify-center ${
            tab === 'favourite' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setTab('favourite')}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <span>Shortlist</span>
        </button>
        <button
          className={`w-full px-3 py-4 flex space-x-2 items-center justify-center ${
            tab === 'chat' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setTab('chat')}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
          <span>Chat</span>
        </button>
      </div>

      {tab === 'chat' && <ChatIndividual />}

      {tab === 'chat-favourite' && <ChatFavourite />}

      {tab === 'favourite' && <Favourite />}
    </div>
  );
};

export default Chat;
