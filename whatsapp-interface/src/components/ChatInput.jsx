import React, { useState } from "react";
import "./ChatInput.module.css";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        className="chat-input"
      />
      <button onClick={handleSendMessage} className="send-button">
        Отправить
      </button>
    </div>
  );
};

export default ChatInput;
