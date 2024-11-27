import React, { useState } from 'react';
import { BotIcon, BotIconContainer, IconInner, Layout, Messages } from './simpleChtBotStyles';

const SimpleChatBot = () => {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [inputValue, setInputValue] = useState(''); // State to store input field value
  const [isOpen, setIsOpen] = useState(false); // State to toggle chatbot visibility

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: inputValue, sender: 'user' }]);
      setInputValue('');

      // Simulating bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response!', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <BotIcon onClick={toggleChat}>
        <BotIconContainer className="botIconContainer">
          <IconInner className="iconInner">Ⓜ️</IconInner>
        </BotIconContainer>
        {isOpen && (
          <Layout className="Layout Layout-open Layout-expand Layout-right">
            <div className="Messenger_messenger">
              <div className="Messenger_header">
                <h4 className="Messenger_prompt">How can we help you?</h4>
                <span className="chat_close_icon" onClick={toggleChat}>
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </span>
              </div>
              <div className="Messenger_content">
                <Messages className="Messages">
                  <div className="Messages_list">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`Message Message-${message.sender}`}
                        style={{
                          textAlign: message.sender === 'user' ? 'right' : 'left',
                          margin: '5px 0',
                        }}
                      >
                        {message.text}
                      </div>
                    ))}
                  </div>
                </Messages>
                <form id="messenger" onSubmit={handleSendMessage}>
                  <div className="Input Input-blank">
                    <textarea
                      name="msg"
                      className="Input_field"
                      placeholder="Send a message..."
                      value={inputValue}
                      onChange={handleInputChange}
                    ></textarea>
                    <button type="submit" className="Input_button Input_button-send">
                      <div className="Icon">{`>`}</div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Layout>
        )}
      </BotIcon>
    </div>
  );
};

export default SimpleChatBot;
