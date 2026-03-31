"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaAward,
  FaUsers,
} from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Video with Sophisticated Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Color Gradient Overlay - Matching your theme */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-secondary/90 via-secondary/60 to-secondary"></div>
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent"></div> */}
      </div>

      {/* Decorative Glow Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 -left-20 w-125 h-125 bg-primary/20 rounded-full blur-[120px]"
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 text-white mb-10 shadow-xl"
        >
          <FaUniversity className="text-accent text-lg" />
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            Established 1947 | A Legacy of Knowledge
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
        >
          Nurturing Minds <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary">
            Empowering Futures
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Gaibandha Government College stands as a beacon of academic
          excellence, dedicated to fostering innovation, integrity, and lifelong
          learning for generations.
        </motion.p>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto"
        >
          <StatBox icon={<FaUsers />} count="15K+" label="Active Students" />
          <StatBox
            icon={<FaGraduationCap />}
            count="50K+"
            label="Total Alumni"
          />
          <StatBox icon={<FaAward />} count="75+" label="Years of Glory" />
          <StatBox icon={<FaUniversity />} count="18+" label="Departments" />
        </motion.div>
      </div>

      {/* Decorative Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-24 fill-light-gray"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,741.34,14.61,659.08-1.73,573.28-2.74,490.89,14.5c-58,11.73-114,31.07-172,41.86C271.51,75.05,221.45,96.88,167.45,103.27c-58.65,6.91-111.53,9.22-170,2.5V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

const StatBox = ({ icon, count, label }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all duration-500 group shadow-2xl"
  >
    <div className="text-primary text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
      {count}
    </p>
    <p className="text-[10px] md:text-[11px] text-gray-400 uppercase font-bold tracking-widest mt-2 group-hover:text-accent transition-colors">
      {label}
    </p>
  </motion.div>
);

export default AboutHero;
