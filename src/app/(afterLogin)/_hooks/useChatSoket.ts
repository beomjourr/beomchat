import { useEffect, useCallback } from 'react';
import io, { Socket } from 'socket.io-client';
import { Message } from '../_types/message';

let socket: Socket;

export const useChatSocket = (addMessage: (message: Message) => void) => {
  useEffect(() => {
    // 실제 서버 URL로 대체해야 합니다
    socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Connected to chat server');
    });

    socket.on('message', (message: Message) => {
      addMessage(message);
    });

    return () => {
      socket.disconnect();
    };
  }, [addMessage]);

  const sendMessage = useCallback((message: Message) => {
    socket.emit('sendMessage', message);
  }, []);

  return { sendMessage };
};
