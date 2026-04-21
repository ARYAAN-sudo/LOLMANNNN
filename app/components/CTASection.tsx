'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ScrollAnimation } from './ScrollAnimation'

export function CTASection() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-background to-primary/20 py-20 px-4 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
        ></motion.div>
      </div>

      <ScrollAnimation className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Ready to Create?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Let&apos;s build something extraordinary together. Transform your vision into an immersive 3D experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 255, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-primary text-background rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgb(0, 255, 255)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/4 left-10 text-4xl opacity-20"
          >
            ✦
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-1/4 right-10 text-4xl opacity-20"
          >
            ◆
          </motion.div>
        </div>
      </ScrollAnimation>
    </section>
  )
}
