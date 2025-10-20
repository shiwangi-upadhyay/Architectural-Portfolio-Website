import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import Footer from "../common/Footer";

export default function ProjectDetails({ project }) {
  if (!project) return <div className="text-center py-24 text-xl text-red-500">Project not found.</div>;

  // Fallback: If images is missing, fallback to the single image field or empty array
  const images = project.images?.length ? project.images : (project.image ? [project.image] : []);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-100 py-8 mb-2 border-b">
        <h1 className="text-3xl text-center font-semibold text-gray-800">{project.title}</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Carousel Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
            <Carousel
              plugins={[plugin.current]}
              className="w-full h-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <div className="relative">
                <CarouselContent>
                  {images.map((img, index) => (
                    <CarouselItem key={index}>
                      <Card className="w-full">
                        <CardContent className="relative w-full h-96 p-0">
                          <Image
                            src={img}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
              </div>
            </Carousel>
          </div>
        </div>
        {/* Details */}
        <div className="flex-1 bg-white rounded-lg shadow-lg px-8 py-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{project.summary}</h2>
          <p className="text-gray-700 mb-6">{project.description}</p>
          <div className="border-t border-pink-500 my-4"></div>
          <div className="space-y-4">
            <div>
              <span className="font-semibold text-gray-700">Sector</span>
              <div className="text-gray-900">{project.sector}</div>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Service Offered</span>
              <div className="text-gray-900">{project.services}</div>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Software</span>
              <div className="text-gray-900">{project.software}</div>
            </div>
          </div>
          <button className="mt-8 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-pink-600 transition">
            BIM SERVICES
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}