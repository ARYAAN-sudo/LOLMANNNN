'use client'

import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function BackgroundScene() {
  const sceneRef = useRef<THREE.Scene>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useEffect(() => {
    if (!particlesRef.current) return

    const particleCount = 500
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10
    }

    particlesRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
  }, [])

  useFrame(() => {
    if (particlesRef.current?.geometry) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.002
        if (positions[i] < -5) {
          positions[i] = 5
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <points ref={particlesRef}>
        <bufferGeometry />
        <pointsMaterial
          size={0.1}
          color={0x00ffff}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
    </>
  )
}

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <BackgroundScene />
      </Canvas>
    </div>
  )
}
