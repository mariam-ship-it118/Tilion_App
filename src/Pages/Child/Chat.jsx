import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import TopBar from '../../Components/TopBar';
import TopChat from '../../Components/TopChat';
import TextMessages from '../../Components/TextMessages';
import ChatBar from '../../Components/ChatBar';
const Chat = () => {
   
  const { userId } = useParams(); // This gets "ahmed-1" from the URL
    return ( <>
    
    <TopChat/>
    <TextMessages/>
 
    <ChatBar/>
    </> );
}
 
export default Chat;