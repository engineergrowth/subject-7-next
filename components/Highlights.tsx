import { MonitorPlay, Server, Layers3, ShieldCheck } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      icon: MonitorPlay,
      title: "Unified Test Automation",
      description:
        "Author, run, and manage tests across web, desktop, API, and DB. One powerful platform, total coverage."
    },
    {
      icon: Layers3,
      title: "Codeless by Design",
      description:
        "Build tests visually without writing code. Empower QA teams to move fast with confidence."
    },
    {
      icon: Server,
      title: "CI/CD Ready",
      description:
        "Connect seamlessly to GitHub, Azure, and other tools to fit right into your existing workflows."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Compliant",
      description:
        "Trusted by leading federal agencies and enterprises alike."
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Unified Test Automation, Redefined.
        </h2>
        <p className="text-lg text-gray-300 max-w-6xl mx-auto">
          Subject7 brings together everything your QA team needs. Codeless creation. Full test coverage. Seamless delivery.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {highlights.map((point, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-6 bg-gray-800/60 p-10 rounded-2xl border border-gray-700 hover:bg-gray-800/80 transition duration-300"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
              <point.icon className="text-white" size={28} />
            </div>
            <div className="text-left flex-1">
              <h3 className="text-2xl font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
