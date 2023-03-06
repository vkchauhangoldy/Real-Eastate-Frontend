import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../Login/Register.css";
const Register = () => {
    const navigate = useNavigate();
    //const history= useHistory()
    const [inpval, setinpu] = useState({
        email: "",
        password: "",
        cpassword: ""

    })
    const setval = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setinpu(() => {
            return {
                ...inpval,
                [name]: value
            }

        })
    }
    const adduserdata = async (e) => {
        e.preventDefault();
        const { email, password, cpassword } = inpval
        if (email === "" || password === "" || cpassword === "") {
            alert("please provide valid data");
        }
        else if (!email.includes("@")) {
            alert("provide valid email");

        }

        else if (password !== cpassword) {
            alert("password should be same")
        }
        else {
            //console.log("hello");
            const data = await fetch("https://vk-goldy-real.onrender.com/reg/signup", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password, cpassword
                })
            })
            const res = await data.json();
            console.log(res);

            if (res.status === 201) {
                alert("Registration succesfully done");
                setinpu({
                    ...inpval,
                    email: "",
                    password: "",
                    cpassword: ""
                })
                navigate("/");
            }
            else if (res.status === "already") {
                alert("User already registered");
                setinpu({
                    ...inpval,
                    email: "",
                    password: "",
                    cpassword: ""
                })
            }
            else {
                alert("Registartion failed")
            }



        }


    }
    return (
        <>
            <div className="container">
                <div>
                    <h1 className="heading">LOGO</h1>
                </div>
                <p>Create New Account</p>
                <form method="POST" className="form_data_signup">

                    <input type="email" onChange={setval} placeholder="Mail ID" name="email" value={inpval.email} />


                    <input type="password" onChange={setval} placeholder="Password" name="password" value={inpval.password} />


                    <input type="password" onChange={setval} placeholder="Confirm Password" name="cpassword" value={inpval.cpassword} />


                    <button onClick={adduserdata} className="btn">Sign up</button>
                </form>


                <h3 className="log"><NavLink to="/" className="log" >Sign in</NavLink></h3>

            </div>


        </>
    )

}
export default Register;