import React from 'react';

export default function ProjectTabs({ sectors, active, setActive }) {
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <div className="flex justify-center min-w-max px-4">
          {sectors.map((sector) => (
            <button
              key={sector}
              className={`px-4 sm:px-6 py-3 sm:py-4 text-sm md:text-base font-medium cursor-pointer transition-all duration-300 border-b-2 outline-none relative whitespace-nowrap
                ${
                  active === sector
                    ? "text-orange-500 border-orange-500"
                    : "text-gray-600 border-transparent hover:text-blue-900 hover:border-blue-200"
                }
              `}
              onClick={() => setActive(sector)}
            >
              {sector}
              {active === sector && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}