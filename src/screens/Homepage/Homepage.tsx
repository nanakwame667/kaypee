import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";

import { fetchProjects } from "../../lib/supabase";

export const Homepage = (): JSX.Element => {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  const navigate = useNavigate();

  const navigateToProject = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 px-0 md:px-4 py-6 relative self-stretch w-full">
        <h1 className="relative w-fit font-rage font-normal text-black text-5xl md:text-[80px] leading-normal">
          Kwame Frimpong
        </h1>

        <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-base md:text-lg text-center max-w-[800px] mx-auto">
          <span className="text-neutral-700">I am a </span>
          <span className="font-bold text-neutral-950">Lead UX Designer</span>
          <span className="text-neutral-700">
            {" "}
            at Hubtel with 5+ years of experience building B2B and B2C solutions
            across Fintech, Internal Tools, AI, Transportation &amp; Logistics,
            Healthcare, DevTools, and Design Systems—impacting over 1M users and
            1,000+ businesses.{" "}
          </span>
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="flex flex-col items-start relative self-stretch w-full space-y-4">
        <div className="flex items-center gap-2.5 relative self-stretch w-full">
          <h2 className="relative w-fit [font-family:'Rethink_Sans',Helvetica] font-semibold text-neutral-950 text-lg">
            ~Some of my works~
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full ">
          {/* Main Project Card */}
          {projects.slice(0, 2).map((project, index) => (
            <Card
              key={index}
              style={{ backgroundColor: project.bg_color }}
              className={`flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6 relative  rounded-3xl overflow-hidden w-full  min-h-[360px] border-none shadow-none`}
            >
              <div className="flex items-center justify-between gap-4  w-full">
                <h3
                  style={{ color: project.text_color }}
                  className={`relative flex-1 [font-family:'Rethink_Sans',Helvetica] font-semibold  text-base`}
                >
                  {project.title}
                </h3>
                <img
                  className="  "
                  alt="Logo Hubtel"
                  src={`https://mljogeehlbrneouyezvt.supabase.co/storage/v1/object/public/project-images/${project.logo}`}
                />
              </div>

              <div className="absolute w-[200px] h-[200px] top-[240px] left-[280px] opacity-5">
                <img
                  className="absolute w-[150px]  top-0 left-0"
                  alt="Hubtel icon"
                  src={`https://mljogeehlbrneouyezvt.supabase.co/storage/v1/object/public/project-images/${project.background_icon}`}
                />
              </div>

              <CardContent
                style={{ color: project.text_color }}
                className={`p-0  relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-sm`}
              >
                {project.description}
              </CardContent>

              <div
                style={{ color: project.text_color }}
                className={`relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-bold  text-sm`}
              >
                Role: {project.role}
              </div>

              <CardFooter className="p-0 flex items-end justify-center gap-4 relative flex-1 self-stretch w-full">
                <div className="flex items-center justify-between relative flex-1">
                  <div className="flex items-center gap-1 relative flex-1">
                    <div
                      style={{ backgroundColor: project.accent_color }}
                      className={`relative self-stretch w-1  rounded-lg`}
                    />
                    <div
                      style={{ color: project.text_color }}
                      className={`relative w-fit [font-family:'Rethink_Sans',Helvetica] font-semibold  text-sm`}
                    >
                      View Case Study
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    style={{ backgroundColor: project.icon_bg }}
                    className={`p-2  rounded-full`}
                    onClick={() => navigateToProject(project.id)}
                  >
                    <ArrowRightIcon className="w-6 h-6" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};
