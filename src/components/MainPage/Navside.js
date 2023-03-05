import React from 'react';
import { HiOutlineHome,HiOutlineBell,HiOutlineArrowDown,HiOutlineArrowUp,HiOutlineEye,HiOutlineTag} from "react-icons/hi";

const Sidenav=()=>{
    return(
        <>

        <h1>Logo</h1>
        <p ><span><HiOutlineHome className="blue"/></span> <span className="blue">Property</span></p>
        <p><span><HiOutlineBell/></span><span>Assistace</span></p>
        <p><span><HiOutlineArrowDown/> </span><span>Recived Interest</span></p>
        <p><span><HiOutlineArrowUp/></span> <span>Sent Interest</span></p>
        <p><span><HiOutlineEye/></span><span>Property View</span></p>
        <p><span><HiOutlineTag/></span><span>Tariff Plan</span></p>
        
        </>
    )
}
export default Sidenav