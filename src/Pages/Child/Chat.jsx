import React from 'react';
import './Chat.css';
import TopChat from '../../Components/TopChat';
import TextMessages from '../../Components/TextMessages';
import ChatBar from '../../Components/ChatBar';

const Chat = () => {
  return (
    <div className="chat-page">
      <TopChat />
      <div className="chat-page-messages">
        <TextMessages />
      </div>
      <ChatBar />
    </div>
  );
};

export default Chat;
