import { useQuery } from "@tanstack/react-query";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router";
import useAxios from "../../Hooks/useAxios";

const Rooms = () => {
  const axiosInstance = useAxios();
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const res = await axiosInstance.get("/rooms");
      console.log(res.data);
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
      {rooms.map((room) => (
        <Link key={room._id} to={`/rooms/${room._id}`}>
          <div className="border border-teal-400 hover:shadow-xl rounded-xl space-y-2 bg-gray-50">
            <img src={room?.image} alt="" className="h-52 w-full rounded-xl" />
            <div className="p-2 space-y-2 ">
              <h2 className="font-bold text-lg text-gray-700">{room.location}</h2>
              <p className="text-gray-500">
                {room.to} to {room.from}
              </p>
              <p className="text-amber-500">${room.price} / night</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>

  );
};

export default Rooms;
