import { Link } from "react-router";

const CTASection = () => {
  return (
    <section
      className="py-10 rounded-2xl text-white mt-10"
      style={{
        background: "linear-gradient(135deg, #0f766e, #0ea5a4)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center px-4 space-y-3">
        <h2 className="text-xl font-semibold">Ready to Find Your Next Home?</h2>

        <p className="text-sm text-gray-100 leading-relaxed">
          Explore thousands of verified listings and book your perfect stay
          within minutes.
        </p>

        <Link
          to="/rooms"
          className="inline-block bg-white text-teal-700 font-medium px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
        >
          Browse All Rooms
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
