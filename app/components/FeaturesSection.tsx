'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation } from './ScrollAnimation'

const features = [
  {
    icon: '🎨',
    title: 'Visual Excellence',
    description: 'Stunning 3D graphics and smooth animations that captivate',
  },
  {
    icon: '⚡',
    title: 'High Performance',
    description: 'Optimized rendering with minimal latency and maximum fps',
  },
  {
    icon: '🎯',
    title: 'Interactive Design',
    description: 'Responsive interactions that feel natural and intuitive',
  },
  {
    icon: '🔮',
    title: 'Futuristic Aesthetics',
    description: 'Cutting-edge design with neon glows and holographic effects',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Beautiful on desktop, tablet, and mobile devices',
  },
  {
    icon: '✨',
    title: 'Smooth Animations',
    description: 'Fluid motion that brings your experience to life',
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 bg-card/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.03] opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollAnimation className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the next generation of interactive web design
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollAnimation key={idx} delay={idx * 0.08}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="relative bg-background rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>

                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary to-accent transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
