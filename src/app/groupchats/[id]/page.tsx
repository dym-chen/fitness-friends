"use client";

import { useState, useRef, useEffect } from "react";

const mockMessages = [
  {
    id: 1,
    user: "Alice",
    text: "Hey everyone! Ready for the morning run?",
    time: "08:01",
  },
  {
    id: 2,
    user: "Bob",
    text: "Absolutely! Let's crush it today.",
    time: "08:02",
  },
  {
    id: 3,
    user: "You",
    text: "I'm in! See you all at the park.",
    time: "08:03",
  },
];

export default function GroupChatMessagesPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: messages.length + 1, user: "You", text: input, time: "08:10" },
    ]);
    setInput("");
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col h-[80vh] max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Group Chat
      </h1>
      <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow-md p-6 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-4 flex ${
              msg.user === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm ${
                msg.user === "You"
                  ? "bg-blue-600 text-white ml-8"
                  : "bg-gray-100 text-gray-800 mr-8"
              }`}
            >
              <span className="block font-semibold mb-1">{msg.user}</span>
              <span>{msg.text}</span>
              <span className="block text-xs text-gray-400 mt-1 text-right">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
