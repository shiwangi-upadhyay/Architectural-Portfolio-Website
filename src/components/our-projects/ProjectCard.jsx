"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function ProjectCard({ project }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded shadow hover:shadow-xl relative overflow-hidden cursor-pointer transition-all duration-200
        ${hovered ? "ring-2 ring-orange-400" : ""}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push(project.link)}
    >
      <div className="relative w-full h-56">
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className={`transition duration-200 ${hovered ? "opacity-60" : "opacity-100"}`}
        />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center gap-4 z-10">
            {/* Overlay icons: chain link, magnifier */}
            <span className="bg-blue-900 rounded-full p-3 shadow hover:bg-blue-800 transition text-white">
              <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 14l2-2m0 0l4-4m-4 4L6 6m6 6l4 4"></path>
              </svg>
            </span>
            <span className="bg-blue-900 rounded-full p-3 shadow hover:bg-blue-800 transition text-white">
              <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
        )}
      </div>
      <div className="p-4 text-center">
        <span
          className={`block text-base font-semibold leading-tight transition ${
            hovered ? "text-orange-600 underline" : "text-blue-900"
          }`}
        >
          {project.title}
        </span>
      </div>
    </div>
  );
}