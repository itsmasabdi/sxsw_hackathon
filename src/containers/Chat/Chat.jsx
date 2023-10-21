import React, { useState } from 'react';
import ChatIndividual from './ChatIndividual';
import Wishlist from './Wishlist';
import ChatWishlist from './ChatWishlist';
import './Chat.css';

const Chat = () => {
  const [tab, setTab] = useState('chat');

  return (
    <div className="h-full">
      <div className="fixed top-0 left-0 w-full grid grid-cols-3">
        <button
          className={`w-full px-3 py-4 ${
            tab === 'chat' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setTab('chat')}
        >
          Chat this
        </button>

        <button
          className={`w-full px-3 py-4 ${
            tab === 'chat-wishlist' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setTab('chat-wishlist')}
        >
          Chat wishlist
        </button>

        <button
          className={`w-full px-3 py-4 ${
            tab === 'wishlist' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setTab('wishlist')}
        >
          Wishlist
        </button>
      </div>

      {tab === 'chat' && <ChatIndividual />}

      {tab === 'chat-wishlist' && <ChatWishlist />}

      {tab === 'wishlist' && <Wishlist />}
    </div>
  );
};

export default Chat;
