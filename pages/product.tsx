
import React from "react";
import ProductHero from "@/components/product/ProductHero";
import ProductCapabilities from "@/components/product/ProductCapabilities";
import ProductShowcase from "@/components/product/ProductShowcase";
import ProductStats from "@/components/product/ProductStats";
import ProductProcess from "@/components/product/ProductProcess";
import ProductCTA from "@/components/product/ProductCTA";
import SEOHead from "@/components/SEOHead";
import { getSEOConfig } from "@/lib/seo";

const Product = () => (
  <>
    <SEOHead config={getSEOConfig('product')} />
    <div className="bg-gray-950 text-white">
      <ProductHero />
      <ProductStats />
      <ProductCapabilities />
      <ProductShowcase />
      <ProductProcess />
      <ProductCTA />
    </div>
  </>
);

export default Product;