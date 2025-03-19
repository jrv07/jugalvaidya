// src/components/Achievements.js
import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css'; // We’ll create this next

const Achievements = () => {
  const achievements = [
    {
      category: 'Patents',
      items: [
        { title: 'Awarded Patent', description: 'Received a patent P825526/DE/1, A Method for an automated process of draping and cutting of a Carbon Fibre Reinforced Preform.', year: 'Year Awarded' },
      ],
    },
    {
      category: 'Education',
      items: [
        { title: 'MBA', description: 'Master of Business Psychology from [FU Berlin].', year: '2017' },
        { title: 'M.Sc. Scientific Instrumentation', description: 'Master of Science in Instrumentation from [EAH Jena].', year: '2012' },
        { title: 'B.Sc. Mechanical Engineering', description: 'Bachelor degree in Mechanical Engineering from [MSU Baroda].', year: '2009' },
      ],
    },
  ];

  return (
    <section className="achievements">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Achievements
      </motion.h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-category"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <h3>{achievement.category}</h3>
            {achievement.items.map((item, itemIndex) => (
              <div key={itemIndex} className="achievement-item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="year">{item.year}</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;