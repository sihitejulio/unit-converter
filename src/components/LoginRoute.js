import { defaults } from 'autoprefixer';
import {
    Routes,
    Route,
    NavLink,
    Navigate,
    useNavigate,
  } from 'react-router-dom';

  import { connect } from 'react-redux';
  
  const LoginRoute = (state) => {
    const { user, children, path } = state;

    if(!user.isLoginVerify && path==='/' && user.userData.token!==null){
      return <Navigate to="/OtpVerify" replace />;
    }
    return children;
  };

  function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(LoginRoute);
