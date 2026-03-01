import React from 'react';
import "./about.css";
import { createGlobalStyle } from 'styled-components';
// import ContactMe from './contactme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
  .aboutinfo, .technicalskills {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

function About() {
  return (
    <section id='about'>
      <GlobalStyle />
      <div className="abouthead">
        <div className="aboutcontent">
          <span className="abouttext">My name is<br /><span className="aboutname">Malla MohithSai</span></span><br />
          <div className='aboutinfo'>
            I'm Mohith, a Computer Science undergrad certified in DSA with Java, passionate about tech and coding. I excel in problem-solving and front-end development, aiming to be a full-stack developer. <br />
            I'm also skilled in Figma, I design user-centric interfaces and work on impactful web projects.
          </div>
        </div>
        <div className="profile">
          <img className='profileimg' src='/newremovedbgprofile.png' alt='profile-image' />
        </div>
      </div>
      <h3 className='protitles'>Technical Skills</h3>
      <div className="undline"></div>
      <div className="technicalskills">
        <div className="webtechnologies">
          <h3>Web Technologies</h3>
          <ul>
            <li className="skills">HTML</li>
            <li className="skills">CSS</li>
            <li className="skills">JavaScript</li>
            <li className="skills">NodeJs</li>
            <li className="skills">ExpressJs</li>
          </ul>
        </div>
        <div className="programminglanguages">
          <h3>Programming Languages</h3>
          <ul>
            <li className="skills">C</li>
            <li className="skills">Java</li>
            <li className="skills">Python</li>
          </ul>
        </div>
        <div className="technicalframeworks">
          <h3>Technical Frameworks</h3>
          <ul>
            <li className="skills">Bootstrap</li>
            <li className="skills">ReactJS</li>
          </ul>
        </div>
        <div className="databases">
          <h3>Databases</h3>
          <ul>
            <li className="skills">MongoDB</li>
            <li className="skills">SupaBase</li>
          </ul>
        </div>
        <div className="developertools">
          <h3>Developer Tools</h3>
          <ul>
            <li className="skills">Git</li>
            <li className="skills">GitHub</li>
            <li className="skills">VSCode</li>
          </ul>
        </div>
        <div className="designtools-academicframeworks">
          <h3>Design Tools & Academic Frameworks</h3>
          <ul>
            <li className="skills">Figma</li>
            <li className="skills">Data Structures</li>
            <li className="skills">Algorithms</li>
            <li className="skills">OOPs</li>
          </ul>
        </div>
      </div>
      <div className="education">
        <h3 className='projecttitles'>Education</h3>
        <div className="underline"></div>
        <div className="institutes">
          <div className="institute">
            <img className='img' src='/engineering.jpg' alt='school' />
            <div className="text-overlay">
              <div className="engname">
                Vignan's Institute of Information and Technology</div> 

            </div>
            <div className="text-overlaytry">91.7 %</div>

          </div>
          <div className="institute">
            <img className='img' src='/intermediate.jpg' alt='school' />
            <div className="text-overlay">
              <div className="intername">Sri Chaitanya Junior College</div> 

            </div>
            <div className="text-overlaytry">95.2 %</div>


          </div>
          <div  className="institute">
            <img className='img' src='/school.jpg' alt='school' />
            <div className="text-overlay">
              <div className="sclname">St.Mary's High School</div> 

            </div>
            <div className="text-overlaytry">98.5 %</div>


          </div>
        </div>
      </div>
      {/* <ContactMe/> */}
    </section>
  );
}

export default About;
