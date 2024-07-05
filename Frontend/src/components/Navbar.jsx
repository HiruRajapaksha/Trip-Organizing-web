import React from 'react';
import { NavLink } from 'react-router-dom';


const navStyle = { 
    width: '850px', 
    height: '80px',
    borderRadius: '20px',
    backgroundColor: '#f7f8fa'
};

const Navbar = () => {
  return (
    <div className='container shadow-sm justify-content-center align-items-center mt-5' style={navStyle}>
        <ul className="nav nav-pills nav-fill mt-5 pt-4 px-4">
            <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active"><i className="bi bi-house"></i> Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/requests" className="nav-link" activeClassName="active"><i className="bi bi-house"></i> Organize Trips </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/addrequest" className="nav-link" activeClassName="active"><i className="bi bi-plus-square"></i> ADD</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/updaterequest" className="nav-link" activeClassName="active"><i className="bi bi-pencil-square"></i> Update</NavLink>
            </li>
        </ul>

      
    </div>
  )
}

export default Navbar
