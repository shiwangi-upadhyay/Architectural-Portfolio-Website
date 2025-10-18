import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const images = [
  { src: "/assets/img1.jpeg", alt: "Image 1", title: "Division 1" },
  { src: "/assets/img2.jpg", alt: "Image 2", title: "Division 2" },
  { src: "/assets/img3.jpg", alt: "Image 3", title: "Division 3" },
  { src: "/assets/img4.jpeg", alt: "Image 4", title: "Division 4" },
];

export default function ServiceCard() {
  return (
    <div className="py-16 w-full bg-white">
      <Card className="overflow-hidden grid grid-cols-2 w-full gap-x-20 max-w-4xl mx-auto ">
        {images.map((img, index) => (
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Card>
    </div>
  );
}
