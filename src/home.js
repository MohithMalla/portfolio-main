import React from 'react'
import Intro from './intro';
import "./intro.css";
import FeaturedProjects from './featuredProjects';
import "./featuredProjects.css";


function Home() {
  return (<div>
    <Intro/>
    <FeaturedProjects/>
    </div>
  )
}

export default Home;