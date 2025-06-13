import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import Integrations from "../components/Integrations";

const Index = () => {
  return (
    <div className="bg-gray-950 text-white">
      <Hero />
      <Highlights />
      <Testimonials />
      <Integrations />
    </div>
  );
};

export default Index;
