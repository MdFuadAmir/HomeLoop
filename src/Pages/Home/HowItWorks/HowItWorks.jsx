const steps = [
  {
    step: "1",
    title: "Search Rooms",
    text: "Find verified listings that match your needs.",
  },
  {
    step: "2",
    title: "Choose Perfect Stay",
    text: "Compare price, comfort, and location easily.",
  },
  {
    step: "3",
    title: "Book Securely",
    text: "Use our trusted payment gateway to confirm your stay.",
  },
  {
    step: "4",
    title: "Enjoy Your Trip",
    text: "Relax and make yourself at home.",
  },
];

const HowItWorks = () => {
  return (
    <div data-aos="fade-right"
      className="py-10"
    >
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
        How It <span className="text-teal-600">Works</span>
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-start gap-6 px-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-linear-to-br from-teal-200 via-teal-50 to-teal-200  flex flex-col items-center text-center sm:w-1/5 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="bg-teal-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold mb-2">
              {item.step}
            </div>
            <h3 className="text-sm md:text-lg font-bold text-gray-700 mb-1">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

