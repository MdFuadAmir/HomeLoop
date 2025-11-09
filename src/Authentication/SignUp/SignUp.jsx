import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocilaLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { creatUser, updateUserProfile } = useAuth();
    const location = useLocation();
  const from = location?.state?.from || '/'
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const [profileImage, setProfileImage] = useState();
  const [upLoading, setUpLoading] = useState(false);

  const handleImageUploade = async (e) => {
    const image = e.target.files[0];
    if (!image) return;
    setUpLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    const imageUploadUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${
      import.meta.env.VITE_image_upload_key
    }`;
    const res = await axios.post(imageUploadUrl, formData);
    setProfileImage(res.data.data.display_url);
    setUpLoading(false);
  };

  const onSubmit = (data) => {
    creatUser(data.email, data.password)
      .then(async (result) => {
        const user = result.user;
        // update user info in database
        const userInfo = {
          email: user.email,
          role: "guest",
          status: "verified",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };
        const userRes = await axiosInstance.post("/users", userInfo);
        if (userRes.data.success && userRes.data.insertedId) {
          toast.success('Your Account has been created')
        } else {
          toast.success('User already exists')
        }
        // update user profile. in database
        const userProfile = {
          displayName: data?.name,
          photoURL: profileImage,
        };
        updateUserProfile(userProfile)
          .then(() => {
            navigate(from);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-6 w-full max-w-md border border-white/20">
        <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide drop-shadow-lg">
          Create Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Profile Picture */}
          <div className="flex justify-between">
            <div className="w-1/2">
              <label className="text-white text-sm font-semibold mb-1 block">
                Profile Picture URL
              </label>
              <input
                onChange={handleImageUploade}
                type="file"
                placeholder="Enter profile image URL"
                className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div className="border border-teal-300 h-24 w-24 rounded-xl">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Preview"
                  className="w-24 h-24 object-center rounded-xl"
                />
              ) : (
                <p className="text-center items-center text-teal-200">Your Profile Image</p>
              )}
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="text-white text-sm font-semibold mb-1 block">
              Your Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-white text-sm font-semibold mb-1 block">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm font-semibold mb-1 block">
              Password
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-400 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-400 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Submit Button */}
          {upLoading ? (
            <button
              type="submit"
              disabled
              className="w-full py-3 rounded-lg bg-amber-100 text-black font-semibold transition-all duration-300 shadow-md hover:shadow-amber-700/50"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold  transition-all duration-300 shadow-md hover:shadow-amber-700/50"
            >
              Sign Up
            </button>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-white/20"></div>
            <span className="text-white text-sm">OR</span>
            <div className="h-px flex-1 bg-white/20"></div>
          </div>
        </form>
        {/* Social Signup Placeholder */}
        <SocilaLogin />

        {/* Login Link */}
        <p className="text-center text-sm text-white/70 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
