import Link from "next/link";
import ServiceCard from "./ServiceCard";

export default function Divisions() {
  return (
    <section className="w-full bg-white py-12">
      {/* Reduced max width so cards appear smaller on large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-orange-400 tracking-wider">
            DIVISIONS
          </h2>
          <div className="h-1 w-24 bg-orange-200 mx-auto mt-4" />
        </header>

        <ServiceCard />
      </div>
    </section>
  );
}