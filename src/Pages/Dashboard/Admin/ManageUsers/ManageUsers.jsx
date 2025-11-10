import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../../Components/Loading/Loading";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  // Mutation to update role
  const { mutateAsync } = useMutation({
    mutationFn: async ({ email, role }) => {
      const { data } = await axiosSecure.patch(`/users/update/${email}`, {
        role,
      });
      return data;
    },
    onSuccess: () => {
      refetch();
      toast.success("user update successfully");
    },
  });

  const handleRoleChange = async (email, role) => {
    try {
      await mutateAsync({ email, role });
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-4">
      <div>
        <h2 className="text-2xl font-bold text-teal-600">Manage Your Users</h2>
        <p className="text-sm text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          consequuntur.
        </p>
      </div>
      <div className="overflow-x-auto mt-6  mx-auto bg-teal-100 rounded">
        <table className="table bg-blue-100 table-zebra">
          {/* head */}
          <thead className="bg-teal-700 text-white">
            <tr>
              <th>#</th>
              <th>User Id</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?._id}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "guest" ? (
                    <span className="text-amber-700 bg-amber-200 px-2 py-1 rounded-full">
                      {user?.role}
                    </span>
                  ) : user?.role === "host" ? (
                    <span className="text-red-700 bg-red-200 px-2 py-1 rounded-full">
                      {user?.role}
                    </span>
                  ) : user?.role === "admin" ? (
                    <span className="text-purple-700 bg-purple-200 px-2 py-1 rounded-full">
                      {user?.role}
                    </span>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                    {user.status === "verified" ? 
                  <span className="px-2 py-1 rounded-full bg-green-200 text-green-700">
                    Verified
                  </span> :
                  <span className="px-2 py-1 rounded-full bg-red-200 text-red-700">
                    Requested
                  </span>
                    }
                </td>
                <td>
                  <select
                    onChange={(sellected) =>
                      handleRoleChange(user.email, sellected.target.value)
                    }
                    defaultValue="Update Role"
                    className="select bg-green-100 text-gray-600 text-xs"
                  >
                    <option disabled={true}>Update Role</option>
                    <option value="guest">Guest</option>
                    <option value="host">Host</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
