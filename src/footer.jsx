import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='foot'>
      <div className="foot-content">
        {/* Navigation Links */}
        <div className="footnavbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contactme">Contact</Link>
        </div>

        {/* Social Icons (Reusing the 'smimg' class for the green glow) */}
        <div className="socmedia">
          <div className="sm">
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/mohithmalla'>
              <img className='smimg' src='/linkedinicon-removebg-preview.png' alt='LinkedIn'/>
            </a>
          </div>
          <div className="sm">
            <a href='https://github.com/MohithMalla' target='_blank' rel="noreferrer">
              <img className='smimg' src='/githubicon-removebg-preview.png' alt='GitHub'/>
            </a>
          </div>
          <div className="sm">
            <a target='_blank' rel="noreferrer" href='https://www.instagram.com/_malla_.mohith/'>
              <img className='smimg' src='/instaicon-removebg-preview.png' alt='Instagram'/>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='copyright'>
          <p className='copyrights'>
            Copyright <FontAwesomeIcon icon={faCopyright} /> 2024 - {currentYear} &nbsp; 
            <a href="https://www.linkedin.com/in/mohithmalla" className="mohithmalla" target='_blank' rel="noreferrer">
              MohithSai Malla
            </a>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;