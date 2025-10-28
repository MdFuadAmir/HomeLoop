import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { Link, useSearchParams } from "react-router";
import useAxios from "../../Hooks/useAxios";

const Rooms = () => {
  const axiosInstance = useAxios();
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms", category],
    queryFn: async () => {
      const res = await axiosInstance.get(`/rooms?category=${category}`);
      return res.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-xl font-bold p-4">Availabal Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {rooms.length === 0 ? (
          <div className="flex justify-center items-center h-96 text-teal-700 text-center">
            <div>
              <h2 className="text-xl font-semibold">Rooms Not Available...</h2>
              <p className="text-gray-500 mt-2">Please search other rooms.</p>
            </div>
          </div>
        ) : (
          rooms.map((room) => (
            <Link key={room._id} to={`/rooms/${room._id}`}>
              <div className="border-2 border-teal-400 hover:shadow-xl rounded-xl space-y-2 bg-gray-50 group">
                <img
                  src={room?.image}
                  alt=""
                  className="h-52 w-full rounded-xl p-1 object-cover"
                />
                <div className="p-2 space-y-2">
                  <h2 className="font-bold text-lg text-gray-700">
                    {room.location}
                  </h2>
                  <p className="text-gray-500">
                    <span className="text-green-500">{room.availableFrom}</span> To <span className="text-red-500">{room.availableTo}</span>
                  </p>
                  <p className="text-amber-500">৳ {room.rent.amount} / {room.rent.type}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Rooms;
