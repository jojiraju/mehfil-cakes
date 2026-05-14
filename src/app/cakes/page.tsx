"use client";

import PremiumNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { LuPlus, LuArrowRight } from "react-icons/lu";

const categories = ["All", "Signature", "Wedding", "Birthday", "Celebration"];

const cakes = [
  { id: 1, name: "The Golden Velvet", category: "Signature", price: "₹850", image: "/images/mango-silphone.png", color: "bg-[#fdfcf0]" },
  { id: 2, name: "Ethereal Blossom", category: "Wedding", price: "₹1,500", image: "/images/pistachio.png", color: "bg-[#f2fcf2]" },
  { id: 3, name: "Midnight Truffle", category: "Celebration", price: "₹650", image: "/images/choco-almond.png", color: "bg-[#fcf5f2]" },
  { id: 4, name: "Royal Vanilla", category: "Birthday", price: "₹550", image: "/images/spanish-delight.png", color: "bg-[#f2f7fc]" },
  { id: 5, name: "Saffron Dream", category: "Signature", price: "₹900", image: "/images/cheesy-velvet.png", color: "bg-[#fcf2f7]" },
  { id: 6, name: "Ivory Lace", category: "Wedding", price: "₹1,800", image: "/images/tender-coconut.png", color: "bg-[#f7fcfc]" },
];

export default function CakesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCakes = activeCategory === "All" 
    ? cakes 
    : cakes.filter(cake => cake.category === activeCategory);

  return (
    <main className="min-h-screen bg-cream">
      <PremiumNavbar />
      
      {/* Cinematic Header */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] select-none pointer-events-none">
          <span className="text-[25vw] font-serif font-bold text-chocolate whitespace-nowrap">CREATIONS</span>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-chocolate font-bold uppercase tracking-[0.5em] text-[10px]">The 2026 Collection</span>
              <div className="w-12 h-[1px] bg-brand-red" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[8rem] font-serif font-bold text-chocolate mb-16 leading-[0.85]"
            >
              Our Artisan <br />
              <span className="text-gold italic font-normal">Creations</span>
            </motion.h1>

            {/* Premium Filter Bar */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-t border-chocolate/5 pt-12">
              {categories.map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`group relative px-6 py-2 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 ${
                    activeCategory === cat 
                    ? "text-brand-red" 
                    : "text-chocolate/40 hover:text-chocolate"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-brand-red"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Product Grid */}
      <section className="pb-40 px-6">
        <div className="container mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredCakes.map((cake, i) => (
                <motion.div
                  key={cake.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="relative mb-10">
                    {/* Immersive Container */}
                    <div className={`relative aspect-[4/5] rounded-[3rem] overflow-hidden ${cake.color} transition-all duration-700 group-hover:shadow-[0_60px_120px_-30px_rgba(74,44,42,0.25)]`}>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full p-12 flex items-center justify-center"
                      >
                        <Image
                          src={cake.image}
                          alt={cake.name}
                          width={600}
                          height={600}
                          className="object-contain w-full h-full drop-shadow-2xl"
                        />
                      </motion.div>
                      
                      {/* Interactive Corner Badge */}
                      <div className="absolute top-8 right-8">
                        <div className="w-12 h-12 rounded-full glass border border-white/40 flex items-center justify-center text-chocolate group-hover:bg-brand-red group-hover:text-cream transition-all duration-500">
                          <LuPlus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                        </div>
                      </div>

                      {/* Number Overlay */}
                      <span className="absolute bottom-8 left-10 text-8xl font-serif font-bold text-chocolate/5 group-hover:text-gold/10 transition-colors duration-700">
                        {String(cake.id).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Floating Price Seal */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute -bottom-6 -right-4 w-24 h-24 rounded-full bg-chocolate text-cream flex flex-col items-center justify-center shadow-2xl z-20 group-hover:bg-brand-red transition-colors duration-500"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Value</span>
                      <span className="font-serif font-bold text-xl">{cake.price}</span>
                    </motion.div>
                  </div>

                  {/* Refined Metadata */}
                  <div className="px-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-[1px] bg-brand-red/30" />
                      <span className="text-gold font-bold uppercase tracking-[0.4em] text-[9px]">
                        {cake.category} Collection
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-3xl font-serif font-bold text-chocolate leading-tight group-hover:text-gold transition-colors duration-300">
                        {cake.name}
                      </h3>
                      <LuArrowRight className="text-chocolate/20 group-hover:translate-x-2 group-hover:text-gold transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredCakes.length === 0 && (
            <div className="py-40 text-center">
              <p className="text-chocolate/40 font-serif italic text-2xl">No creations found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
