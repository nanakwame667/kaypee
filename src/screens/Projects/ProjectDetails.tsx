import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import supabase from "../../lib/supabase";
import { Skeleton } from "../../components/ui/skeleton";

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

const getOptimizedImage = (path: string, width = 1200) => {
  return `https://mljogeehlbrneouyezvt.supabase.co/storage/v1/object/public/project-images/${path}?width=${width}&quality=80`;
};

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProject() {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from("projects")
          .select(
            `
            id,
            title,
            description,
            mockupbg,
            mockup,
            introduction,
            project_goals,
            research_analysis,
            design_development,
            mockup2,
            mockup3,
            mockup4,
            outcome,
            conclusion
          `
          )
          .eq("id", id)
          .single();

        if (!isMounted) return;

        if (fetchError) {
          throw fetchError;
        }

        if (data) {
          setProject(data);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error fetching project:", err);
          setError("Failed to load project data");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProject();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="w-full space-y-12">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="w-full h-[650px] rounded-3xl" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
          <div className="min-h-[360px] p-6 space-y-4 bg-gray-50 rounded-2xl">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-1/4 ml-auto" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-10 rounded-full ml-auto" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 [font-family:'Rethink_Sans',Helvetica]">
        <h1 className="text-2xl font-bold">Error loading project</h1>
        <p className="text-red-500 mt-2">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-gray-100 rounded-md"
        >
          Retry
        </button>
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

  const renderJSONContent = (jsonData: JSON) => {
    if (typeof jsonData === "object" && jsonData !== null) {
      return (
        <ul className="list-disc pl-6 space-y-4">
          {Object.entries(jsonData).map(([key, value]) => (
            <li key={key}>{String(value)}</li>
          ))}
        </ul>
      );
    }
    return jsonData;
  };

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
        className="flex items-center justify-center rounded-3xl overflow-hidden"
        style={{ backgroundColor: project.mockupbg }}
      >
        <img
          src={getOptimizedImage(project.mockup)}
          alt={project.title}
          className="w-full h-[650px] object-contain"
          loading="lazy"
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
        <div className="text-gray-600 text-lg leading-relaxed">
          {renderJSONContent(project.project_goals)}
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">Process & Solutions</h1>
        <span className="text-lg font-medium">1. Research & Analysis</span>
        <div className="text-gray-600 text-lg leading-relaxed">
          {renderJSONContent(project.research_analysis)}
        </div>
        <span className="text-lg font-medium">2. Design & Development</span>
        <div className="text-gray-600 text-lg leading-relaxed">
          {renderJSONContent(project.design_development)}
        </div>
      </div>

      <div
        className="flex items-center justify-center rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <img
          src={getOptimizedImage(project.mockup2)}
          alt={project.title}
          className="w-full h-[650px] object-contain"
          loading="lazy"
        />
      </div>

      <div
        className="flex items-center justify-center rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <img
          src={getOptimizedImage(project.mockup3)}
          alt={project.title}
          className="w-full h-[650px] object-contain"
          loading="lazy"
        />
      </div>

      <div
        className="flex items-center justify-center rounded-3xl overflow-hidden"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <img
          src={getOptimizedImage(project.mockup4)}
          alt={project.title}
          className="w-full h-[650px] object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">Outcome</h1>
        <div className="text-gray-600 text-lg leading-relaxed">
          {renderJSONContent(project.outcome)}
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <p className="text-gray-600 text-lg leading-relaxed">
          {project.conclusion}
        </p>
      </div>
    </div>
  );
}
