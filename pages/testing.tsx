
import React from "react";
import TestingHero from "@/components/testing/TestingHero";
import TestingCapabilities from "@/components/testing/TestingCapabilities";
import TestingShowcase from "@/components/testing/TestingShowcase";
import TestingStats from "@/components/testing/TestingStats";
import TestingProcess from "@/components/testing/TestingProcess";
import TestingCTA from "@/components/testing/TestingCTA";

const Testing = () => (
  <div className="bg-gray-950 text-white">
    <TestingHero />
    <TestingStats />
    <TestingCapabilities />
    <TestingShowcase />
    <TestingProcess />
    <TestingCTA />
  </div>
);

export default Testing;

//