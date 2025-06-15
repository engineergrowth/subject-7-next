const About = () => {
  return (
    <section className="bg-gray-950 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
          Built by Testers.<br /> Trusted by the Enterprise.
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          Subject7 was born from real frustration with brittle, slow, and overly technical automation tools. Since day one, our mission has been simple: make testing fast, scalable, and accessible to everyone.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-24">
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-lg hover:bg-gray-900/70 transition">
          <h3 className="text-2xl font-semibold mb-4">Where We Started</h3>
          <p className="text-gray-400">
            Founded by senior engineers in Maryland, Subject7 began as an internal tool to simplify testing. The goal was to bring true automation power to technical and non-technical teams alike — no flaky scripts, no bottlenecks.
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-lg hover:bg-gray-900/70 transition">
          <h3 className="text-2xl font-semibold mb-4">What We Built</h3>
          <p className="text-gray-400">
            A cloud-first platform leveraging open-source engines like Selenium — wrapped in a resilient, codeless UI. From web to mobile to desktop, we support full-stack automation with zero compromise.
          </p>
        </div>
        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-lg hover:bg-gray-900/70 transition">
          <h3 className="text-2xl font-semibold mb-4">Where We Are Now</h3>
          <p className="text-gray-400">
            Today, Subject7 powers automation at scale for some of the most demanding teams in the world. From public agencies to global enterprises, we support millions of test runs across every major testing surface.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="/z.webp"
          alt="CEO"
          className="w-48 h-48 rounded-2xl object-cover border border-gray-700"
        />
        <div className="text-left">
          <blockquote className="text-xl text-gray-300 italic mb-4 leading-relaxed">
            “Everything we build at Subject7 is driven by two things: customer feedback and real-world reliability. My job is making sure we stay ahead without ever losing sight of what our users need.”
          </blockquote>
          <cite className="block text-sm text-gray-500 not-italic font-medium">
            — Kezia Braithwaite, CEO of Subject7
          </cite>
        </div>
      </div>
    </section>
  );
};

export default About;
