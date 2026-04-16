
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from './Components/Splash';
import SignupPage from './Pages/SignUp';
import SignupPageTwo from './Pages/SignUpTwo';
import Login from './Pages/Login';
import Home from './Pages/Home';



const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signup2" element={<SignupPageTwo/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home/>} />


      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;