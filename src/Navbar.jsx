import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css"; // Ensure you import the CSS file!

function Navbar() {
  const navlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal', // Fixed 'fontweight' to 'fontWeight'
      color: isActive ? '#06ff06' : '#fdfdfd',  // Added active color logic directly here
      textDecoration: 'none'
    };
  };

  return (
    <div className='navbar'>
      <img className='navimg' src='/mmicon.png' alt='MM'/>
      <nav>
        <NavLink to="/" style={navlinkStyles}>Home</NavLink>
        <NavLink to="/about" style={navlinkStyles}>About</NavLink>
        <NavLink to="/projects" style={navlinkStyles}>Projects</NavLink>
        
        {/* Contact Button Link */}
        <NavLink to='/contactme' className="contact-link">
             <button className='contact'>
                <img className='msgimg' src='/msgimg.png' alt='hireme'/>
                contact me
             </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;