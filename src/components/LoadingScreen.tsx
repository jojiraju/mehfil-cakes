"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-chocolate overflow-hidden"
        >
          {/* Ambient Background Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-gold/20 rounded-full blur-[120px]"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[120px]"
            />
          </div>

          {/* Animated Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
            <motion.span 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
              className="text-[30vw] font-serif font-bold text-cream whitespace-nowrap"
            >
              MEHFIL
            </motion.span>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-24 h-24 mb-10"
            >
              <Image 
                src="/logo.png" 
                alt="Mehfil Cakes" 
                fill 
                className="object-contain brightness-0 invert"
                priority
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute inset-0 bg-gold/20 blur-xl rounded-full -z-10"
              />
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-cream tracking-tight">
                Mehfil<span className="text-gold">Cakes</span>
              </h2>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold/60 font-sans mt-2">
                Cake Studio & Café
              </span>
            </motion.div>

            {/* Premium Progress Bar */}
            <div className="relative w-64 h-[1px] bg-white/10 mb-6 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: `${progress - 100}%` }}
                transition={{ ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]"
              />
            </div>
            
            <motion.div
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-4 text-gold/40 font-mono text-[10px] tracking-[0.2em]"
            >
              <span>{progress}%</span>
            </motion.div>
          </div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-gold/20" />
              <span className="text-[9px] uppercase tracking-[0.6em] text-cream/40 font-bold">
                Handcrafted Excellence
              </span>
              <div className="w-8 h-[1px] bg-gold/20" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

