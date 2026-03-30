import { useState } from "react";
import { ChatContext } from "../hooks/chat_context";


export const ChatProvider = ({ children }: { children: React.ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  setTimeout(() => setIsVisible(true),500)

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, isVisible, setIsVisible }}>
      {children}
    </ChatContext.Provider>
  );
};