import { defaults } from 'autoprefixer';
import {
    Routes,
    Route,
    NavLink,
    Navigate,
    useNavigate,
  } from 'react-router-dom';
  
  const ProtectedRoute = ({ path, children }) => {
    const { token } = {token: null};
    const { otp } = {otp: '123131'};
  

    if(otp && path==='OtpVerify'){
        return children;
    }
    if (!token) {
       return <Navigate to="/" replace />;
    }
    return children;
  };

  export default ProtectedRoute;