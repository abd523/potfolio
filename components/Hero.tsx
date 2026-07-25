"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowDown } from "lucide-react";
import Button from "./Button";
import { projectsData } from "@/data/projects";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Glows & Particles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <span className="inline-block text-accent font-semibold tracking-wide text-sm uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Hi, I&apos;m <span className="bg-accent-gradient bg-clip-text text-transparent">Your Name</span>
            </h1>

            <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-zinc-300">
              Full Stack Developer
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building modern, performant, and scale-ready web applications with sleek user interfaces.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button href="#projects" variant="primary">
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Balanced Project Thumbnails Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
              {projectsData.slice(0, 4).map((project, idx) => (
                <div
                  key={project.id}
                  className="group relative bg-cardBg/80 border border-zinc-800 rounded-xl p-3 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-zinc-900 mb-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <h3 className="text-xs font-bold text-white truncate">
                    {project.title}
                  </h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-accent hover:underline mt-1"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}