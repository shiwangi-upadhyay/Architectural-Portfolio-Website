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
    <div className="max-w-6xl mx-auto px-4 border-b-[3px] border-b-gray-200 pb-6">
      <h2 className="text-[22px] font-bold text-center mt-8 mb-2 tracking-wide">
        SRII SERVICES FOR ARCHITECTURE, ENGINEERING AND CONSTRUCTION PROJECTS
      </h2>
      <div className="flex justify-center mb-16">
        <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-blue-500" />
      </div>
      <div className="grid grid-cols-5 justify-center gap-6 mb-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group bg-gradient-to-r from-orange-400  to-blue-900 rounded-lg shadow-lg w-46 h-30 flex flex-col items-center justify-between py-3 text-white hover:scale-105 transition"
          >
            <div className="w-20 h-10 flex justify-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={36}
                height={36}
                className="object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                }}
              />
            </div>
            <div className="mt-4 text-lg font-semibold text-center">
              {service.title}
            </div>
          </div>
        ))}
      </div>
      {/* Portfolio Button */}
      <div className="flex justify-center mb-10 max-w-6xl mx-auto ">
        <button className="bg-blue-900 text-white font-bold py-2 px-8 rounded-sm shadow hover:bg-green-700 transition text-xl w-full tracking-wide">
          LOOK INTO OUR PORTFOLIO FOR SRII WORK JOURNEY !
        </button>
      </div>
    </div>
  );
}
