
import React from "react";
import { motion } from "framer-motion";

type MessageType = "user" | "ai";

interface ChatMessageProps {
  message: string;
  type: MessageType;
  timestamp?: Date;
}

const ChatMessage = ({ message, type, timestamp }: ChatMessageProps) => {
  const messageTime = timestamp ? new Intl.DateTimeFormat('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
  }).format(timestamp) : '';

  const containerClass = type === "user" ? "chat-message-user" : "chat-message-ai";
  
  const animation = {
    initial: { 
      opacity: 0, 
      y: 10,
      x: type === "user" ? 20 : -20
    },
    animate: { 
      opacity: 1, 
      y: 0,
      x: 0
    },
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      className={`${containerClass} relative mb-4`}
    >
      <div className="flex flex-col">
        <div className="prose prose-invert max-w-none">
          {message}
        </div>
        {timestamp && (
          <span className="text-xs text-muted-foreground mt-2 self-end">
            {messageTime}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
