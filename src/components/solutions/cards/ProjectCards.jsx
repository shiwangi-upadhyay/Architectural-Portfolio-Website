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
    <div className="grid grid-cols-4 gap-4 justify-center">
      {projects.map((project) => (
        <div key={project.title} className="relative w-54 h-44 overflow-hidden shadow-lg">
          <Image src={project.img} alt={project.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-4">
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