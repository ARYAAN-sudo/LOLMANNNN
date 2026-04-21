'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/app/components/Navigation'
import { Footer } from '@/app/components/Footer'
import { motion } from 'framer-motion'
import { Zap, Target, Eye, Rocket } from 'lucide-react'

const Canvas3D = dynamic(() => import('@/app/3d/Canvas3D').then(mod => ({ default: mod.Canvas3D })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" />,
})

const Globe3D = dynamic(() => import('@/app/3d/Globe3D').then(mod => ({ default: mod.Globe3D })), {
  ssr: false,
})

const ParticleSystem = dynamic(() => import('@/app/3d/ParticleSystem').then(mod => ({ default: mod.ParticleSystem })), {
  ssr: false,
})

const values = [
  {
    icon: Eye,
    title: 'Vision',
    description: 'To revolutionize how brands connect with audiences through immersive 3D web experiences',
  },
  {
    icon: Target,
    title: 'Mission',
    description: 'Deliver cutting-edge digital solutions that are both beautiful and performant',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly exploring new technologies to push the boundaries of web experiences',
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'Committed to delivering exceptional quality in every project we undertake',
  },
]

const team = [
  { name: 'Alex Turner', role: 'Creative Director', specialty: '3D Design' },
  { name: 'Sarah Chen', role: 'Lead Developer', specialty: 'Three.js & WebGL' },
  { name: 'Marcus Johnson', role: 'Design Lead', specialty: 'UX/UI' },
  { name: 'Elena Rodriguez', role: 'Project Manager', specialty: 'Delivery' },
]

export default function About() {
  return (
    <main className="w-full bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0">
          <Canvas3D cameraPosition={[0, 0, 4]} className="w-full h-full">
            <Globe3D color={0x00ffff} scale={2.5} />
            <ParticleSystem count={250} size={1.5} color={0x00ffff} speed={0.008} />
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
              About Us
            </h1>
            <p className="text-xl glow-text mb-8">
              Pioneers in creating transformative 3D digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <h2 className="text-5xl font-bold glow-text-lg mb-8 text-center">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Founded in 2023, our studio emerged from a passion for blending cutting-edge technology with artistic vision. We recognized a gap in the market—brands needed more than static websites. They needed immersive experiences that captivate, engage, and inspire.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              What started as a small team of three visionaries has grown into a dynamic collective of designers, developers, and storytellers. Today, we collaborate with forward-thinking brands to create digital experiences that push the boundaries of what's possible on the web.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every project we undertake is a testament to our commitment to excellence, innovation, and user experience. We don't just build websites—we create digital art that performs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-gradient-to-b from-background via-primary/5 to-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold glow-text-lg mb-16 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-lg tech-border-primary bg-gradient-to-br from-background/80 to-background/60"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <IconComponent size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-background py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold glow-text-lg mb-16 text-center"
          >
            Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-background group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gradient-to-b from-background to-primary/10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Years of Experience', value: '1+' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-lg tech-border-primary bg-background/50"
              >
                <div className="text-4xl font-bold glow-text-lg mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
