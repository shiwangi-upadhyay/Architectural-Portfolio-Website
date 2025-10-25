"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "../ui/card";

/**
 * SolutionCard responsive grid:
 * - mobile: 1 column
 * - sm: 2 columns
 * - lg: 3 columns
 *
 * Includes overlay bar and hover/keyboard/focus states.
 */

const solutions = [
  { src: "/assets/img1.jpeg", alt: "Solution 1", title: "Solution 1", href: "/solutions/1" },
  { src: "/assets/img2.jpg", alt: "Solution 2", title: "Solution 2", href: "/solutions/2" },
  { src: "/assets/img3.jpg", alt: "Solution 3", title: "Solution 3", href: "/solutions/3" },
  { src: "/assets/img4.jpeg", alt: "Solution 4", title: "Solution 4", href: "/solutions/4" },
  { src: "/assets/img5.jpg", alt: "Solution 5", title: "Solution 5", href: "/solutions/5" },
  { src: "/assets/img1.jpeg", alt: "Solution 6", title: "Solution 6", href: "/solutions/6" },
];

export default function SolutionCard() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((item, idx) => (
          <Link
            key={`${item.src}-${idx}`}
            href={item.href}
            className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
            aria-label={item.title}
          >
            <Card className="relative w-full">
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx === 0}
                />
                {/* Title Bar */}
                <div className="absolute left-0 bottom-0 w-full bg-black/70 px-4 py-3">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-1 hidden sm:block">Explore {item.title}</p>
                </div>
                {/* Sliding overlay for hover effect */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-full w-full bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-0 group-hover:opacity-30"
                />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}