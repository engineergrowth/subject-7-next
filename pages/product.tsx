
import React from "react";
import TestingHero from "@/components/product/ProductHero";
import TestingCapabilities from "@/components/product/ProductCapabilities";
import TestingShowcase from "@/components/product/ProductShowcase";
import TestingStats from "@/components/product/ProductStats";
import TestingProcess from "@/components/product/ProductProcess";
import ProductCTA from "@/components/product/ProductCTA";

const Testing = () => (
  <div className="bg-gray-950 text-white">
    <TestingHero />
    <TestingStats />
    <TestingCapabilities />
    <TestingShowcase />
    <TestingProcess />
    <ProductCTA />
  </div>
);

export default Testing;

//