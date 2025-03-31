import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Badge } from "../../components/ui/badge";

export const About = (): JSX.Element => {
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

  const experiences = [
    {
      role: "Lead UX Designer",
      company: "Hubtel Limited, Accra - Ghana",
      period: "March 2021 - December 2023",
      achievements: [
        "Created mobile-first, responsive designs for cross-platform compatibility, enhancing user engagement by 30%",
        "Conducted usability testing to optimize interface design and improve user satisfaction",
        "Collaborated with marketing teams to develop campaign-specific designs and prototypes",
        "Analyzed website analytics to guide data-driven design improvements",
        "Mentored junior designers, enhancing team skills and productivity",
        "Designed and maintained web interfaces using HTML, CSS, and JavaScript",
      ],
    },
    {
      role: "Frontend Developer & Product Designer",
      company: "Orange Verse, Johannesburg, South Africa",
      period: "March 2021 - December 2023",
      achievements: [
        "Designed intuitive navigation structures and user flows, boosting usability by 25%",
        "Developed interactive prototypes using HTML, CSS, and JavaScript, aligning with user feedback",
        "Conducted competitor analysis and user feedback sessions to drive designs",
        "Integrated analytics tools into applications to track usage patterns",
        "Defined UX goals in alignment with project requirements and business needs",
        "Standardized branding through consistent visual style guides and design principles",
      ],
    },
    {
      role: "Frontend Developer & Product Designer",
      company: "African Unity Limited, Accra - Ghana",
      period: "March 2021 - December 2023",
      achievements: [
        "Integrated third-party APIs to enhance web application functionality",
        "Designed engaging visuals and typography to attract user attention",
        "Ensured compliance with WCAG guidelines for accessible user interfaces",
        "Optimized website load times through server-side rendering, improving performance by 40%",
        "Managed website hosting and go-live processes for multiple client projects",
      ],
    },
    {
      role: "Frontend Developer & Product Designer",
      company: "African Limited, Accra - Ghana",
      period: "March 2021 - December 2023",
      achievements: [
        "Implemented security measures to safeguard sensitive data in user interfaces",
        "Created interactive prototypes and user flows that improved product usability",
        "Automated testing processes to enhance code quality and deployment reliability",
        "Collaborated with systems analysts, engineers, and programmers to resolve complex software issues",
        "Mentored junior developers, fostering team growth and skill development",
      ],
    },
  ];

  const education = [
    {
      school: "University of Ghana",
      degree: "Masters of Science - Computer Science",
      period: "2017 - 2019",
      description:
        "Deep dive in web development with lectures in web technologies, media ethics, agile project methods, data visualization and other hands-on projects",
    },
    {
      school: "University of Ghana",
      degree: "Bachelor of Science - Computer Science",
      period: "2014 - 2017",
      description:
        "Deep dive in web development with lectures in web technologies, media ethics, agile project methods, data visualization and other hands-on projects",
    },
  ];

  return (
    <main className="flex flex-col items-center gap-6 md:gap-12 px-4 md:px-12 lg:px-[120px] xl:px-[300px] max-w-[1440px] mx-auto py-6 md:py-12 relative bg-white">
      <Navigation />

      <div className="flex flex-col items-start gap-12 relative self-stretch w-full">
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
        <section className="flex flex-col gap-4 relative self-stretch">
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
        {/* <div className="absolute w-[313px] h-[338px] top-[155px] left-[205px] opacity-5">
                <img
                  className="absolute w-[212px] h-72 top-0 left-0"
                  alt="Hubtel icon"
                  src={project.background_icon}
                />
              </div> */}
        {/* Experience Section */}
        <section className="flex flex-col gap-4 relative self-stretch">
          <h2 className="[font-family:'Rethink_Sans',Helvetica] font-medium text-neutral-950 text-lg">
            Experience
          </h2>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 bg-[#F7F7F7] rounded-3xl border border-[#EFEFEF]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="[font-family:'Rethink_Sans',Helvetica] font-semibold text-neutral-950 text-base">
                  {exp.role}
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-700 text-sm">
                    {exp.company}
                  </span>
                  <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-700 text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 mt-1.5 bg-[#ff6903] rounded-full" />
                    <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-neutral-700 text-sm flex-1">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
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

        <Footer />
      </div>
    </main>
  );
};
