import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpperNav from "../../MainPage/UpperNav";

import Sidebar from '../../sidebar/Sidebar'
import "./basic.css";

const BasicDetails = () => {

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        property: "plot",
        negotable: "yes",
        price: "",
        ownership: "self",
        propertyAge: "",
        propertyApproved: "yes",
        propertyDescription: "",
        bankLoan: "no"
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //to clear the input
    const handleClear = () => {
        setFormValues({
            property: "plot",
            negotable: "yes",
            price: "",
            ownership: "self",
            propertyAge: "",
            propertyApproved: "yes",
            propertyDescription: "",
            bankLoan: "no"
        });
    }

    const handleSubmit = async (event) => {
        const basicData = { ...formValues };
        event.preventDefault();

        await fetch('https://vkgoldy-real.onrender.com/api/basic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(basicData),
        }).then(res => {
            return res.json();
        }).then((data) => {
            console.log(data);

            navigate("/prodetail")
        }).catch(e => {
            console.log(e)
        })
    };

    return (

        <>
            <UpperNav />
            <Sidebar />
            <h3>ADD NEW PROPERTY</h3>
            <div className="basic-info-row">
                <ul className="basic-ul-row">
                    <li className="basic-li">1.Basic info</li>
                    <li>2.Property Details</li>
                    <li>3.General Info</li>
                    <li>4.Location Info</li>
                </ul>
            </div>
            <div className="basic-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="basic-form-flexbox">
                        <div>
                            <label>
                                Property Type  <span style={{ color: "red" }}>*</span>:
                                <select name="property" value={formValues.property} onChange={handleInputChange} required>
                                    <option value="plot">Plot</option>
                                    <option value="house">House</option>
                                    <option value="flat">Flat</option>
                                </select>
                            </label>

                            <label> Negotiable:
                                <select name="negotable" value={formValues.negotable} onChange={handleInputChange}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label style={{marginLeft:"-22px"}}>
                                Price <span style={{ color: "red" }}>*</span>:
                                <input type="number" name="price" value={formValues.price} onChange={handleInputChange} required />
                            </label>

                            <label>
                                Ownership:
                                <select name="ownership" value={formValues.ownership} onChange={handleInputChange}>
                                    <option value="dealer">Dealer</option>
                                    <option value="self">Self</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label >
                                Property Age <span style={{ color: "red" }}>*</span>:
                                <input style={{marginLeft:"-3px"}} type="number" name="propertyAge" value={formValues.propertyAge} onChange={handleInputChange} min={2} required />
                            </label>

                            <label>
                                Property Approved:
                                <select name="propertyApproved" value={formValues.propertyApproved} onChange={handleInputChange}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <label>
                                Property Description:
                                <textarea name="propertyDescription" value={formValues.propertyDescription} onChange={handleInputChange} />
                            </label>

                            <label>
                                Bank Loan:
                                <select name="bankLoan" value={formValues.bankLoan} onChange={handleInputChange}>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </label>
                        </div>

                        <div>
                            <button onClick={handleClear}>Clear</button>
                        </div>
                        <div>
                            <button type="submit">Save & continue</button>
                        </div>

                    </div>
                </form>
            </div >
        </>
    );
}


export default BasicDetails;