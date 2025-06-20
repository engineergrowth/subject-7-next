
"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutJourney from "@/components/about/AboutJourney";
import AboutValues from "@/components/about/AboutValues";
import AboutLeadership from "@/components/about/AboutLeadership";

const About = () => {
  return (
    <div className="bg-gray-950 text-white">
      <AboutHero />
      <AboutStats />
      <AboutJourney />
      <AboutValues />
      <AboutLeadership />
    </div>
  );
};

export default About;