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
    <div className="grid grid-cols-4 gap-4 justify-center">
      {bimServices.map((bim) => (
        <div key={bim.title} className="relative w-54 h-44 overflow-hidden shadow-lg">
          <Image src={bim.img} alt={bim.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 flex items-end p-4">
            <div className="text-white font-bold text-xl">{bim.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}