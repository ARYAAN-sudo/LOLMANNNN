'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface MorphingShapeProps {
  color?: string | number
  scale?: number
}

export function MorphingShape({
  color = 0x00ffff,
  scale = 2,
}: MorphingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const timeRef = useRef(0)

  useFrame(() => {
    if (!meshRef.current) return

    timeRef.current += 0.01
    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.y += 0.008
    meshRef.current.rotation.z += 0.003

    // Morph effect
    const geometry = meshRef.current.geometry
    const positions = geometry.attributes.position
    const positionArray = positions.array as Float32Array

    for (let i = 0; i < positionArray.length; i += 3) {
      const x = positionArray[i]
      const y = positionArray[i + 1]
      const z = positionArray[i + 2]

      const distance = Math.sqrt(x * x + y * y + z * z)
      const morphed = 1 + 0.3 * Math.sin(timeRef.current + distance)

      positionArray[i] = (x / distance) * morphed
      positionArray[i + 1] = (y / distance) * morphed
      positionArray[i + 2] = (z / distance) * morphed
    }

    positions.needsUpdate = true
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        wireframe={false}
      />
    </mesh>
  )
}
