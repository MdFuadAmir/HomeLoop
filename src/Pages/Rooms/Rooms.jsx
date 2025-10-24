import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";

const Rooms = () => {
  const axiosSecure = useAxiosSecure();

  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const res = await axiosSecure.get("/rooms");
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {rooms.map((room) => (
        <div key={room._id} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{room.location}</h2>
            <p>Hosted by: {room.description}</p>
            <p>Hosted by: {room.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
