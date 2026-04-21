'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleSystemProps {
  count?: number
  size?: number
  color?: string | number
  speed?: number
}

export function ParticleSystem({
  count = 500,
  size = 2,
  color = 0x00ffff,
  speed = 0.1,
}: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const particlesRef = useRef<Float32Array | null>(null)

  useEffect(() => {
    if (!pointsRef.current) return

    // Create particle positions
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 20
    }

    particlesRef.current = positions
    pointsRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )
  }, [count])

  useFrame(() => {
    if (!pointsRef.current || !particlesRef.current) return

    const positions = particlesRef.current
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += (Math.random() - 0.5) * speed
      positions[i + 1] += (Math.random() - 0.5) * speed
      positions[i + 2] += (Math.random() - 0.5) * speed

      // Wrap around boundaries
      if (positions[i] > 10) positions[i] = -10
      if (positions[i] < -10) positions[i] = 10
      if (positions[i + 1] > 10) positions[i + 1] = -10
      if (positions[i + 1] < -10) positions[i + 1] = 10
      if (positions[i + 2] > 10) positions[i + 2] = -10
      if (positions[i + 2] < -10) positions[i + 2] = 10
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={pointsRef}>
      <PointMaterial
        size={size}
        color={color}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </Points>
  )
}
