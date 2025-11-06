import { Link, NavLink, useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { FaBath, FaBed, FaBuilding, FaChair, FaHome } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import useAxios from "../../Hooks/useAxios";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { differenceInCalendarDays } from "date-fns";

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const { data: room = {}, isLoading } = useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/rooms/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  useEffect(() => {
    if (room?.availableFrom && room?.availableTo) {
      setState([
        {
          startDate: new Date(room.availableFrom),
          endDate: new Date(room.availableTo),
          key: "selection",
        },
      ]);
    }
  }, [room]);
  const totalDays = parseInt(
    differenceInCalendarDays(
      new Date(room.availableTo),
      new Date(room.availableFrom)
    )
  );
  const totalAmount =
    room?.rent?.type === "month"
      ? room?.rent?.amount
      : room?.rent?.amount * totalDays;
  console.log(totalAmount);

  const handleReserve = () => {
    navigate("/payments", { state: { room } });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-5xl rounded-xl mx-auto flex flex-col items-center shadow-2xl my-6">
      {/* Image */}
      <div className="w-full h-80 overflow-hidden bg-teal-100 rounded-xl">
        <img
          src={room.image}
          alt={room.title}
          className="object-cover h-80 w-full border-teal-500 rounded-2xl"
        />
      </div>
      {/* Info Section */}
      <div className="bg-gray-100 w-full p-4 space-y-4 rounded-b-xl flex flex-col md:flex-row gap-4 justify-between ">
        <div className="flex-1">
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
              {room.availableFrom}
            </p>
            <p>
              <span className="font-semibold text-gray-800">To:</span>{" "}
              {room.availableTo}
            </p>
          </div>
          {/* Guests & Rooms Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700 mt-4">
            <p className="flex flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <FaBed className="text-teal-600 text-lg" /> {room.bedrooms}
              </span>
              Bedrooms
            </p>
            <p className="flex flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <FaBath className="text-teal-600 text-lg" /> {room.bathrooms}
              </span>
              Bathrooms
            </p>
            <p className="flex flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <FaChair className="text-teal-600 text-lg" /> {room.guest}
              </span>
              Drawing Room
            </p>
            <p className="flex flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <FaHome className="text-teal-600 text-lg" /> {room.houseType}
              </span>
              House Type
            </p>
            {room.floorNumber && (
              <p className="flex flex-col">
                <span className="font-semibold flex gap-2 items-center">
                  <FaBuilding className="text-teal-600 text-lg" />{" "}
                  {room.floorNumber} th
                </span>
                Floor Number
              </p>
            )}

            <p className="flex flex-col items-start">
              <span className="font-semibold flex gap-2 items-center">
                <MdOutlineCategory className="text-teal-600 text-lg" />{" "}
                {room.category}
              </span>
              Category
            </p>
          </div>
          <div className="mt-4">
            <h1 className="text-lg font-bold text-teal-700">Facilities</h1>

            {room?.facilities?.map((fac) => (
              <li key={fac} className="text-gray-600">
                {fac}
              </li>
            ))}
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
          <div className="flex items-center gap-3 mt-6 border-t border-teal-600 pt-4">
            <img
              src={room.host?.image || room.host?.name}
              alt={room.host?.name}
              className="w-12 h-12 rounded-full object-cover bg-amber-50"
            />
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-800">
                Host: {room.host?.name}
              </h3>
              <p className="text-sm text-gray-600">{room.host?.email}</p>
              <p className="text-sm text-gray-600">
                Phone No: {room.host?.phone}
              </p>
              <p className="text-sm text-gray-600">Nid No: {room.host?.nid}</p>
            </div>
          </div>
        </div>

        {/* calender */}
        <div className="flex flex-col border p-4 rounded-xl border-teal-600 bg-teal-50 shadow-2xl overflow-x-auto">
          <div className="text-emerald-600 text-xl font-semibold">
            ৳ {room.rent.amount}
            <span className="text-sm">/{room.rent.type}</span>
          </div>
          <div className=" divider divider-info"></div>
          {/* Date Picker */}
          <div className="w-full flex justify-center">
            <div className="scale-100 md:scale-100 sm:scale-90 xs:scale-75 origin-top transition-transform duration-300">
              <DateRange
                rangeColors={["#0d9488"]}
                showDateDisplay={false}
                editableDateInputs={true}
                onChange={(item) => {
                  console.log(item);
                  setState([
                    {
                      startDate: new Date(room.availableFrom),
                      endDate: new Date(room.availableTo),
                      key: "selection",
                    },
                  ]);
                }}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 border-t-2 border-teal-500 py-6">
            <p className="font-bold text-gray-600">Total Amount</p>
            <p className="text-emerald-600 text-xl font-semibold">
              ৳ {totalAmount}
            </p>
          </div>
          {/* payment and book btn  */}
          <button
            disabled={room?.booked === true}
            onClick={handleReserve}
            // className="w-full btn bg-teal-600 text-white"
            className={`w-full btn text-white transition-colors duration-300
    ${
      room?.booked
        ? "bg-gray-400 cursor-not-allowed opacity-70"
        : "bg-teal-600 hover:bg-teal-500"
    }`}
          >
          {room?.booked ? "Already Reserved" : "Reserve"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
