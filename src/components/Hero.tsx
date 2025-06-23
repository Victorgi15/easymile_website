'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - width / 2) / width;
      const y = (clientY - height / 2) / height;
      
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="relative w-full pt-[160px] pb-8 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#37b0a6]/10 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent">Simplify</span>
          <span className="text-primary">. Automate. </span>
          <span className="text-accent">Deliver.</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Autonomous vehicle software to optimize and streamline industrial logistics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a 
            href="produits" 
            className="bg-[#14b8a6] text-white px-8 py-4 rounded-lg text-lg font-semibold whitespace-nowrap shadow-lg hover:shadow-xl hover:scale-110 transform"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 10px 25px rgba(20, 184, 166, 0.3)",
                "0 12px 30px rgba(20, 184, 166, 0.4)",
                "0 10px 25px rgba(20, 184, 166, 0.3)"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          >
            Découvrir nos produits
          </motion.a>
          <a href="/integration-operationnelles" className="border border-accent text-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-500 hover:text-gray-100 hover:shadow-lg transition-all duration-300 whitespace-nowrap">
            Intégrations Opérationnelles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 