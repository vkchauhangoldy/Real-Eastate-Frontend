import React from 'react';
// import { json } from 'react-router-dom';
import "./Alldetails.css"
import UpperNav from './UpperNav';
import AllDetails from './Alldetails';
import Sidenav from './Navside';
// import Search from './SearchPage';
const Home=()=>{
    // const navigate = useNavigate()
    // const token = localStorage.getItem("token")
    // useEffect(() => {
    //     if (!token) {
    //         navigate("/...")
    //     }
    //     console.log(token)
    // }, [])
    return(
        <div>
            <div className="home">
            <div className="side-nav">
                <Sidenav/>
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