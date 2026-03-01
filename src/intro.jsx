// import React from 'react';
// import "./intro.css";
// import { Link } from 'react-router-dom';



// function Intro() {
//   return (
//     <section id='intro'>
//       <div className="introhead">
//         <div className="introcontent">
//           <span className="introtext"><span className="iam">I'm </span><span className="introname">Mohith</span><br />
//             <div className='role'>Website Developer</div>
//           </span><br />
//           <div className='info'>
//             Skilled web developer creating visually appealing, functional websites. Specialized in responsive design for seamless user experiences.
//           </div>
//           <div className="socialmedia">
//             <div className="sm">
//               <a target='blank' href='http://www.linkedin.com/in/mohithmalla'>
//                 <img className='smimg' src='/linkedinicon-removebg-preview.png' alt='LinkedIn profile' />
//               </a>
//             </div>
//             <div className="sm">
//               <a href='https://github.com/MohithMalla' target='blank'>
//                 <img className='smimg' src='/githubicon-removebg-preview.png' alt='GitHub profile' />
//               </a>
//             </div>
//             <div className="sm">
//               <a target='blank' href='https://www.instagram.com/_malla_.mohith/'>
//                 <img className='smimg' src='/instaicon-removebg-preview.png' alt='Instagram profile' />
//               </a>
//             </div>
//           </div>
//           <Link to='/about'><button className='aboutme'>More About Mohith</button></Link>
//         </div>
//         <div className="profile">
//           <img className='profileimg' src='/newremovedbgprofile.png' alt='profile' />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Intro;




import React from 'react';
import "./intro.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // The Animation Library
import { TypeAnimation } from 'react-type-animation'; // The Typing Effect

function Intro() {
  // Animation Variants (Settings for how things move)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 } // Delays each item by 0.3s
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id='intro'>
      <motion.div 
        className="introhead"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- LEFT SIDE: TEXT --- */}
        <div className="introcontent">
          <motion.span className="introtext" variants={itemVariants}>
            <span className="iam">Hello, I'm </span>
            <span className="introname">Mohith</span>
          </motion.span>
          
          {/* Dynamic Typing Effect */}
          <motion.div className='role' variants={itemVariants}>
            <TypeAnimation
              sequence={[
                'Website Developer', 1000,
                'DSA Lead', 1000,
                'AI Enthusiast', 1000,
                'Full Stack Engineer', 1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', color: '#e0e0e0' }}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div className='info' variants={itemVariants}>
            Skilled developer crafting <span style={{color: '#06ff06'}}>high-performance</span> web experiences. 
            I blend React architecture with Agentic AI to build the future of the web.
          </motion.div>

          <motion.div className="socialmedia" variants={itemVariants}>
            {/* Social Icons with Hover Pop Effect */}
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="sm">
              <a target='blank' href='http://www.linkedin.com/in/mohithmalla'>
                <img className='smimg' src='/linkedinicon-removebg-preview.png' alt='LinkedIn' />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -10 }} className="sm">
              <a href='https://github.com/MohithMalla' target='blank'>
                <img className='smimg' src='/githubicon-removebg-preview.png' alt='GitHub' />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="sm">
              <a target='blank' href='https://www.instagram.com/_malla_.mohith/'>
                <img className='smimg' src='/instaicon-removebg-preview.png' alt='Instagram' />
              </a>
            </motion.div>
          </motion.div>

          <Link to='/about'>
            <motion.button 
              className='aboutme'
              variants={itemVariants}
              whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#00b000", boxShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.9 }}
            >
              More About Mohith
            </motion.button>
          </Link>
        </div>

        {/* --- RIGHT SIDE: FLOATING IMAGE --- */}
        <motion.div 
          className="profile"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* The Background Glow Circle */}
          <div className="profile-glow"></div>
          
          {/* The Image that floats up and down */}
          <motion.img 
            className='profileimg' 
            src='/newremovedbgprofile.png' 
            alt='profile' 
            animate={{ 
              y: [0, -20, 0], // Moves up 20px then down
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Intro;
