"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextType from "./ui/TextType";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant reveal for the image
      gsap.from(".hero-image-clip", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      });

      // Parallax for the background watermark
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
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#faf7f2] pt-32 lg:pt-40 overflow-hidden">
      {/* Background Watermark */}
      <div className="bg-watermark absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0">
        <h1 className="text-[35vw] font-serif font-bold text-chocolate whitespace-nowrap">MEHFIL</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-chocolate/5 border border-chocolate/5 mb-10">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-chocolate">Luxury Studio • Est. 2015</span>
              </div>

              <h1 className="text-[4.5rem] md:text-[6rem] xl:text-[8rem] font-serif font-bold text-chocolate leading-[0.9] mb-12">
                Bespoke <br />
                <span className="text-gold italic font-normal">Artistry</span>
              </h1>

              <div className="mb-16">
                <div className="text-xl md:text-2xl font-serif text-chocolate/40 mb-4 italic">
                  Experience the luxury of
                </div>
                <div className="min-h-[1.5em]">
                  <TextType 
                    text={[
                      "Handcrafted Excellence",
                      "Premium Amul Quality",
                      "Unforgettable Moments",
                      "Pure Dessert Passion"
                    ]}
                    typingSpeed={40}
                    pauseDuration={2500}
                    className="text-4xl md:text-5xl font-bold text-chocolate"
                    cursorClassName="bg-brand-red h-10 w-[2px]"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-chocolate text-cream rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:bg-brand-red transition-all duration-500"
                >
                  View Collection
                </motion.button>
                
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gold/10 shadow-sm relative overflow-hidden">
                        <Image 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                          alt="Happy Client" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-chocolate/40">
                    Trusted by <br /> <span className="text-chocolate">15,000+ Clients</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-end">
            <div className="hero-image-clip relative w-full aspect-[4/5] md:aspect-square lg:w-[45vw] lg:h-[75vh] rounded-[4rem] lg:rounded-[6rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(74,44,42,0.3)]">
              <Image 
                src="/images/hero-cake.png" 
                alt="Luxury Signature Cake" 
                fill
                className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent" />
              
              {/* Floating Signature Label */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-10 right-10 glass p-8 rounded-[2.5rem] border border-white/20 backdrop-blur-xl flex justify-between items-end"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-2">Signature Item</p>
                  <p className="text-2xl font-serif font-bold text-chocolate">The Amul Velvet</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-chocolate/10 flex items-center justify-center text-chocolate">
                  <LuArrowRight />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-40 right-[-5%] w-64 h-64 border border-gold/10 rounded-full hidden xl:block" />
      <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-brand-red/20" />
    </section>
  );
}
