
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  // Auto-resize textarea based on content
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    setMessage(target.value);
    
    // Reset height to auto to get the right scrollHeight
    target.style.height = "auto";
    // Set the height to scrollHeight to expand the textarea
    target.style.height = `${Math.min(target.scrollHeight, 200)}px`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-secondary/20 backdrop-blur-sm border border-white/5 rounded-xl p-2 shadow-lg"
    >
      <div className="flex items-end gap-2">
        <textarea
          ref={inputRef}
          value={message}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your career path..."
          className="neo-input resize-none min-h-[44px] max-h-[200px] overflow-y-auto"
          disabled={disabled}
          rows={1}
        />
        <button
          onClick={handleSendMessage}
          disabled={!message.trim() || disabled}
          className={`${
            !message.trim() || disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90 active:scale-[0.98]"
          } bg-primary text-primary-foreground rounded-lg p-3 transition-all duration-200`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="m3 3 3 9-3 9 19-9Z" />
            <path d="M6 12h16" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ChatInput;
