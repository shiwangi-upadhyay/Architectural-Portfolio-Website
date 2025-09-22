import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const images = [
  { src: "/assets/img1.jpeg", alt: "Image 1", title: "Division 1" },
  { src: "/assets/img2.jpg", alt: "Image 2", title: "Division 2" },
  { src: "/assets/img3.jpg", alt: "Image 3", title: "Division 3" },
  { src: "/assets/img4.jpeg", alt: "Image 4", title: "Division 4" },
  { src: "/assets/img5.jpg", alt: "Image 5", title: "Division 5" },
  { src: "/assets/img1.jpeg", alt: "Image 6", title: "Division 6" },
];

export default function ServiceCard() {
  return (
    <div className="py-16 w-full bg-white">
      <Card className="overflow-hidden grid grid-cols-3 w-full gap-x-10 max-w-4xl mx-auto h-[80%]  ">
        {images.map((img, index) => (
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Title Bar */}
            <div
              className="
              absolute left-0 bottom-0
              w-full
              bg-blue-950 bg-opacity-95
              px-8 py-3
              shadow
              overflow-hidden
              group
              cursor-pointer
            "
            >
              {/* Sliding Orange Overlay */}
              <span
                className="
                absolute top-0 left-0 h-full w-full
                bg-orange-500
                transition-transform duration-800 ease-in-out
                -z-0
                group-hover:translate-x-0
                translate-x-[-100%]
              "
                aria-hidden="true"
              />
              {/* Text */}
              <span className="relative text-white text-2xl font-semibold z-10">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
