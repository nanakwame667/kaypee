import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import supabase from "../../lib/supabase";

// Define the Project type
interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
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
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Projects
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full">
              {project.category}
            </span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
