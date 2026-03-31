"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"; // react-icons থেকে ইমপোর্ট

const LightBox = ({ selectedStudent, close }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <motion.div
        layoutId={`card-${selectedStudent.id}`}
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 rounded-full p-2 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8 flex flex-col items-center">
          {/* Profile Image */}
          <motion.div
            layoutId={`img-${selectedStudent.id}`}
            className="relative w-36 h-36 rounded-3xl overflow-hidden mb-6 shadow-xl ring-4 ring-primary/5"
          >
            <Image
              src={selectedStudent.image}
              alt={selectedStudent.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Identity */}
          <motion.h2
            layoutId={`name-${selectedStudent.id}`}
            className="text-3xl font-bold text-gray-900 mb-1"
          >
            {selectedStudent.name}
          </motion.h2>
          <p className="text-primary font-bold text-lg">
            {selectedStudent.role}
          </p>
          <p className="text-gray-500 font-medium mb-5">
            {selectedStudent.department}
          </p>

          {/* Social Icons from react-icons */}
          <div className="flex gap-4 mb-8">
            <SocialIcon
              href={selectedStudent.socials.facebook}
              icon={<FaFacebookF />}
              color="hover:bg-[#1877F2]"
            />
            <SocialIcon
              href={selectedStudent.socials.linkedin}
              icon={<FaLinkedinIn />}
              color="hover:bg-[#0A66C2]"
            />
            <SocialIcon
              href={selectedStudent.socials.instagram}
              icon={<FaInstagram />}
              color="hover:bg-[#E4405F]"
            />
            <SocialIcon
              href={selectedStudent.socials.twitter}
              icon={<FaTwitter />}
              color="hover:bg-[#1DA1F2]"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 w-full mb-6">
            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                GPA Score
              </p>
              <p className="text-2xl font-black text-gray-800">
                {selectedStudent.gpa}
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                Merit Rank
              </p>
              <p className="text-2xl font-black text-gray-800">
                #0{selectedStudent.id}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="text-left w-full bg-primary/5 p-5 rounded-2xl border border-primary/10 relative">
            <span className="absolute -top-3 left-6 bg-primary text-white text-[10px] px-3 py-1 rounded-full font-bold">
              BIO
            </span>
            <p className="text-gray-700 text-sm leading-relaxed italic">
              &quot;{selectedStudent.description}&quot;
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Helper Component for Social Icons
const SocialIcon = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 rounded-xl transition-all duration-300 hover:text-white hover:shadow-lg ${color} hover:-translate-y-1`}
  >
    {icon}
  </a>
);

export default LightBox;
