"use client";

import React, { useState, useEffect } from "react";
import ShareButton from "../Button/ShareButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Campus File", href: "#" },
    { name: "Teacher", href: "#" },
    { name: "Success Student", href: "#" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full transition-transform duration-300 group-hover:rotate-12"
              >
                <circle cx="50" cy="50" r="45" fill="var(--color-light-gray)" />

                <rect
                  x="35"
                  y="45"
                  width="8"
                  height="25"
                  rx="2"
                  fill="var(--color-accent)"
                />
                <rect
                  x="48"
                  y="35"
                  width="8"
                  height="35"
                  rx="2"
                  fill="var(--color-accent)"
                  opacity="0.8"
                />
                <rect
                  x="61"
                  y="25"
                  width="8"
                  height="45"
                  rx="2"
                  fill="var(--color-accent)"
                  opacity="0.6"
                />

                <path
                  d="M20,60 C30,85 70,85 85,35 L75,35 L85,25 L95,35 L85,35"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="ml-3 flex flex-col">
              <span className="font-black text-xl leading-none uppercase tracking-tighter text-primary">
                Accounting
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] mt-0.5 text-secondary">
                Department
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:bg-pink-50 text-secondary"
              >
                <span className="relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary"></span>
                </span>
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <ShareButton text="Login " />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-secondary bg-light-gray"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-bold transition-all text-secondary hover:bg-pink-50"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 px-4">
            <ShareButton text="Login " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
