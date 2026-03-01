import React from 'react'
import './contactme.css';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
  .contactme{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
function ContactMe() {
  return (
    <div>
        <GlobalStyle/>
        <div className="contme">
        <h3 className='protitles'>Contact Me</h3>
        <div className="underline"></div>
        <div className="socimed">
            <div className="sm">
              <a target='blank' href='http://www.linkedin.com/in/mohithmalla'>
                <img className='smimg' src='/linkedinicon-removebg-preview.png' alt='LinkedIn profile' />
              </a>
            </div>
            <div className="sm">
              <a href='https://github.com/MohithMalla' target='blank'>
                <img className='smimg' src='/githubicon-removebg-preview.png' alt='GitHub profile' />
              </a>
            </div>
            <div className="sm">
              <a target='blank' href='https://www.instagram.com/_malla_.mohith/'>
                <img className='smimg' src='/instaicon-removebg-preview.png' alt='Instagram profile' />
              </a>
            </div>
          </div>
        <div className="details">
        <span className="cont">+91 9391036388</span>
        <span className="cont">https://mallamohith.netlify.app/</span>
        <span className="cont">mallamohith20@gmail.com</span>
        <span className="cont">Anakapalli, Andhra Pradesh, India</span>
        </div>
        
        </div>
    </div>
  )
}

export default ContactMe;