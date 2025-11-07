import Loading from "../../../../Components/Loading/Loading";
import useRole from "../../../../Hooks/useRole";
import AdminStatistics from "./AdminStatistics";
import GuestStatistics from "./GuestStatistics";
import HostStatistics from "./HostStatistics";

const Statistics = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading />;
  }
  return (
    <div>
      {role === "admin" && <AdminStatistics />}
      {role === "host" && <HostStatistics />}
      {role === "guest" && <GuestStatistics />}
    </div>
  );
};

export default Statistics;
