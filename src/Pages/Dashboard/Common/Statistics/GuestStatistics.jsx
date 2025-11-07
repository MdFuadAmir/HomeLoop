import { FaBed, FaCalendarCheck, FaWallet } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { Calendar } from "react-date-range";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loading from "../../../../Components/Loading/Loading";
import DashboardTitle from "../../../../Shared/DashboardTitle/DashboardTitle";
import SealsLineCharts from "../../Charts/SealsLineCharts";

const GuestStatistics = () => {
      const axiosSecure = useAxiosSecure();
      const {user} = useAuth();
  const { data: stateDate = {}, isLoading } = useQuery({
    queryKey: ["stateData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/guest-stat/${user.email}`);
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <DashboardTitle title={"Guest Statistics"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1 */}
        <div className="bg-gray-100 shadow-xl p-4 rounded-lg flex items-center justify-between">
          <div className="bg-orange-500 p-4 rounded-lg">
            <FaWallet size={40} color="white" />
          </div>
          <div className="text-end">
            <h3>Total Spent</h3>
            <p className="font-semibold">$ {stateDate?.totalPrice}</p>
          </div>
        </div>
        {/* 2 */}
        <div className="bg-gray-100 shadow-xl p-4 rounded-lg flex items-center justify-between">
          <div className="bg-green-500 p-4 rounded-lg">
            <FaCalendarCheck size={40} color="white" />
          </div>
          <div className="text-end">
            <h3>Total Bookings</h3>
            <p className="font-semibold">{stateDate?.totalBooking}</p>
          </div>
        </div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        <div className="col-span-3 bg-gray-100 shadow-xl rounded-xl w-full">
          <SealsLineCharts data={stateDate?.chartData}/>
        </div>
        <div className="col-span-2 bg-gray-100 shadow-xl rounded-xl w-full flex justify-center items-center">
          <Calendar className="w-full rounded-xl items-center" />
        </div>
      </div>
    </div>
  );
};

export default GuestStatistics;
