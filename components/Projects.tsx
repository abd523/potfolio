import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          subtitle="A collection of web applications I've designed, engineered, and deployed."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              id={`portfolio-${project.id}`}
              className="scroll-mt-28 h-full"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}