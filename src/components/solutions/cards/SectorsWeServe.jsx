"use client";
import Image from "next/image";

const sectors = [
  {
    title: "Healthcare",
    icon: "/icons/healthcare.png",
    points: [
      "Hospitals, Dental Centre’s, Medical Colleges, Health Care Clinics, Community Health Centre’s",
    ],
  },
  {
    title: "Educational",
    icon: "/icons/institution.png",
    points: ["Schools, Colleges, Universities, Technical Institute, Classroom"],
  },
  {
    title: "General Contracting",
    icon: "/icons/hook.png",
    points: [
      "Bidding, Pre-fabrication, Construction, Quantity Take Off, 4D BIM, 5D BIM",
    ],
  },
  {
    title: "Architecture",
    icon: "/icons/house.png",
    points: [
      "Residential Buildings, High Rise Apartments, Commercial Complexes, Stadiums, Metro Stations",
    ],
  },
  {
    title: "Industrial",
    icon: "/icons/factory.png",
    points: [
      "Power Plants, Mining Industry, Refineries, Manufacturing Facilities",
    ],
  },
  {
    title: "Builders/Project Owners",
    icon: "/icons/office-building.png",
    points: [
      "3D Visualization, BIM Facility Management, Construction Drawings, As Built Modeling",
    ],
  },
  {
    title: "Engineering",
    icon: "/icons/worker.png",
    points: [
      "Shop Drawings, 3D Clash Coordination, Revit Family Creation, Scan to BIM",
    ],
  },
  {
    title: "Infrastructure",
    icon: "/icons/bridge.png",
    points: [
      "Wastewater Treatment Plant, Offshore Structures, Bridges, Dams, Stadiums, Civic Structures, Substation",
    ],
  },
];

export default function SectorsWeServe() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 tracking-wide">
          SECTORS WE SERVE:
        </h2>
        <div className="flex mb-16">
          <div className="w-10 h-[2px] bg-gradient-to-r from-orange-500 to-blue-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {sectors.map((sector) => (
            <div key={sector.title} className="flex text-center gap-6">
              <div className="w-20 h-20">
                <Image
                  src={sector.icon}
                  alt={sector.title}
                  width={36}
                  height={36}
                  className="object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(13%) sepia(86%) saturate(7000%) hue-rotate(210deg) brightness(90%) contrast(100%)",
                  }}
                />
              </div>
              <div className="flex flex-col items-start text-start ">
                <h3 className="font-bold text-lg text-gray-800 mb-1 tracking-wide">
                  {sector.title}
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  {sector.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
