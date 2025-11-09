const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p>
            Have questions or need help? Reach out to our support team. 
            We are here to assist you.
          </p>

          <div className="space-y-2">
            <p><span className="font-semibold">Email:</span> mdfuadamir@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +880 1705470131</p>
            <p><span className="font-semibold">Address:</span> kataikhana mor, Kushtia, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full rounded"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
