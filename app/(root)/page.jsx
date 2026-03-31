import AboutSection from "@/components/Home/AboutSection/AboutSection";
import GallerySection from "@/components/Home/GallerySection/GallerySection";
import HeroSection from "@/components/Home/Hero/HeroSection";
import TopStudents from "@/components/Home/TopStudents/TopStudents";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TopStudents />
    </div>
  );
};

export default page;
