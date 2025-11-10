import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const banners = [
  {
    id: 1,
    bgColor: "#0ea5a4",
    title: "Find Your Perfect Home",
    subtitle: "Verified listings · Flexible booking · Secure payments",
    ctaText: "Browse Rooms",
    ctaLink: "/rooms",
    image: "https://i.ibb.co.com/Z6PXtv45/download-1.jpg",
    imageAlt: "Modern apartment living room",
  },
  {
    id: 2,
    bgColor: "#083344",
    title: "Comfortable Family Houses",
    subtitle: "Spacious houses for families — trusted hosts nearby",
    ctaText: "See Family Homes",
    ctaLink: "/rooms?type=Family%20House",
    image: "https://i.ibb.co.com/tMm1jJML/download.jpg",
    imageAlt: "Cozy family house exterior",
  },
  {
    id: 3,
    bgColor: "#7c3aed",
    title: "Affordable Single Rooms",
    subtitle: "Budget-friendly and fully furnished single rooms",
    ctaText: "Explore Single Rooms",
    ctaLink: "/rooms?type=Single%20Room",
    image: "https://i.ibb.co.com/kVTcvbRb/images-1.jpg",
    imageAlt: "Compact furnished single room",
  },
  {
    id: 4,
    bgColor: "#0f766e",
    title: "Studios for Modern Living",
    subtitle: "Stylish studios in prime locations — move in tomorrow",
    ctaText: "View Studios",
    ctaLink: "/rooms?type=Studio",
    image: "https://i.ibb.co.com/d4XcnH3N/images-2.jpg",
    imageAlt: "Stylish studio apartment",
  },
  {
    id: 5,
    bgColor: "#f87171",
    title: "Short-term Sublets",
    subtitle: "Flexible sublets for weeks or months — perfect for travelers",
    ctaText: "Find Sublets",
    ctaLink: "/rooms?type=Sublet",
    image: "https://i.ibb.co.com/HLDDPfL9/images.jpg",
    imageAlt: "Cozy short-term sublet interior",
  },
];



const Banner = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={4000}
        transitionTime={1000}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative flex items-center justify-between text-white"
            style={{
              backgroundColor: banner.bgColor,
              maxHeight: "500px",
              height: "500px",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent z-0"></div>

            {/* Left content */}
            <div className="relative z-10 w-full md:w-1/2 p-4 md:p-10 space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">{banner.title}</h2>
              <p className="text-sm md:text-lg text-gray-100">
                {banner.subtitle}
              </p>
              <a
                href={banner.ctaLink}
                className="inline-block bg-white text-black font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                {banner.ctaText}
              </a>
            </div>
            {/* Right image */}
            <div className="hidden md:block w-1/2 h-full">
              <img
                src={banner.image}
                alt={banner.imageAlt}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
