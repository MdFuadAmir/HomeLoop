import { useState } from "react";
import AddRoomForm from "../../../../Components/Form/AddRoomForm";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const AddRoom = () => {
  const { user } = useAuth();
  const [houseImage, setHouseImage] = useState("");
  const [upLoading, setUpLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleImageUploade = async (e) => {
    const image = e.target.files[0];
    setUpLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    const imageUploadeUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${
      import.meta.env.VITE_image_upload_key
    }`;
    const res = await axios.post(imageUploadeUrl, formData);
    setHouseImage(res.data.data.url);
    setUpLoading(false);
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (roomdata) => {
      const { data } = await axiosSecure.post("/rooms", roomdata);
      return data;
    },
    onSuccess: () => {
      toast.success("Room Add Successfully");
      navigate('/dashboard/my-listings')
      console.log("data save successfully");
    },
  });

  const onSubmit = (data) => {
    if (!houseImage) {
      toast.error("Please upload a product image!");
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be add this product in your shop",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const roomData = {
          ...data,
          image: houseImage,
          createdAt: new Date().toISOString(),
          host: {
            name: data.hostName,
            email: data.hostEmail,
            phone: data.hostPhone,
            nid: data.hostNid,
            image: user?.photoURL,
          },
          rent: {
            amount: parseFloat(data.rentAmount),
            type: data.rentType,
          },
        };
        delete roomData.hostName;
        delete roomData.hostEmail;
        delete roomData.hostPhone;
        delete roomData.hostNid;
        delete roomData.rentAmount;
        delete roomData.rentType;
        // post to data base
        await mutateAsync(roomData);
        console.log(roomData);
      }
    });
  };
  return (
    <div>
      <AddRoomForm
        onSubmit={onSubmit}
        upLoading={upLoading}
        handleImageUploade={handleImageUploade}
        houseImage={houseImage}
      />
    </div>
  );
};
export default AddRoom;
