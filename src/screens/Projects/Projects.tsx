import { Navigation } from "../../components/Navigation";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Footer } from "../../components/Footer";

export const Projects = (): JSX.Element => {
  const projects = [
    {
      title: "Zones Backoffice",
      logo: "/logo-hbt-secondary.svg",
      description:
        "Zones Backoffice is a portal that help businesses manage their inventory, help them manage their employees and merchants they work with. Order Performance can be tracked, relationship between the business and it's merchants are fostered properly promoting profit maximization",
      role: "Lead UX Designer",
      bgColor: "bg-[#ade4d780]",
      textColor: "text-[#003737]",
      accentColor: "bg-[#009f9f]",
      iconBg: "bg-white",
      backgroundIcon: "/hubtel-icon-black.svg",
    },
    {
      title: "Hubtel Sales",
      logo: "/hubtel-sales.svg",
      description:
        "Hubtel Sales connects you with a wider audience. By offering delivery through our app, you can tap into a new customer base and boost your business.",
      role: "Lead UX Designer",
      bgColor: "bg-[#524b8f]",
      textColor: "text-white",
      accentColor: "bg-[#C7C1F4]",
      iconBg: "bg-white",
      backgroundIcon: "/hubtel-icon-black.svg",
    },
    {
      title: "Denis Pizza",
      logo: "/lucide-pizza.svg",
      description:
        "Denis Pizza is a restaurant app that was designed to ensure that customers do not go through the struggle of having to be in long queues just get a meal.",
      role: "Lead UX Designer",
      bgColor: "bg-[#ffd8c3]",
      textColor: "text-[#a40802]",
      accentColor: "bg-[#ff7c7c]",
      iconBg: "bg-white",
      backgroundIcon: "/lucide-pizza-1.svg",
    },
    {
      title: "Compliance Portal",
      logo: "/hubtel-sales.svg",
      description:
        "The Compliance Portal is a comprehensive platform designed to help businesses maintain regulatory compliance. It streamlines the process of tracking, managing, and reporting compliance-related activities across the organization.",
      role: "Lead UX Designer",
      bgColor: "bg-[#0D3E66]",
      textColor: "text-white",
      accentColor: "bg-[#C7C1F4]",
      iconBg: "bg-white",
      backgroundIcon: "/hubtel-icon-black.svg",
    },
  ];

  return (
    <main className="flex flex-col items-center gap-6 md:gap-12 px-4 md:px-12 lg:px-[120px] xl:px-[300px] max-w-[1440px] mx-auto py-6 md:py-12 relative bg-white">
      <Navigation />

      <div className="flex flex-col items-start gap-6 md:gap-8 relative self-stretch w-full">
        <div className="flex items-center gap-2.5 relative w-full">
          <h1 className="relative w-fit font-rage text-black text-4xl md:text-[60px] leading-normal">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 relative ${project.bgColor} rounded-3xl overflow-hidden w-full min-h-[360px]`}
            >
              <div className="flex items-center gap-4 relative self-stretch w-full">
                <h3
                  className={`relative flex-1 [font-family:'Rethink_Sans',Helvetica] font-semibold ${project.textColor} text-base`}
                >
                  {project.title}
                </h3>
                <img
                  className="relative w-[84px] h-[19.5px]"
                  alt={`Logo ${project.title}`}
                  src={project.logo}
                />
              </div>

              <CardContent
                className={`p-0 ${project.textColor} relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-sm`}
              >
                {project.description}
              </CardContent>

              <div
                className={`relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-bold ${project.textColor} text-sm`}
              >
                Role: {project.role}
              </div>

              <CardFooter className="p-0 flex items-end justify-center gap-4 relative self-stretch w-full mt-auto">
                <div className="flex items-center justify-between relative flex-1">
                  <div className="flex items-center gap-1 relative flex-1">
                    <div
                      className={`relative self-stretch w-1 ${project.accentColor} rounded-lg`}
                    />
                    <div
                      className={`relative w-fit [font-family:'Rethink_Sans',Helvetica] font-semibold ${project.textColor} text-sm`}
                    >
                      View Case Study
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    className={`p-2 ${project.iconBg} rounded-full`}
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </CardFooter>

              {project.backgroundIcon && (
                <div className="absolute w-[313px] h-[338px] top-[155px] right-[-100px] opacity-5">
                  <img
                    className="absolute w-[212px] h-72 top-0 left-0"
                    alt={`${project.title} icon`}
                    src={project.backgroundIcon}
                  />
                </div>
              )}
            </Card>
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
};
