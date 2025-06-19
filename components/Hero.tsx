const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
       <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-snug tracking-tight sm:leading-[1.2] md:leading-[1.25] pb-2">
        Ditch Manual Testing.<br />
        Supercharge Your Deployments.
      </h1>



        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Focus on building. Let our platform handle the repetitive QA work. 
          Ship faster, catch bugs sooner, and drive your roadmap forward. We are the #1 trusted QA Automation platform of GovTech & Enterprise companies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">


        </div>
      </div>

      {/* Dashboard block */}
      <div className="mt-12 max-w-6xl mx-auto">
        <img
          src="/dashboard.webp"
          alt="Dashboard Preview"
          className="w-full h-auto block mx-auto"
        />
      </div>

    </section>

  );
};

export default Hero;
