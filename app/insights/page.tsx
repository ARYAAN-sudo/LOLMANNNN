'use client'

import React from 'react'
import { Navigation } from '@/app/components/Navigation'
import { Footer } from '@/app/components/Footer'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'

const articles = [
  {
    title: 'The Future of Web 3D: React Three Fiber in 2024',
    excerpt:
      'Exploring the latest developments in web 3D technology and how React Three Fiber is revolutionizing interactive experiences.',
    date: 'Dec 20, 2024',
    author: 'Tech Team',
    readTime: '8 min read',
    category: 'Technology',
  },
  {
    title: 'Designing for Interactivity: Best Practices in 3D Web',
    excerpt:
      'Learn the principles of designing engaging 3D interfaces and how to keep users immersed without sacrificing performance.',
    date: 'Dec 15, 2024',
    author: 'Design Lead',
    readTime: '6 min read',
    category: 'Design',
  },
  {
    title: 'Performance Optimization in Three.js Applications',
    excerpt:
      'A comprehensive guide to optimizing your Three.js applications for smooth performance across all devices.',
    date: 'Dec 10, 2024',
    author: 'Engineering',
    readTime: '10 min read',
    category: 'Performance',
  },
  {
    title: 'Building Immersive Brand Experiences with 3D',
    excerpt:
      'How brands are using 3D web technologies to create memorable and engaging digital experiences.',
    date: 'Dec 5, 2024',
    author: 'Strategy',
    readTime: '7 min read',
    category: 'Strategy',
  },
  {
    title: 'Particle Systems and Generative Art in Web',
    excerpt:
      'Dive into the world of particle systems and how they can be used to create stunning generative visual effects.',
    date: 'Nov 30, 2024',
    author: 'Creative Director',
    readTime: '9 min read',
    category: 'Art',
  },
  {
    title: 'WebGL to Three.js: A Developer\'s Journey',
    excerpt:
      'An in-depth look at why Three.js has become the standard for 3D web development.',
    date: 'Nov 25, 2024',
    author: 'Dev Team',
    readTime: '5 min read',
    category: 'Tutorial',
  },
]

export default function Insights() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto flex items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold glow-text-lg mb-6">
              Insights & Stories
            </h1>
            <p className="text-xl glow-text">
              Thoughts on technology, design, and the future of web experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 rounded-lg tech-border-primary bg-gradient-to-r from-primary/10 to-secondary/5 hover:from-primary/20 hover:to-secondary/15 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    {/* Category Badge */}
                    <div className="inline-block mb-4">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-primary/20 text-primary rounded-full">
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold glow-text mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{article.author}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight size={24} className="text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-gradient-to-b from-background to-primary/10 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold glow-text-lg mb-4">
              Stay Updated
            </h2>
            <p className="text-lg glow-text mb-8">
              Get the latest insights delivered to your inbox
            </p>

            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-background/50 border border-primary/30 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
