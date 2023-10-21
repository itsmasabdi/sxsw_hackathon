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
          className={`w-full px-3 py-4 ${
            tab === 'favourite' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setTab('favourite')}
        >
          Shortlist
        </button>
        <button
          className={`w-full px-3 py-4 ${
            tab === 'chat' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => setTab('chat')}
        >
          Chat
        </button>
      </div>

      {tab === 'chat' && <ChatIndividual />}

      {tab === 'chat-favourite' && <ChatFavourite />}

      {tab === 'favourite' && <Favourite />}
    </div>
  );
};

export default Chat;
