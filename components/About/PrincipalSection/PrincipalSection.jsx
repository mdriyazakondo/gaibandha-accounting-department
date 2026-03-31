"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import Container from "@/components/Container/Container";

const PrincipalSection = () => {
  return (
    <section className="py-20 bg-light-gray relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

      <Container>
        <div className=" px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Side: Image with Creative Frame */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/5"
            >
              <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-6">
                <FaQuoteLeft className="text-primary text-3xl" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
                A Message from the{" "}
                <span className="text-primary">Principal</span>
              </h2>

              <div className="space-y-4 text-secondary/80 leading-relaxed text-lg italic">
                <p>
                  "Welcome to Gaibandha Government College. Since 1947, our
                  institution has been more than just a place of learning; it is
                  a community where character is built and dreams take
                  flight.&quot;
                </p>
                <p className="not-italic">
                  Our mission is to provide an environment where students can
                  excel academically and develop the leadership skills necessary
                  for the 21st century. We believe in innovation, discipline,
                  and the pursuit of truth. Together, we are shaping the future
                  of Bangladesh.
                </p>
              </div>

              {/* Signature & Socials */}
              <div className="mt-10 pt-8 border-t border-secondary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-xl font-bold text-secondary">
                    Prof. Md. Khalilur Rahman
                  </h4>
                  <p className="text-gray-500 font-medium">
                    Principal, Gaibandha Govt. College
                  </p>
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-primary transition-colors duration-300 shadow-lg"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-primary transition-colors duration-300 shadow-lg"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:principal@ggc.edu.bd"
                    className="w-10 h-10 rounded-full bg-white text-secondary border border-secondary/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 shadow-md"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Right Side: Message Content */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full lg:w-2/5"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" // এখানে প্রিন্সিপালের ছবি দিন
                  alt="Principal of Gaibandha Government College"
                  width={500}
                  height={600}
                  className="w-full h-125 object-cover"
                />
              </div>

              {/* Decorative Boxes
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 bg-primary border-primary/20 rounded-2xl z-0"></div> */}

              {/* Quick Info Tag */}
              <div className="absolute bottom-10 left-0 right-0 mx-auto w-max bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-primary/20 z-20">
                <p className="text-secondary font-bold text-sm">
                  Prof. Md. Khalilur Rahman
                </p>
                <p className="text-primary text-[10px] uppercase font-black tracking-widest">
                  Principal Since 2021
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrincipalSection;
