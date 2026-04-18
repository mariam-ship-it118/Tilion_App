import React, { Component } from 'react';
import ChatList from '../../Components/ChatList';
import NavBar from '../../Components/NavBar';
import TopBar from '../../Components/TopBar';
import SearchBar from '../../Components/SearchBar';


const Messages = () => {
    return ( <>
    <TopBar/>
    <SearchBar/>
    <ChatList/>
    
    
    <NavBar/>
    </> );
}
 
export default Messages;