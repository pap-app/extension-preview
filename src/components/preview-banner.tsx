"use client"

import { motion } from "framer-motion";

export default function PreviewBanner() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-lg lg:text-xl font-semibold tracking-wide">
            🚧 Extension Under Review — You&apos;re Viewing a Preview Version
          </p>
        </motion.div>
      </div>
      
      {/* Subtle pulsing animation for the banner */}
      <motion.div
        className="absolute inset-0 bg-white/10"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}