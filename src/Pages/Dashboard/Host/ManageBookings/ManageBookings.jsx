import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import DashboardTitle from "../../../../Shared/DashboardTitle/DashboardTitle";
import Loading from "../../../../Components/Loading/Loading";

const ManageBookings = () => {
      const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/manage-bookings/${user?.email}`);
      return data;
    },
  });
  const { mutateAsync } = useMutation({
    mutationFn: async (_id) => {
      const { data } = await axiosSecure.delete(`/booking/${_id}`);
      return data;
    },
    onSuccess: async () => {
      toast.success(`Cancel successfully`);
    },
  });
  const handleDelete = (bookings) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${bookings.title}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
      background: "#ccfbf1",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync(bookings._id);
          await axiosSecure.patch(`/room/status/${bookings?.roomId}`, {
          status: false,
        });
          refetch();
        } catch (error) {
          Swal.fire("Error!", "Something went wrong.", error);
        }
      }
    });
  };
  if (isLoading) {
    return <Loading />;
  }
    return (
       <div>
      <DashboardTitle
        title={"Manage Bookings"}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea sint sunt ad!"
        }
      />
      <div className="overflow-x-auto">
        <table className="table bg-gray-200">
          {/* head */}
          <thead>
            <tr className="bg-teal-700 text-white">
              <th>#</th>
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Total Rent</th>
              <th>Form</th>
              <th>to</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book?.title}</td>
                <td>{book?.location}</td>
                <td>
                  ${book?.rent?.amount}/{book?.rent?.type}
                </td>
                <td>${book?.totalAmount}</td>
                <td>{book?.availableFrom}</td>
                <td>{book?.availableTo}</td>
                <td>
                  <button
                    onClick={() => handleDelete(book)}
                    className="btn btn-sm bg-red-300"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageBookings;