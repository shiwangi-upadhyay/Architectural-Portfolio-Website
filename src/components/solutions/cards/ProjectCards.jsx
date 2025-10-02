import Image from "next/image";

const projects = [
  {
    title: "As Built",
    subtitle: "As-Built for MEP",
    img: "/projects/as-built.png",
  },
  {
    title: "Floor Plan",
    subtitle: "",
    img: "/projects/floor-plan.png",
  },
  {
    title: "Architectural Drawings",
    subtitle: "",
    img: "/projects/architectural-drawings.png",
  },
  {
    title: "Construction Documentation",
    subtitle: "",
    img: "/projects/construction-documentation.png",
  },
];

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {projects.map((project) => (
        <div key={project.title} className="relative w-54 h-44 overflow-hidden shadow-lg">
          <Image src={project.img} alt={project.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
            <div className="text-white font-bold text-2xl">{project.title}</div>
            {project.subtitle && (
              <div className="text-white font-medium text-lg">{project.subtitle}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}