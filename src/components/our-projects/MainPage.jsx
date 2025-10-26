"use client";

import { useState } from "react";
import { Home, ChevronRight } from "lucide-react";
import ProjectTabs from "../our-projects/ProjectTabs";
import ProjectGrid from "../our-projects/ProjectGrid";
import { projects, sectors } from "../our-projects/projectData";
import Footer from "../common/Footer";
import Link from "next/link";

export default function SRIIProjectsPage() {
  const [activeSector, setActiveSector] = useState("ALL");

  // Filter projects by sector
  const filteredProjects =
    activeSector === "ALL"
      ? projects
      : projects.filter((p) => p.sector === activeSector);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with gradient */}
      {/* Minimal Hero Section */}
      <section className="bg-[#002651] text-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Our <span className="text-orange-400">SRII</span> Projects
          </h1>

          {/* <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Delivering excellence across architecture, engineering, and
            construction — explore our portfolio of BIM and infrastructure
            projects across the USA.
          </p> */}

          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
            <Home size={14} className="text-orange-400" />
            <Link href="/">
              <span className="hover:text-orange-400 transition-colors cursor-pointer">
                Home
              </span>
            </Link>
            <ChevronRight size={12} />
            <span className="text-orange-400">Our SRII Projects</span>
          </div>
        </div>
      </section>

      {/* Subtitle section
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
          We have successfully delivered <span className="text-orange-500 font-semibold">1,000+ BIM projects</span> across various sectors in the USA.
          Check out our BIM modeling & coordination work to know more about our projects.
        </p>
      </div> */}

      {/* Tabs */}
      <ProjectTabs
        sectors={sectors}
        active={activeSector}
        setActive={setActiveSector}
      />

      {/* Projects Grid */}
      <div className="py-8 sm:py-12">
        <ProjectGrid projects={filteredProjects} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import ProjectTabs from "../our-projects/ProjectTabs";
// import ProjectGrid from "../our-projects/ProjectGrid";
// import { projects, sectors } from "../our-projects/projectData";
// import Footer from "../common/Footer";

// export default function BIMProjectsPage() {
//   const [activeSector, setActiveSector] = useState("ALL");

//   // Filter projects by sector
//   const filteredProjects =
//     activeSector === "ALL"
//       ? projects
//       : projects.filter((p) => p.sector === activeSector);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="bg-gray-100 py-8 mb-2 border-b">
//         <h1 className="text-3xl text-center font-semibold text-gray-800">Our BIM Projects</h1>
//         <div className="mt-3 flex items-center gap-2 px-8 text-gray-600 text-sm">
//           <span>Home</span>
//           <span className="text-gray-400">&bull;</span>
//           <span>Our Shri Projects</span>
//         </div>
//       </div>
//       {/* Subtitle
//       <div className="max-w-5xl mx-auto px-4 py-6 text-center text-lg text-gray-700">
//         We have successfully delivered 1,000+ BIM projects across various sectors in the USA.
//         Check out our BIM modeling & coordination work to know more about our projects.
//       </div> */}
//       {/* Tabs */}
//       <ProjectTabs
//         sectors={sectors}
//         active={activeSector}
//         setActive={setActiveSector}
//       />
//       {/* Projects Grid */}
//       <ProjectGrid projects={filteredProjects} />

//       {/* Footer Spacer */}
//       <Footer />
//     </div>
//   );
// }