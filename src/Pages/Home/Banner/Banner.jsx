

const Banner = () => {
    return (
        <div className="">
             <div className="hero min-h-[90vh] bg-indigo-950">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Banner Image */}
        <img
          src="https://i.ibb.co/nbZ9nPZ/home-rent-banner.jpg"
          alt="House Rent Banner"
          className="max-w-sm rounded-2xl shadow-2xl w-full"
        />

        {/* Banner Text */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Welcome to <span className="text-secondary">HouseLppo</span>
          </h1>
          <p className="py-4 text-lg text-gray-600">
            Find your perfect home for rent with comfort, convenience, and
            reliability. HouseLppo makes house hunting simple, fast, and
            stress-free.
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center lg:justify-start gap-3">
            <button className="btn btn-primary">Explore Listings</button>
            <button className="btn btn-outline btn-secondary">
              Post Your Property
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;