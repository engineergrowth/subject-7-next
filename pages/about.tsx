const AboutUs = () => (
  <section className="bg-gray-950 text-white py-24 px-4 sm:px-6 lg:px-8 mt-8 mb-16">
    <div className="max-w-6xl mx-auto text-center mb-16">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-snug tracking-tight sm:leading-[1.2] md:leading-[1.25] mb-4">
        About Subject7
      </h2>
      <div className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto space-y-6 mt-8">

    <p>
        Subject7 was founded in Maryland in 2011 by a small group of software architects who saw a problem and decided to fix it. Test automation was too technical, too fragmented, and out of reach for many teams. They believed there had to be a better way to deliver quality software without needing to write mountains of code.
    </p>

    <p>
        What came next was a cloud-first platform built on trusted automation engines like Selenium, but redesigned with a codeless, user-friendly interface. From web to mobile to desktop, Subject7 made it possible for both technical and non-technical users to build powerful end-to-end tests in one place.
    </p>

    <p>
        As more customers came on board, the platform grew with them. Government agencies, large enterprises, and fast-moving teams shaped the roadmap. Security and compliance became a core part of the product, leading to SOC 2 Type II certification and native 508 accessibility testing.
    </p>

    <p>
        Today, Subject7 is used by some of the most demanding teams in the world. The platform continues to evolve, but the heart of the company stays the same. We’re here to make testing easier, faster, and more reliable for everyone involved.
    </p>
    </div>



    </div>

    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* CEO Image */}
      <img
        src="/z.webp"
        alt="CEO"
        className="w-48 h-48 rounded-2xl object-cover border border-gray-700"
      />

      {/* Quote */}
      <div>
        <blockquote className="text-xl text-gray-300 italic mb-4 leading-relaxed">
          “Everything we build at Subject7 is driven by two things: customer feedback and real-world reliability.
          My job is making sure we stay ahead without ever losing sight of what our users need.”
        </blockquote>
        <cite className="block text-sm text-gray-500 not-italic font-medium">
          — Kezia Braithwaite, CEO of Subject7
        </cite>
      </div>
    </div>
  </section>
);

export default AboutUs;
