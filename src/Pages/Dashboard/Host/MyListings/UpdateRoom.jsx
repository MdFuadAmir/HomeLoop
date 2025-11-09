import { useState } from "react";
import Loading from "../../../../Components/Loading/Loading";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateRoom = ({ data,refetch,setShowModal }) => {
  const axiosSecure = useAxiosSecure();
  const [roomDate, setRoomData] = useState(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRoomData = Object.assign({},roomDate)
    try{
      const {data} = await axiosSecure.put(`/rooms/update/${roomDate?._id}`,updatedRoomData)
      toast.success(`Update Success${data?.acknowledged}`);
      refetch();
      setShowModal(false);
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border border-teal-400 rounded-2xl shadow-2xl p-4"
    >
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-teal-600">Update this Room</h1>
        <p className="text-sm text-gray-500">
          You can update any field and save the changes.
        </p>
      </div>

      {/* ========== Basic Information ========== */}
      <div className="space-y-2">
        <h3 className="text-gray-700 font-semibold mb-2">Basic Information</h3>
        <div className="space-y-2">
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Title / Property Name
            </label>
            <input
              type="text"
              value={roomDate?.title}
              onChange={(e) =>
                setRoomData({ ...roomDate, title: e.target.value })
              }
              placeholder="Property Name"
              className="input input-success rounded w-full"
            />
          </div>
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Location
            </label>
            <input
              type="text"
              value={roomDate?.location}
              onChange={(e) =>
                setRoomData({ ...roomDate, location: e.target.value })
              }
              placeholder="(area, road no, city)"
              className="input input-success rounded w-full"
            />
          </div>
        </div>

        {/* rent, bedrooms, etc */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Rent Amount
            </label>
            <input
              type="number"
              value={roomDate?.rent.amount}
              onChange={(e) =>
                setRoomData({ ...roomDate, amount: e.target.value })
              }
              placeholder="15000"
              className="input input-success rounded w-full"
            />
          </div>
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Rent Type
            </label>
            <select
              name="rentType"
              value={roomDate?.rent?.type}
              onChange={(e) =>
                setRoomData({ ...roomDate, type: e.target.value })
              }
              className="select select-success w-full"
            >
              <option value="">Select rent type</option>
              <option value="night">Per Night</option>
              <option value="month">Per Month</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Bedrooms
            </label>
            <input
              type="number"
              value={roomDate?.bedrooms}
              onChange={(e) =>
                setRoomData({ ...roomDate, bedrooms: e.target.value })
              }
              className="input input-success rounded w-full"
            />
          </div>
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Bathrooms
            </label>
            <input
              type="number"
              value={roomDate?.bathrooms}
              onChange={(e) =>
                setRoomData({ ...roomDate, bathrooms: e.target.value })
              }
              className="input input-success rounded w-full"
            />
          </div>
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Guest Room
            </label>
            <input
              type="number"
              value={roomDate?.guest}
              onChange={(e) =>
                setRoomData({ ...roomDate, guest: e.target.value })
              }
              className="input input-success rounded w-full"
            />
          </div>
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Floor Number
            </label>
            <input
              type="number"
              value={roomDate?.floorNumber}
              onChange={(e) =>
                setRoomData({ ...roomDate, floorNumber: e.target.value })
              }
              className="input input-success rounded w-full"
            />
          </div>
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Area / Size (sqft)
            </label>
            <input
              type="number"
              value={roomDate?.houseSize}
              onChange={(e) =>
                setRoomData({ ...roomDate, houseSize: e.target.value })
              }
              className="input input-success rounded w-full"
            />
          </div>
        </div>

        {/* available from/to */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Available From
            </label>
            <input
              type="date"
              value={roomDate?.availableFrom?.split("T")[0]}
              onChange={(e) =>
                setRoomData({ ...roomDate, availableFrom: e.target.value })
              }
              className="input input-success w-full"
            />
          </div>
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              Available To
            </label>
            <input
              type="date"
              value={roomDate?.availableTo?.split("T")[0]}
              onChange={(e) =>
                setRoomData({ ...roomDate, availableTo: e.target.value })
              }
              className="input input-success w-full"
            />
          </div>
        </div>

        {/* house type & category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div>
            <label className="text-gray-600 font-semibold text-sm">
              House Type
            </label>
            <select
              value={roomDate?.houseType}
              onChange={(e) =>
                setRoomData({ ...roomDate, houseType: e.target.value })
              }
              className="select select-success w-full"
            >
              <option value="">Select House Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Family House">Family House</option>
              <option value="Single Room">Single Room</option>
              <option value="Studio">Studio</option>
              <option value="Sublet">Sublet</option>
            </select>
          </div>
        </div>
      </div>
      {/* ========== Description ========== */}
      <div className="grid grid-cols-1 mt-6">
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            className="textarea textarea-success w-full"
            rows="4"
            value={roomDate?.description}
              onChange={e =>setRoomData({...roomDate, description:e.target.value})}
            placeholder="Write about your house, nearby facilities, etc."
          ></textarea>
        </div>
      </div>

      <button type="submit" className="btn btn-success mt-6 w-full">
        Update This Room
      </button>
    </form>
  );
};

export default UpdateRoom;
