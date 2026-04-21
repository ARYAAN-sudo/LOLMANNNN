'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/app/components/Navigation'
import { Footer } from '@/app/components/Footer'
import { motion } from 'framer-motion'
import { CodeShowcase } from '@/app/components/CodeShowcase'
import { Sparkles, Zap, Globe, Palette } from 'lucide-react'

const Canvas3D = dynamic(() => import('@/app/3d/Canvas3D').then(mod => ({ default: mod.Canvas3D })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" />,
})

const FloatingMesh = dynamic(() => import('@/app/3d/FloatingMesh').then(mod => ({ default: mod.FloatingMesh })), {
  ssr: false,
})

const TorusKnot = dynamic(() => import('@/app/3d/TorusKnot').then(mod => ({ default: mod.TorusKnot })), {
  ssr: false,
})

const ParticleSystem = dynamic(() => import('@/app/3d/ParticleSystem').then(mod => ({ default: mod.ParticleSystem })), {
  ssr: false,
})

const services = [
  {
    title: '3D Web Experiences',
    description: 'Immersive interactive 3D environments using cutting-edge web technologies',
    icon: Sparkles,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Real-time Animations',
    description: 'Smooth, performant animations that respond to user interaction',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Global Deployment',
    description: 'Optimized for worldwide audiences with fast load times',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Custom Design',
    description: 'Tailored visual design that matches your brand and vision',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
  },
]

export default function Services() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Canvas3D cameraPosition={[0, 0, 4]} className="w-full h-full">
            <FloatingMesh color={0x00ffff} scale={1.5} />
            <ParticleSystem count={200} size={1.5} color={0x00ffff} speed={0.01} />
          </Canvas3D>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold glow-text-lg mb-6">
              Our Services
            </h1>
            <p className="text-xl glow-text mb-8">
              We transform ideas into stunning digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="min-h-screen w-full bg-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-8 rounded-lg tech-border-primary bg-gradient-to-br from-primary/10 to-secondary/5 hover:from-primary/20 hover:to-secondary/10 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`p-4 rounded-lg bg-gradient-to-br ${service.color} text-white group-hover:shadow-lg group-hover:shadow-primary/50 transition-all`}
                    >
                      <IconComponent size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold glow-text mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3D Showcase Section */}
      <section className="relative w-full min-h-screen overflow-hidden py-20 px-4">
        <div className="absolute inset-0 z-0">
          <Canvas3D cameraPosition={[0, 0, 4]} className="w-full h-full">
            <TorusKnot color={0xff00ff} scale={2} />
            <ParticleSystem count={300} size={2} color={0xff00ff} speed={0.008} />
          </Canvas3D>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold glow-text-lg mb-4">
              Technology Stack
            </h2>
            <p className="text-lg glow-text">
              Built with modern, performant technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="w-full bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold glow-text-lg mb-16 text-center"
          >
            See It In Action
          </motion.h2>

          <CodeShowcase
            title="3D Component Example"
            language="typescript"
            code={`// Create a floating 3D mesh with animations
import { FloatingMesh } from '@/app/3d/FloatingMesh'

export function Scene() {
  return (
    <Canvas>
      <FloatingMesh 
        color={0x00ffff} 
        scale={1.5}
        rotationSpeed={0.005}
      />
      <OrbitControls />
    </Canvas>
  )
}`}
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
