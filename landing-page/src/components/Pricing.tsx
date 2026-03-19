"use client";

import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOutQuint }}
          >
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple pricing plans
            </h2>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Basic Plan */}
          <motion.div
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative hover:border-emerald-300 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutQuint }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic plan</h3>
              <p className="text-sm text-gray-600">Perfect for new riders.</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-gray-900">₹15</span>
                <span className="text-gray-600 ml-2">/week</span>
              </div>
            </div>

            <motion.button
              className="w-full py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors mb-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get started
            </motion.button>

            <ul className="space-y-4">
              {[
                'Heavy Rain coverage',
                'Flood protection',
                'Extreme Heat coverage',
                'Weekly pricing',
                '2-month enrollment',
                'Automatic payouts'
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 underline">Learn more</a>
            </div>
          </motion.div>

          {/* Standard Plan (Featured) */}
          <motion.div
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 relative transform md:scale-105 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutQuint }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px -10px rgba(16, 185, 129, 0.4)" }}
          >
            {/* Best Choice Badge */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-12">
              <span className="text-3xl">⚡</span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Standard plan</h3>
              <p className="text-sm text-emerald-100">Ideal for full-time riders.</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">₹20</span>
                <span className="text-emerald-100 ml-2">/week</span>
              </div>
              <p className="text-sm text-emerald-100">Best choice</p>
            </div>

            <motion.button
              className="w-full py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors mb-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get started
            </motion.button>

            <ul className="space-y-4">
              {[
                'All Basic features',
                'AQI Protection (Hazardous)',
                'AQI Protection (Severe)',
                'Priority claim processing',
                'Real-time monitoring',
                'SMS & WhatsApp alerts'
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-white"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-emerald-400">
              <a href="#" className="text-sm text-white hover:text-emerald-100 underline">Learn more</a>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative hover:border-emerald-300 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOutQuint }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium plan</h3>
              <p className="text-sm text-gray-600">Best for high-risk zones.</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-gray-900">₹35</span>
                <span className="text-gray-600 ml-2">/week</span>
              </div>
            </div>

            <motion.button
              className="w-full py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors mb-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get started
            </motion.button>

            <ul className="space-y-4">
              {[
                'All Standard features',
                'Government curfew coverage',
                'NDMA disaster protection',
                'Local strike coverage',
                'Zone closure protection',
                '24/7 priority support'
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 underline">Learn more</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
