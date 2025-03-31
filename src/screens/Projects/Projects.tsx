import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Skeleton } from "../../components/ui/skeleton";
import { ArrowRightIcon } from "lucide-react";
import { fetchProjects } from "../../lib/supabase";

export const Projects = (): JSX.Element => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true); // Start loading
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false); // Stop loading (whether success or error)
      }
    };

    loadProjects();
  }, []);

  const navigate = useNavigate();

  const navigateToProject = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  if (loading) {
    return (
      <div className="w-full space-y-12">
        <Skeleton className="h-6 w-1/4" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="min-h-[360px] p-6 space-y-4 bg-gray-50 rounded-2xl"
            >
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-1/4 ml-auto" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-10 rounded-full ml-auto" />
            </div>
          ))}
        </div>
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
