import { defaults } from 'autoprefixer';
import {
    Routes,
    Route,
    NavLink,
    Navigate,
    useNavigate,
  } from 'react-router-dom';

  import { connect } from 'react-redux';
  import { useEffect, useState, useCallback} from 'react';
  
  const ProtectedRoute = (state) => {
    const { user, children, path } = state;
    console.log(state);
   
    if(user.userData.token===null){
      return <Navigate to="/" replace />;
    }

    return children;
    
  };

  function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(ProtectedRoute);
