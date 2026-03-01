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
      profileImg: "/mohithportfolio2.png",
      rating: "React , Styled Components",
      name: "Mohith Portfolio",
      liveLink: "#",
      gitLink: "#",
    },
    {
      id: "2",
      name: 'Service-market place',
      profileImg: '/service-marketplace.png',
      rating: 'React , SupaBase',
      liveLink: "https://service-marketplace-mallamohith.netlify.app/",
      gitLink: "https://service-market.netlify.app/",
    },
    {
      id: "3",
      profileImg: "/resume-generator.png",
      rating: "React , JavaScript",
      name: "Resume Generator",
      liveLink: "https://resume-generator-mallamohith.netlify.app/",
      gitLink: "https://github.com/MohithMalla/resume-generator",
    },
    {
      id: "4",
      name: "Course Navigator",
      profileImg: "/course-navigator.png",
      rating: "Html , CSS , JavaScript",
      liveLink: "https://course-navigator-mallamohith.netlify.app/",
      gitLink: "https://github.com/MohithMalla/Course-Navigator",
    },
    {
      id: "5",
      name: 'Weather App',
      profileImg: '/weather-app.png',
      rating: "Html , CSS , JavaScript , API Calls",
      liveLink: "https://weatherapp-mallamohith.netlify.app/",
      gitLink: "https://github.com/MohithMalla/weather",
    },
    {
      id: "6",
      profileImg: "/ppt-generator.png",
      rating: "React , JavaScript , CSS",
      name: "PPT Generator",
      liveLink: "https://pptmaker-mallamohith.netlify.app/",
      gitLink: "https://github.com/MohithMalla/ppt-generator",
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