"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Link2, ZoomIn, ChevronRight } from "lucide-react";
import Router from "next/router";

export default function ProjectCard({ project }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-500 transform
        ${hovered ? "shadow-2xl" : "shadow-md hover:shadow-lg"}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(project.link)}
    >
      <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 ${
            hovered ? "scale-110 brightness-75" : "scale-100"
          }`}
        />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}></div>
        
        {/* Icons overlay */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 transition-all duration-500 ${
          hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}>
          <button 
            className="bg-white hover:bg-orange-500 text-blue-900 hover:text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            onClick={(e) => {
              e.stopPropagation();
              // Add link functionality
            }}
          >
            <Link2 size={18} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
          </button>
          <button 
            className="bg-white hover:bg-orange-500 text-blue-900 hover:text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
            onClick={(e) => {
              e.stopPropagation();
              // Add zoom functionality
            }}
          >
            <ZoomIn size={18} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Sector badge */}
        <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 bg-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold shadow-lg transition-all duration-500 ${
          hovered ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}>
          {project.sector}
        </div>
      </div>
      
      <div className="p-4 sm:p-5">
        <h3 className={`text-base sm:text-lg font-semibold leading-tight transition-all duration-300 ${
          hovered ? "text-orange-500" : "text-blue-900"
        }`}>
          {project.title}
        </h3>
        <div className={`mt-2 sm:mt-3 flex items-center text-xs sm:text-sm font-medium transition-all duration-300 ${
          hovered ? "text-orange-500 translate-x-2" : "text-gray-500"
        }`}
        onClick={() => Router.push(`/our-projects/${project.id}`)}>
          <span>View Details</span>
          <ChevronRight size={14} className="ml-1 sm:w-4 sm:h-4" />
        </div>
      </div>
    </div>
  );
}