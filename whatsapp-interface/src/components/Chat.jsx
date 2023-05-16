import React, { useState } from "react";
import axios from "axios";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");

  const handleSendMessage = async (message) => {
    try {
      const response = await axios.post(
        "https://api.green-api.com/waInstance{{idInstance}}/SendMessage/{{apiTokenInstance}}",
        {
          phone: "recipient_phone_number",
          text: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": apiTokenInstance,
          },
        }
      );
      const { status, data } = response;
      if (status === 200 && data.success) {
        const newMessage = {
          sender: "Me",
          text: message,
          date: new Date().toLocaleString(),
        };
        setMessages([...messages, newMessage]);
      } else {
        console.log("Failed to send message:", data);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleReceiveMessages = async () => {
    try {
      const response = await axios.get(
        "https://api.green-api.com/waInstanceyour_id_here/messages",
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": apiTokenInstance,
          },
        }
      );
      const { status, data } = response;
      if (status === 200 && data.success) {
        setMessages(data.data);
      } else {
        console.log("Failed to receive messages:", data);
      }
    } catch (error) {
      console.error("Error receiving messages:", error);
    }
  };

  const handleLogin = () => {
    // Логика авторизации GREEN-API
    // Установка idInstance и apiTokenInstance
  };

  return (
    <div>
      <button onClick={handleLogin}>Войти в GREEN-API</button>
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
      <button onClick={handleReceiveMessages}>Получить сообщения</button>
    </div>
  );
};

export default Chat;
