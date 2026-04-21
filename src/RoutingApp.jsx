
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
import CraftsActivity from './Pages/Child/CraftsActivity';
import BookChainCrafting from './Pages/Child/BookChainCrafting';
import UserProfileView from './Pages/Child/Profile';
import CallScreen from './Pages/Child/CallScreen';
import AccountScreen from './Pages/Accounts';
import TilionWelcome from './Pages/Accounts';
import HomeParent from './Pages/Parent/HomeParent';
import ParentControl from './Pages/Parent/ParentControl';
import DiscoveryZone from './Pages/Parent/ScreenTime';
import Requests from './Pages/Parent/Requests';
import ChatParent from './Pages/Parent/ChatParent';
import ActivityDashboard from './Pages/Parent/ActivityDshboard';
import KidsSocialFeed from './Pages/Parent/Community';



const RoutingApp = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signup2" element={<SignupPageTwo/>} />
      <Route path="/login" element={<Login/>} />
       <Route path="/accounts" element={<TilionWelcome/>} />
      <Route path="/home" element={<Home/>} />
        <Route path="/chats" element={<Messages/>} />
        <Route path="/chat/:userId" element={<Chat />} />
        <Route path="/childprofile" element={<FriendsProfile />} />
        <Route path="/activity" element={<Activities />} />
        <Route path="/activity/crafting" element={<CraftsActivity />} />
<Route path="/activity/crafting/bookchain" element={<BookChainCrafting />} />
        <Route path="/profile" element={<UserProfileView/>} />
        <Route path="/call" element={<CallScreen/>} />


{}


<Route path="/homeparent" element={<HomeParent/>} />
<Route path="/parentcontrol" element={<ParentControl/>} />
<Route path="/screentime" element={<DiscoveryZone/>} />
<Route path="/requests" element={<Requests/>} />
<Route path="/chatparent/:userId" element={<ChatParent />} />
<Route path="/activityparent" element={<ActivityDashboard />} />
<Route path="/community" element={<KidsSocialFeed />} />
    
    
      </Routes>
    </Router>
    
    </> );
}
 
export default RoutingApp;