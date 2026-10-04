import PageHeader from "./common/PageHeader";

const ComingSoonPage = ({ title, currentPage }) => {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader title={title} currentPage={currentPage} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Oops, work is going on. We will add content here soon.
        </p>
      </section>
    </main>
  );
};

export default ComingSoonPage;
