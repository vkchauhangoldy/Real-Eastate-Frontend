import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpperNav from "../../MainPage/UpperNav";

import Sidebar from '../../sidebar/Sidebar'
import "./property.css"

const PropDetails = () => {

  const navigate = useNavigate()

  function lastPage() {
    navigate("/basicdetail");
  }
  

  const [propertyData, setPropertyData] = useState({
    length: "",
    breadth: "",
    totalArea: "",
    areaUnit: "sqm",
    bhk: "",
    floor: "",
    attached: "yes",
    westernToilet: "yes",
    furnished: "no",
    parking: "no",
    lift: "no",
    electricity: "",
    facing: "east",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  const handleSubmit = async (event) => {
    const propData = { ...propertyData };
    event.preventDefault();

    await fetch('https://vkgoldy-real.onrender.com/api/property', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propData),
    }).then(res => {
      return res.json();
    }).then((data) => {
      console.log(data);
      // verifying
      navigate("/geninfo");
    }).catch(e => {
      console.log(e)
    })
  };

  return (
    <>
<UpperNav/>
      <Sidebar />
      <div className="property-info-row">
        <h3>ADD NEW PROPERTY</h3>
        <ul className="property-ul-row">
          <li >1.Basic info</li>
          <li className="property-li">2.Property Details</li>
          <li>3.General Info</li>
          <li>4.Location Info</li>
        </ul>
      </div>
      <div className="property-form-container">
        <form onSubmit={handleSubmit}>
          <div className="property-form-flexbox">
            <div>
              <label>
                Length:
                <input
                  type="number"
                  name="length"
                  value={propertyData.length}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Breadth:
                <input
                  type="number"
                  name="breadth"
                  value={propertyData.breadth}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Total Area <span style={{ color: "red" }}>*</span>:
                <input
                  type="number"
                  name="totalArea"
                  value={propertyData.totalArea}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Area Unit:
                <select name="areaUnit" value={propertyData.areaUnit} onChange={handleInputChange} >
                  <option value="sqm">sqm</option>
                  <option value="acres">acres</option>
                  <option value="hectares">hectares</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                BHK:
                <input
                  type="number"
                  name="bhk"
                  value={propertyData.bhk}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                Floor:
                <input
                  type="number"
                  name="floor"
                  value={propertyData.floor}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Attached:
                <select name="attached" value={propertyData.attached} onChange={handleInputChange}    >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>

              <label>
                Western Toilet:
                <select name="westernToilet" value={propertyData.westernToilet} onChange={handleInputChange}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Furnished:
                <select name="furnished" value={propertyData.furnished} onChange={handleInputChange}  >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>

              <label>
                Parking:
                <select name="parking" value={propertyData.parking} onChange={handleInputChange}    >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Lift:
                <select name="lift" value={propertyData.lift} onChange={handleInputChange}    >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>

              <label>
                Electricity:
                <input
                  type="text"
                  name="electricity"
                  value={propertyData.electricity}
                  onChange={handleInputChange}
                  placeholder="example"
                />
              </label>
            </div>
            <div>
              <label>
                Facing:
                <select name="facing" value={propertyData.facing} onChange={handleInputChange} >
                  <option value="east">EAST</option>
                  <option value="west">WEST</option>
                  <option value="north">NORTH</option>
                  <option value="south">SOUTH</option>
                </select>
              </label>
            </div>
            <div></div>
            <div className="property-btn">
              <div>
                <button onClick={lastPage}>Previous</button>
              </div>
              <div>
                <button  className="submit" type="submit">Save & continue</button>
              
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default PropDetails;