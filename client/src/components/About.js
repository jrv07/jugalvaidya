// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // We’ll create this next

const About = () => {
  const workExperiences = [
    { role: 'Product Owner', company: 'Arrk Engineering', period: '2019 - Present', description: 'Led development of Data analytics applications using Angular and Python.]' },
    { role: 'Software Developer', company: 'B & IT Solution', period: '2018 - 2019', description: 'Designed scalable backend systems.' },
    { role: 'Software Developer', company: 'Arrk Engineering', period: '2013 - 2015', description: 'Assisted in Design of a scalable Frontend with React and Node.js.' },
    // Add more as needed
  ];

  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Version control'];
  const hobbies = ['Reading financial Books', 'Tennis', 'Road bicycling', 'Building open source Softwares'];

  return (
    <section className="about">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <div className="about-container">
        {/* Work Experience */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3>Work Experience</h3>
          {workExperiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4>{exp.role} - {exp.company}</h4>
              <p className="period">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Programming Skills */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3>Programming Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </motion.div>

        {/* Hobbies and Interests */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3>Hobbies & Interests</h3>
          <ul className="hobbies-list">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </motion.div>

        {/* CV Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="/cv.pdf" download className="download-cv">
            Download My CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;