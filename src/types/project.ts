interface Project {
  id: string;
  title: string;
  logo: string;
  description: string;
  role: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  iconBg: string;
  backgroundIcon?: string;
  size?: "small" | "large";
  overview?: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  coverImage?: string;
  images?: string[];
  technologies?: string[];
  responsibilities?: string[];
  timeline?: string;
  teamSize?: number;
  deliverables?: string[];
}

interface ProjectData {
  title: string;
  mockupbg: string;
  mockup: string;
  introduction: string;
  projectGoals: string;
  researchAnalysis: string;
  designDevelopment: string;
  mockup2: string;
  mockup3: string;
  mockup4: string;
  outcome: string;
  conclusion: string;
  logo: string;
  description: string;
  role: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  iconBg: string;
  backgroundIcon?: string;
  size?: "small" | "large";
}
export type { Project, ProjectData };
