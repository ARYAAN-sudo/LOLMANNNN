'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface TorusKnotProps {
  color?: number
  scale?: number
  speed?: number
}

export function TorusKnot({
  color = 0xff00ff,
  scale = 1,
  speed = 0.01,
}: TorusKnotProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.5
      meshRef.current.rotation.y += speed
    }
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        shininess={100}
        wireframe={false}
      />
    </mesh>
  )
}
