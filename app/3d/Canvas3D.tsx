'use client'

import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { ReactNode, Suspense } from 'react'

interface Canvas3DProps {
  children: ReactNode
  cameraPosition?: [number, number, number]
  enableControls?: boolean
  className?: string
}

export function Canvas3D({
  children,
  cameraPosition = [0, 0, 5],
  enableControls = false,
  className = 'w-full h-screen',
}: Canvas3DProps) {
  return (
    <Canvas
      className={className}
      gl={{
        antialias: true,
        alpha: true,
        stencil: false,
        depth: true,
      }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        {enableControls && <OrbitControls />}
        <ambientLight intensity={0.6} color={0x00ffff} />
        <pointLight position={[10, 10, 10]} intensity={1} color={0xffffff} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color={0xff00ff} />
        {children}
      </Suspense>
    </Canvas>
  )
}
