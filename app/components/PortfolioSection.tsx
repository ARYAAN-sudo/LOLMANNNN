'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation } from './ScrollAnimation'
import { GlitchText } from './GlitchText'

const projects = [
  {
    id: 1,
    title: 'Interactive Experience',
    description: 'Immersive 3D interactive experience with particle systems',
    tag: 'WebGL',
  },
  {
    id: 2,
    title: 'Digital Art Installation',
    description: 'Morphing geometries and real-time animations',
    tag: 'Three.js',
  },
  {
    id: 3,
    title: 'Motion Graphics',
    description: 'Scroll-triggered 3D animations and effects',
    tag: 'React Three Fiber',
  },
  {
    id: 4,
    title: 'Holographic UI',
    description: 'Futuristic interface with neon aesthetics',
    tag: 'Design',
  },
]

export function PortfolioSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollAnimation className="mb-16">
          <div className="text-center">
            <GlitchText
              text="Featured Projects"
              className="text-4xl md:text-6xl font-bold mb-4"
            />
            <p className="text-xl text-muted-foreground">
              Showcasing cutting-edge 3D experiences and interactive art
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ScrollAnimation key={project.id} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                <div className="relative bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-colors duration-300">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="text-primary font-semibold flex items-center gap-2 group"
                  >
                    Explore
                    <motion.span
                      group-hover={{ x: 4 }}
                      transition={{ type: 'spring' }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
