import Hero from "../components/home/Hero";
import DashboardPreview from "../components/home/DashboardPreview";
import Highlights from "../components/home/Highlights";
import Testimonials from "../components/home/Testimonials";
import Integrations from "../components/home/Integrations";
import SEOHead from "../components/SEOHead";
import { getSEOConfig } from "../lib/seo";

const Index = () => {
  return (
    <>
      <SEOHead config={getSEOConfig('home')} />
      <div className="bg-gray-950 text-white">
        <Hero />
        <DashboardPreview />
        <Highlights />
        <Testimonials />
        <Integrations />
      </div>
    </>
  );
};

export default Index;
