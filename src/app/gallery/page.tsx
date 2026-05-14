"use client";

import PremiumNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/hero-cake.png", size: "row-span-2" },
  { id: 2, src: "/images/cafe-about.png", size: "col-span-2" },
  { id: 3, src: "/images/hero-cake.png", size: "" },
  { id: 4, src: "/images/cafe-about.png", size: "row-span-2" },
  { id: 5, src: "/images/hero-cake.png", size: "col-span-2" },
  { id: 6, src: "/images/cafe-about.png", size: "" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream">
      <PremiumNavbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block"
          >
            Visual Moments
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-chocolate"
          >
            Celebration <span className="text-gold italic font-normal">Gallery</span>
          </motion.h1>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-[2rem] group cursor-pointer ${img.size}`}
              >
                <Image 
                  src={img.src} 
                  alt="Gallery Image" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-chocolate/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full glass border border-white/40 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <span className="text-cream text-xs font-bold uppercase tracking-widest">View</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
