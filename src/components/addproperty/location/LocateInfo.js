import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpperNav from "../../MainPage/UpperNav";

import Sidebar from '../../sidebar/Sidebar'

import "./location.css"
const LocateInfo = () => {
 
  const navigate = useNavigate()

  function lastPage() {
    navigate("/dashboard");
  }

  const [formData, setFormData] = useState({
    email: "",
    city: "",
    area: "",
    pincode: "",
    address: "",
    landmark: "",
    latitude: "",
    longitude: "",
  });

 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    const locateData = { ...formData };  

    await fetch("https://vkgoldy-real.onrender.com/api/location", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(locateData), //uncoment
    }).then(res => {
      return res.json();
    }).then(data => {
      console.log(data);

      navigate("/dashboard"); //uncoment
    })
      .catch(error => {
        console.error(error);
      })
  };

  return (
    <>
    <UpperNav/>
     <Sidebar/>
      <div className="location-info-row">
        <h3>ADD NEW PROPERTY</h3>
        <ul className="location-ul-row">
          <li >1.Basic info</li>
          <li>2.Property Details</li>
          <li>3.General Info</li>
          <li className="location-li">4.Location Info</li>
        </ul>
      </div>
      <div className="location-form-container">
        <form onSubmit={handleSubmit}>
          <div className="location-form-flexbox">
            <div>
              <label>
                Email <span style={{ color: "red" }}>*</span>:
                <input style={{marginLeft:"-5px"}}
                  type="email"
                  name="email" placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                City <span style={{ color: "red" }}>*</span>:
                <select name="city" value={formData.city} onChange={handleChange} required>
                  <option value="">Select city</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Area:
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                />
              </label>
              <label>
                Pincode:
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>


              <label>
                Address:
                <textarea name="address"
                  value={formData.address}
                  onChange={handleChange} />
              </label>
              <label>
                Landmark:
                <input style={{marginLeft:"-5px"}}
                  type="text"
                  name="landmark" placeholder="near station, temple etc"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>


              <label>
                Latitude:
                <input
                  type="text"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                />
              </label>
              <label>
                Longitude:
                <input
                  type="text"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              {/* <button onChange={handleClear}>Previous</button> */}
              <button onClick={lastPage}>Previous</button>
            </div>
            <div>
              <button type="submit" >Add Property</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LocateInfo;
