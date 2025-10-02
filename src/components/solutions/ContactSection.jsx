import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full h-80 relative">
            <Image
              src="/contact/building.jpg" // Replace with your image path
              alt="Contact Building"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        <form className="flex-1 grid grid-cols-2 gap-4">
          <input type="text" placeholder="Name *" className="col-span-1 p-3 bg-gray-100 rounded" />
          <input type="text" placeholder="Company" className="col-span-1 p-3 bg-gray-100 rounded" />
          <input type="email" placeholder="Email *" className="col-span-1 p-3 bg-gray-100 rounded" />
          <input type="text" placeholder="Phone *" className="col-span-1 p-3 bg-gray-100 rounded" />
          <select className="col-span-1 p-3 bg-gray-100 rounded">
            <option>Select a Service</option>
            <option>Architectural Engineering</option>
            <option>3D Laser Scanning</option>
            {/* add more */}
          </select>
          <select className="col-span-1 p-3 bg-gray-100 rounded">
            <option>Select a Project Type</option>
            {/* add more */}
          </select>
          <select className="col-span-1 p-3 bg-gray-100 rounded">
            <option>Where do you need services?</option>
            {/* add more */}
          </select>
          <input type="text" placeholder="What is your Project Budget?" className="col-span-1 p-3 bg-gray-100 rounded" />
          <textarea placeholder="Message" className="col-span-2 p-3 bg-gray-100 rounded h-24" />
          {/* Add captcha here */}
          <div className="col-span-2 flex items-center gap-4 mt-2">
            <input type="checkbox" id="human" />
            <label htmlFor="human">I am human</label>
            <Image src="/contact/hcaptcha.png" alt="hCaptcha" width={100} height={40} />
          </div>
          <button className="col-span-2 mt-2 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-bold py-3 rounded hover:opacity-90 transition">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}