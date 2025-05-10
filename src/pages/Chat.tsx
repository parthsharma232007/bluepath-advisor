import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import ChatInterface from "../components/Chat/ChatInterface";

const Chat = () => {
  return (
    <AppLayout>
      <div className="container max-w-7xl mx-auto p-4">
        <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border border-white/5 h-[calc(100vh-140px)]">
          <ChatInterface />
        </div>
      </div>
    </AppLayout>
  );
};

export default Chat;