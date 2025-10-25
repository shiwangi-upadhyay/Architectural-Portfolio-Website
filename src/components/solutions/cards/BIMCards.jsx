import Image from "next/image";

const bimServices = [
  {
    title: "Architectural BIM",
    img: "/assets/img1.jpeg",
  },
  {
    title: "MEPF BIM",
    img: "/assets/img2.jpg",
  },
  {
    title: "Structural BIM",
    img: "/assets/img3.jpg",
  },
  {
    title: "Facade BIM",
    img: "/assets/img4.jpeg",
  },
];

export default function BIMCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center px-4">
      {bimServices.map((bim) => (
        <div
          key={bim.title}
          className="relative w-full h-44 sm:h-48 md:h-52 overflow-hidden shadow-lg rounded-lg group cursor-pointer"
        >
          <Image
            src={bim.img}
            alt={bim.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
              {bim.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}