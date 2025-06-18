// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <section className="about">
//       <div className="about-left">
//         <img src="/images/about1.jpg" alt="about" />
//       </div>
//       <div className="about-right">
//         <h2>We Are Always Thinking About Your Dream</h2>
//         <p>
//           We provide innovative solutions and strong construction with top-class technology and engineering experience.
//         </p>
//         <ul>
//           <li>Structural Engineering</li>
//           <li>Design & Build</li>
//           <li>Construction Planning</li>
//         </ul>
//         <button>Read More</button>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";
import React from "react";
import "./About.css";
import { FaCheckCircle } from "react-icons/fa"; // ✅ Correct import

const About = () => {
  return (
    <section className="about-section">
      <div className="about-images">
        <img src="/images/first.jpeg" alt="construction1" className="top-img" />
        <img src="/images/second.jpeg" alt="construction2" className="bottom-img" />
        {/* <div className="circle-badge">
          <strong>10k</strong>
          <span>Customers<br />Satisfied</span>
        </div> */}
      </div>

      <div className="about-content">
        <p className="section-tag">ABOUT US COMPANY</p>
        <h2>We Are Always Think On Your Dream</h2>
        <p className="about-description">
          Many modern construction companies focus on sustainable building practices, incorporating
          eco-friendly material energy-efficient systems and environmental conscious designs to reduce
          the environmental impact of their projects.
        </p>
        <div className="features">
          <p><FaCheckCircle /> We provide 24/7 service</p>
          <p><FaCheckCircle /> Greate Technology</p>
          <p><FaCheckCircle /> Qualified Agents</p>
          <p><FaCheckCircle /> 25 Years Experience</p>
        </div>
        {/* <button className="about-btn">MORE ABOUT US →</button> */}
      </div>
    </section>
  );
};

export default About;
