"use client";

import PremiumNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { LuArrowRight, LuCalendar, LuUser } from "react-icons/lu";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "The Secret to the Perfect Velvet Texture",
    excerpt: "Discover the artisan techniques our master bakers use to achieve that signature melt-in-your-mouth feel.",
    date: "May 10, 2026",
    author: "Chef Antoine",
    image: "/images/hero-cake.png",
  },
  {
    id: 2,
    title: "Choosing Your Dream Wedding Cake",
    excerpt: "From flavor profiles to floral arrangements, here is your ultimate guide to selecting the perfect centerpiece.",
    date: "May 05, 2026",
    author: "Sara Mehfil",
    image: "/images/cafe-about.png",
  },
  {
    id: 3,
    title: "The Rise of Artisan Café Culture",
    excerpt: "Why the modern bakery experience is moving towards sensory storytelling and emotional branding.",
    date: "April 28, 2026",
    author: "David Ross",
    image: "/images/hero-cake.png",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream">
      <PremiumNavbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-6 block"
          >
            Insights & Stories
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-chocolate"
          >
            The Bakery <span className="text-gold italic font-normal">Journal</span>
          </motion.h1>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-700">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-chocolate/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="px-4">
                  <div className="flex items-center gap-6 mb-4 text-[10px] uppercase tracking-widest font-bold text-chocolate/40">
                    <span className="flex items-center gap-2"><LuCalendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-2"><LuUser size={12} /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-chocolate mb-4 group-hover:text-gold transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-chocolate/60 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs border-b border-transparent group-hover:border-gold transition-all w-fit pb-1">
                    Read More <LuArrowRight size={14} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
