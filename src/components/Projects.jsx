import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectImages = [
    './images/project1.jpeg',
    '/images/project2.jpeg',
    '/images/project3.jpeg',
    '/images/project4.jpeg',
    '/images/project5.jpg',
    '/images/project6.jpeg',
    '/images/project7.avif',
    '/images/project8.jpeg'
  ];

  return (
    <section className="projects">
      <h2>Our Recent Projects</h2>
      <div className="project-grid">
        {projectImages.map((src, index) => (
          <div key={index} className="project-card">
            <img src={src} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
