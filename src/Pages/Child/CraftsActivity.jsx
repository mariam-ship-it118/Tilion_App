import React from 'react';
import TasksCards from '../../Components/TasksCards';
import BookChain from '../../Assets/crafting_bookchain.svg';
import TopBar from '../../Components/TopBar';
import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import SearchBar from '../../Components/SearchBar';
import BagcChain from '../../Assets/bagchain.svg';
const CraftsActivity = () => { 
    return ( <> 
    <TopBar/>
    <SearchBar/>
    <div className='margin-left btm'>
        
        <Link to="/activity/crafting/bookchain">
        <div className='mrgin-btm'>
<TasksCards img={BookChain} name="bookchain" description="keychain to put on your bag, pouch, wallet...everywhere!"/>
        </div>
        </Link>
   
    <div className='mrgin-btm'>
<TasksCards img={BagcChain} name="Bagchain" description="Turtle bag charm you can clip onto your bag, pouch, wallet—take it everywhere!"/>
        </div>


         <div className='mrgin-btm'>
<TasksCards img={BagcChain} name="Crafting" description="keychain to put on your bag, pouch, wallet...everywhere!"/>
        </div>
   
          <div className='mrgin-btm'>
<TasksCards img={BookChain} name="bookchain" description="keychain to put on your bag, pouch, wallet...everywhere!"/>
        </div>
   
    <div className='mrgin-btm'>
<TasksCards img={BagcChain} name="Bagchain" description="Turtle bag charm you can clip onto your bag, pouch, wallet—take it everywhere!"/>
        </div>


         <div className='mrgin-btm'>
<TasksCards img={BagcChain} name="Crafting" description="keychain to put on your bag, pouch, wallet...everywhere!"/>
        </div>
   
   
   
   
   
   
    </div>
    <NavBar/>
    </> );
}

export default CraftsActivity;