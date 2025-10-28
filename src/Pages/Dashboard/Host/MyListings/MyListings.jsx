import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../../Components/Loading/Loading";
import useAuth from "../../../../Hooks/useAuth";
import RoomDataRow from "./RoomDataRow";

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: rooms = [], isLoading,refetch } = useQuery({
    queryKey: ["my-listings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-listings/${user?.email}`);
      return res.data;
    },
  });
//   delete data
  const handleDelete = () => {
    console.log("delete");
  };
//   update data
  const handleUpdate = () => {
    console.log("update");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-4">
      <div>
        <h3 className="text-lg font-bold text-teal-600">
          {user.displayName}'s Rooms
        </h3>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          repellendus?
        </p>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead className="bg-teal-700 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Location</th>
              <th>Rent Amount</th>
              <th>Rent Type</th>
              <th>Form</th>
              <th>To</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <RoomDataRow
                key={room._id}
                room={room}
                index={index}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
