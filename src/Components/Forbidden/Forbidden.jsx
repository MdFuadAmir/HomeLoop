import { FaLock } from "react-icons/fa";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-teal-200 via-teal-50 to-teal-200 text-teal-700">
      <FaLock className="text-6xl text-red-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">403 - Forbidden</h1>
      <p className="text-gray-600 mb-6">
        Sorry, you don’t have permission to access this page.
      </p>
      <Link
        to="/"
        className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Forbidden;
