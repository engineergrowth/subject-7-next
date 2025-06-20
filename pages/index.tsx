import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import Testimonials from "../components/home/Testimonials";
import Integrations from "../components/home/Integrations";

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
