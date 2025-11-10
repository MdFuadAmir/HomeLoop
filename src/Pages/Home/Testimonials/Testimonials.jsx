import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    name: "Amina Rahman",
    image: "https://i.ibb.co/NVzYx1h/user1.jpg",
    feedback:
      "HouseLoop made finding a room so easy! The booking process was quick and secure.",
  },
  {
    name: "Sabbir Hasan",
    image: "https://i.ibb.co/pzW9rHt/user2.jpg",
    feedback:
      "Loved the verified listings! My host was super friendly and professional.",
  },
  {
    name: "Nadia Islam",
    image: "https://i.ibb.co/qMNfdpZ/user3.jpg",
    feedback:
      "The best rental experience I’ve had so far — great support and clean rooms!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 rounded-2xl">
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
        What Our <span className="text-teal-600">Customers</span> Say
      </h2>
      <div className="max-w-2xl mx-auto">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={4000}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-linear-to-r from-teal-300 via-teal-200 to-teal-100 p-6 rounded-xl shadow-2xl flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full mb-3 object-cover"
              />
              <p className="text-xs md:text-sm text-gray-500 italic mb-2 leading-relaxed">
                “{t.feedback}”
              </p>
              <h3 className="text-xs md:text-sm font-medium text-gray-700">{t.name}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
