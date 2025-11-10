const blogs = [
  {
    id: 1,
    title: "How to Find the Perfect Rental Room",
    image: "https://i.ibb.co.com/SXjwDKPR/download-3.jpg",
    text: "Learn how to choose a safe, comfortable, and affordable room for your stay.",
  },
  {
    id: 2,
    title: "Top 5 Things to Check Before Booking",
    image: "https://i.ibb.co.com/bMTXMnFR/download-2.jpg",
    text: "Avoid common mistakes—verify facilities, host rating, and location.",
  },
  {
    id: 3,
    title: "How to Save Money on Monthly Rentals",
    image: "https://i.ibb.co.com/XTZVPJ9/download-4.jpg",
    text: "Get smart tips for finding budget-friendly long-term stays.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-10">
      <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Latest <span className="text-teal-600">Tips & Blogs</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="bg-linear-to-br from-teal-200 via-teal-50 to-teal-200 rounded-xl shadow-2xl hover:shadow-md transition p-4 border border-teal-400"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-sm md:text-lg font-semibold text-gray-700 mb-1">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              {item.text}
            </p>
            <button className="text-xs md:text-sm text-teal-600 mt-2 hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
