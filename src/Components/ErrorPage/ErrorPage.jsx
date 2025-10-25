import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-teal-50 text-teal-700">
      <FaExclamationTriangle className="text-6xl text-yellow-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow-md"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
