"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuShieldCheck, LuLeaf, LuAward } from "react-icons/lu";

export default function AmulPartnership() {
  return (
    <section className="py-32 bg-[#faf7f2] relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f3efe8] -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Content - The Promise */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <LuAward className="text-brand-red w-6 h-6" />
                <span className="text-chocolate font-bold uppercase tracking-[0.4em] text-[10px]">Quality Heritage</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-chocolate mb-10 leading-[1.1]">
                A Foundation of <br />
                <span className="text-gold italic font-normal">Pure Excellence.</span>
              </h2>
              
              <p className="text-chocolate/60 text-lg leading-relaxed mb-12 max-w-xl">
                Luxury isn't just about the finish; it's about the foundation. Every Mehfil creation is built upon the legendary quality of Amul—India&apos;s most trusted dairy heritage.
              </p>

              {/* Interactive Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { 
                    icon: <LuShieldCheck />, 
                    title: "100% Pure Amul", 
                    desc: "Authentic butter & cream in every single bite." 
                  },
                  { 
                    icon: <LuLeaf />, 
                    title: "No Preservatives", 
                    desc: "Fresh, natural ingredients for genuine flavor." 
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-[2rem] bg-white shadow-[0_20px_40px_-10px_rgba(74,44,42,0.05)] border border-chocolate/5 group transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gold/5 flex items-center justify-center text-gold mb-6 group-hover:bg-brand-red group-hover:text-cream transition-colors duration-500">
                      {item.icon}
                    </div>
                    <h4 className="text-chocolate font-bold uppercase tracking-widest text-xs mb-3">{item.title}</h4>
                    <p className="text-chocolate/40 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - The Iconic Seal */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Layered Decorative Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-[120%] h-[120%] border border-dashed border-gold/20 rounded-full"
                />
                <div className="w-[110%] h-[110%] border border-chocolate/5 rounded-full" />
              </div>

              {/* The "Amul Seal" Card */}
              <div className="relative z-10 w-80 h-96 md:w-[28rem] md:h-[32rem] glass-card bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(74,44,42,0.2)] border border-white flex flex-col items-center justify-center p-12 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-chocolate/40 block mb-8">Official Quality Partner</span>
                  <h3 className="text-7xl md:text-9xl font-serif font-bold text-chocolate mb-2 tracking-tighter">Amul</h3>
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-8 h-[1px] bg-gold" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">The Taste of India</span>
                    <div className="w-8 h-[1px] bg-gold" />
                  </div>
                </motion.div>

                <p className="text-chocolate/40 text-[10px] uppercase tracking-[0.2em] font-bold text-center max-w-[200px] leading-relaxed">
                  Trusted dairy heritage integrated into every Mehfil masterpiece.
                </p>
                
                {/* Decorative floating dots */}
                <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-brand-red/20" />
                <div className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-gold/20" />
              </div>

              {/* Accents */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 glass p-6 rounded-3xl border border-white/40 backdrop-blur-xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <LuAward />
                  </div>
                  <span className="text-[10px] font-bold text-chocolate uppercase tracking-widest">Certified Fresh</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
