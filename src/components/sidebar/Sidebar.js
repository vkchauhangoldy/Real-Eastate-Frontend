import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'> LOGO</div>
      <div className='listing'>
        <ul className='list_name'>
          <li className='propertylink'><i className="fa fa-home" aria-hidden="true"></i> Property</li><br />
          <li><i className="fa fa-bell" aria-hidden="true"></i>  Assistance</li><br />
          <li><i className="fa fa-download" aria-hidden="true"></i>  Received Interest</li><br />
          <li><i className="fa fa-arrow-up" aria-hidden="true"></i>  Send Interest</li><br />
          <li><i className="fa fa-eye" aria-hidden="true"></i>  Property Views</li><br />
          <li><i className="fa fa-tags" aria-hidden="true"></i>  Tariff Plan</li><br />
        </ul>
      </div>
    </div>
  )
}
export default Sidebar;
