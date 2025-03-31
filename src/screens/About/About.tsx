import { useState, useEffect } from "react";
import { Badge } from "../../components/ui/badge";
import { fetchEducation, fetchExperiences } from "../../lib/supabase";

export const About = (): JSX.Element => {
  const [education, setEducation] = useState<any[]>([]);
  const [experiences, setExperiences] = useState<any[]>([]);
  useEffect(() => {
    fetchEducation().then(setEducation);
  }, []);
  useEffect(() => {
    fetchExperiences().then(setExperiences);
  }, []);
  const skillsCategories = [
    {
      id: "tools",
      title: "🛠 Go-to tools",
      skills: ["Figma", "Figjam", "Framer", "VS Code"],
    },
    {
      id: "coding",
      title: "👨 Coding Experience",
      skills: [
        "React.js",
        "React Native.js",
        "Next.js",
        "Web Components",
        "TypeScript",
        "Sass",
        "Tailwindcss",
        "Git",
      ],
    },
    {
      id: "languages",
      title: "💬 Languages",
      skills: ["English", "Dutch"],
    },
  ];

  return (
    <main className="w-full">
      <div className="flex flex-col items-start gap-12 relative  w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-6 relative self-stretch">
          <h1 className="font-rage text-black text-5xl md:text-[80px] leading-normal text-center">
            Kwame Frimpong
          </h1>
          <p className="[font-family:'Rethink_Sans',Helvetica] text-center text-base md:text-lg">
            I am a{" "}
            <span className="font-bold text-neutral-950">Lead UX Designer</span>{" "}
            <span className="text-neutral-700">
              at Hubtel with 5+ years of experience building B2B and B2C
              solutions across Fintech, Internal Tools, AI, Transportation &
              Logistics, Healthcare, DevTools, and Design Systems—impacting over
              1M users and 1,000+ businesses.
            </span>
          </p>
        </section>

        {/* Gallery Section */}
        <section className="flex flex-col gap-4 relative w-full ">
          <h2 className="[font-family:'Rethink_Sans',Helvetica] font-medium text-neutral-950 text-lg">
            Gallery
          </h2>
          <div className="flex w-full h-[500px]  gap-4">
            <div className="flex flex-col gap-4  h-full w-[50%]">
              <div className=" relative aspect-[16/9] overflow-hidden rounded-3xl h-[60%]">
                <img
                  src="/no2.png"
                  alt="Techiman Portrait"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className=" relative aspect-[16/9] overflow-hidden rounded-3xl h-[40%]">
                <img
                  src="/no3.png"
                  alt="Techiman Portrait"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex h-full ">
              <div className=" relative aspect-[16/9] overflow-hidden rounded-3xl">
                <img
                  src="/no1.png"
                  alt="Techiman Portrait"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col items-start gap-6 w-full">
          <header className="flex w-20 items-center justify-center gap-2.5">
            <h2 className="flex-1 font-bold text-neutral-800 text-base">
              Skills
            </h2>
          </header>

          <div className="flex flex-col items-start gap-12 w-full">
            {skillsCategories.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-start gap-4 w-full"
              >
                <div className="inline-flex flex-col items-start gap-1">
                  <h3 className="font-semibold text-neutral-800 text-base [font-family:'Rethink_Sans',Helvetica]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-start gap-4 w-full [font-family:'Rethink_Sans',Helvetica]">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-2 bg-gray-100 rounded-[1000px] font-normal text-neutral-800 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Experience Section */}
        <section className="flex flex-col gap-4 relative self-stretch">
          <h2 className="[font-family:'Rethink_Sans',Helvetica] font-medium text-neutral-950 text-lg">
            Experience
          </h2>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-6 bg-[#F7F7F7] rounded-3xl border border-[#EFEFEF]"
            >
              <div className="flex flex-col gap-3">
                <h3 className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-neutral-950 text-base">
                  {exp.role}
                </h3>
                <div className="flex flex-col gap-2">
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-700 text-sm">
                    {exp.company}
                  </span>
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-700 text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed [font-family:'Rethink_Sans',Helvetica] ">
                {typeof exp.works === "object" && exp.works !== null ? (
                  <ul className="list-disc  pl-6 space-y-4 [&>li::marker]:text-[#ff6903] ">
                    {Object.entries(exp.works).map(([key, value]) => (
                      <li key={key}>{String(value)}</li>
                    ))}
                  </ul>
                ) : (
                  exp.works
                )}
              </p>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="flex flex-col gap-4 relative self-stretch">
          <h2 className="[font-family:'Rethink_Sans',Helvetica] font-medium text-neutral-950 text-lg">
            Education
          </h2>
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-[#F7F7F7] rounded-3xl border border-[#EFEFEF]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-neutral-950 text-base">
                  {edu.school}
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-700 text-sm">
                    {edu.degree}
                  </span>
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-700 text-sm">
                    {edu.period}
                  </span>
                </div>
              </div>
              <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-700 text-sm">
                {edu.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};
