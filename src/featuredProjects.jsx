import React, { useState } from 'react';
import "./featuredProjects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Assuming you have brand icons
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
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
      name: "EcoTrack Frontend",
      profileImg: "/ecotrack.png",
      rating: "React Native,Node js, Web Sockets",
      liveLink: "#",
      gitLink: "https://github.com/MohithMalla/Ecotrack_frontend",
    },
    {
      id: "3",
      name: "Live Auction Store",
      profileImg: "/liveauction.png",
      rating: "TypeScript, React, WebSockets (Real-time Bidding)",
      liveLink: "https://gametoauction.com/", // Private repo/Internal demo
      gitLink: "https://github.com/MohithMalla/Live-Auction-Store",
    },
    {
      id: "4",
      name: "Flair AI",
      profileImg: "/flairai.png",
      rating: "JavaScript, React, AI Integration",
      liveLink: " https://flairai.netlify.app/",
      gitLink: "https://github.com/MohithMalla/FlairAI",
    },
    {
      id: "5",
      name: "InvestoX",
      profileImg: "/investox.png",
      rating: "JavaScript,React,RestFul API's (Financial Portfolio Analysis)",
      liveLink: "https://investox-mallamohith.netlify.app/",
      gitLink: "https://github.com/MohithMalla/investoX",
    },
    {
      id: "6",
      name: "Chatter Desk",
      profileImg: "/chatterdesk.png",
      rating: "JavaScript, React, Socket.io (Real-time Chat)",
      liveLink: "https://spiffy-arithmetic-842e36.netlify.app",
      gitLink: "https://github.com/MohithMalla/Chatter_Desk",
    },
    
  ]);

  return (
    // Added section-container for global alignment
    <div className='section-container'>
      <h1 className='projecttitles'>Featured Projects</h1>
      <div className="underline"></div>
      
      <div className="featuredprojects">
        {data.map((eachObj) => {
          const { name, profileImg, rating, id, liveLink, gitLink } = eachObj;
          return (
            <Movies
              name={name}
              profileImg={profileImg}
              rating={rating}
              key={id}
              id={id}
              liveLink={liveLink}
              gitLink={gitLink}
            />
          );
        })}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to='/projects'>
            <button className='allprojects'>View All Projects</button>
        </Link>
      </div>
    </div>
  );
};

const Movies = ({ name, profileImg, rating, liveLink, gitLink }) => {
  return (
    <div className='movie_gallery'>
      {/* 1. Image is NOW OUTSIDE the padding container (.pro) */}
      <img className='image' src={profileImg} alt={name} />
      
      {/* 2. Text Content Container */}
      <div className="pro">
        <h1>{name}</h1>
        
        {/* Tech Stack Section */}
        <div className="stack">
            <span className='techstack'>Tech Stack:</span>
            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>{rating}</span>
        </div>

        {/* Links Section */}
        <div className="links">
          {/* Live Link */}
          <a href={liveLink} className='link' target='_blank' rel="noreferrer">
            Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          
          {/* Github Link */}
          <a href={gitLink} className='link' target='_blank' rel="noreferrer">
            GitHub <FontAwesomeIcon icon={faGithub} /> {/* Ensure faGithub is imported or reuse square icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;