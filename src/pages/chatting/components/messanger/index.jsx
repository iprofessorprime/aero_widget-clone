import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://192.168.0.201:4000");

const Messanger = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null); 
  const messageContainerRef = useRef(null); 

  useEffect(() => {
    setUserId(Date.now().toString());

    // Listen for incoming messages
    socket.on("new-message", (newMessage) => {
      console.log("Message received:", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("new-message");
    };
  }, []);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message && userId) {
      const receiverId = null; 
      socket.emit("send-message", { senderId: userId, receiverId, message });
      setMessage(""); 
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <div
        ref={messageContainerRef}
        style={{
          marginTop: "20px",
          maxHeight: "200px",
          overflowY: "scroll",
          borderRadius: "10px",
          border: "1px solid grey",
          padding: "10px",
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              padding: "5px 0",
              borderBottom: "1px solid #ddd",
              display: "flex",
              justifyContent:
                msg.senderId === userId ? "flex-end" : "flex-start",
              textAlign: msg.senderId === userId ? "right" : "left",
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "10px",
                backgroundColor:
                  msg.senderId === userId ? "#dcf8c6" : "#f1f1f1",
                color: msg.senderId === userId ? "#000" : "#000",
                wordWrap: "break-word",
              }}
            >
              <strong>{msg.senderId}</strong>: {msg.message}{" "}
              <div style={{ fontSize: "8px", textAlign: "end" }}>
                {formatTimestamp(msg.timestamp)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            display: "block",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messanger;
