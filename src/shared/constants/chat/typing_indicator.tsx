import { motion } from "framer-motion";

const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-pink-400 rounded-xl rounded-bl-sm w-fit">

      {[0,1,2].map((dot) => (
        <motion.span
          key={dot}
          className="w-1.5 h-1.5 bg-white rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: dot * 0.15
          }}
        />
      ))}

    </div>
  );
};

export default TypingIndicator;