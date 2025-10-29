import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../../Components/Loading/Loading";
import useAuth from "../../../../Hooks/useAuth";
import RoomDataRow from "./RoomDataRow";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: rooms = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-listings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-listings/${user?.email}`);
      return res.data;
    },
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (_id) => {
      const { data } = await axiosSecure.delete(`/room/${_id}`);
      return data;
    },
    onSuccess: data =>{
        console.log(data);
        toast.success(`Delete Successfully`)
    }
  });
  // 🗑️ Delete handle
  const handleDelete = (room) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${room.title}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
      background: "#ccfbf1", 
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(room._id);
          refetch();
        } catch (error) {
          Swal.fire("Error!", "Something went wrong.", error);
        }
      }
    });
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
