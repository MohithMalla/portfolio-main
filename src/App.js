import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./Navbar";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import ContactMe from "./contactme";
import Footer from "./footer";
import ScrollToTopButton from "./scroll-to-top";
import Chatbot from "./Chatbot";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        {/* Main Content Wrapper */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contactme" element={<ContactMe />} />
          </Routes>
        </div>

        <Footer />
        
        {/* Floating Utilities */}
        <ScrollToTopButton />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;