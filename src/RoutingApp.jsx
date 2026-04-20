
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from './Components/Splash';
import SignupPage from './Pages/SignUp';
import SignupPageTwo from './Pages/SignUpTwo';
import Login from './Pages/Login';
import Home from './Pages/Child/Home';
import Messages from './Pages/Child/Messages';
import Chat from './Pages/Child/Chat';
import FriendsProfile from './Pages/Child/FriendsProfile';
import ActivityList from './Components/ActivityCards';
import Activities from './Pages/Child/Activities';




const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signup2" element={<SignupPageTwo/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
        <Route path="/chats" element={<Messages/>} />
        <Route path="/chat/:userId" element={<Chat />} />
        <Route path="/childprofile" element={<FriendsProfile />} />
        <Route path="/activity" element={<Activities />} />


      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;