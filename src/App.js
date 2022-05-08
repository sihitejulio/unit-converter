import logo from './logo.svg';
import Home from './page/Home';
import {Login} from './page/Login';
import Otp from './page/Otp';
import Profile from './page/ProfileSetting';
import ProtectedRoute from './components/ProtectedRoute';
import LoginRoute from './components/LoginRoute';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { connect,useDispatch } from 'react-redux';
import { useEffect, useState, useCallback} from 'react';
import { UserActionCreators } from './action/user.action';

function App() {
  const dispatch = useDispatch();
  const info = useCallback(() => {
    const items = localStorage.getItem('mini-bank-token');
    if(items!==''){
      dispatch(UserActionCreators.login({type: 'LOGIN', token: items}));
    }
  }, []);

  useEffect(() => {
    info();
  }, [info])

  return (
    <div>
      <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={  <Login/>} /> */}
            <Route
              path="/"
               element={
                <LoginRoute  path="/">
                  <Login />
                </LoginRoute>
              }
            />
            <Route
              path="Dashboard"
               element={
                <ProtectedRoute  path="Dashboard">
                  <Home />
                </ProtectedRoute>
              }
            />
             <Route
              path="OtpVerify"
              element={
                <ProtectedRoute  path="OtpVerify">
                  <Otp />
                </ProtectedRoute>
              }
            />
            <Route
              path="Profile"
              element={
                <ProtectedRoute path="Profile">
                  <Profile />
                </ProtectedRoute>
              }
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}


const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
