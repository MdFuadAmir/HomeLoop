import { Calendar } from "react-date-range";
import DashboardTitle from "../../../../Shared/DashboardTitle/DashboardTitle";
import { FaBed, FaCalendarCheck, FaWallet } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../Components/Loading/Loading";
import SealsLineCharts from "../../Charts/SealsLineCharts";
import useAuth from "../../../../Hooks/useAuth";


const HostStatistics = () => {
      const axiosSecure = useAxiosSecure();
      const {user} = useAuth();
  const { data: stateDate = {}, isLoading } = useQuery({
    queryKey: ["stateData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/host-stat/${user.email}`);
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
    return (
        <div>
      <DashboardTitle title={"Host Statistics"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1 */}
        <div className="bg-gray-100 shadow-xl p-4 rounded-lg flex items-center justify-between">
          <div className="bg-orange-500 p-4 rounded-lg">
            <FaWallet size={40} color="white" />
          </div>
          <div className="text-end">
            <h3>Total Sales</h3>
            <p className="font-semibold">$ {stateDate.totalPrice}</p>
          </div>
        </div>
        {/* 2 */}
        <div className="bg-gray-100 shadow-xl p-4 rounded-lg flex items-center justify-between">
          <div className="bg-green-500 p-4 rounded-lg">
            <FaCalendarCheck size={40} color="white" />
          </div>
          <div className="text-end">
            <h3>Total Bookings</h3>
            <p className="font-semibold">{stateDate.totalBooking}</p>
          </div>
        </div>
        {/* 3 */}
        <div className="bg-gray-100 shadow-xl p-4 rounded-lg flex items-center justify-between">
          <div className="bg-indigo-500 p-4 rounded-lg">
            <FaBed size={40} color="white" />
          </div>
          <div className="text-end">
            <h3>Total Rooms</h3>
            <p className="font-semibold">{stateDate.totalRooms}</p>
          </div>
        </div>
      </div>
        {/* chart */}
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

export default HostStatistics;