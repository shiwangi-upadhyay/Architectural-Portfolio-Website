import ServiceCards from "../solutions/cards/ServiceCards";
import ProjectCards from "../solutions/cards/ProjectCards";
import SRIICards from "./cards/SRIICards";
import SectorsWeServe from "../solutions/cards/SectorsWeServe";
import ContactSection from "../common/ContactSection";
import Footer from "../common/Footer";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import SlidingOverlay from "../common/SlidingOverlay";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Responsive */}
      <section className="bg-[#002651] text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Our <span className="text-orange-400">services</span>
          </h1>

          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
            <Home size={14} className="text-orange-400" />
            <Link href="/">
              <span className="hover:text-orange-400 transition-colors cursor-pointer">
                Home
              </span>
            </Link>
            <ChevronRight size={12} />
            <span className="text-orange-400">Our Services</span>
          </div>
        </div>
      </section>

      {/* Main Description - Responsive */}
      <div className="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Srii Constructions. is a leading women-owned facility and property
          management company in USA. We specialize in AEC services for Building
          designs including Architecture, Engineering, and Construction (AEC)
          industry.
          {/* ... rest of content ... */}
        </p>
      </div>

      {/* Services Cards */}
      <ServiceCards />

      {/* Architectural Engineering Section - Responsive */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-10 sm:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 tracking-wide px-2">
          ARCHITECTURAL ENGINEERING SOLUTION FOR RESIDENTIAL, COMMERCIAL AND
          FEDERAL PROJECTS
        </h2>
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
          <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-blue-500" />
        </div>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
          Srii Constructions. comprehensive set of tools, technologies and
          processes integrate architectural designing with engineering
          principle.
          {/* ... rest of content ... */}
        </p>
        <ProjectCards />
      </div>

      {/* BIM/VDC Solutions Section - Responsive */}
      <div className="bg-white py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3 tracking-wide px-2">
            SRII VDC/BIM SOLUTIONS FOR DIGITIZING AEC SERVICES
          </h2>
          <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
            <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-blue-500" />
          </div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
            At Srii Constructions., we are committed to transforming your
            architectural vision into reality through our innovative VDC BIM
            services.
            {/* ... rest of content ... */}
          </p>
          <SRIICards />
          <div className="flex justify-center mt-6 sm:mt-8 text-white">
            <SlidingOverlay
              as="button"
              type="button"
              baseBgClass="bg-blue-900"
              overlayClassName="bg-orange-400"
              overlayFrom="left"
              overlayOpacity="opacity-90"
              duration="600"
              className="w-full max-w-4xl px-6 py-3 sm:px-8 sm:py-4 rounded-sm shadow font-bold text-base sm:text-lg md:text-xl tracking-wide"
            >
              LOOKING TO OUTSOURCE AEC SERVICES......CALL TO DISCUSS !
            </SlidingOverlay>
          </div>
        </div>
      </div>

      {/* Sectors We Serve Section with Orange-Blue Gradient */}
      <SectorsWeServe />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}

      <Footer />
    </div>
  );
}
