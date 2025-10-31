import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: role = {},
    isLoading: roleLoading,
    refetch,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email && !loading ,
    queryFn: async () => {
      const data = await axiosSecure.get(`/users/${user?.email}`);
      return data.data;
    },
  });


  return { role, roleLoading, refetch };
};

export default useRole;
