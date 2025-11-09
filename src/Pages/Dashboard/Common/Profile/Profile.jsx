// src/components/Profile.jsx
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import Loading from "../../../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const Profile = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["status", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  if (loading && isLoading) {
    return <Loading />;
  }
  return (
    <div className="h-full">
      {/* Profile Card */}
      <div className="max-w-2xl mx-auto bg-teal-100 shadow-lg rounded-lg p-6 flex flex-col items-center gap-4 relative">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-teal-500"
          />
        ) : (
          <FaUserCircle className="text-gray-400 w-24 h-24" />
        )}

        <h2 className="text-xl font-semibold">
          {user?.displayName || "Unnamed User"}
        </h2>
        <p className="text-gray-600">Email: {user?.email || "No Email"}</p>
        <p className="text-teal-600 font-medium flex items-center gap-4">
          Role:{" "}
          {users?.role === "admin" ? (
            <span className="text-green-500">Admin</span>
          ) : users?.role === "host" ? (
            <span className="text-red-500">Host</span>
          ) : (
            <span className="text-purple-500">Guest</span>
          )}
        </p>
        <p className="text-gray-500">Status: {users?.status}</p>
        <p className="text-gray-400 text-sm">User ID: {user?.uid || "N/A"}</p>

        <div className="flex gap-4 mt-4">
          <button
            // onClick={handleUpdateProfile}
            // disabled={loading}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
          >
            Update Profile
          </button>
          <button
            // onClick={handleChangePassword}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
