'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Canvas3D = dynamic(() => import('../Canvas3D').then(mod => ({ default: mod.Canvas3D })), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-background" />,
})

const ParticleSystem = dynamic(() => import('../ParticleSystem').then(mod => ({ default: mod.ParticleSystem })), {
  ssr: false,
})

const MorphingShape = dynamic(() => import('../MorphingShape').then(mod => ({ default: mod.MorphingShape })), {
  ssr: false,
})

const InteractiveObject = dynamic(() => import('../InteractiveObject').then(mod => ({ default: mod.InteractiveObject })), {
  ssr: false,
})

export function HeroScene() {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-16">
      <Canvas3D cameraPosition={[0, 0, 8]}>
        <ParticleSystem count={300} size={1.5} color={0x00ffff} speed={0.05} />
        <MorphingShape color={0x00ffff} scale={2} />
        <group position={[-4, 0, 0]}>
          <InteractiveObject color={0xff00ff} size={0.8} />
        </group>
        <group position={[4, 0, 0]}>
          <InteractiveObject color={0x00ff00} size={0.8} />
        </group>
      </Canvas3D>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold glow-text-lg mb-4 text-balance">
            Welcome to the Future
          </h1>
          <p className="text-xl glow-text mb-8 text-balance max-w-2xl">
            Experience cutting-edge 3D animations and immersive digital design
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pointer-events-auto"
          >
            <button className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
              Explore
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
