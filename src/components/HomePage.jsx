import React from "react";
import { CarouselPlugin } from "../components/Carousel";
import Divisions from "../components/divisions/Divisions";
import Solutions from "../components/solutions/Solutions";
import ClientsSection from "../components/Clients";
import Footer from "../components/common/Footer";

const Homepage = () => {
  return (
    <main className="w-full flex flex-col items-center">
      {/* Hero Section with Carousel */}
      <section className="w-full">
        <CarouselPlugin />
        <div className="max-w-5xl mx-auto p-6 space-y-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, adipisci quibusdam ad suscipit quisquam eius ducimus rerum fugit aut...
          </p>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="w-full  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Divisions />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Solutions />
        </div>
      </section>

      {/* Client Section */}
      <section className="w-full  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientsSection />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Homepage;