"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuPlus, LuArrowRight } from "react-icons/lu";

const cakes = [
  {
    id: 1,
    name: "Mango Silphone",
    category: "Signature Series",
    price: "₹850",
    image: "/images/mango-silphone.png",
    featured: true,
  },
  {
    id: 2,
    name: "Pistachio Elegance",
    category: "Luxury Collection",
    price: "₹950",
    image: "/images/pistachio.png",
  },
  {
    id: 3,
    name: "Choco Almond",
    category: "Classic Selection",
    price: "₹850",
    image: "/images/choco-almond.png",
  },
  {
    id: 4,
    name: "Spanish Delight",
    category: "Exotic Flavors",
    price: "₹800",
    image: "/images/spanish-delight.png",
  },
  {
    id: 5,
    name: "Cheesy Velvet",
    category: "Luxury Cakes",
    price: "₹900",
    image: "/images/cheesy-velvet.png",
  },
  {
    id: 6,
    name: "Tender Coconut",
    category: "Special Cakes",
    price: "₹750",
    image: "/images/tender-coconut.png",
  },
];

export default function FeaturedCakes() {
  return (
    <section className="py-32 bg-cream relative overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02]">
        <h2 className="text-[30vw] font-serif font-bold text-chocolate whitespace-nowrap -rotate-12 translate-y-1/4">
          SIGNATURE
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-brand-red" />
              <span className="text-chocolate font-bold uppercase tracking-[0.4em] text-[10px]">The 2026 Collection</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-serif font-bold text-chocolate leading-[0.8] tracking-tighter">
              Spotlight <br />
              <span className="text-gold italic font-normal">Creations</span>
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-end"
          >
            <p className="text-chocolate/60 text-right max-w-[280px] mb-8 text-sm leading-relaxed">
              Discover the art of balance, where premium ingredients meet unparalleled craftsmanship.
            </p>
            <button className="group flex items-center gap-4 text-chocolate font-bold uppercase tracking-[0.3em] text-[10px]">
              Explore Full Gallery <LuArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>

        {/* High-End Boutique Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {cakes.map((cake, i) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-10">
                {/* Floating Image with Deep Parallax Shadow */}
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#f3efe8] transition-all duration-700 group-hover:shadow-[0_60px_100px_-30px_rgba(74,44,42,0.25)]">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full p-12 flex items-center justify-center"
                  >
                    <Image
                      src={cake.image}
                      alt={cake.name}
                      width={800}
                      height={800}
                      className="object-contain w-full h-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)]"
                    />
                  </motion.div>
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Large Sequence Number */}
                  <span className="absolute bottom-6 left-8 text-8xl font-serif font-bold text-chocolate/5 group-hover:text-gold/10 transition-colors duration-700">
                    0{i + 1}
                  </span>
                </div>

                {/* Floating Price Badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-chocolate text-cream flex flex-col items-center justify-center shadow-2xl z-20 group-hover:bg-brand-red transition-colors duration-500"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Price</span>
                  <span className="font-serif font-bold text-lg">{cake.price}</span>
                </motion.div>
              </div>

              {/* Sophisticated Text Info */}
              <div className="px-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-[1px] bg-gold" />
                  <span className="text-gold font-bold uppercase tracking-[0.4em] text-[9px]">
                    {cake.category}
                  </span>
                </div>
                
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-serif font-bold text-chocolate leading-tight group-hover:text-gold transition-colors duration-300">
                    {cake.name}
                  </h3>
                  <div className="flex items-center gap-2 text-chocolate/20 text-[10px] font-bold uppercase tracking-widest pb-1">
                    <span>Details</span>
                    <LuPlus className="group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
