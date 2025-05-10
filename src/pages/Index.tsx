import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

const Index = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="container py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Career Guidance Reimagined
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            >
              Navigate Your Career Path With <span className="text-primary">AI Precision</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground text-lg mb-8"
            >
              CareerNexus analyzes your skills, experience, and goals to provide personalized career guidance, helping you make informed decisions about your professional future.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4 mb-8"
            >
              <button
                onClick={() => navigate("/signin")}
                className="btn-primary"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-2 rounded-lg transition duration-200 ease-in-out"
              >
                Sign Up
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Personalized career path recommendations</p>
              </div>
              
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Skill gap analysis and learning recommendations</p>
              </div>
              
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Industry insights and market trend analysis</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border border-white/5 h-[600px]">
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-white/5">
                  <h3 className="text-lg font-semibold">Career AI Assistant</h3>
                </div>
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                  <div className="chat-message-ai">
                    Hello! I'm your AI Career Counselor. I can help you explore career paths, analyze your skills, and provide personalized guidance.
                  </div>
                  <div className="chat-message-user">
                    I'm interested in transitioning into tech. Can you help me?
                  </div>
                  <div className="chat-message-ai">
                    Of course! I'd be happy to help you explore tech careers. First, could you tell me about your current background and what areas of tech interest you?
                  </div>
                  <div className="chat-message-user">
                    I have a marketing background and I'm interested in UX design.
                  </div>
                  <div className="chat-message-ai">
                    That's great! Your marketing experience could be very valuable in UX design. Let's explore how your current skills can transfer and what additional skills you might need to develop.
                  </div>
                </div>
                <div className="p-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <input type="text" placeholder="Sign in to start chatting..." disabled className="neo-input" />
                    <button className="btn-primary px-6" disabled>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 text-center" 
          id="features"
        >
          <h2 className="text-3xl font-bold mb-12">Advanced Career Guidance Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Insights</h3>
              <p className="text-muted-foreground">Receive tailored career advice based on your unique skills, experience, and aspirations.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning Pathways</h3>
              <p className="text-muted-foreground">Discover the skills and qualifications needed to advance in your chosen career path.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-muted-foreground">Stay informed about industry trends, salary expectations, and job market demands.</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-24 text-center pb-12" 
          id="about"
        >
          <h2 className="text-3xl font-bold mb-6">About CareerNexus</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            CareerNexus was developed to bridge the gap between career aspirations and professional realities. Our AI career counselor combines the latest in artificial intelligence with comprehensive career data to provide guidance that's as unique as your career journey.
          </p>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Index;