import { SendHorizontal } from 'lucide-react';
import { useState } from 'react';
"use client";

const ChatbotScreen_G14RE = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage("");
    
    // Simulating bot response (can be replaced with actual bot response logic)
    setTimeout(() => {
      setMessages([...messages, { text: "I'm a chatbot. How can I help you?", sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-black">
      <div className="border w-full max-w-lg">
        <div>
          {messages.map((message, index) => (
            <div key={index} className={`p-2 rounded-md ${message.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white text-right"}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            className="flex-1 border px-2 py-1"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="p-2 bg-blue-500 text-white" onClick={handleSendMessage}>
            <SendHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotScreen_G14RE;