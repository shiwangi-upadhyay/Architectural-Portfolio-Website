import { CarouselPlugin } from "./Carousel";
import React from "react";
import Divisions from "./divisions/Divisions";
import Solutions from "./solutions/Solutions";
import ClientsSection from "./Clients";
import Footer from "./common/Footer";

const Homepage = () => {
  return (
    <div className="flex w-full flex-col items-center">
     {/* Hero Section with Carousel */}
      <section className="w-full">
        <CarouselPlugin />
        <div className="max-w-5xl mx-auto p-6 space-y-8">
          {/* Additional content can go here */}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, adipisci quibusdam ad suscipit quisquam eius ducimus rerum fugit aut. Molestias eos omnis asperiores odit itaque possimus, labore suscipit tenetur dolorem minus exercitationem sit ea explicabo illum error voluptates maxime vnem accusantium excepturi ipsa necessitatibus sed? Libero ipsam quis voluptatem recusandae placeat itaque quo quaerat ad nisi at reiciendis alias dolore, nemo sit adipisci impedit, aliquam deserunt possimus. Fugiat pariatur ullam asperiores officia quibusdam numquam neque itaque dolorum officiis, est nisi. Dignissimos dolore officia explicabo alias expedita quo repu. Cum accusamus assumenda eaque aliquid in veniam dolor inventore aperiam culpa deserunt commodi quasi beatae quo corrupti ipsa ad harum, minus facilis optio modi rerum repudiandae odit velit a. Hic dicta reprehenderit neque exercitationem.</p>
        </div>
      </section>
      {/* Divisions Section */}
      <section className="w-full py-12">
        <Divisions />
      </section>
      {/* Solutions Section */}
      <section className="w-full py-12">
        <Solutions/>
      </section>
      {/* Client Section */}
      <section className="w-full py-12">
        <ClientsSection/>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;

  