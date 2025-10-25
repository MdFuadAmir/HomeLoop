import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-teal-50 text-teal-700">
        <FaSpinner className="animate-spin text-5xl mb-4" />
        <h2 className="text-xl font-semibold">Loading...</h2>
        <p className="text-gray-500 mt-2">
          Please wait while we fetch your data.
        </p>
      </div>
    </div>
  );
};

export default Loading;
