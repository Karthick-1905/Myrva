"use client";

import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

const navItems = ['Features', 'Coverage', 'How it Works', 'Pricing'] as const;

export default function Header() {
  return (
    <motion.header
      className="relative z-10 bg-white backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easeOutQuint }}
    >
      <nav className="mx-auto px-24 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.div
            className="h-10 flex items-center justify-center"
            whileHover={{ scale: 1.03, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className="text-3xl text-gray-900 leading-none"
              style={{
                fontFamily: '"Permanent Marker", "Comic Sans MS", cursive',
                letterSpacing: '0.02em',
                textShadow: '1px 1px 0px rgba(0,0,0,0.08)',
              }}
            >
              M<span className="text-teal-600">Y</span>RVA
            </span>
          </motion.div>
          
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: easeOutQuint }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* <motion.button
            className="hidden md:block px-5 py-2.5 text-gray-700 hover:text-gray-900 transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign in
          </motion.button> */}
          <motion.button
            className="px-6 py-2.5 bg-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View Architecture
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
