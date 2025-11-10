import { FaLock, FaHome, FaBolt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaLock className="text-teal-600 text-3xl mb-2" />,
    title: "Secure Payments",
    text: "Your transactions are protected with end-to-end encryption.",
  },
  {
    icon: <FaHome className="text-teal-600 text-3xl mb-2" />,
    title: "Verified Hosts",
    text: "Every host and listing is manually verified for quality assurance.",
  },
  {
    icon: <FaBolt className="text-teal-600 text-3xl mb-2" />,
    title: "Fast Booking",
    text: "Book your stay instantly — no waiting, no hassle.",
  },
  {
    icon: <FaHeadset className="text-teal-600 text-3xl mb-2" />,
    title: "24/7 Support",
    text: "We’re here to help you anytime, anywhere.",
  },
];

const WhyChooseUs = () => {
    
  return (
    <section className="py-10 rounded-2xl">
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
        Why Choose <span className="text-teal-600">HouseLoop</span>?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-linear-to-bl from-teal-200 via-teal-50 to-teal-200 
                       shadow-xl rounded-xl p-5 text-center 
                       hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 items-center flex flex-col"
          >
            {item.icon}
            <h3 className="text-lg font-bold text-gray-700 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
