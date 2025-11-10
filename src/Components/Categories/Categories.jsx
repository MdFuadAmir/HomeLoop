import {
  FaTree,
  FaUmbrellaBeach,
  FaCity,
  FaMountain,
  FaPagelines,
  FaWater,
  FaHotdog,
  FaGem,
  FaHiking,
  FaLandmark,
  FaCampground,
  FaHome,
} from "react-icons/fa";
import queryString from "query-string";
import { useLocation, useNavigate, useSearchParams } from "react-router";

const categories = [
  { id: 1, name: "Countryside", icon: <FaTree /> },
  { id: 2, name: "Beach", icon: <FaUmbrellaBeach /> },
  { id: 3, name: "City", icon: <FaCity /> },
  { id: 4, name: "Mountain", icon: <FaMountain /> },
  { id: 5, name: "Forest", icon: <FaPagelines /> },
  { id: 6, name: "Lake", icon: <FaWater /> },
  { id: 7, name: "Farm Stay", icon: <FaHotdog /> },
  { id: 8, name: "Luxury", icon: <FaGem /> },
  { id: 9, name: "Adventure", icon: <FaHiking /> },
  { id: 10, name: "Historical", icon: <FaLandmark /> },
  { id: 11, name: "Cottage", icon: <FaCampground /> },
  { id: 12, name: "Private Villa", icon: <FaHome /> },
  { id: 13, name: "Extra Stay", icon: <FaHome /> },
];
const Categories = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const handleClick = (categoryName) => {
    const currentQuery = queryString.parse(location.search);
    const updatedQuery = {
      ...currentQuery,
      category: categoryName,
    };
    const url = queryString.stringifyUrl({
      url: "/rooms",
      query: updatedQuery,
    });
    navigate(url);
  };

  return (
    <div className="flex space-x-4 overflow-x-auto rounded">
      {categories.map((cat) => (
        <div
          onClick={() => handleClick(cat.name)}
          role="button"
          className={`flex-none flex flex-col items-center justify-between border rounded-lg p-2 w-32 cursor-pointer transition
            ${
              category === cat.name
                ? "bg-teal-200 border-teal-600 border-2 text-white shadow-md"
                : "bg-gray-100 border-teal-500 text-gray-700"
            }`}
        >
          {/* Icon */}
          <span className="text-3xl text-teal-600 mb-2">{cat.icon}</span>
          {/* Category name */}
          <span className="font-semibold text-sm text-gray-700 text-center">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
