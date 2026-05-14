"use client";

import PremiumNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { LuCoffee, LuIceCreamCone, LuDroplets, LuGlassWater, LuCookie, LuMessageCircle } from "react-icons/lu";
import { useState } from "react";

const menuCategories = [
  { id: "frappe", name: "Frappes", icon: <LuCoffee /> },
  { id: "bubble-tea", name: "Bubble Tea", icon: <LuDroplets /> },
  { id: "brownies", name: "Brownies", icon: <LuCookie /> },
  { id: "ice-cream", name: "Ice Creams", icon: <LuIceCreamCone /> },
  { id: "falooda", name: "Falooda", icon: <LuGlassWater /> },
  { id: "mojitos", name: "Mojitos", icon: <LuGlassWater /> },
];

const menuItems = {
  frappe: [
    { name: "Irish Coffee", price: "130", desc: "Premium espresso with a smooth, velvety finish." },
    { name: "Caramel Coffee", price: "130", desc: "Rich coffee blended with silky caramel." },
    { name: "Belgium Chocolate", price: "130", desc: "Decadent Belgian chocolate meets arabica beans." },
    { name: "Hazelnut Swirl", price: "140", desc: "Roasted hazelnut notes in chilled cream." },
  ],
  "bubble-tea": [
    { name: "Toro Bubble", price: "150", desc: "Classic purple taro with chewy tapioca pearls." },
    { name: "Spanish Macho", price: "150", desc: "A bold, refreshing Spanish-style milk tea." },
    { name: "Coffee Cream", price: "150", desc: "Creamy coffee infusion with honey boba." },
    { name: "Thai Tea", price: "150", desc: "Traditional Thai tea with signature sweetness." },
  ],
  brownies: [
    { name: "Marshmallow Choco", price: "100", desc: "Fudgy brownie topped with toasted marshmallows." },
    { name: "Butterscotch Brownie", price: "120", desc: "Sweet butterscotch swirled in rich cocoa." },
    { name: "Anjeer Brownie", price: "150", desc: "Exotic fig infused artisan brownie." },
    { name: "Tender Coconut", price: "180", desc: "Fresh coconut flakes in a chocolate base." },
  ],
  "ice-cream": [
    { name: "Alphonso Mango", price: "100", desc: "Pure Ratnagiri mango pulp indulgence." },
    { name: "American Nuts", price: "110", desc: "Crunchy roasted nuts in creamy vanilla." },
    { name: "Kesar Pista", price: "140", desc: "Traditional saffron and pistachio richness." },
  ],
  falooda: [
    { name: "Royal Kulfi Falooda", price: "180", desc: "Kulfi chunks, vermicelli, and rose syrup." },
    { name: "Chocolate Brownie", price: "210", desc: "The ultimate fusion of brownie and falooda." },
    { name: "Raj Bhog", price: "180", desc: "Saffron milk with dry fruits and mawa." },
  ],
  mojitos: [
    { name: "Virgin Mint", price: "70", desc: "Fresh muddled mint, lime, and sparkling soda." },
    { name: "Blue Ocean", price: "80", desc: "A tropical blue refreshment with citrus notes." },
    { name: "Passion Fruit", price: "80", desc: "Exotic passion fruit with a zesty finish." },
  ],
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("frappe");

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <PremiumNavbar />
      
      {/* Cinematic Header */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden bg-white">
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[30vw] font-serif font-bold text-chocolate whitespace-nowrap">CAFÉ</span>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-chocolate font-bold uppercase tracking-[0.6em] text-[10px]">Artisan Experience</span>
              <div className="w-12 h-[1px] bg-brand-red" />
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-serif font-bold text-chocolate leading-[0.85] tracking-tighter mb-12">
              Our <span className="text-gold italic font-normal">Café</span> <br />
              Selection
            </h1>

            <p className="max-w-2xl mx-auto text-chocolate/40 text-lg font-serif italic">
              "Crafted with the same passion as our cakes. A symphony of flavors in every cup and bowl."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Boutique Category Bar */}
      <section className="py-20 px-6 sticky top-20 z-40 bg-[#faf7f2]/80 backdrop-blur-xl border-y border-chocolate/5">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-2 transition-all duration-500 group`}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-xl transition-colors duration-500 ${activeTab === cat.id ? "text-brand-red" : "text-chocolate/20 group-hover:text-chocolate/60"}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${
                    activeTab === cat.id ? "text-chocolate" : "text-chocolate/40 group-hover:text-chocolate"
                  }`}>
                    {cat.name}
                  </span>
                </div>
                {activeTab === cat.id && (
                  <motion.div 
                    layoutId="menuActive"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand-red"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Menu Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 max-w-6xl mx-auto"
            >
              {menuItems[activeTab as keyof typeof menuItems].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="flex justify-between items-baseline border-b border-chocolate/5 pb-6 mb-6 group-hover:border-gold/30 transition-colors duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-gold/20 group-hover:bg-brand-red transition-colors duration-500" />
                      <h3 className="text-3xl font-serif font-bold text-chocolate group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-chocolate/20">INR</span>
                       <span className="text-2xl font-serif font-bold text-chocolate group-hover:text-brand-red transition-colors duration-500">
                        {item.price}
                      </span>
                    </div>
                  </div>
                  <p className="text-chocolate/60 text-sm leading-relaxed max-w-sm font-serif italic pl-6 group-hover:text-chocolate transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* WhatsApp Floating Experience */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="fixed bottom-10 right-10 z-50 flex items-center gap-4 bg-chocolate text-white p-4 pl-6 rounded-full shadow-2xl shadow-chocolate/20 group border border-white/10"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest overflow-hidden w-0 group-hover:w-32 transition-all duration-500 whitespace-nowrap">Café Concierge</span>
        <div className="relative">
          <LuMessageCircle size={28} />
          <div className="absolute top-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-chocolate animate-pulse" />
        </div>
      </motion.a>

      <Footer />
    </main>
  );
}
