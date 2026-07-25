"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, ExternalLink } from "lucide-react";
import Button from "./Button";
import MobileMenu from "./MobileMenu";
import { projectsData as projects } from "@/data/projects";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md border-b border-zinc-800 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link
          href="#hero"
          className="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          Dev<span className="text-indigo-500">Portfolio</span>
        </Link>

        {/* Center: Desktop Nav with Hover Dropdown */}
        <nav className="hidden lg:flex items-center gap-6 bg-zinc-900/80 backdrop-blur-md px-6 py-2 rounded-full border border-zinc-800 relative">
          <Link
            href="#hero"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Home
          </Link>

          {/* Projects Dropdown Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-indigo-400 transition-colors py-1"
            >
              <span>Projects</span>
              <ChevronDown
                className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180 text-indigo-400" : ""
                }`}
              />
            </Link>

            {/* Dropdown Menu Popup */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 z-50">
                <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-2xl p-2 shadow-2xl ring-1 ring-white/10">
                  <div className="px-3 py-2 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider border-b border-zinc-800/80 mb-1">
                    Featured Works ({projects.length})
                  </div>

                  <div className="max-h-[320px] overflow-y-auto space-y-0.5 custom-scrollbar">
                    {projects.map((project, index) => (
                      <Link
                        key={project.id}
                        href={`#portfolio-${project.id}`}
                        onClick={() => setIsDropdownOpen(false)}
                        className="group flex items-start justify-between p-2.5 rounded-xl hover:bg-zinc-800/80 transition-all"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-zinc-200 group-hover:text-indigo-400 transition-colors line-clamp-1">
                            {project.title}
                          </span>
                          <span className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                            {project.technologies.slice(0, 3).join(" • ")}
                          </span>
                        </div>
                        <span className="text-xs text-zinc-600 group-hover:text-indigo-400 font-mono transition-colors pt-0.5 pl-2">
                          0{index + 1}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-1 pt-2 border-t border-zinc-800/80 text-center">
                    <Link
                      href="#projects"
                      onClick={() => setIsDropdownOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors py-1"
                    >
                      <span>View All Projects</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="#contact"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Contact Button + Mobile Menu Icon */}
        <div className="flex items-center gap-3">
          <Button href="#contact" variant="primary">
            Contact Me
          </Button>

          {/* Mobile Hamburger Menu Icon */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  );
}