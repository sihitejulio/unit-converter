import logo from './logo.svg';
import Home from './page/Home';
import Profile from './page/ProfileSetting';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App w-96 px-5 mt-6 bg-gray-400 shadow rounded">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={  <Home/>} />
            <Route path="/Profile" element={  <Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
