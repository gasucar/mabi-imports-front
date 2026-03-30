import { useEffect, useRef, useState } from "react";
import ChatMessage from "../../../shared/constants/chat/chat_message";
import { motion } from "framer-motion";
import { useChat } from "../../ai_assistant/chat/hooks/use_chat";

const ChatMock = () => {

    const [step, setStep] = useState(0);
    const { setIsOpen } = useChat();
    

    const containerRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    // timeline de mensajes
    useEffect(() => {

        const timers = [
            setTimeout(() => setStep(1), 1200),
            setTimeout(() => setStep(2), 3300),
            setTimeout(() => setStep(3), 5300),
            setTimeout(() => setStep(4), 6700),
        ];

        return () => timers.forEach(clearTimeout);

    }, []);

    // scroll siempre al último mensaje
    useEffect(() => {

        const container = containerRef.current;

        if (!container) return;

        container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth",
        });

    }, [step]);

    return (

        <div
            ref={containerRef}
            className= "flex flex-col gap-4 overflow-y-auto h-full pr-2 scroll-smooth"
            
        >

            {step >= 1 && (
                <ChatMessage sender="ai">
                    Bienvenido! Soy Perfumina, activa 24/7 para encontrar
                    el perfume ideal para vos.
                </ChatMessage>
            )}

            {step >= 2 && (
                <ChatMessage sender="user">
                    Me gustan los aromas frescos y juveniles.
                </ChatMessage>
            )}

            {step >= 3 && (
                <ChatMessage sender="ai">
                    Genial! Ahora te muestro las mejores opciones que tenemos en stock para vos.

                    <div className="mt-3 bg-neutral-900 rounded-lg p-3 animate-pulse">

                        <div className="h-3 w-20 bg-neutral-700 rounded mb-2" />

                        <div className="h-3 w-40 bg-neutral-700 rounded mb-2" />

                        <div className="h-3 w-32 bg-neutral-700 rounded" />

                    </div>

                </ChatMessage>
            )}

            {step >= 4 && (

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center pt-2"
                >

                    <motion.button
                        animate={{
                            scale: [1, 1.06, 1],
                        }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="
                        bg-black
                        text-white
                        text-sm
                        px-4
                        py-2
                        rounded-full
                        hover:opacity-80
                        transition
                        shadow-lg
                        border border-pink-400
                        cursor-pointer
                        "
                        onClick={() => setIsOpen(true)}
                    >
                        Probalo ahora!
                    </motion.button>

                </motion.div>

            )}

            <div ref={bottomRef} />

        </div>
    );
};

export default ChatMock;