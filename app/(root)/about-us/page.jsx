import AboutHero from "@/components/About/AboutHero/AboutHero";
import AboutSections from "@/components/About/AboutSection2/AboutSection";
import PrincipalSection from "@/components/About/PrincipalSection/PrincipalSection";
import React from "react";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutSections></AboutSections>
      <PrincipalSection />
    </div>
  );
};

export default About;
