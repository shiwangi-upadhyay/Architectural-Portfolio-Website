import Image from "next/image";

const projects = [
  {
    title: "As Built",
    subtitle: "As-Built for MEP",
    img: "/assets/img1.jpeg",
  },
  {
    title: "Floor Plan",
    subtitle: "",
    img: "/assets/img2.jpg",
  },
  {
    title: "Architectural Drawings",
    subtitle: "",
    img: "/assets/img3.jpg",
  },
  {
    title: "Construction Documentation",
    subtitle: "",
    img: "/assets/img4.jpeg",
  },
];

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center max-w-6xl w-full mx-auto px-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden shadow-lg rounded-lg group cursor-pointer"
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
              {project.title}
            </div>
            {project.subtitle && (
              <div className="text-white font-medium text-sm sm:text-base md:text-lg mt-1">
                {project.subtitle}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
