import React from "react";
import "./ChatMessage.module.css";

const ChatMessage = ({ sender, text, date }) => {
  return (
    <div className="chat-message">
      <p className="sender">{sender}</p>
      <p className="text">{text}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default ChatMessage;
