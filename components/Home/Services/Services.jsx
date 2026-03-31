"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaLaptopCode,
  FaMicroscope,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const Services = () => {
  const academicLevels = [
    {
      id: 1,
      title: "1st Year",
      subtitle: "Foundation Level",
      icon: <FaBookOpen />,
      description:
        "Focusing on core fundamentals, basic sciences, and introductory courses to build a strong academic base.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "2nd Year",
      subtitle: "Intermediate Level",
      icon: <FaLaptopCode />,
      description:
        "Deep diving into departmental core subjects and practical lab works to enhance technical understanding.",
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "3rd Year",
      subtitle: "Pre-Final Level",
      icon: <FaMicroscope />,
      description:
        "Advanced specialized topics, industrial tours, and mini-projects to prepare for professional challenges.",
      color: "bg-emerald-500",
    },
    {
      id: 4,
      title: "4th Year",
      subtitle: "Final Year",
      icon: <FaGraduationCap />,
      description:
        "Major thesis, capstone projects, and internship programs focused on career readiness and graduation.",
      color: "bg-orange-500",
    },
    {
      id: 5,
      title: "Masters",
      subtitle: "Post-Graduate",
      icon: <FaAward />,
      description:
        "Advanced research-based studies and specialization in specific domains for academic excellence.",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Academic <span className="text-primary">Journey</span>
          </motion.h2>
          <div className="mt-4 w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Our structured curriculum ensures a progressive learning experience
            from basics to advanced research.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {academicLevels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="relative group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity ${level.color}`}
              ></div>

              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg ${level.color} transform group-hover:rotate-6 transition-transform`}
              >
                {level.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {level.title}
              </h3>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                {level.subtitle}
              </span>
              <p className="text-gray-500 text-sm leading-relaxed">
                {level.description}
              </p>

              {/* Bottom Line Decor */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${level.color}`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
