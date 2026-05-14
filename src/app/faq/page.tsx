"use client";

import PremiumNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";
import { useState } from "react";

const faqs = [
  { q: "How far in advance should I order a custom cake?", a: "For signature celebration cakes, we recommend 3-5 days. For grand wedding cakes, 2-4 weeks is ideal to ensure we can perfectly execute your design." },
  { q: "Do you offer eggless options?", a: "Yes! All our cakes can be made eggless upon request, maintaining the same premium taste and texture." },
  { q: "What dairy products do you use?", a: "We exclusively use Amul butter, cream, and dairy products to ensure the highest quality and authentic Indian dairy richness." },
  { q: "Do you provide home delivery?", a: "We offer premium climate-controlled delivery within a 20km radius of our studio to ensure your cake arrives in pristine condition." },
  { q: "Can I customize the flavor of my cake?", a: "Absolutely. We offer a wide range of premium flavor combinations, and our master bakers can even create a bespoke flavor profile for your special event." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Questions & Answers
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-chocolate"
          >
            Everything You <span className="text-gold italic font-normal">Need to Know</span>
          </motion.h1>
        </div>

        <div className="container mx-auto max-w-3xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-chocolate/5 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-serif font-bold text-chocolate group-hover:text-gold transition-colors">{faq.q}</span>
                  <LuChevronDown className={`text-gold transition-transform duration-500 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-10 pb-10 text-chocolate/60 leading-relaxed border-t border-chocolate/5 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
