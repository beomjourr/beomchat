'use client';

import React, { KeyboardEvent, useEffect, useState } from 'react';
import useChatStore from '../../store';

const ChatWindow = () => {
  const { messages, addMessage, setCurrentUser, currentUser } = useChatStore();
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    setCurrentUser('범주');
  }, [])

  const handleSend = () => {
    console.log('나는?', newMessage, currentUser)
    if (newMessage.trim() && currentUser) {
      addMessage({
        id: Date.now().toString(),
        sender: currentUser,
        content: newMessage,
        timestamp: new Date(),
      });
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 폼 제출 방지
      handleSend();
    }
  };

  return (
    <div className="chat-window">
      <div className="message-list">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.sender}: </strong>{msg.content}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;