// // import React from 'react';
// // import './Hero.css';

// // const Hero = () => {
// //   return (
// //     <section className="hero">
// //       <div className="hero-text">
// //         <h1>Kotar Is Strong Foundation</h1>
// //         <p>Your reliable construction partner</p>
// //         <button>Contact Us</button>
// //       </div>
// //       <div className="hero-image">
// //         <img src="/images/hero.jpg" alt="construction" />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React from "react";
// import "./Hero.css";

// function Hero() {
//   return (
//     <section className="hero">
//       <h1>This is Hero Section</h1>
//     </section>
//   );
// }

// export default Hero;
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Mauli Construction And Fabrication</h1>
          <p>Build trust with clients using strong architecture and management.</p>
          {/* <button className="btn">Discover More</button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
