import ServiceCards from "../solutions/cards/ServiceCards";
import ProjectCards from "../solutions/cards/ProjectCards";
import BIMCards from "../solutions/cards//BIMCards";
import SectorsWeServe from "../solutions/cards/SectorsWeServe";
import ContactSection from "../solutions/ContactSection";
import Footer from "../solutions/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="border-b">
        <div className=" h-30 w-full flex items-center justify-center">
          <h1 className="text-4xl text-center tracking-wide text-orange-400">
            OUR SERVICES
          </h1>
        </div>
        <div className="mt-4 text-sm text-gray-600 px-8">
          <span className="font-semibold">Tejjy Inc.</span> &gt;{" "}
          <span>Our Services</span>
        </div>
      </div>

      {/* Main Description */}
      <div className="max-w-5xl mx-auto py-10 px-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          Tejjy Inc. is a leading women-owned facility and property management
          company in USA. We specialize in AEC services for Building designs
          including Architecture, Engineering, and Construction (AEC) industry.
          The vision of digital tranformation aligns us to facilitate optimized
          design accuracy, streamlined workflows across all phases of
          construction and engineering life cycle. Tejjy team is highly skilled
          with Architectural Engineering, Building Information Modeling, 3D
          laser Scanning software and equipments to successfully deliver client
          focused customized suite of services. With a focus on sustainable
          practices and smart building solutions, Tejjy Inc. is dedicated to
          transforming the AEC landscape through technology-driven approaches.
          We are here to enhance your planning, designing, engineering, facility
          management journey of residential, commercial, federal projects with
          operational effectiveness and exceedingly remarkable outcomes. Our
          multidisciplinary team of architects, engineers, and BIM specialists
          work collaboratively with clients to bring their visions to life.
        </p>
      </div>

      {/* Services Cards */}
      <ServiceCards />

      {/* Architectural Engineering Section */}
      <div className="max-w-5xl mx-auto px-4 mt-12 mb-14">
        <h2 className="text-2xl font-bold text-center mb-2 tracking-wide">
          ARCHITECTURAL ENGINEERING SOLUTION FOR RESIDENTIAL, COMMERCIAL AND
          FEDERAL PROJECTS
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-blue-500" />
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-8">
          Tejjy Inc comprehensive set of tools, technologies and processes
          integrate architectural designing with engineering principle. A
          strategic workflow, quality checks are adopted to optimize planning,
          design, construction, and management of buildings and infrastructure.
          The functionality, sustainability, and efficiency of building design
          lifecycle is achieved through clash-coordinated Architectural,
          Structural, MEPF services. We are trusted AEC service provider in USA
          for delivering precision, sustainability beyond exception in our
          building designs. Our team of architects have been successfully
          delivering construction, renovation and facility management solution
          for residential, mixed-use, government, federal, infrastructural,
          industrial projects. Tejjy embraces latest 3D scanning technology for
          capturing precise existing condition to renovate or remodel with
          addition in rooms or executing space management.
        </p>
        <ProjectCards />
      </div>

      {/* BIM/VDC Solutions Section */}
      <div className="bg-white py-10 ">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2 tracking-wide">
            TEJJY VDC/BIM SOLUTIONS FOR DIGITIZING AEC SERVICES
          </h2>
          <div className="flex justify-center mb-16">
            <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-blue-500" />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            At Tejjy Inc., we are committed to transforming your architectural
            vision into reality through our innovative VDC BIM services. 3D
            modeling integrates with virtual design and construction for
            scheduling, cost estimation, and project management, enabling
            stakeholders to plan, simulate, and optimize the entire lifecycle of
            a building project. By leveraging VDC, architectural engineers can
            visualize design elements in real-time, ensuring seamless
            coordination between structural, architectural, and{" "}
            <b>MEP (Mechanical, Electrical, Plumbing)</b> systems. Tejjy Inc
            assures VDC gatekeeping, BIM modeling and detailing solutions for
            architectural, structural engineering, MEPF, and façade trades. Our
            BIM engineers/architects provide fabrication shop drawings for the
            off-site fabrication of MEP, precast, steel, and shop fit-outs with
            time-cost optimization. We anticipate potential issues and
            coordinate clashes at preconstruction and work together as a team
            with our clients. To bring out the best sustainable scenario for the
            project, we offer bespoke BIM dimension modeling from design
            development to facility management.
          </p>
          <BIMCards />
          <div className="flex justify-center mt-8">
            <button className="bg-blue-900 text-white font-bold py-2 px-8 rounded-sm shadow hover:bg-green-700 transition text-xl w-full tracking-wide">
              LOOKING TO OUTSOURCE AEC SERVICES......CALL TO DISCUSS !
            </button>
          </div>
        </div>
      </div>

      {/* Sectors We Serve Section with Orange-Blue Gradient */}
      <SectorsWeServe />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <div className="bg-[#002651] mt-12">
<Footer />
      </div>
      
    </div>
  );
}
