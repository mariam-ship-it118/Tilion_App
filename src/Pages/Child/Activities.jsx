import React from 'react';
import NavBar from '../../Components/NavBar';
import TopBar from '../../Components/TopBar';
import ActivityList from '../../Components/ActivityCards';
import {Link} from 'react-router-dom';
const Activities = () => {
    return ( <> 
    <TopBar/>
    <Link to="/activity/crafting">
    <ActivityList/>
    </Link>
    <NavBar/>
    </> );
}       
 
export default Activities;