import React, { Component } from 'react';
import NavBar from '../../Components/NavBar';
import TopBar from '../../Components/TopBar';
import KidsStoryBar from '../../Components/StoriesKids';
import KidsSocialPost from '../../Components/PostsKids';
import PostOne from '../../Assets/post_1.svg';
import TimeOutPopUp from '../../Components/TimeOutPopUp';

const HomeParent = () => {
    return ( <>
    <TopBar/>

    <KidsStoryBar/>
    <KidsSocialPost profilePic={PostOne}
     username="Ahmed school" 
          nickname="CoolKid" 
          caption="Study with me!" 
          postImage={PostOne}
          initialLikes={9}/>
           <KidsSocialPost profilePic={PostOne}
     username="Ahmed school" 
          nickname="CoolKid" 
          caption="Study with me!" 
          postImage={PostOne}
          initialLikes={9}/>
                 <KidsSocialPost profilePic={PostOne}
     username="Ahmed school" 
          nickname="CoolKid" 
          caption="Study with me!" 
          postImage={PostOne}
          initialLikes={9}/>
          <TimeOutPopUp/>
    <NavBar/>
    
    </> );
}
 
export default HomeParent;