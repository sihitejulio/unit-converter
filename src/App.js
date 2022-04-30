import logo from './logo.svg';
import Home from './page/Home';
import Login from './page/Login';
import Otp from './page/Otp';
import Profile from './page/ProfileSetting';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
    // <div className="App w-96 px-5 mt-6 bg-gray-400 shadow rounded">
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={  <Login/>} />
            <Route
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
             <Route
              path="OtpVerify"
              element={
                <ProtectedRoute path="OtpVerify">
                  <Otp />
                </ProtectedRoute>
              }
            />
            <Route
              path="Profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
