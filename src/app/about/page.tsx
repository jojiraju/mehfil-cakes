"use client";

import PremiumNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuHeart, LuStar, LuAward, LuCoffee, LuArrowRight } from "react-icons/lu";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for the heritage image
      gsap.to(".heritage-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".heritage-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Background text parallax
      gsap.to(".bg-watermark", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#faf7f2] overflow-hidden">
      <PremiumNavbar />
      
      {/* 1. Simplified Modern Hero Section (No BG Image) */}
      <section className="relative pt-60 pb-32 px-6 overflow-hidden bg-white">
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[30vw] font-serif font-bold text-chocolate whitespace-nowrap">HERITAGE</span>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-brand-red" />
              <span className="text-chocolate font-bold uppercase tracking-[0.6em] text-[10px]">Since 2015</span>
              <div className="w-12 h-[1px] bg-brand-red" />
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-serif font-bold text-chocolate leading-[0.85] tracking-tighter mb-16">
              Our <br />
              <span className="text-gold italic font-normal">Heritage</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto text-xl text-chocolate/40 font-serif italic"
            >
              "A journey of flour, sugar, and soul. Discover the passion behind every slice."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Philosophy (Split Canvas) */}
      <section className="heritage-section relative py-40 bg-[#faf7f2]">
        {/* Background Watermark */}
        <div className="bg-watermark absolute top-0 right-0 opacity-[0.02] select-none pointer-events-none z-0">
          <span className="text-[30vw] font-serif font-bold text-chocolate whitespace-nowrap">CRAFT</span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Philosophy</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-chocolate leading-[0.9]">
                  Excellence <br />
                  <span className="text-gold italic font-normal">with Integrity</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-chocolate/70 text-lg leading-relaxed font-serif">
                <p className="border-l-4 border-gold/20 pl-8">
                  Mehfil Cakes was born out of a desire to redefine the bakery experience. We believe that a cake is more than just a dessert—it's a celebration of a moment, a memory in the making.
                </p>
                <p>
                  Our commitment to quality starts with our ingredients. By partnering with Amul, we ensure that every bite carries the richness of pure dairy and the authenticity of traditional flavors, elevated by modern pastry techniques.
                </p>
                <div className="flex items-center gap-6 pt-6">
                  <div className="w-20 h-20 rounded-full border border-chocolate/5 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <Image src="/logo.png" alt="Mehfil" width={40} height={40} className="object-contain" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-chocolate/40 leading-tight">
                    Artisan Crafted <br /> <span className="text-chocolate">In Mumbai, MH</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(74,44,42,0.3)]"
            >
              <div className="heritage-image relative w-full h-[120%] -top-[10%]">
                <Image 
                  src="/images/gallery-3.png" 
                  alt="Artisan Process" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Core Values (Boutique Cards) */}
      <section className="py-40 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">The Mastery</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-chocolate">The Pillars of Our Craft</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <LuHeart />, title: "Made with Love", desc: "Every recipe is a personal expression of our passion for baking." },
              { icon: <LuStar />, title: "Premium Quality", desc: "100% Amul dairy products and the finest global ingredients." },
              { icon: <LuAward />, title: "Artisan Design", desc: "Bespoke cake artistry tailored to your unique celebration." },
              { icon: <LuCoffee />, title: "Cozy Experience", desc: "A sanctuary for dessert lovers and coffee enthusiasts." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 bg-[#faf7f2] rounded-[3.5rem] hover:bg-chocolate hover:text-cream transition-all duration-700 relative overflow-hidden border border-chocolate/5"
              >
                {/* Background Decoration */}
                <div className="absolute -bottom-4 -right-4 text-9xl opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700">
                   {value.icon}
                </div>

                <div className="w-16 h-16 rounded-[1.5rem] bg-white shadow-xl shadow-chocolate/5 flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-chocolate transition-all duration-700">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-6">{value.title}</h3>
                <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-80 mb-8">{value.desc}</p>
                
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-red group-hover:text-gold transition-colors">
                  Learn More <LuArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Amul Partnership (Boutique Highlight) */}
      <section className="py-40 bg-[#faf7f2]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto rounded-[5rem] bg-white p-12 md:p-24 shadow-[0_80px_160px_-40px_rgba(74,44,42,0.1)] relative overflow-hidden border border-chocolate/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/5 border border-gold/10 mb-8">
                  <span className="w-2 h-2 rounded-full bg-brand-red" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Heritage Partnership</span>
                </div>
                <h2 className="text-5xl font-serif font-bold text-chocolate mb-10 leading-tight">
                  The Gold Standard <br />
                  <span className="text-gold italic font-normal">of Pure Dairy</span>
                </h2>
                <p className="text-chocolate/60 text-lg leading-relaxed mb-12 font-serif italic">
                  "Our partnership with Amul is not just about ingredients; it's about a shared legacy of quality that defines every masterpiece we create."
                </p>
                <div className="flex items-center gap-10">
                  <div className="px-8 py-4 bg-chocolate text-cream rounded-full font-bold uppercase tracking-[0.3em] text-[10px]">
                    Certified Quality
                  </div>
                  <div className="w-24 h-1px bg-chocolate/10" />
                </div>
              </div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden">
                 <Image src="/images/amul-banner.png" alt="Amul Heritage" fill className="object-cover" />
                 <div className="absolute inset-0 bg-chocolate/10 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
