import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { fetchProjects } from "../../lib/supabase";

export const Projects = (): JSX.Element => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const navigate = useNavigate();

  const navigateToProject = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 [font-family:'Rethink_Sans',Helvetica]">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (!projects) {
    return (
      <div className="container mx-auto px-4 py-8 [font-family:'Rethink_Sans',Helvetica]">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <main>
      <div className="flex flex-col items-start gap-6 md:gap-8 relative self-stretch w-full">
        <div className="flex items-center gap-2.5 relative w-full">
          <h1 className="relative w-fit font-rage text-black text-4xl md:text-[60px] leading-normal">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full ">
          {/* Main Project Card */}
          {projects.map((project, index) => (
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
      </div>
    </main>
  );
};
