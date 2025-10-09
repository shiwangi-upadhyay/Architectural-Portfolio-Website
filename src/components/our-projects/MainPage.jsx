"use client";

import { useState } from "react";
import ProjectTabs from "../our-projects/ProjectTabs";
import ProjectGrid from "../our-projects/ProjectGrid";
import { projects, sectors } from "../our-projects/projectData";
import Footer from "../common/Footer";

export default function BIMProjectsPage() {
  const [activeSector, setActiveSector] = useState("ALL");

  // Filter projects by sector
  const filteredProjects =
    activeSector === "ALL"
      ? projects
      : projects.filter((p) => p.sector === activeSector);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gray-100 py-8 mb-2 border-b">
        <h1 className="text-3xl text-center font-semibold text-gray-800">Our BIM Projects</h1>
        <div className="mt-3 flex items-center gap-2 px-8 text-gray-600 text-sm">
          <span>Home</span>
          <span className="text-gray-400">&bull;</span>
          <span>Our Shri Projects</span>
        </div>
      </div>
      {/* Subtitle
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-lg text-gray-700">
        We have successfully delivered 1,000+ BIM projects across various sectors in the USA.
        Check out our BIM modeling & coordination work to know more about our projects.
      </div> */}
      {/* Tabs */}
      <ProjectTabs
        sectors={sectors}
        active={activeSector}
        setActive={setActiveSector}
      />
      {/* Projects Grid */}
      <ProjectGrid projects={filteredProjects} />

      {/* Footer Spacer */}
      <Footer />
    </div>
  );
}