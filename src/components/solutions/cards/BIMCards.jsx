import Image from "next/image";

const bimServices = [
  {
    title: "Architectural BIM",
    img: "/bim/architectural-bim.png",
  },
  {
    title: "MEPF BIM",
    img: "/bim/mepf-bim.png",
  },
  {
    title: "Structural BIM",
    img: "/bim/structural-bim.png",
  },
  {
    title: "Facade BIM",
    img: "/bim/facade-bim.png",
  },
];

export default function BIMCards() {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {bimServices.map((bim) => (
        <div key={bim.title} className="relative w-54 h-44 overflow-hidden shadow-lg">
          <Image src={bim.img} alt={bim.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
            <div className="text-white font-bold text-xl">{bim.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}