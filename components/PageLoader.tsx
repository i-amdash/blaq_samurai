'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { logoImage } from '@/utils';

const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.68, -0.55, 0.265, 1.55] // Custom back.out easing
          }}
        >
          <Image
            src={logoImage}
            alt="Blaq Samurai Logo"
            className="h-20 w-20 mx-auto"
            priority
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-slate-950 dark:text-white mb-8 tracking-wider"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.5, 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart
          }}
        >
          BLAQ SAMURAI
        </motion.h1>

        {/* Loading Animation */}
        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-slate-950 dark:bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
          </motion.div>
      </div>
    </motion.div>
  );
};

export default PageLoader;