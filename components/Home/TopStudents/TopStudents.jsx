"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LightBox from "@/components/LightBox/LIghtBox";

const TopStudents = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      id: 1,
      name: "Alex Johnson",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400",
      department: "Computer Science",
      gpa: "4.00",
      role: "Gold Medalist",
      description:
        "Alex is an exceptional coder and a natural leader. He developed an AI-based library management system that is now used by the entire college.",
      socials: {
        facebook: "https://facebook.com/alex",
        linkedin: "https://linkedin.com/in/alex",
        instagram: "https://instagram.com/alex",
        twitter: "https://twitter.com/alex",
      },
    },
    {
      id: 2,
      name: "Sarah Miller",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      department: "Electrical Engineering",
      gpa: "3.98",
      role: "Research Head",
      description:
        "Sarah specializes in renewable energy. She has published two international research papers on high-efficiency solar panel designs during her junior year.",
      socials: {
        facebook: "https://facebook.com/sarah",
        linkedin: "https://linkedin.com/in/sarah",
        instagram: "https://instagram.com/sarah",
        twitter: "https://twitter.com/sarah",
      },
    },
    {
      id: 3,
      name: "David Chen",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      department: "Business Admin",
      gpa: "3.95",
      role: "Debate President",
      description:
        "David is a master of communication. He led the college debate team to victory in the National Inter-University Championship 2025.",
      socials: {
        facebook: "https://facebook.com/david",
        linkedin: "https://linkedin.com/in/david",
        instagram: "https://instagram.com/david",
        twitter: "https://twitter.com/david",
      },
    },
    {
      id: 4,
      name: "Emily Davis",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
      department: "Architecture",
      gpa: "3.92",
      role: "Design Lead",
      description:
        "Emily has a unique vision for sustainable urban spaces. Her 'Green City' project won the Best Architectural Concept award at the Regional Expo.",
      socials: {
        facebook: "https://facebook.com/emily",
        linkedin: "https://linkedin.com/in/emily",
        instagram: "https://instagram.com/emily",
        twitter: "https://twitter.com/emily",
      },
    },
    {
      id: 5,
      name: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      department: "Mechanical Eng.",
      gpa: "3.90",
      role: "Robotics Captain",
      description:
        "Michael is the brain behind the 'Titan-X' autonomous rover. He is currently working on a robotics project funded by the National Space Agency.",
      socials: {
        facebook: "https://facebook.com/michael",
        linkedin: "https://linkedin.com/in/michael",
        instagram: "https://instagram.com/michael",
        twitter: "https://twitter.com/michael",
      },
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-primary">Academic Stars</span>
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {students.map((student) => (
            <motion.div
              key={student.id}
              layoutId={`card-${student.id}`}
              onClick={() => setSelectedStudent(student)}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-100 p-5 flex flex-col items-center text-center group"
            >
              <motion.div
                layoutId={`img-${student.id}`}
                className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/10 group-hover:border-primary/40 transition-colors"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.h3
                layoutId={`name-${student.id}`}
                className="font-bold text-gray-900 text-lg leading-tight"
              >
                {student.name}
              </motion.h3>
              <p className="text-xs text-primary font-semibold uppercase mt-1 tracking-wide">
                {student.department}
              </p>
              <div className="mt-4 pt-3 border-t border-gray-50 w-full">
                <p className="text-xl font-black text-gray-800 tracking-tighter">
                  GPA {student.gpa}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedStudent && (
            <LightBox
              selectedStudent={selectedStudent}
              close={() => setSelectedStudent(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TopStudents;
