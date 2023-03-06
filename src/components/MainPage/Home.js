import React from 'react';

import "./Alldetails.css"
import UpperNav from './UpperNav';
import AllDetails from './Alldetails';

import Sidebar from '../sidebar/Sidebar';

const Home=()=>{
   
    return(
        <div>
            <div className="home">
            <div className="side-nav">
                
                <Sidebar/>
            </div>
            <div className="display">
                <UpperNav/>
               <AllDetails/> 
            </div>

        </div>
        </div>
    )
}
export default Home