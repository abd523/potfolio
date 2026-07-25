export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    id: "portfolio-1",
    title: "Hospital Management Platform",
    description: "A comprehensive healthcare platform featuring real-time patient tracking and automated scheduling.",
    image: "/images/project1.jpg",
    liveUrl: "https://example.com/project-1",
    githubUrl: "https://github.com/example/project-1",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL"],
  },
  {
    id: "portfolio-2",
    title: "AI Trading Analytics Dashboard",
    description: "Financial market analytics tool with technical indicators, backtesting suite, and news insights.",
    image: "/images/project2.jpg",
    liveUrl: "https://example.com/project-2",
    githubUrl: "https://github.com/example/project-2",
    technologies: ["React", "Next.js", "Tailwind", "Python", "REST API"],
  },
  {
    id: "portfolio-3",
    title: "E-Commerce Storefront",
    description: "High-performance digital marketplace with fast cart operations and polished visual micro-interactions.",
    image: "/images/project3.jpg",
    liveUrl: "https://example.com/project-3",
    githubUrl: "https://github.com/example/project-3",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    id: "portfolio-4",
    title: "Real-Time Collaboration App",
    description: "SaaS application supporting multi-room messaging, live file sharing, and role-based permissions.",
    image: "/images/project4.jpg",
    liveUrl: "https://example.com/project-4",
    githubUrl: "https://github.com/example/project-4",
    technologies: ["React", "WebSockets", "Node.js", "Tailwind CSS"],
  },
  {
    id: "portfolio-5",
    title: "SaaS Analytics & Billing Portal",
    description: "Subscription management console equipped with visual revenue charts and usage metrics.",
    image: "/images/project5.jpg",
    liveUrl: "https://example.com/project-5",
    githubUrl: "https://github.com/example/project-5",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
  },
  {
    id: "portfolio-6",
    title: "Interactive Learning Platform",
    description: "Gamified educational portal featuring spaced-repetition modules and real-time progress tracking.",
    image: "/images/project6.jpg",
    liveUrl: "https://example.com/project-6",
    githubUrl: "https://github.com/example/project-6",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma"],
  },
  {
    id: "portfolio-7",
    title: "Modern Developer Portfolio",
    description: "Ultra-fast portfolio landing page built with Framer Motion, App Router, and responsive grids.",
    image: "/images/project7.jpg",
    liveUrl: "https://example.com/project-7",
    githubUrl: "https://github.com/example/project-7",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];