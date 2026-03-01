import React, { useState } from 'react';
import "./featuredProjects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  // Updated with your latest repositories and professional projects
  const [data] = useState([
    {
      id: "1",
      name: "HamaraHub",
      profileImg: "/hamarahub.png", // Ensure you add this image to your public folder
      rating: "React, Node.js , AWS (Community Deployment Platform)",
      liveLink: "https://hamarahub-mohithmalla.netlify.app",
      gitLink: "https://github.com/MohithMalla/HamaraHub",
    },
    {
      id: "2",
      name: "Live Auction Store",
      profileImg: "/liveauction.png",
      rating: "TypeScript, React, WebSockets (Real-time Bidding)",
      liveLink: "https://gametoauction.com/", // Private repo/Internal demo
      gitLink: "https://github.com/MohithMalla/Live-Auction-Store",
    },
    {
      id: "3",
      name: "EcoTrack Frontend",
      profileImg: "/ecotrack.png",
      rating: "React Native,Node js, Web Sockets",
      liveLink: "#",
      gitLink: "https://github.com/MohithMalla/Ecotrack_frontend",
    },
    {
      id: "8",
      name: "InvestoX",
      profileImg: "/investox.png",
      rating: "JavaScript,React,RestFul API's (Financial Portfolio Analysis)",
      liveLink: "https://investox-mallamohith.netlify.app/",
      gitLink: "https://github.com/MohithMalla/investoX",
    },
    {
      id: "5",
      name: "Flair AI",
      profileImg: "/flairai.png",
      rating: "JavaScript, React, AI Integration",
      liveLink: " https://flairai.netlify.app/",
      gitLink: "https://github.com/MohithMalla/FlairAI",
    },
    {
      id: "6",
      name: "Chatter Desk",
      profileImg: "/chatterdesk.png",
      rating: "JavaScript, React, Socket.io (Real-time Chat)",
      liveLink: "https://spiffy-arithmetic-842e36.netlify.app",
      gitLink: "https://github.com/MohithMalla/Chatter_Desk",
    },
    {
      id: "7",
      name: "Battlefy",
      profileImg: "/battlefy.png",
      rating: "JavaScript, React, AI Integration",
      liveLink: " https://battlefy.netlify.app/",
      gitLink: "https://github.com/MohithMalla/Battlefy",
    },
    
    {
      id: "4",
      name: "Civica AI",
      profileImg: "/civica.png",
      rating: "React, Python, Gemini AI (Civic Issue Reporting)",
      liveLink: "https://sites.google.com/view/civica6",
      gitLink: "https://github.com/MohithMalla/Civica",
    },
      
  ]);

 

  return (
    <div className='section-container'>
      <h1 className='projecttitles'>Latest Repositories & Work</h1>
      <div className="underline"></div>
      
      {/* The grid layout adapts automatically from 1 to 3 columns 
        based on the 'auto-fit' logic in your CSS.
      */}
      
      <div className="featuredprojects">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ name, profileImg, rating, liveLink, gitLink }) => {
  return (
    <div className='movie_gallery'>
      <img className='image' src={profileImg} alt={name} />
      
      <div className="pro">
        <h1>{name}</h1>
        
        <div className="stack">
          <h3 className='techstack'> Tech Stack & Insights:</h3>
          <p>{rating}</p>
        </div>

        <div className="links">
          <div className="live">
            <a href={liveLink} target='_blank' rel="noreferrer">
              Live Demo <FontAwesomeIcon className='link' icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="github">
            <a href={gitLink} target='_blank' rel="noreferrer">
              GitHub <FontAwesomeIcon className='link' icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;