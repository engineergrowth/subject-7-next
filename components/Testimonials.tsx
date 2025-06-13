import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const governmentClients = [
    "FDA",
    "Dept. of Education",
    "CMS",
    "NIH",
    "HHS",
    "FDIC",
    "Dept. of Defense",
    "Federal Aviation",
    "Children & Families",
    "City of Phoenix"
  ];

  const commercialClients = [
    "PwC",
    "Leidos",
    "Maximus",
    "Altum",
    "QuadReal",
    "Latitude Learning",
    "Stella & Chewy’s",
    "AGES",
    "Mayoral",
    "OmniSystems"
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by Government & Enterprise
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Clients Section */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <p className="text-lg text-gray-400 font-semibold mb-4 text-center">Government Sector</p>
              <div className="flex flex-wrap justify-center gap-3">
                {governmentClients.map((name, idx) => (
                  <span
                    key={idx}
                    className="flex items-center justify-center text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 transition h-10 w-52 text-center px-4"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-400 font-semibold mb-4 text-center">Commercial Sector</p>
              <div className="flex flex-wrap justify-center gap-3">
                {commercialClients.map((name, idx) => (
                  <span
                    key={idx}
                    className="flex items-center justify-center text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 transition h-10 w-52 text-center px-4"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="w-full lg:w-1/2 space-y-8 lg:pt-0 mt-6">
            {/* Testimonial 1 */}
            <Card className="bg-gray-800/50 border-gray-700 p-8 shadow-md hover:shadow-lg transition">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "We piloted Subject7 and other tools. We had Selenium and UFT but we went with Subject7 because it was much more user-friendly. And with all the capabilities Subject7 offers, you can run load testing, 508 compliance, web service testing, UI test, and reuse pieces of the code in the same tool."
                </blockquote>
                <cite className="text-gray-400">—Grantsolutions.gov</cite>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-gray-800/50 border-gray-700 p-8 shadow-md hover:shadow-lg transition">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "The time benefit is exactly why we picked Subject7. We did a comparison of test script conversions, and it takes 2–3 hours to convert a manual test script into a Subject7 test script, by a fresh newbie. It took a Python developer 2–3 days to write it out. That’s where the benefit is."
                </blockquote>
                <cite className="text-gray-400">—PwC</cite>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
