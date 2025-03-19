// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'web3 oss', desc: 'Documentation Website', tech: 'HTML, CSS, JavaScript', link: 'https://github.com/web3-oss/web3-oss.github.io' },
    { title: 'comparx', desc: 'Marketing Website', tech: 'HTML, CSS, JavaScript, Ruby', link: 'https://github.com/web3-oss/comparx.github.io' },
    { title: 'Benzin', desc: 'Android Mobile App', tech: 'HTML, CSS, JavaScript', link: 'https://github.com/web3-oss/comparx.github.io' },
    { title: 'Rakiyoga', desc: 'Yoga Website', tech: 'HTML, CSS, JavaScript, Ruby', link: 'https://github.com/rakiyoga/rakiyoga.github.io' },
    { title: 'SpaceConsole', desc: 'Data analysis Dashboard', tech: 'React, Node.js', link: 'https://github.com/web3-oss/space-console' },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <p><strong>Tech:</strong> {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;