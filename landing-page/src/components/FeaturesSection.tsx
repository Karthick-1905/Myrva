"use client";

import { motion } from "framer-motion";
import { easeOutQuint } from "@/lib/animations";

export default function FeaturesSection() {
  return (
    <>
      <section id="features" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-24 max-w-7xl mx-auto">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-3/5">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: easeOutQuint }}
            >
              When the sky falls,<br />
              <span className="relative inline-block text-teal-600 mt-2" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive', letterSpacing: "0.04em", fontWeight: "normal" }}>
                your income doesn&apos;t.
                <svg className="absolute -bottom-4 left-0 w-full" height="12" viewBox="0 0 120 12" preserveAspectRatio="none">
                  <motion.path
                    d="M2 10 Q30 2, 60 6 T118 8"
                    stroke="#DC2626"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: easeOutQuint }}
            >
              Myrva monitors the environment and pays you out the moment conditions become unworkable. Zero claims forms.
            </motion.p>
          </div>

          <div className="w-full md:w-2/5 relative ">
            <motion.div
              className="relative z-20 bg-white p-12 shadow-2xl transform rotate-3 origin-bottom-right"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 95%, 95% 100%, 90% 95%, 85% 100%, 80% 95%, 75% 100%, 70% 95%, 65% 100%, 60% 95%, 55% 100%, 50% 95%, 45% 100%, 40% 95%, 35% 100%, 30% 95%, 25% 100%, 20% 95%, 15% 100%, 10% 95%, 5% 100%, 0 95%)",
                backgroundImage: 'url("/wrinked.jpeg")',
                backgroundSize: "cover",
                backgroundBlendMode: "luminosity",
              }}
              initial={{ opacity: 0, rotate: 15, x: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 3, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, type: "spring", damping: 20 }}
              whileHover={{ rotate: 1, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-white/90 z-0"></div>
              <div className="relative z-10">
                <div className="text-red-500 font-mono text-xs uppercase font-bold tracking-widest mb-6 border-b-2 border-dashed border-red-200 pb-2">Proof of Payout</div>
                <div className="text-5xl font-black text-gray-900 mb-2">₹1,250</div>
                <div className="text-gray-500 font-medium mb-6">Rain trigger • Zone 4</div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Status</span>
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Settled</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Time to clear</span>
                    <span className="font-bold text-gray-900">0.4 seconds</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Human review</span>
                    <span className="font-bold text-gray-900 line-through decoration-red-500 decoration-2">Required</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-25 -left-15 w-48 h-48 p-6 -rotate-30 shadow-lg z-10"
              style={{
                background: "#f8e89b",
                backgroundImage: "linear-gradient(135deg, rgba(252, 243, 186, 0.78) 0%, rgba(247, 227, 141, 0.72) 100%), url('/wrinked.jpeg')",
                backgroundSize: "cover",
                transform: "rotate(-8deg)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: easeOutQuint }}
            >
              {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10 w-3 h-3 bg-black/30 rounded-full blur-[2px]" />
                <svg width="24" height="32" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-20">
                  <line x1="17" y1="22" x2="17" y2="45" stroke="#9CA3AF" strokeWidth="2" />
                  <circle cx="17" cy="11" r="10" fill="#B91C1C" />
                  <circle cx="17" cy="11" r="8.8" fill="#DC2626" />
                  <ellipse cx="13.5" cy="8.5" rx="3" ry="3.5" fill="#F87171" opacity="0.5" />
                </svg>
              </div> */}
              <div className="h-full flex items-center justify-center pt-2">
                <p className="text-gray-900 text-center text-xl font-bold leading-tight" style={{ fontFamily: '"Permanent Marker", "Comic Sans MS", cursive' }}>
                  It just <br /> works.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-teal-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOutQuint }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-teal-900 mb-8 tracking-tighter">
              No forms.<br />
              No calls.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-400">Just payouts.</span>
            </h2>
            <p className="text-2xl text-teal-800/80 leading-relaxed font-medium max-w-2xl mx-auto">
              We don&apos;t wait for you to claim. When the data says you can&apos;t work, the money moves to your wallet instantly.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute left-[10%] bottom-[10%] bg-white p-4 rounded-2xl shadow-xl border border-teal-100"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-bold">UPI Transfer</div>
              <div className="text-xl font-black text-gray-900">+ ₹850.00</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[15%] top-[20%] bg-white p-4 rounded-2xl shadow-xl border border-teal-100 hidden md:block"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-teal-100 text-teal-600 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <div className="text-sm text-gray-500 font-bold">Trigger Hit</div>
              <div className="text-xl font-black text-gray-900">Processing</div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}