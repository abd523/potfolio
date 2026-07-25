"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-cardBg rounded-xl border border-zinc-800/80 overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/10 h-full"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl blur pointer-events-none" />

      <div className="flex flex-col flex-grow">
        {/* Project Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cardBg via-transparent to-transparent opacity-60" />
        </div>

        {/* Project Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold font-heading text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="mt-2 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="p-6 pt-0 mt-auto flex items-center gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all shadow-md shadow-primary/20"
          aria-label={`Visit ${project.title} live website`}
        >
          <span>Visit Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-zinc-700/50"
            aria-label={`View ${project.title} GitHub repository`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}