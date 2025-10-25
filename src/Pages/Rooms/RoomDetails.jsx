import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { FaBath, FaBed, FaUserFriends } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import useAxios from "../../Hooks/useAxios";

const RoomDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const { data: room = {}, isLoading } = useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/rooms/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" p-4">
      <div className="max-w-5xl rounded-xl mx-auto flex flex-col md:flex-row bg-teal-100 gap-4">
        {/* Image */}
        <div className=" md:w-1/2 w-full overflow-hidden">
          <img src={room.image} alt={room.title} className=" object-cover" />
        </div>

        {/* Info Section */}
        <div className="bg-teal-50 p-6 shadow-sm space-y-4">
          {/* Title + Location */}
          <div className="flex justify-between flex-wrap">
            <div>
              <h1 className="text-2xl font-bold text-teal-700">
                {room.title || "Beautiful Stay"}
              </h1>
              <p className="text-gray-600">{room.location}</p>
            </div>
            <p className="text-emerald-600 text-xl font-semibold">
              ${room.price} / night
            </p>
          </div>

          {/* Dates */}
          <div className="flex gap-4 text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">From:</span>{" "}
              {room.from}
            </p>
            <p>
              <span className="font-semibold text-gray-800">To:</span> {room.to}
            </p>
          </div>

          {/* Guests & Rooms Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 mt-4">
            <p className="flex flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <FaUserFriends className="text-teal-600 text-lg" />
                {room.guests}
              </span>{" "}
              Guests
            </p>
            <p className="flex flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <FaBed className="text-teal-600 text-lg" />
                {room.bedroom}
              </span>{" "}
              Bedrooms
            </p>
            <p className="flex flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <FaBath className="text-teal-600 text-lg" />
                {room.bathroom}
              </span>
              Bathrooms
            </p>
            <p className="flex flex-col">
              <MdCategory className="text-teal-600" />
              <span className="font-semibold">{room.category}</span>
            </p>
          </div>

          {/* Description */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {room.description ||
                "Experience peace and comfort in this charming countryside home."}
            </p>
          </div>

          {/* Host Info */}
          <div className="flex items-center gap-3 mt-6 border-t border-gray-200 pt-4">
            <img
              src={room.host?.image || "https://i.pravatar.cc/80"}
              alt={room.host?.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                Host: {room.host?.name}
              </h3>
              <p className="text-sm text-gray-500">{room.host?.email}</p>
            </div>
          </div>

          {/* Book Button */}
          <div className="mt-6">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-md transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
