"use client";

import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Footer Container with Background */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-[3rem] p-12 md:p-16 relative overflow-hidden">

          {/* Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 relative z-10">

            {/* Left Side - Branding */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOutQuint }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <span className="text-3xl font-bold text-gray-900">Myrva</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Protect your income and
                <br />
                work with confidence
              </h3>
              <p className="text-gray-600 text-lg">
                AI-powered parametric insurance designed for India&apos;s gig economy workers.
              </p>
            </motion.div>

            {/* Right Side - Links */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOutQuint }}
            >
              <div>
                <ul className="space-y-3">
                  {['About Us', 'Contact', "What's New", 'Careers'].map((link, index) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                    >
                      <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {['Coverage', 'How it Works', 'Integrations', 'Pricing'].map((link, index) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                    >
                      <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                        <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Floating Icons Decoration */}
          <div className="relative h-64 mb-16">
            {[
              { icon: '⋯', delay: 0.1, x: '8%', y: '45%', rotate: -8 },
              { icon: '20', delay: 0.15, x: '22%', y: '15%', rotate: 6 },
              { icon: '✓', delay: 0.2, x: '18%', y: '65%', rotate: -12 },
              { icon: '🕐', delay: 0.25, x: '32%', y: '50%', rotate: 8 },
              { icon: '📁', delay: 0.3, x: '45%', y: '20%', rotate: -5 },
              { icon: '⋮⋮⋮', delay: 0.35, x: '52%', y: '55%', rotate: 10 },
              { icon: '⏱', delay: 0.4, x: '62%', y: '65%', rotate: -6 },
              { icon: '💡', delay: 0.45, x: '75%', y: '25%', rotate: 12 },
              { icon: '»', delay: 0.5, x: '85%', y: '55%', rotate: -8 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute w-20 h-20 bg-white rounded-[1.25rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center cursor-pointer"
                style={{ left: item.x, top: item.y }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: item.rotate }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay, ease: easeOutQuint }}
                whileHover={{
                  scale: 1.15,
                  rotate: 0,
                  y: -8,
                  boxShadow: "0 20px 40px rgb(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <span className="text-3xl font-bold text-gray-900">{item.icon}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutQuint }}
          >
            <p className="text-gray-600 text-sm">© 2026. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms of Service</a>
            </div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}
