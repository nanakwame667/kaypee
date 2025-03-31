import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import supabase from "../../lib/supabase";

// Define the Project type
interface Project {
  id: string;
  title: string;
  description: string;
  mockupbg: string;
  mockup: string;
  introduction: string;
  project_goals: JSON;
  research_analysis: JSON;
  design_development: JSON;
  mockup2: string;
  mockup3: string;
  mockup4: string;
  outcome: JSON;
  conclusion: string;
}
export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      if (!id) return;

      const { data, error } = await supabase
        .from("projects") // ✅ Correctly calling Supabase
        .select("*")
        .eq("id", id)
        .single(); // Fetch a single item

      if (error) {
        console.error("Error fetching project:", error);
        setLoading(false);
        return;
      }

      setProject(data);
      setLoading(false);
    }

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 [font-family:'Rethink_Sans',Helvetica]">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 [font-family:'Rethink_Sans',Helvetica]">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }
  console.log("Mockup URL:", project.mockup);
  const mockupUrl = `https://mljogeehlbrneouyezvt.supabase.co/storage/v1/object/public/project-images//${project.mockup}`;
  const mockup2 = `https://mljogeehlbrneouyezvt.supabase.co/storage/v1/object/public/project-images//${project.mockup2}`;
  const mockup3 = `https://mljogeehlbrneouyezvt.supabase.co/storage/v1/object/public/project-images//${project.mockup3}`;
  const mockup4 = `https://mljogeehlbrneouyezvt.supabase.co/storage/v1/object/public/project-images//${project.mockup4}`;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8 [font-family:'Rethink_Sans',Helvetica]">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-black text-lg hover:text-gray-900 mb-6 border border-gray-300 rounded-full px-4 py-2"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>
      <h1 className="text-2xl font-semibold">{project.title}</h1>
      <div
        className="flex items-center justify-center  rounded-3xl overflow-hidden"
        style={{ backgroundColor: project.mockupbg }}
      >
        <img
          src={mockupUrl}
          alt={project.title}
          className="w-full h-[650px] object-contain"
        />
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">Introduction</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          {project.introduction}
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">Project Goals</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          {typeof project.project_goals === "object" &&
          project.project_goals !== null ? (
            <ul className="list-disc  pl-6 space-y-4 ">
              {Object.entries(project.project_goals).map(([key, value]) => (
                <li key={key}>{String(value)}</li>
              ))}
            </ul>
          ) : (
            project.project_goals
          )}
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">Process & Solutions</h1>
        <span className="text-lg font-medium">1. Research & Analysis</span>
        <p className="text-gray-600 text-lg leading-relaxed">
          {typeof project.research_analysis === "object" &&
          project.research_analysis !== null ? (
            <ul className="list-disc pl-6 space-y-4">
              {Object.entries(project.research_analysis).map(([key, value]) => (
                <li key={key}>{String(value)}</li>
              ))}
            </ul>
          ) : (
            project.research_analysis
          )}
        </p>
        <span className="text-lg font-medium">2. Design & Development</span>
        <p className="text-gray-600 text-lg leading-relaxed">
          {typeof project.design_development === "object" &&
          project.design_development !== null ? (
            <ul className="list-disc pl-6 space-y-4 ">
              {Object.entries(project.design_development).map(
                ([key, value]) => (
                  <li key={key}>{String(value)}</li>
                )
              )}
            </ul>
          ) : (
            project.design_development
          )}
        </p>
      </div>
      <div
        className="flex items-center justify-center  rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <img
          src={mockup2}
          alt={project.title}
          className="w-full h-[650px] object-contain"
        />
      </div>
      <div
        className="flex items-center justify-center  rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <img
          src={mockup3}
          alt={project.title}
          className="w-full h-[650px] object-contain"
        />
      </div>
      <div
        className="flex items-center justify-center  rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <img
          src={mockup4}
          alt={project.title}
          className="w-full h-[650px] object-contain"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">Outcome </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          {typeof project.outcome === "object" && project.outcome !== null ? (
            <ul className="list-disc pl-6 space-y-4">
              {Object.entries(project.outcome).map(([key, value]) => (
                <li key={key}>{String(value)}</li>
              ))}
            </ul>
          ) : (
            project.outcome
          )}
        </p>
      </div>
      <div className="flex flex-col mt-4">
        <p className="text-gray-600 text-lg leading-relaxed">
          {project.conclusion}
        </p>
      </div>
    </div>
  );
}
