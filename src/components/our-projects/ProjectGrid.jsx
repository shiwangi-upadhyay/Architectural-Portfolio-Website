import React from 'react';
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 animate-fadeIn">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            style={{ animationDelay: `${index * 100}ms` }}
            className="opacity-0 animate-slideUp"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}