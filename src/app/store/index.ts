import { create } from "zustand";


interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  currentUser: string | null;
  addMessage: (message: Message) => void;
  setCurrentUser: (user: string) => void;
}

const useChatStore = create<ChatState>((set) => ({
  messages: [],
  currentUser: null,
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  setCurrentUser: (user) => set({ currentUser: user }),
}));

export default useChatStore;