import Image from "next/image";

const services = [
  { title: "Architectural Engineering", icon: "/icons/office-building.png" },
  { title: "3D Laser Scanning", icon: "/icons/house.png" },
  { title: "BIM/VDC Services", icon: "/icons/healthcare.png" },
  { title: "CAD Drafting", icon: "/icons/institution.png" },
  { title: "Permit Facilitation", icon: "/icons/factory.png" },
];

export default function ServiceCards() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 border-b-[3px] border-b-gray-200 pb-6 sm:pb-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mt-6 sm:mt-8 mb-2 sm:mb-3 tracking-wide px-2">
        SRII SERVICES FOR ARCHITECTURE, ENGINEERING AND CONSTRUCTION PROJECTS
      </h2>
      <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
        <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-blue-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-gradient-to-r from-orange-400 to-blue-900 rounded-lg shadow-lg w-full h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center py-4 px-3 text-white hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex justify-center items-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="object-contain transition-transform duration-700 group-hover:rotate-[360deg] w-8 h-8 sm:w-10 sm:h-10"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                }}
              />
            </div>
            <div className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold text-center leading-tight">
              {service.title}
            </div>
          </div>
        ))}
      </div>
      {/* Portfolio Button */}
      <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
        <button className="bg-blue-900 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-sm shadow hover:bg-green-700 transition-colors text-base sm:text-lg md:text-xl w-full max-w-4xl tracking-wide">
          LOOK INTO OUR PORTFOLIO FOR SRII WORK JOURNEY !
        </button>
      </div>
    </div>
  );
}