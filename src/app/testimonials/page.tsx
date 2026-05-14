"use client";

import PremiumNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { LuQuote, LuStar } from "react-icons/lu";
import Image from "next/image";

const testimonials = [
  { 
    name: "Ananya Sharma", 
    role: "Wedding Client", 
    text: "Mehfil Cakes created our 4-tier wedding masterpiece. It wasn't just a cake; it was the highlight of the evening. The taste was divine!", 
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya"
  },
  { 
    name: "Rahul Verma", 
    role: "Birthday Party", 
    text: "The custom chocolate truffle cake was exactly what I imagined. Premium quality and the delivery was perfectly on time.", 
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  },
  { 
    name: "Sneha Kapoor", 
    role: "Café Regular", 
    text: "My favorite spot for a weekend frappe and brownie. The atmosphere is so cozy and the service is truly premium.", 
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha"
  },
  { 
    name: "Vikram Malhotra", 
    role: "Corporate Event", 
    text: "Professional, punctual, and absolutely delicious. Mehfil Cakes is our go-to for all brand events.", 
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram"
  },
  { 
    name: "Priya Das", 
    role: "Engagement", 
    text: "The gold leaf detailing was breathtaking. Everyone asked where we got it. Thank you for making our day so special!", 
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  { 
    name: "Arjun Mehta", 
    role: "Custom Order", 
    text: "Truly artisan. You can taste the quality of the Amul cream in every bite. Highly recommended for luxury events.", 
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <PremiumNavbar />
      
      {/* Cinematic Header */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] select-none pointer-events-none">
          <span className="text-[25vw] font-serif font-bold text-chocolate whitespace-nowrap">VOICES</span>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-brand-red" />
            <span className="text-chocolate font-bold uppercase tracking-[0.5em] text-[10px]">Client Stories</span>
            <div className="w-12 h-[1px] bg-brand-red" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8rem] font-serif font-bold text-chocolate mb-12 leading-[0.85]"
          >
            Kind Words & <br />
            <span className="text-gold italic font-normal">Sweet Reviews</span>
          </motion.h1>
        </div>
      </section>

      {/* Boutique Testimonial Grid */}
      <section className="pb-40 px-6">
        <div className="container mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid bg-white p-12 rounded-[3.5rem] relative group border border-chocolate/5 shadow-2xl shadow-chocolate/5 hover:shadow-[0_40px_80px_-20px_rgba(74,44,42,0.1)] transition-all duration-700"
              >
                {/* Gold Seal Header */}
                <div className="flex justify-between items-center mb-10">
                   <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <LuStar key={j} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <LuQuote size={32} className="text-chocolate/5 group-hover:text-gold/20 transition-colors duration-500" />
                </div>

                <p className="text-2xl font-serif text-chocolate leading-relaxed mb-12 italic">
                  "{t.text}"
                </p>

                {/* Boutique Client Profile */}
                <div className="flex items-center justify-between pt-8 border-t border-chocolate/5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gold/5 relative">
                      <Image 
                        src={t.image} 
                        alt={t.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-chocolate uppercase tracking-widest text-xs mb-1">{t.name}</h4>
                      <span className="text-chocolate/40 text-[9px] font-bold uppercase tracking-[0.2em]">{t.role}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-chocolate/5 flex items-center justify-center text-chocolate/20 group-hover:bg-brand-red group-hover:text-cream transition-all duration-500">
                    <LuStar size={12} />
                  </div>
                </div>

                {/* Decorative Foil Accent */}
                <div className="absolute top-0 right-12 w-[2px] h-8 bg-gradient-to-b from-gold/40 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Submission CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-24 rounded-[5rem] bg-chocolate text-center relative overflow-hidden"
          >
             {/* Abstract Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--gold)_1px,_transparent_1px)] bg-[length:40px_40px]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-8">Part of Your <span className="text-gold italic font-normal">Celebration?</span></h2>
              <p className="text-cream/60 text-lg mb-12 max-w-2xl mx-auto">
                We'd love to hear your story. Your feedback helps us continue our journey of baking excellence.
              </p>
              <button className="px-12 py-5 bg-gold text-chocolate rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-cream transition-colors duration-500">
                Share Your Experience
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
