// import React from 'react';
// import './Services.css';

// const Services = () => {
//   const services = [
//     { title: 'Interior Designing', icon: '🏠' },
//     { title: 'General Contracting', icon: '🛠️' },
//     { title: 'Architecture Design', icon: '🏗️' }
//   ];

//   return (
//     <section className="services">
//       <h2>The Best Service For You</h2>
//       <div className="service-cards">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <div className="icon">{service.icon}</div>
//             <h3>{service.title}</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2>The Best Service For You</h2>
      <div className="cards">
        <div className="card">Research & Analysis</div>
        <div className="card">Colomn Footing</div>
        <div className="card">Laintain Rebbaring</div>
        <div className="card">wall Designing</div>
        <div className="card">Welding</div>
        <div className="card">Metal Fab</div>
      </div>
    </section>
  );
};

export default Services;
