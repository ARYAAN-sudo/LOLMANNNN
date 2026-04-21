'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import * as THREE from 'three'

interface Globe3DProps {
  color?: number
  rotationSpeed?: number
  scale?: number
}

export function Globe3D({
  color = 0x0099ff,
  rotationSpeed = 0.001,
  scale = 2,
}: Globe3DProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Main globe */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        shininess={100}
        wireframe={true}
        wireframeLinewidth={1}
      />

      {/* Grid overlay */}
      <mesh>
        <sphereGeometry args={[1.01, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          wireframe={true}
        />
      </mesh>
    </mesh>
  )
}
