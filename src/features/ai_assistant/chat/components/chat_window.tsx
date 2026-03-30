import { motion } from "framer-motion";
import ChatMessage from "../../../../shared/constants/chat/chat_message";
import { useEffect, useRef, useState } from "react";
import perfuminaIcon from "../../../../assets/icons/perfumina_icon.png";
import { useChat } from "../hooks/use_chat";
import TypingIndicator from "../../../../shared/constants/chat/typing_indicator";
import { sendChatMessage } from "../../api/chat_api";

const ChatWindow = () => {

  const { isOpen, setIsOpen } = useChat();

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);


  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Perfumina. Tell me what scents you like."
    }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userText = input;

    const userMessage = {
      sender: "user",
      text: userText
    };

    setMessages(prev => [...prev, userMessage]);

    setInput("");

    setIsTyping(true);

    try {

      const data = await sendChatMessage(userText);

      await new Promise((resolve) =>
        setTimeout(resolve, 800 + Math.random() * 1200)
      );

      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: data.response
        }
      ]);

    } catch (err) {
      console.log(err);
      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, something went wrong. Please try again."
        }
      ]);

    } finally {
      setIsTyping(false);
    }

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      fixed
      bottom-6
      right-6
      w-90
      h-130
      bg-neutral-900
      border-2
      border-neutral-800
      rounded-2xl
      shadow-2xl
      flex
      flex-col
      overflow-hidden
      z-50
      "
    >

      {/* HEADER */}

      <div className="bg-neutral-950 flex items-center justify-between px-4 py-3 border-b border-neutral-800">

        <div className="flex items-center gap-3">

          <img
            src={perfuminaIcon}
            className="w-9 h-9 rounded-full bg-pink-400"
          />

          <div>
            <p className="text-sm font-medium text-white">
              Perfumina AI
            </p>

            <p className="text-xs text-neutral-400 tracking-wide">
              PERSONAL PERFUMER
            </p>
          </div>

        </div>

        <div className="flex items-center gap-3">

          {/* online indicator */}

          <div className="w-2 h-2 bg-green-500 rounded-full" />

          <button
            onClick={() => setIsOpen(false)}
            className="text-neutral-400 hover:text-white text-sm"
          >
            ✕
          </button>

        </div>

      </div>

      {/* MESSAGES */}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {messages.map((m, i) => (
          <ChatMessage key={i} sender={m.sender as "ai" | "user"}>
            {m.text}
          </ChatMessage>
        ))}

        {isTyping && <TypingIndicator />}

        <div ref={messagesEndRef} />

      </div>

      {/* INPUT */}

      <div className="border-t border-neutral-800 p-3 flex gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="
          flex-1
          bg-neutral-800
          text-white
          rounded-full
          px-4
          py-2
          text-sm
          outline-none
          "
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button
          onClick={sendMessage}
          className="
          bg-white
          text-black
          px-4
          rounded-full
          text-sm
          cursor-pointer
          "
        >
          Send
        </button>

      </div>

    </motion.div>

  );
};

export default ChatWindow;