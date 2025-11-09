const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        About Us
      </h1>

      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
        <p>
          Welcome to <span className="font-semibold text-blue-600">HouseLoop</span>! 
          We are committed to providing the best housing experience with transparency and convenience. 
          Our mission is to connect tenants and hosts effortlessly.
        </p>

        <p>
          With years of experience in property management, we ensure that all our listings are verified, 
          safe, and meet the highest standards. Whether you are looking for a cozy apartment, a family house, or a single room, we’ve got you covered.
        </p>

        <p>
          Our team is dedicated to making renting and hosting simple and secure. 
          We value trust, reliability, and exceptional service.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Our Vision</h2>
          <p>
            To become the most trusted platform for renting and hosting homes, 
            providing a seamless experience for everyone.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-green-600">Our Mission</h2>
          <p>
            To simplify property rental processes, ensure safety and transparency, 
            and connect communities worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
