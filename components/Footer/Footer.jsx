"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Container from "../Container/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Academic Stars", href: "/stars" },
        { name: "Campus Life", href: "/gallery" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <Container>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Brand & About */}
            <div className="space-y-6">
              <Link
                href="/"
                className="text-2xl font-black text-white tracking-tighter"
              >
                CAMPUS<span className="text-primary">X</span>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400">
                Empowering students with quality education and a vibrant campus
                life. Join our community to excel in your academic journey and
                beyond.
              </p>
              <div className="flex gap-4">
                <SocialIcon href="#" icon={<FaFacebookF />} />
                <SocialIcon href="#" icon={<FaLinkedinIn />} />
                <SocialIcon href="#" icon={<FaInstagram />} />
                <SocialIcon href="#" icon={<FaTwitter />} />
              </div>
            </div>

            {/* Column 2 & 3: Links */}
            {footerLinks.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-white font-bold text-lg">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Column 4: Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-primary shrink-0" />
                  <span className="text-sm text-gray-400">
                    123 Education Ave, Knowledge Park, <br /> Dhaka, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-primary shrink-0" />
                  <span className="text-sm text-gray-400">
                    +880 1234 567 890
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-primary shrink-0" />
                  <span className="text-sm text-gray-400">
                    info@campusx.edu
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} CampusX College. All rights reserved.</p>
            <p>
              Designed with <span className="text-red-500">❤️</span> by Your
              Team
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

// Helper Social Icon Component
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
  >
    {icon}
  </a>
);

export default Footer;
