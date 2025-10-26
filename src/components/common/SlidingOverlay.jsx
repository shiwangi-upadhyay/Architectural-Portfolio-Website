"use client";

import React from "react";

/**
 * SlidingOverlay
 * - as: element tag to render ('div' | 'button' | 'a' | etc.)
 * - className: additional classes for the wrapper (group should NOT be required by caller)
 * - overlayClassName: extra classes to apply to overlay span (colors, gradients)
 * - baseBgClass: base background (shown before overlay slides in)
 * - overlayFrom: 'left' | 'right'
 * - overlayOpacity: opacity class to apply when overlay visible (e.g. 'opacity-70' or 'opacity-30')
 * - duration: Tailwind duration class without the 'duration-' prefix (e.g. '500' -> duration-500)
 *
 * Example:
 * <SlidingOverlay as="button" baseBgClass="bg-blue-900" overlayClassName="from-orange-500 to-pink-500" overlayFrom="left">Click</SlidingOverlay>
 */
export default function SlidingOverlay({
  as = "div",
  className = "",
  children,
  overlayClassName = "from-orange-500 to-pink-500", // gradient tailwind classes to combine with bg-gradient-to-r
  baseBgClass = "bg-blue-900",
  overlayFrom = "left",
  overlayOpacity = "opacity-30",
  duration = "600", // numeric part of duration class
  ...props
}) {
  const Wrapper = as;

  // compute transform classes
  const startTransform = overlayFrom === "right" ? "translate-x-full" : "-translate-x-full";

  return (
    <Wrapper
      {...props}
      className={`group relative inline-flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Sliding overlay (on top) */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-r ${overlayClassName} transform ${startTransform} group-hover:translate-x-0 group-focus:translate-x-0 transition-transform duration-${duration} ease-in-out pointer-events-none z-10 ${overlayOpacity}`}
      />

      {/* Base background layer underneath the overlay */}
      <span aria-hidden="true" className={`absolute inset-0 ${baseBgClass} z-0 pointer-events-none`} />

      {/* Content above overlays */}
      <span className="relative z-20">
        {children}
      </span>

      {/* Reduce motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover span[aria-hidden="true"],
          .group:focus span[aria-hidden="true"] {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </Wrapper>
  );
}