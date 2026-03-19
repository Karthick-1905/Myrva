"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp, slideInLeft, slideInRight, easeOutQuint } from "@/lib/animations";

const platformIcons = [
  { bg: 'bg-orange-500', letter: 'S', delay: 0.5 },
  { bg: 'bg-red-600', letter: 'Z', delay: 0.6 },
  { bg: 'bg-purple-600', letter: 'P', delay: 0.7 }
] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"
        {...fadeIn}
        transition={{ duration: 0.4 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-16 min-h-[calc(100vh-88px)]">

        <motion.div
          className="absolute -left-20 top-8 hidden lg:block"
          {...slideInLeft}
          transition={{ duration: 1.2, delay: 0.3, ease: easeOutQuint }}
        >
          {/* Sticky Note with Tissue Paper Texture */}
          <motion.div
            className="relative w-64 h-56 transform -rotate-6"
            whileHover={{ rotate: -3, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            {/* Realistic Push Pin */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Pin needle */}
                <motion.line
                  x1="12" y1="16" x2="12" y2="31"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                />
                {/* Pin head - metallic rim */}
                <circle cx="12" cy="8" r="7" fill="#B91C1C" />
                <circle cx="12" cy="8" r="6" fill="#DC2626" />
                {/* Subtle shine effect - only on top left */}
                <ellipse cx="9.5" cy="6.5" rx="2" ry="2.5" fill="#EF4444" opacity="0.4" />
              </svg>
            </div>

            {/* Note Paper with Texture */}
            <div 
              className="w-full h-full rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 relative overflow-hidden"
              style={{
                background: '#fef3c7',
                backgroundImage: `
                  linear-gradient(135deg, #fef9c3 0%, #fef08a 50%, #fde68a 100%),
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)
                `,
              }}
            >
              {/* Paper fiber texture overlay */}
              <div 
                className="absolute inset-0 opacity-25 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Paper Wrinkles - Multiple diagonal creases */}
              <div className="absolute inset-0 opacity-20">
                {/* Wrinkle 1 - Top left diagonal */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: `
                      linear-gradient(125deg, 
                        transparent 0%, 
                        transparent 15%, 
                        rgba(0,0,0,0.08) 15.5%, 
                        rgba(255,255,255,0.3) 16%, 
                        rgba(0,0,0,0.06) 16.5%, 
                        transparent 17%, 
                        transparent 100%
                      )
                    `,
                  }}
                />
                {/* Wrinkle 2 - Center diagonal */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        transparent 0%, 
                        transparent 45%, 
                        rgba(0,0,0,0.06) 45.5%, 
                        rgba(255,255,255,0.25) 46%, 
                        rgba(0,0,0,0.05) 46.5%, 
                        transparent 47%, 
                        transparent 100%
                      )
                    `,
                  }}
                />
                {/* Wrinkle 3 - Bottom right */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: `
                      linear-gradient(145deg, 
                        transparent 0%, 
                        transparent 68%, 
                        rgba(0,0,0,0.07) 68.5%, 
                        rgba(255,255,255,0.35) 69%, 
                        rgba(0,0,0,0.05) 69.5%, 
                        transparent 70%, 
                        transparent 100%
                      )
                    `,
                  }}
                />
                {/* Subtle horizontal wrinkle */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: `
                      linear-gradient(175deg, 
                        transparent 0%, 
                        transparent 32%, 
                        rgba(0,0,0,0.04) 32.5%, 
                        rgba(255,255,255,0.2) 33%, 
                        rgba(0,0,0,0.04) 33.5%, 
                        transparent 34%, 
                        transparent 100%
                      )
                    `,
                  }}
                />
                {/* Random crease near bottom */}
                <div 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: `
                      linear-gradient(155deg, 
                        transparent 0%, 
                        transparent 78%, 
                        rgba(0,0,0,0.05) 78.5%, 
                        rgba(255,255,255,0.25) 79%, 
                        rgba(0,0,0,0.04) 79.5%, 
                        transparent 80%, 
                        transparent 100%
                      )
                    `,
                  }}
                />
              </div>
              
              {/* Handwritten Text */}
              <div className="relative z-10 flex items-center justify-center h-full pt-4">
                <p 
                  className="text-gray-800 text-lg leading-relaxed text-center"
                  style={{
                    fontFamily: '"Permanent Marker", "Comic Sans MS", cursive',
                    textShadow: '0.5px 0.5px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '0.02em',
                  }}
                >
                  Income protection that triggers{' '}
                  <span 
                    className="relative inline-block"
                    style={{ fontWeight: 700 }}
                  >
                    automatically
                    {/* Hand-drawn underline */}
                    <svg 
                      className="absolute -bottom-1 left-0 w-full" 
                      height="6" 
                      viewBox="0 0 120 6"
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M2 4 Q30 2, 60 3 T118 4" 
                        stroke="#DC2626" 
                        strokeWidth="2.5" 
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {' '}when you can&apos;t work
                </p>
              </div>

              {/* Subtle paper edge tear effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-yellow-100/50 to-transparent" />
            </div>
          </motion.div>

          {/* Checkmark Card */}
          <motion.div
            className="ml-16 mt-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-6"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOutQuint }}
            whileHover={{ scale: 1.1, rotate: 12 }}
          >
            <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <motion.svg
                className="w-9 h-9 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>


        <motion.div
          className="absolute -right-20 top-0 hidden lg:block"
          {...slideInRight}
          transition={{ duration: 1.2, delay: 0.3, ease: easeOutQuint }}
        >

          <motion.div
            className="w-72 bg-white rounded-2xl shadow-2xl p-6 transform rotate-3"
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
                <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Coverage Active</h3>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-semibold">Premium Tier</p>
              <p className="text-lg font-bold text-gray-900">Standard Plan</p>
            </div>

            <motion.div
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border-2 border-emerald-200"
              whileHover={{ borderColor: "rgb(16, 185, 129)" }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xs text-gray-600 mb-1 uppercase tracking-wide font-semibold">Weekly Premium</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">₹20</p>
            </motion.div>
          </motion.div>

          {/* Dice Image */}
          <motion.div
            className="mt-10 ml-auto mr-20 w-28 h-28 bg-white rounded-3xl shadow-2xl flex items-center justify-center transform -rotate-6"
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easeOutQuint }}
            whileHover={{
              rotate: 0,
              scale: 1.1,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
            }}
          >
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 grid grid-cols-2 gap-2">
                <motion.div
                  className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg shadow-md"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="bg-gray-900 rounded-lg shadow-md" />
                <div className="bg-gray-900 rounded-lg shadow-md" />
                <div className="bg-gray-900 rounded-lg shadow-md" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutQuint }}
          >
            Protect your income,
            <br />
            <span className="text-gray-400">work with peace</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutQuint }}
          >
            AI-powered parametric insurance for delivery partners. Automatic payouts when weather, AQI, or disruptions stop you from working.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="px-12 py-5 bg-teal-600 text-white text-lg font-bold rounded-2xl cursor-pointer hover:bg-teal-700 transition-all shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easeOutQuint }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download APK
          </motion.button>
        </div>

        <motion.div
          className="absolute -left-8 bottom-16 hidden lg:block"
          {...slideInLeft}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutQuint }}
        >
          <motion.div
            className="w-80 bg-white rounded-2xl shadow-xl p-6 transform -rotate-2"
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Active Protections</h3>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌧️</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Heavy Rain</p>
                  <p className="text-xs text-gray-500">Coverage Active</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 0.8, delay: 0.6, ease: easeOutQuint }}
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-700">60%</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💨</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">AQI Protection</p>
                  <p className="text-xs text-gray-500">Zone Monitored</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-red-500 to-orange-600 rounded-full h-2"
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 0.8, delay: 0.7, ease: easeOutQuint }}
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-700">132</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Bottom Corner */}
        <motion.div
          className="absolute -right-8 bottom-20 pb-10 hidden lg:block"
          {...slideInRight}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutQuint }}
        >
          <div className="transform -rotate-2">
            <p className="text-sm font-bold text-gray-900 mb-4 text-center uppercase tracking-wide">Works with your platform</p>
            <div className="flex items-center justify-center gap-3">
              {platformIcons.map((platform, index) => (
                <motion.div
                  key={platform.letter}
                  className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: index === 0 ? 6 : index === 1 ? -6 : 3
                  }}
                  transition={{ duration: 0.5, delay: platform.delay, ease: easeOutQuint }}
                  whileHover={{ rotate: 0, scale: 1.1 }}
                >
                  <div className={`w-14 h-14 ${platform.bg} rounded-xl flex items-center justify-center shadow-md`}>
                    <span className="text-white font-bold text-2xl">{platform.letter}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
