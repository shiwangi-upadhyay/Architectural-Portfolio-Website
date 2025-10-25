"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import Image from "next/image"

const images = [
  { src: "/assets/img1.jpeg", alt: "Image 1" },
  { src: "/assets/img2.jpg", alt: "Image 2" },
  { src: "/assets/img3.jpg", alt: "Image 3" },
  { src: "/assets/img4.jpeg", alt: "Image 4" },
  { src: "/assets/img5.jpg", alt: "Image 5" },
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="relative">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card className="w-full"> 
                  <CardContent className="relative w-full h-[650px] p-0"> 
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </div>
    </Carousel>
  )
}