import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const SocilaLogin = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const haldleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Account has been Login",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/')
        console.log(result.user);
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
