import React from 'react'

export default function ProjectTabs({ sectors, active, setActive }) {
  return (
    <div className="flex justify-center bg-white border-b mb-6">
      {sectors.map((sector) => (
        <button
          key={sector}
          className={`px-6 py-4 text-lg font-medium transition border-none outline-none
            ${
              active === sector
                ? "text-blue-900 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }
          `}
          onClick={() => setActive(sector)}
        >
          {sector}
        </button>
      ))}
    </div>
  );
}