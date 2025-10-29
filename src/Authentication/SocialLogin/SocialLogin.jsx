import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const SocilaLogin = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const from = location?.state || '/'

  const haldleGoogleSignIn = () => {
    loginWithGoogle()
      .then(async (result) => {
        const user = result.user;
        const userInfo = {
          email: user.email,
          role: "guest",
          status:"Verified",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };
        const res = await axiosInstance.put('/users',userInfo);
        console.log('user update info', res.data);
        toast.success('Login Successfully')
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" space-y-3">
      <button
        onClick={haldleGoogleSignIn}
        className="btn rounded w-full bg-teal-600 text-white flex justify-center border-none"
      >
        <FaGoogle size={20} /> Login With Google
      </button>
      <button className="btn rounded w-full bg-teal-600 text-white flex justify-center border-none">
        <FaGithub size={20} /> Login With Github
      </button>
      <button className="btn rounded w-full bg-teal-600 text-white flex justify-center border-none">
        <FaFacebook size={20} /> Login With Facebook
      </button>
    </div>
  );
};

export default SocilaLogin;
