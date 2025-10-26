"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "../ui/card";

/**
 * Compact / responsive ServiceCard:
 * - mobile: 1 column
 * - sm: 2 columns
 * - md: 3 columns (compact on tablets / desktops)
 * - lg: 3 columns (keeps them smaller on larger screens)
 *
 * Container max width is limited in Divisions.jsx (max-w-5xl)
 */

const items = [
  { src: "/assets/img1.jpeg", alt: "Division 1", title: "Division 1", href: "/division/1" },
  { src: "/assets/img2.jpg", alt: "Division 2", title: "Division 2", href: "/division/2" },
  { src: "/assets/img3.jpg", alt: "Division 3", title: "Division 3", href: "/division/3" },
  { src: "/assets/img4.jpeg", alt: "Division 4", title: "Division 4", href: "/division/4" },
];

export default function ServiceCard() {
  return (
    <div className="pt-4 ">
      {/* Increased columns at md/lg to make individual cards smaller */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-18">
        {items.map((item, idx) => (
          <Link
            key={`${item.src}-${idx}`}
            href={item.href}
            className="group block rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label={item.title}
          >
            <Card className="relative w-full">
              {/* Slightly tighter aspect ratio to reduce perceived height */}
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 sm:p-4">
                    <h3 className="text-white text-base sm:text-lg font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm mt-1 hidden sm:block">Learn more</p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}