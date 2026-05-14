"use client";

import PremiumNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { LuMail, LuPhone, LuMapPin, LuMessageCircle, LuSend, LuArrowRight, LuClock } from "react-icons/lu";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <PremiumNavbar />
      
      {/* 1. Simplified Cinematic Header (No BG Image) */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden bg-white">
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[30vw] font-serif font-bold text-chocolate whitespace-nowrap">CONTACT</span>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-chocolate font-bold uppercase tracking-[0.6em] text-[10px]">Start a Conversation</span>
              <div className="w-12 h-[1px] bg-brand-red" />
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-serif font-bold text-chocolate leading-[0.85] tracking-tighter mb-16">
              Get in <br />
              <span className="text-gold italic font-normal">Touch</span>
            </h1>

            <p className="max-w-2xl mx-auto text-chocolate/40 text-lg font-serif italic">
              "Every great celebration starts with a simple conversation. Let us help you craft your perfect moment."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The "Studio Desk" Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[4rem] bg-white shadow-2xl shadow-chocolate/5 flex flex-col justify-between group h-full border border-chocolate/5"
            >
              <div>
                <div className="w-16 h-16 rounded-[2rem] bg-gold/5 flex items-center justify-center text-gold mb-10 group-hover:bg-chocolate group-hover:text-cream transition-all duration-500">
                  <LuMapPin size={28} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-chocolate mb-6 tracking-tight">Visit the Studio</h3>
                <p className="text-chocolate/60 leading-relaxed text-sm mb-12">
                  123 Luxury Lane, Bakery District, <br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-red group-hover:text-gold transition-colors">
                Find on Maps <LuArrowRight />
              </button>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 rounded-[4rem] bg-chocolate text-cream flex flex-col justify-between h-full shadow-2xl"
            >
              <div>
                <div className="w-16 h-16 rounded-[2rem] bg-white/10 flex items-center justify-center text-gold mb-10">
                  <LuClock size={28} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-cream mb-6 tracking-tight">Baking Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm border-b border-white/10 pb-4">
                    <span className="text-cream/40 uppercase tracking-widest text-[10px]">Mon - Fri</span>
                    <span>10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-white/10 pb-4">
                    <span className="text-cream/40 uppercase tracking-widest text-[10px]">Sat - Sun</span>
                    <span>09:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-cream/60">Currently Open</span>
              </div>
            </motion.div>

            {/* Direct Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 rounded-[4rem] bg-white shadow-2xl shadow-chocolate/5 flex flex-col justify-between group h-full border border-chocolate/5"
            >
              <div>
                <div className="w-16 h-16 rounded-[2rem] bg-brand-red/10 flex items-center justify-center text-brand-red mb-10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  <LuPhone size={28} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-chocolate mb-6 tracking-tight">Immediate Inquiry</h3>
                <div className="space-y-2">
                  <p className="text-chocolate/80 text-sm font-bold tracking-wide">+91 98765 43210</p>
                  <p className="text-chocolate/80 text-sm font-bold tracking-wide">hello@mehfilcakes.com</p>
                </div>
              </div>
              <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-chocolate group-hover:text-brand-red transition-colors">
                Write an Email <LuMail />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. The "Message Manuscript" Form */}
      <section className="pb-40 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto rounded-[5rem] bg-white p-12 md:p-24 shadow-[0_80px_160px_-40px_rgba(74,44,42,0.15)] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-4">
                <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The Message Studio</span>
                <h2 className="text-5xl font-serif font-bold text-chocolate mb-8 leading-tight">
                  Tell us your <br />
                  <span className="text-gold italic font-normal">Vision</span>
                </h2>
                <p className="text-chocolate/60 text-sm leading-relaxed max-w-[250px]">
                  Every cake we craft starts with a conversation. Let us know how we can make your celebration unforgettable.
                </p>
              </div>

              <div className="lg:col-span-8">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  <div className="relative">
                    <input type="text" className="w-full bg-transparent border-b border-chocolate/10 py-4 outline-none focus:border-gold transition-colors peer text-chocolate font-serif text-2xl" placeholder=" " />
                    <label className="absolute left-0 top-4 text-chocolate/40 text-[10px] font-bold uppercase tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4">Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" className="w-full bg-transparent border-b border-chocolate/10 py-4 outline-none focus:border-gold transition-colors peer text-chocolate font-serif text-2xl" placeholder=" " />
                    <label className="absolute left-0 top-4 text-chocolate/40 text-[10px] font-bold uppercase tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4">Email</label>
                  </div>
                  <div className="relative md:col-span-2">
                    <input type="text" className="w-full bg-transparent border-b border-chocolate/10 py-4 outline-none focus:border-gold transition-colors peer text-chocolate font-serif text-2xl" placeholder=" " />
                    <label className="absolute left-0 top-4 text-chocolate/40 text-[10px] font-bold uppercase tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4">Celebration Type (Wedding, Birthday...)</label>
                  </div>
                  <div className="relative md:col-span-2">
                    <textarea rows={2} className="w-full bg-transparent border-b border-chocolate/10 py-4 outline-none focus:border-gold transition-colors peer text-chocolate font-serif text-2xl resize-none" placeholder=" "></textarea>
                    <label className="absolute left-0 top-4 text-chocolate/40 text-[10px] font-bold uppercase tracking-widest pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4">The Vision</label>
                  </div>
                  
                  <div className="md:col-span-2 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-16 py-6 bg-chocolate text-cream rounded-full font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-gold transition-all duration-500"
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
        className="fixed bottom-10 right-10 z-50 flex items-center gap-4 bg-[#25D366] text-white p-4 pl-6 rounded-full shadow-2xl shadow-green-500/40 group"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest overflow-hidden w-0 group-hover:w-28 transition-all duration-500 whitespace-nowrap">Instant Chat</span>
        <LuMessageCircle size={28} />
      </motion.a>

      <Footer />
    </main>
  );
}
