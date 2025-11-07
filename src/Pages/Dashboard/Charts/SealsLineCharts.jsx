import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Seals Over Time",
  curveType: "function",
  legend: { position: "bottom" },
};

const SealsLineCharts = ({ data }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return (
    <>
      {loading ? (
        <div className="h-full w-full justify-center items-center flex">
          <span className="loading loading-ring loading-xl w-1/2"></span>
        </div>
      ) : data.length > 1 ? (
        <div className="h-full rounded-xl">
          <Chart
            chartType="LineChart"
            width="100%"
            height="100%"
            data={data}
            options={options}
            legendToggle
          />
        </div>
      ) : (
        <p className="text-gray-600">Not enough data for this section</p>
      )}
    </>
  );
};

export default SealsLineCharts;
