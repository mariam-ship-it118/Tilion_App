
import {BrowserRouter, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './LanguageContext';
import SplashScreen from './Components/Splash';
import SignupPage from './Pages/SignUp';
import SignupPageTwo from './Pages/SignUpTwo';
import ActivitySelection from './Pages/ActivitySelection';
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
import FriendsPage from './Pages/Child/Friends';
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
import ProfileParent from './Pages/Parent/ProfileParent';
import CyberBullyingPage from './Pages/Parent/CyberBullyingPage';
import MyChildProfile from './Pages/Parent/MyChildProfile';
import NotificationPage from './Pages/Parent/NotificationPage';
import FriendPage from './Pages/Child/FriendPage';
import MessagesParent from './Pages/Parent/MessagesParent';
import CraftingDetails from './Pages/Parent/CraftingDetails';
import NotificationChild from './Pages/Child/NotificationChild';



const RoutingApp = () => {
    return ( <>
    <LanguageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signup2" element={<SignupPageTwo/>} />
        <Route path="/activityselection" element={<ActivitySelection/>} />
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
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/call" element={<CallScreen/>} />
        <Route path="/childnotifications" element={<NotificationChild />} />


{/* parent account*/}

<Route path="/homeparent" element={<HomeParent/>} />
<Route path="/parentcontrol" element={<ParentControl/>} />
<Route path="/bullying" element={<CyberBullyingPage />} />
<Route path="/mychildprofile" element={<MyChildProfile />} />
<Route path="/screentime" element={<DiscoveryZone/>} />
<Route path="/requests" element={<Requests/>} />
<Route path="/chatparent/:userId" element={<ChatParent />} />
<Route path="/activityparent" element={<ActivityDashboard />} />
<Route path="/craftingdetails" element={<CraftingDetails />} />
<Route path="/community" element={<KidsSocialFeed />} />
<Route path="/profileparent" element={<ProfileParent />} />
<Route path="/notifications" element={<NotificationPage />} />
<Route path="/parentfriends" element={<FriendPage />} />
<Route path="/messagesparent" element={<MessagesParent />} />
    
    
      </Routes>
    </Router>
    </LanguageProvider>
    
    </> );
}
 
export default RoutingApp;