import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const categories = [
  { id: 1, name: "Countryside" },
  { id: 2, name: "Beach" },
  { id: 3, name: "City" },
  { id: 4, name: "Mountain" },
  { id: 5, name: "Forest" },
  { id: 6, name: "Lake" },
  { id: 7, name: "Farm Stay" },
  { id: 8, name: "Luxury" },
  { id: 9, name: "Adventure" },
  { id: 10, name: "Historical" },
  { id: 11, name: "Cottage" },
  { id: 12, name: "Private Villa" },
  { id: 13, name: "Extra Stay" },
];
const AddRoomForm = ({
  onSubmit,
  handleImageUploade,
  houseImage,
  upLoading,
}) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-teal-400 rounded-2xl shadow-2xl p-4"
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-teal-600">Add a new room</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            voluptate.
          </p>
        </div>
        {/* input fields */}
        <div className="space-y-2">
          {/* basic info */}
          <h3 className="text-gray-700 font-semibold mb-2">
            Basic Information
          </h3>
          <div className="space-y-2">
            {/* title */}
            <div>
              <label className="text-gray-600 font-semibold text-sm">
                Title / Property Name *
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Property Name"
                className="input input-success rounded w-full"
              />
              {errors?.title?.type === "required" && (
                <span className="text-red-500 text-sm">Title is required</span>
              )}
            </div>
            {/* location */}
            <div>
              <label className="text-gray-600 font-semibold text-sm">
                Location *
              </label>
              <input
                {...register("location", { required: true })}
                type="text"
                placeholder="(area, road no, city)"
                className="input input-success rounded w-full"
              />
              {errors?.location?.type === "required" && (
                <span className="text-red-500 text-sm">
                  Location is required
                </span>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* rent  */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Rent Amount *
                </label>
                <input
                  {...register("rentAmount", { required: true })}
                  type="number"
                  placeholder="15000"
                  className="input input-success rounded w-full"
                />
                {errors?.rentAmount?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Rent Amount is required
                  </span>
                )}
              </div>
              {/* Price Type (Duration) */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">Rent Type *</label>
                <select
                {...register("rentType", { required: true })}
                  name="rentType"
                  className="select select-success w-full"
                >
                  <option value="">Select rent type</option>
                  <option value="night">Per Night</option>
                  <option value="month">Per Month</option>
                </select>
                  {errors?.rentType?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    horentType is required
                  </span>
                )}
              </div>
              {/* bedroom */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Bedrooms *
                </label>
                <input
                  {...register("bedrooms", { required: true })}
                  type="number"
                  placeholder="2"
                  className="input input-success rounded w-full"
                />
                {errors?.bedrooms?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Bedrooms is required
                  </span>
                )}
              </div>
              {/* bathroom */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Bathrooms *
                </label>
                <input
                  {...register("bathrooms", { required: true })}
                  type="number"
                  placeholder="2"
                  className="input input-success rounded w-full"
                />
                {errors?.bathrooms?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Bathrooms is required
                  </span>
                )}
              </div>
              {/* guest */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Guest Room *
                </label>
                <input
                  {...register("guest", { required: true })}
                  type="number"
                  placeholder="3"
                  className="input input-success rounded w-full"
                />
                {errors?.guest?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    guest is required
                  </span>
                )}
              </div>
              {/* flore number */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Floor Number *
                </label>
                <input
                  {...register("floorNumber", { required: true })}
                  type="number"
                  placeholder="7"
                  className="input input-success rounded w-full"
                />
                {errors?.floorNumber?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Floor Number is required
                  </span>
                )}
              </div>
              {/* area */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Area / Size (sqft) *
                </label>
                <input
                  {...register("houseSize", { required: true })}
                  type="number"
                  placeholder="1430"
                  className="input input-success rounded w-full"
                />
                {errors?.houseSize?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    Area / Size (sqft) is required
                  </span>
                )}
              </div>
            </div>
            {/* date */}
            {/* Date range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Available From
                </label>
                <input
                  type="date"
                  {...register("availableFrom", { required: true })}
                  className="input input-success w-full"
                />
                {errors?.availableFrom?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    availableFrom is required
                  </span>
                )}
              </div>
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Available To
                </label>
                <input
                  type="date"
                  {...register("availableTo", { required: true })}
                  className="input input-success w-full"
                />
                {errors?.availableTo?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    availableTo is required
                  </span>
                )}
              </div>
            </div>
            <div>
              {/* type */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  House Type *
                </label>
                <select
                  {...register("houseType", { required: true })}
                  className="select select-success w-full"
                >
                  <option value="">Select House Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Family House">Family House</option>
                  <option value="Single Room">Single Room</option>
                  <option value="Studio">Studio</option>
                  <option value="Sublet">Sublet</option>
                </select>
                {errors?.houseType?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    houseType is required
                  </span>
                )}
              </div>
              {/* categorys */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Category *
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-success w-full"
                >
                  <option value="">Select Category</option>
                  {categories.map((cate) => (
                    <option key={cate.id} value={cate.name}>
                      {cate.name}
                    </option>
                  ))}
                </select>
                {errors?.category?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    category is required
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* facilitys */}
          <div className="mt-6">
            <h3 className="text-gray-700 font-semibold mb-2">
              Additional (Facility & Utility) Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-600">
              {[
                "WiFi",
                "Air Conditioning",
                "Parking",
                "Kitchen",
                "Washing Machine",
                "TV",
                "Furnished",
                "Lift / Elevator",
                "Security / Guard",
                "Electricity / Generator Backup",
              ].map((facility) => (
                <label
                  key={facility}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    value={facility}
                    {...register("facilities", { required: true })}
                    className="checkbox checkbox-success"
                  />
                  <span>{facility}</span>
                </label>
              ))}
              {errors?.facilities?.type === "required" && (
                <span className="text-red-500 text-sm">
                  facilities is required
                </span>
              )}
            </div>
          </div>
          {/* host info */}
          <div className="mt-6">
            <h3 className="text-gray-700 font-semibold mb-2">
              Host Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Host name */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Host Name *
                </label>
                <input
                  {...register("hostName", { required: true })}
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  placeholder="name"
                  className="input input-success rounded w-full"
                />
                {errors?.hostName?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    hostName is required
                  </span>
                )}
              </div>
              {/* email */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Email *
                </label>
                <input
                  {...register("hostEmail", { required: true })}
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="hostmail@gmail.com"
                  className="input input-success rounded w-full"
                />
                {errors?.hostEmail?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    hostEmail is required
                  </span>
                )}
              </div>
              {/* phone number */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  Phone Number *
                </label>
                <input
                  {...register("hostPhone", { required: true })}
                  type="tel"
                  placeholder="01**********"
                  className="input input-success rounded w-full"
                />
                {errors?.hostPhone?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    hostPhone is required
                  </span>
                )}
              </div>

              {/* nid */}
              <div>
                <label className="text-gray-600 font-semibold text-sm">
                  NID NO *
                </label>
                <input
                  {...register("hostNid", { required: true })}
                  type="tel"
                  placeholder="01**********"
                  className="input input-success rounded w-full"
                />
                {errors?.hostNid?.type === "required" && (
                  <span className="text-red-500 text-sm">
                    hostNid is required
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* summary */}
          <h3 className="text-gray-700 font-semibold my-3">
            Images and Description
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* image */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-2">
              <input
                {...register("image", { required: true })}
                onChange={handleImageUploade}
                type="file"
                className="input input-success w-full md:w-1/2"
              />
              {errors?.image?.type === "required" && (
                <span className="text-red-500 text-sm">image is required</span>
              )}
              {upLoading && (
                <p className="text-blue-600 mt-1 animate-pulse">
                  Uploading ......
                </p>
              )}
              {houseImage && (
                <img
                  src={houseImage}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg mt-3 border"
                />
              )}
            </div>
            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-1">Description</label>
              <textarea
                {...register("description", { required: true })}
                className="textarea textarea-success w-full"
                rows="4"
                placeholder="Write about your house, nearby facilities, etc."
              ></textarea>
              {errors?.description?.type === "required" && (
                <span className="text-red-500 text-sm">
                  description is required
                </span>
              )}
            </div>
          </div>
        </div>
        {upLoading ? (
          <button
            type="submit"
            disabled
            className="btn btn-success mt-6 w-full"
          >
            <span className="loading loading-spinner"></span>
          </button>
        ) : (
          <button type="submit" className="btn btn-success mt-6 w-full">
            Add This Room
          </button>
        )}
      </form>
    </div>
  );
};

export default AddRoomForm;
