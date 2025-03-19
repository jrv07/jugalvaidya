// src/components/Blog.js
import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css'; // We’ll reuse and tweak this

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'AI use in Web Development',
      date: 'March 25, 2025',
      excerpt: 'Exploring how artificial intelligence is transforming web development, from automated code generation to personalized user experiences.',
    },
    {
      id: 2,
      title: 'Understanding AI Agents',
      date: 'March 27, 2025',
      excerpt: 'A deep dive into AI agents, their capabilities, and how they’re shaping the future of automation and decision-making.',
    },
  ];

  return (
    <section className="blog">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Blog
      </motion.h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="blog-post"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <h3>{post.title}</h3>
            <p className="date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href="#" className="read-more">
              Read More
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blog;