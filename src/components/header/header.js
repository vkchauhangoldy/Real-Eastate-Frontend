import React from "react";
import './header.css'
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    const Logoutbutton = () => {
        localStorage.setItem("authtoken", "");
        localStorage.setItem("id", "");
        navigate("/")
    };
    // const userid = localStorage.getItem("id").slice(0, -18);
    return (
        <div className="header">
            <div className="left"> USER ID:{userid}
            </div>
            <div className="right">
                <button id="logout-button" onClick={Logoutbutton}>
                    <i className="fa fa-user" id="icon" aria-hidden="true"></i>
                    Logout
                </button>
            </div>
        </div>
    )
}


export default Header;