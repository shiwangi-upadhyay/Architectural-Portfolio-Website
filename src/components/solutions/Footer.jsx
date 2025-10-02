import React from 'react'

export default function Footer() {
  return (
    <footer className=" text-white pt-8 mt-16 mx-auto">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-2xl mb-2 text-green-400">TEJJY</div>
          <p className="text-sm">
            Tejjy Inc. – 8(a) Certified Women Owned Small Business (WOSB/MBE/DBE/WBE). Facilitating Architecture Engineering and Construction Industry with BIM VDC & 3D Laser Scanning Services in USA
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">OUR SERVICES</h4>
          <ul className="text-sm space-y-1">
            <li>BIM Services</li>
            <li>MEP Services</li>
            <li>Structural BIM Services</li>
            <li>Architectural BIM Services</li>
            <li>VDC Services</li>
            <li>Architectural Engineering Services</li>
            <li>Facilities Operations & Management</li>
            <li>Permit Expeditor Services</li>
            <li>CAD Drafting Services</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">QUICK LINKS</h4>
          <ul className="text-sm space-y-1">
            <li>Locations</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Capability Statements</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">CONTACT INFO</h4>
          <ul className="text-sm space-y-1">
            <li>1 Research Ct, Ste 335, Rockville MD 20850</li>
            <li>202-465-4830 (HQ)</li>
            <li>66 W Flagler Street, Suite 900 Miami, FL 33130</li>
            <li>(786) 789-2103 (FL)</li>
            <li>info@tejjy.com</li>
          </ul>
          <div className="mt-2 flex gap-2">
            {/* Social icons here... */}
            <span className="bg-blue-700 rounded-full p-2">in</span>
            <span className="bg-pink-600 rounded-full p-2">ig</span>
            <span className="bg-red-600 rounded-full p-2">yt</span>
            {/* Add more */}
          </div>
        </div>
      </div>
      <div className="bg-[#011d3c] w-full mx-auto px-4 mt-8 border-t border-blue-800 py-4 flex flex-col md:flex-row justify-around items-center text-sm">
        <span>Copyright © 2025 Tejjy Incorporation, All Rights Reserved. Powered by Tejjy</span>
        <span className="mt-2 md:mt-0 flex gap-4">
          <a href="#" className="underline">Privacy Policy</a>
          <a href="#" className="underline">Terms of use</a>
        </span>
      </div>
    </footer>
  );
}