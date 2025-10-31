import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading/Loading";
import useRole from "../Hooks/useRole";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();
  const location = useLocation();
  if (loading || roleLoading) {
    return <Loading />;
  }
  if (!user || role?.role !== "admin") {
    return (
      <Navigate state={{ from: location?.pathname }} to="/forbidden"></Navigate>
    );
  }
  return children;
};

export default AdminRoutes;
