
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from './Components/Splash';
import SignupPage from './Pages/SignUp';



const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/signup" element={<SignupPage/>} />
       

      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;