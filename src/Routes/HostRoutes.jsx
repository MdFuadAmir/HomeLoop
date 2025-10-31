import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import Loading from "../Components/Loading/Loading";


const HostRoutes = ({children}) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();
  const location = useLocation();
  if (loading || roleLoading) {
    return <Loading />;
  }
  if (!user || role !== "host") {
    return (
      <Navigate state={{ from: location?.pathname }} to="/forbidden"></Navigate>
    );
  }
  return children;
};

export default HostRoutes;