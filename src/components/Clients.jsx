import Image from "next/image";

const clients = [
  { src: "/clients/tata.webp", alt: "L&T Construction" },
  { src: "/clients/accenture.png", alt: "Godrej Properties" },
  { src: "/clients/oracle.webp", alt: "Turner" },
  { src: "/clients/wipro.png", alt: "Interbrand" },
  { src: "/clients/wipro.png", alt: "Shapoorji Pallonji" },
  { src: "/clients/oracle.webp", alt: "Mace" },
  { src: "/clients/tata.webp", alt: "Punj Lloyd" },
  { src: "/clients/accenture.png", alt: "Bharti Realty" },
  { src: "/clients/wipro.png", alt: "Gensler" },
  { src: "/clients/accenture.png", alt: "NBCC" },
  { src: "/clients/tata.webp", alt: "NBCC Hindi" },
  { src: "/clients/oracle.webp", alt: "Burman GSC" },
  { src: "/clients/wipro.png", alt: "AECOM" },
  { src: "/clients/accenture.png", alt: "Tata Projects" },
  { src: "/clients/tata.webp", alt: "Tata Value Homes" },
];

export default function ClientsSection() {
  return (
    <div className="py-12 w-full bg-white">
      <h2 className="text-7xl font-light text-orange-400 text-center mb-4 tracking-wider">
        CLIENTS
      </h2>
      <div className="h-1 w-40 bg-orange-200 mx-auto mb-12" />
      <div className="flex flex-col items-center gap-y-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-12 max-w-6xl mx-auto">
          {clients.slice(0, 5).map((c, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={c.src}
                alt={c.alt}
                width={170}
                height={80}
                className="object-contain max-h-20 max-w-[170px]"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-12 max-w-6xl mx-auto">
          {clients.slice(5, 10).map((c, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={c.src}
                alt={c.alt}
                width={170}
                height={80}
                className="object-contain max-h-20 max-w-[170px]"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-12 max-w-6xl mx-auto">
          {clients.slice(10, 12).map((c, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={c.src}
                alt={c.alt}
                width={170}
                height={80}
                className="object-contain max-h-20 max-w-[170px]"
              />
            </div>
          ))}
          {/* For symmetry, fill empty cells */}
          <div />
          <div />
          <div />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 max-w-4xl mx-auto">
          {clients.slice(12, 15).map((c, i) => (
            <div key={i} className="flex items-center justify-center">
              <Image
                src={c.src}
                alt={c.alt}
                width={220}
                height={80}
                className="object-contain max-h-20 max-w-[220px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}