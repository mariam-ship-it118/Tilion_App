import React from 'react';
import './TextMessages.css';
import Sticker from '../Assets/chatsticker.svg';
const messages = [
  { id: 1, text: "Hi broo!", time: "12:00am", sender: "received" },
  { id: 2, text: "How are you?", time: "12:20am", sender: "sent" },
  { id: 3, text: "i am good.. are u free today?", time: "12:30am", sender: "received" },
  { id: 4, text: "😊❤️", time: "12:30am", sender: "received", type: "emoji" },
  { id: 5, text: "yessss!!", time: "12:45am", sender: "sent" },
  { id: 6, text: "Let's meet today at the park!!", time: "12:46am", sender: "received" },
  { id: 7, text: "sure", time: "12:50pm", sender: "sent" },
  { id: 8, text: "Let's meet after lunch at 4", time: "12:50pm", sender: "sent" },
  { id: 9, text: "ok.. I will tell mum!!", time: "12:51am", sender: "received" },
  { id: 10, image: Sticker, time: "1:00pm", sender: "sent", type: "sticker", status: "Seen" },
];

const TextMessages = () => {
  return (
    <div className="chat-viewport">
      <div className="date-separator">Today</div>
      
      {messages.map((msg) => (
        <div key={msg.id} className={`message-row ${msg.sender}`}>
          <div className="bubble-wrapper">
            {msg.type === 'sticker' ? (
              <img src={msg.image} alt="sticker" className="message-sticker" />
            ) : (
              <div className="message-bubble">{msg.text}</div>
            )}
            <div className="message-info">
              <span className="time">{msg.time}</span>
              {msg.status && <span className="status">{msg.status}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextMessages;