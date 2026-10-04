import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const PageHeader = ({
  title,
  currentPage,
  sectionClassName = "bg-[#002651] text-white py-12 sm:py-16 md:py-20 text-center",
  containerClassName = "max-w-4xl mx-auto px-4 sm:px-6",
  headingClassName = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3",
  breadcrumbClassName = "mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400",
}) => {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <h1 className={headingClassName}>{title}</h1>

        <div className={breadcrumbClassName}>
          <Home size={14} className="text-orange-400" />
          <Link href="/">
            <span className="hover:text-orange-400 transition-colors cursor-pointer">
              Home
            </span>
          </Link>
          <ChevronRight size={12} />
          <span className="text-orange-400">{currentPage}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
