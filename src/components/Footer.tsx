"use client";

import Link from "next/link";
import Image from "next/image";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-chocolate text-cream pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
                <div className="relative w-32 h-16">
                  <Image
                    src="/logo.png"
                    alt="Mehfil Cakes Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mb-8 max-w-xs">
              Crafting premium artisan cakes and providing a cozy café experience since 2015. Every creation is a story of passion and quality.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                <FaFacebookF size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300">
                <FaXTwitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Cakes", "Café Menu", "About Us", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-cream/60 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cake Categories */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Collections</h4>
            <ul className="space-y-4">
              {["Wedding Cakes", "Birthday Cakes", "Signature Studio", "Custom Designs", "Café Specials"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-cream/60 hover:text-gold transition-colors text-sm uppercase tracking-widest">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <LuMapPin className="text-gold mt-1 shrink-0" size={18} />
                <span className="text-cream/60 text-sm leading-relaxed">
                  123 Luxury Lane, Bakery District, <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-4">
                <LuPhone className="text-gold shrink-0" size={18} />
                <span className="text-cream/60 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <LuMail className="text-gold shrink-0" size={18} />
                <span className="text-cream/60 text-sm">hello@mehfilcakes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-cream/40 text-[10px] uppercase tracking-widest">
            © 2026 Mehfil Cakes. All Rights Reserved. Designed for Excellence.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-cream/40 text-[10px] uppercase tracking-widest hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-cream/40 text-[10px] uppercase tracking-widest hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Decorative text reveal on hover or scroll */}
      <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.02] select-none pointer-events-none">
        <span className="text-[25vw] font-serif font-bold text-cream whitespace-nowrap">MEHFIL</span>
      </div>
    </footer>
  );
}
