import React, { useState } from 'react';
import { BsPerson, BsChevronDown } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const UpperNav = () => {
     const navigate = useNavigate()
    const [log, setLogout] = useState(false)
    const handleLog = () => {
        console.log('uppernav')
        // console.log(localStorage.getItem("user"))
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");
        navigate("/")
    }
    // let user = localStorage.getItem("user")
    // user = (JSON.parse(user).email)
    // console.log(user)
    return (


        <div className="upper-nav">
            <p>USER ID:{Math.floor(Math.random() * 99) +
                "PPD" +
                Math.floor(Math.random() * 999 + 999)}</p>
            <p className='account'>
                <span>
                    <span className='account-icon'><BsPerson /></span>
                    <span className='account-name'>sanchithakp123</span>
                    <span><BsChevronDown
                        onClick={() => { log ? setLogout(false) : setLogout(true) }}
                    /></span>
                </span>
                {log && <p className='logout-option' onClick={() => { setLogout(false); handleLog() }} >Logout</p>}
            </p>
        </div>

    )
}

export default UpperNav