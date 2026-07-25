"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { projectsData as projects } from "@/data/projects";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-zinc-900 border-l border-zinc-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header with Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
            <span className="text-lg font-bold text-white">Menu</span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-4">
            <Link
              href="#hero"
              onClick={onClose}
              className="text-base font-medium text-zinc-200 hover:text-indigo-400 py-1 transition-colors"
            >
              Home
            </Link>

            <div className="pt-2 border-t border-zinc-800/60">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
                Projects ({projects.length})
              </span>
              <div className="flex flex-col gap-2 pl-2">
                {projects.map((project, index) => (
                  <Link
                    key={project.id}
                    href={`#portfolio-${project.id}`}
                    onClick={onClose}
                    className="text-sm text-zinc-400 hover:text-indigo-400 py-1 transition-colors flex items-center justify-between"
                  >
                    <span className="line-clamp-1">{project.title}</span>
                    <span className="text-xs font-mono text-zinc-600">0{index + 1}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="#contact"
              onClick={onClose}
              className="text-base font-medium text-zinc-200 hover:text-indigo-400 py-1 pt-2 border-t border-zinc-800/60 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-zinc-800">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full block text-center py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}