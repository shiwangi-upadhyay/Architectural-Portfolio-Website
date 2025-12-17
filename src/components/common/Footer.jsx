"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube, FaAngleRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const services = [
    "MEP Services",
    "Structural Services",
    "Architectural Services",
    "VDC Services",
    "Architectural Engineering Services",
    
  ];

  const quickLinks = [
    { name: "Locations", href: "/locations" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Career", href: "/career" },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "1 Research Ct, Ste 335, Rockville MD 20850" },
    { icon: FaPhone, text: "202-465-4830 (HQ)" },
    { icon: FaMapMarkerAlt, text: "66 W Flagler Street, Suite 900 Miami, FL 33130" },
    { icon: FaPhone, text: "(786) 789-2103 (FL)" },
    { icon: FaEnvelope, text: "info@shri.com" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#001b33] via-[#002244] to-[#001b33] text-gray-300 w-full">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            {/* <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/logo.png"
                alt="Tejjy Logo"
                width={180}
                height={60}
                className="rounded-md hover:opacity-90 transition-opacity"
                priority
              />
            </Link> */}
            <p className="text-sm leading-relaxed mb-5">
              <span className="text-orange-400 font-semibold">Srii Constructions</span> – 8(a) Certified Women Owned Small Business
              (WOSB/MBE/DBE/WBE). Facilitating Architecture, Engineering, and
              Construction Industry with SRII, VDC & 3D Laser Scanning Services across the USA.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { href: "https://linkedin.com", icon: <FaLinkedin /> },
                { href: "https://instagram.com", icon: <FaInstagram /> },
                { href: "https://youtube.com", icon: <FaYoutube /> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-white/10 hover:bg-orange-500 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-orange-400 font-semibold mb-3 uppercase tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-1 text-sm">
              {services.map((item, i) => (
                <li key={i} className="flex items-start gap-2 hover:text-orange-400 transition-all">
                  <FaAngleRight className="mt-1 text-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-orange-400 font-semibold mb-3 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-1 text-sm">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 hover:text-orange-400 transition-all"
                  >
                    <FaAngleRight className="mt-1 text-orange-400" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-orange-400 font-semibold mb-3 uppercase tracking-wide">
              Contact Info
            </h4>
            <ul className="space-y-1 text-sm">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex gap-3 items-start hover:text-orange-400 transition-all">
                    <Icon className="mt-1 text-orange-400" />
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-0 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} 
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.png"
                alt="Tejjy Logo"
                width={90}
                height={5}
                className="rounded-md hover:opacity-90 transition-opacity mt-3 md:mt-0"
                priority
              />
            </Link> . All Rights Reserved.
          </p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="text-white pt-8 mt-16 mx-auto bg-[#002651] w-full">
//       <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-16">
//         {/* About Company */}
//         <div>
//           <h4 className="mb-6 tracking-wide">About Company</h4>
//           <div className="font-bold text-2xl mb-6 text-orange-400">
//             <Link href="/">
//               <Image
//                 src="/assets/logo.png"
//                 alt="Logo"
//                 width={180}
//                 height={60}
//                 className="cursor-pointer rounded-md"
//                 priority
//               />
//             </Link>
//           </div>
//           <p className="text-sm">
//             Tejjy Inc. – 8(a) Certified Women Owned Small Business
//             (WOSB/MBE/DBE/WBE). Facilitating Architecture Engineering and
//             Construction Industry with SRII VDC & 3D Laser Scanning Services in
//             USA
//           </p>
//         </div>

//         {/* Services */}
//         <div>
//           <h4 className="mb-6">OUR SERVICES</h4>
//           <ul className="text-xs space-y-1">
//             {[
//               "SRII Services",
//               "MEP Services",
//               "Structural SRII Services",
//               "Architectural SRII Services",
//               "VDC Services",
//               "Architectural Engineering Services",
//               "Facilities Operations & Management",
//               "Permit Expeditor Services",
//               "CAD Drafting Services",
//             ].map((item, i) => (
//               <li
//                 key={i}
//                 className="flex items-center gap-2 hover:underline cursor-pointer"
//               >
//                 <FaAngleRight className="text-orange-400" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="mb-6 tracking-wide">QUICK LINKS</h4>
//           <ul className="text-xs space-y-1">
//             {["Locations", "Projects", "Blogs", "Capability Statements", "Career"].map(
//               (item, i) => (
//                 <li
//                   key={i}
//                   className="flex items-center gap-2 hover:underline cursor-pointer"
//                 >
//                   <FaAngleRight className="text-orange-400" />
//                   {item}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="mb-6 tracking-wide">CONTACT INFO</h4>
//           <ul className="text-xs space-y-1">
//             {[
//               "1 Research Ct, Ste 335, Rockville MD 20850",
//               "202-465-4830 (HQ)",
//               "66 W Flagler Street, Suite 900 Miami, FL 33130",
//               "(786) 789-2103 (FL)",
//               "info@tejjy.com",
//             ].map((item, i) => (
//               <li key={i} className="flex items-center gap-2">
//                 <FaAngleRight className="text-orange-400" />
//                 {item}
//               </li>
//             ))}
//           </ul>

//           {/* Social Icons */}
//           <div className="mt-4 flex gap-4">
//             <a
//               href="https://www.linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 text-2xl hover:scale-110 transition-transform"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://www.instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-pink-500 text-2xl hover:scale-110 transition-transform"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-red-600 text-2xl hover:scale-110 transition-transform"
//             >
//               <FaYoutube />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bg-[#011d3c] w-full mx-auto px-4 mt-8 border-t border-blue-800 py-4 flex flex-col md:flex-row justify-around items-center text-sm">
//         <span>
//           Copyright © 2025 Tejjy Incorporation, All Rights Reserved. Powered by
//           Tejjy
//         </span>
//         <span className="mt-2 md:mt-0 flex gap-4">
//           <a href="#" className="underline">
//             Privacy Policy
//           </a>
//           <a href="#" className="underline">
//             Terms of use
//           </a>
//         </span>
//       </div>
//     </footer>
//   );
// }