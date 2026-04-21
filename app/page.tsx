'use client'

import { HeroScene } from './3d/scenes/HeroScene'
import { Navigation } from './components/Navigation'
import { motion } from 'framer-motion'
import { Canvas3D } from './3d/Canvas3D'
import { ParticleSystem } from './3d/ParticleSystem'
import { MorphingShape } from './3d/MorphingShape'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      {/* Hero Section */}
      <HeroScene />

      {/* Portfolio Section */}
      <section className="min-h-screen w-full bg-gradient-to-b from-background via-background to-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold glow-text-lg mb-4">Portfolio</h2>
            <p className="text-lg glow-text max-w-2xl mx-auto">
              Interactive 3D experiences crafted with precision and imagination
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="h-64 rounded-lg overflow-hidden tech-border-primary cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                  <Canvas3D cameraPosition={[0, 0, 4]} className="w-full h-full">
                    <ParticleSystem count={100} size={1} color={0x00ffff} speed={0.02} />
                    <MorphingShape color={0x00ff00} scale={1} />
                  </Canvas3D>
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <p className="text-xl font-semibold glow-text">Project {item}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen w-full bg-background py-20 px-4 relative">
        <div className="grid-background absolute inset-0" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold glow-text-lg mb-4">Features</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '3D Animations', desc: 'Stunning particle systems and morphing geometries' },
              { title: 'Interactive', desc: 'Responsive objects that react to your movement' },
              { title: 'Futuristic Design', desc: 'Neon glows and holographic materials' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg tech-border-primary text-center"
              >
                <h3 className="text-2xl font-bold glow-text mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen w-full bg-gradient-to-b from-background to-primary/20 py-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-5xl font-bold glow-text-lg mb-6">Ready to Create?</h2>
          <p className="text-lg glow-text mb-8">
            Let's build something extraordinary together
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-accent text-background rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-primary/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Futuristic 3D Experience. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
