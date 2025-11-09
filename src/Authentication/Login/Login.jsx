import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocilaLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn ,resetPassword} = useAuth();
  const location = useLocation();
  const from = location?.state?.from || '/'
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        toast.success('Login Successfully')
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleResetPassword = async() => {
    if(!email) return toast.error('Please write youremail')
    try{
      await resetPassword(email)
      toast.success('reset successfully')

    }catch(error){
     toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-6 w-full max-w-md border border-white/20">
        <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wide drop-shadow-lg">
          Welcome Back</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-white text-sm font-semibold mb-1 block">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              onBlur={e=>setEmail(e.target.value)}
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
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-amber-700/50"
          >
            Log In
          </button>
        </form>
          <p className="text-right text-sm text-white/70 mt-2">
            <button
              onClick={handleResetPassword}
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              Forgot Password?
            </button>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="h-px flex-1 bg-white/20"></div>
            <span className="text-white text-sm">OR</span>
            <div className="h-px flex-1 bg-white/20"></div>
          </div>
        {/* Social Login Placeholder */}
        <SocilaLogin />

        {/* Sign Up Link */}
        <p className="text-center text-sm text-white/70 mt-6">
          New here?{" "}
          <Link
            to="/signUp"
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
