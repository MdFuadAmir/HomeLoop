import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useHostRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const requestHost = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to become a host?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I am",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axiosSecure.put("/users", {
          email: user?.email,
          status: "requested",
        });
        if (!data?.alreadyRequested) {
          toast.success(
            "Host request sent successfully! Please wait for admin confirmation"
          );
        } else {
          toast("Please wait for admin approval");
        }
      } catch {
        toast.error("Something went wrong!");
      }
    }
  };

  return { requestHost };
};

export default useHostRequest;
