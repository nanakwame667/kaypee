import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "zones-backoffice",
    title: "Zones Backoffice",
    logo: "/logo-hbt-secondary.svg",
    description: "Zones Backoffice is a portal that help businesses manage their inventory, help them manage their employees and merchants they work with. Order Performance can be tracked, relationship between the business and it's merchants are fostered properly promoting profit maximization",
    role: "Lead UX Designer",
    bgColor: "bg-[#ade4d780]",
    textColor: "text-[#003737]",
    accentColor: "bg-[#009f9f]",
    iconBg: "bg-white",
    backgroundIcon: "/hubtel-icon-black.svg",
    size: "large",
    overview: "Zones Backoffice is a comprehensive business management portal designed to streamline operations for businesses and their merchants. The platform facilitates inventory management, employee oversight, and merchant relationships while providing detailed performance tracking.",
    challenge: "Businesses faced difficulties in managing their operations efficiently, particularly in coordinating between multiple stakeholders including employees and merchants. The existing systems were fragmented, leading to communication gaps and inefficient resource allocation.",
    solution: "We developed an integrated platform that centralizes all business operations. The solution includes real-time inventory tracking, employee management tools, and a merchant relationship management system. The interface was designed to be intuitive and user-friendly, ensuring quick adoption by all users.",
    impact: "The implementation of Zones Backoffice resulted in a 40% increase in operational efficiency, 25% reduction in inventory management time, and improved merchant satisfaction rates by 35%. The platform now serves over 1000 businesses and continues to grow.",
    coverImage: "/zones-backoffice-cover.jpg",
    images: [
      "/zones-backoffice-1.jpg",
      "/zones-backoffice-2.jpg",
      "/zones-backoffice-3.jpg"
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL"
    ],
    responsibilities: [
      "Led the UX design process from conception to implementation",
      "Conducted user research and created user personas",
      "Designed wireframes and high-fidelity prototypes",
      "Collaborated with developers for implementation",
      "Performed usability testing and iterations"
    ],
    timeline: "8 months",
    teamSize: 12,
    deliverables: [
      "User Research Documentation",
      "Wireframes",
      "High-fidelity Prototypes",
      "Design System",
      "Implementation Guidelines"
    ]
  },
  {
    id: "hubtel-sales",
    title: "Hubtel Sales",
    logo: "/hubtel-sales.svg",
    description: "Hubtel Sales connects you with a wider audience. By offering delivery through our app, you can tap into a new customer base and boost your business.",
    role: "Lead UX Designer",
    bgColor: "bg-[#524b8f]",
    textColor: "text-white",
    accentColor: "bg-[#c6c1f4]",
    iconBg: "bg-white",
    backgroundIcon: "/hubtel-icon-black.svg",
    size: "small",
    overview: "Hubtel Sales is an innovative platform that bridges the gap between businesses and customers through seamless delivery integration. The app empowers businesses to expand their reach and enhance customer satisfaction.",
    challenge: "Local businesses struggled to reach potential customers beyond their immediate vicinity. The lack of a reliable delivery system and digital presence limited their growth potential.",
    solution: "We created a user-friendly platform that integrates business operations with delivery services. The solution includes real-time order tracking, automated dispatch, and analytics for business growth.",
    impact: "The platform has helped businesses increase their sales by an average of 45%, with some reporting up to 70% growth in their customer base. Over 500 businesses have successfully expanded their operations through Hubtel Sales.",
    coverImage: "/hubtel-sales-cover.jpg",
    images: [
      "/hubtel-sales-1.jpg",
      "/hubtel-sales-2.jpg",
      "/hubtel-sales-3.jpg"
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS"
    ],
    responsibilities: [
      "Spearheaded the UX/UI design process",
      "Conducted market research and competitor analysis",
      "Created user flows and wireframes",
      "Implemented design system",
      "Managed user testing sessions"
    ],
    timeline: "6 months",
    teamSize: 8,
    deliverables: [
      "Market Research Report",
      "User Flows",
      "Interactive Prototypes",
      "UI Component Library",
      "User Testing Results"
    ]
  }
];