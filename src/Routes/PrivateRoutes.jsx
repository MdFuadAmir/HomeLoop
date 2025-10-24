import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading/Loading";



const PrivateRoutes = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <Loading />
    }
    if(!user){
        return <Navigate state={{from: location?.pathname}} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoutes;