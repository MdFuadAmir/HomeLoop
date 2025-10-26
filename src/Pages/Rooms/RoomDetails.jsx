import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { FaBath, FaBed, FaUserFriends } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const RoomDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

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
    
      <div className="max-w-5xl rounded-xl mx-auto flex flex-col bg-teal-100 items-center shadow-2xl my-6">
        {/* Image */}
        <div className="w-full h-80 overflow-hidden bg-teal-100 rounded-t-xl">
          <img
            src={room.image}
            alt={room.title}
            className="object-cover h-80 w-full p-4 "
          />
        </div>
        {/* Info Section */}
        <div className="bg-gray-100 w-full p-4 space-y-4 rounded-b-xl flex flex-col md:flex-row gap-4 justify-between ">
          <div>
            {/* Title + Location */}
            <div className="mb-2">
              <h1 className="text-2xl font-bold text-teal-700">
                {room.title || "Beautiful Stay"}
              </h1>
              <p className="text-gray-600">{room.location}</p>
            </div>

            {/* Dates */}
            <div className="flex gap-4 text-gray-600">
              <p>
                <span className="font-semibold text-gray-800">From:</span>{" "}
                {room.from}
              </p>
              <p>
                <span className="font-semibold text-gray-800">To:</span>{" "}
                {room.to}
              </p>
            </div>
            {/* Guests & Rooms Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700 mt-4">
              <p className="flex flex-col">
                <span className="font-semibold flex gap-2 items-center">
                  <FaUserFriends className="text-teal-600 text-lg" />{" "}
                  {room.guests}
                </span>
                Guests
              </p>
              <p className="flex flex-col">
                <span className="font-semibold flex gap-2 items-center">
                  <FaBed className="text-teal-600 text-lg" /> {room.bedroom}
                </span>
                Bedrooms
              </p>
              <p className="flex flex-col">
                <span className="font-semibold flex gap-2 items-center">
                  <FaBath className="text-teal-600 text-lg" /> {room.bathroom}
                </span>
                Bathrooms
              </p>
              <p className="flex flex-col items-start">
                <span className="font-semibold flex gap-2 items-center">
                  <MdCategory className="text-teal-600 text-lg" />{" "}
                  {room.category}
                </span>
                Category
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
                src={room.host?.image || room.host?.name}
                alt={room.host?.name}
                className="w-12 h-12 rounded-full object-cover bg-amber-50"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Host: {room.host?.name}
                </h3>
                <p className="text-sm text-gray-500">{room.host?.email}</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col border p-4 rounded-xl border-teal-600 bg-teal-50 shadow-2xl overflow-x-auto">
            <h2 className="text-emerald-600 text-xl font-semibold">
              $ {room.price} / night
            </h2>
            <div className=" divider divider-info"></div>
            {/* Date Picker */}
            <div className="w-full flex justify-center">
              <div className="scale-100 md:scale-100 sm:scale-90 xs:scale-75 origin-top transition-transform duration-300">
                <DateRange
                  rangeColors={["#0d9488"]}
                  showDateDisplay={false}
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                />
              </div>
            </div>
            {/* Book Button */}
            <div className="mt-6 w-full">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-md transition w-full">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RoomDetails;


