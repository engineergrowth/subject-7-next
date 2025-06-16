import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaSlack, FaJenkins, FaGitlab, FaBitbucket, FaMicrosoft } from "react-icons/fa";
import { SiJira } from "react-icons/si";

const Integrations = () => {
  const integrations = [
    { name: "Jira", icon: SiJira },
    { name: "GitHub", icon: FaGithub },
    { name: "Jenkins", icon: FaJenkins },
    { name: "GitLab", icon: FaGitlab },
    { name: "Slack", icon: FaSlack },
    { name: "Azure", icon: FaMicrosoft },
    { name: "Bitbucket", icon: FaBitbucket },
  ];

  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Seamless Integration.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16 items-center justify-items-center">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <Card
                key={integration.name}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-transform duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5B21B6] to-[#7E22CE] rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{integration.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="bg-gray-800/50 border-gray-700 p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Discover how Subject7 automates testing so you can ship faster with confidence.
              </h3>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#5B21B6] to-[#7E22CE] hover:from-[#4C1D95] hover:to-[#6B21A8] text-white px-8 py-4 text-lg shadow-lg"
              >
                Schedule a Demo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
