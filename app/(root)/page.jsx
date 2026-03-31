import PrincipalSection from "@/components/About/PrincipalSection/PrincipalSection";
import AboutSection from "@/components/Home/AboutSection/AboutSection";
import Faculty from "@/components/Home/Faculty/Faculty";
import GallerySection from "@/components/Home/GallerySection/GallerySection";
import HeroSection from "@/components/Home/Hero/HeroSection";
import Services from "@/components/Home/Services/Services";
import TopStudents from "@/components/Home/TopStudents/TopStudents";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PrincipalSection />
      <Faculty />
      <Services></Services>
      <TopStudents />
      <GallerySection />
      {/* <LeafletMap /> */}
    </div>
  );
};

export default page;
