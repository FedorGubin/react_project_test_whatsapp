import React from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.module.css";

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages-container">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          sender={message.sender}
          text={message.text}
          date={message.date}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
