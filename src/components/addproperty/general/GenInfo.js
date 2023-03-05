import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpperNav from "../../MainPage/UpperNav";

import Sidebar from '../../sidebar/Sidebar'

import "./general.css";

const GenInfo = () => {
    

    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [postedby, setPostedBy] = useState("owner");
    const [saletype, setSaleType] = useState("");
    const [feature, setFeature] = useState("");
    const [PPDpackage, setPPDPackage] = useState("");

    const navigate = useNavigate();

    function lastPage() {
        navigate("/prodetail");
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const genData = new FormData();
        genData.append("username", username);
        genData.append("mobile", mobile);
        genData.append("postedby", postedby);
        genData.append("saletype", saletype);
        genData.append("feature", feature);
        genData.append("PPDpackage", PPDpackage);


        await fetch('https://vk-goldy-real.onrender.com/api/general', {
            method: "POST",
            
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(genData),
        })
            .then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data);
                navigate("/location")
            }).catch((e) => {
                console.log(e);
            });
    };

    return (
        <>
        <UpperNav/>
            <Sidebar/>
            <div className="general-info-row">
                <h3>ADD NEW PROPERTY</h3>
                <ul className="general-ul-row">
                    <li>1.Basic info</li>
                    <li >2.Property Details</li>
                    <li className="general-li">3.General Info</li>
                    <li>4.Location Info</li>
                </ul>
            </div>
            <div className="general-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="genral-form-flexbox">
                        <div>
                            <label>
                                Username<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(event) => setUsername(event.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                Mobile<span style={{ color: "red" }}>*</span>:
                                <input
                                    type="number"
                                    value={mobile}
                                    onChange={(event) => setMobile(event.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Posted By:
                                <select value={postedby} onChange={(event) => setPostedBy(event.target.value)}>
                                    <option value="owner">Owner</option>
                                    <option value="dealer">Dealer</option>
                                </select>
                            </label>

                            <label>
                                Sale Type:
                                <input
                                    type="text"
                                    value={saletype}
                                    onChange={(event) => setSaleType(event.target.value)}
                                    placeholder=" loan,etc.."
                                />
                            </label>
                        </div>
                        <div>


                            <label>
                                Feature <span style={{ color: "red" }}>*</span>:
                                <select value={feature} onChange={(event) => setFeature(event.target.value)} required>
                                    <option value="gym">Gym</option>
                                    <option value="pool">Pool</option>
                                    <option value="garden">Garden</option>

                                </select>
                            </label>

                            <label>
                                PPD Package:
                                <input
                                    type="text"
                                    value={PPDpackage}
                                    onChange={(event) => setPPDPackage(event.target.value)}
                                />
                            </label>
                        </div>

                        <div className="general-btn">
                            <div>
                                <button onClick={lastPage}>Previous</button>
                            </div>
                            <div>
                                <button type="submit">save & continue </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};
export default GenInfo;