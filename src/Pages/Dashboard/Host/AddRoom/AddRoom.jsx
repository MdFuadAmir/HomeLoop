import { useState } from "react";
import AddRoomForm from "../../../../Components/Form/AddRoomForm";
import useAuth from "../../../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AddRoom = () => {
  const { user } = useAuth();
  const [houseImage, setHouseImage] = useState("");
  const [upLoading, setUpLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

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
    }).then((result) => {
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
        };
        delete roomData.hostName;
        delete roomData.hostEmail;
        delete roomData.hostPhone;
        delete roomData.hostNid;
        console.log(roomData);
        // post to data base
        axiosSecure.post("/rooms", roomData).then((res) => {
          if (res.data.insertedId) {
            console.log(res.data);
            Swal.fire({
              title: "success!",
              text: "Your product has been added",
              icon: "success",
            });
          }
        });
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
