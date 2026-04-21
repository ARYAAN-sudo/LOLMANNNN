'use client'

import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import * as THREE from 'three'

interface FloatingMeshProps {
  color?: number
  scale?: number
  speed?: number
  rotationSpeed?: number
}

export function FloatingMesh({
  color = 0x00ffff,
  scale = 1.5,
  speed = 0.003,
  rotationSpeed = 0.005,
}: FloatingMeshProps) {
  const meshRef = useRef<Mesh>(null)
  const floatOffset = useRef(0)

  useEffect(() => {
    if (meshRef.current) {
      const geometry = new THREE.IcosahedronGeometry(1, 4)
      const material = new THREE.MeshPhongMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.5,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      })
      meshRef.current.material = material
      meshRef.current.geometry = geometry
    }
  }, [color])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed
      meshRef.current.rotation.y += rotationSpeed * 0.7
      meshRef.current.rotation.z += rotationSpeed * 0.5

      floatOffset.current += speed
      meshRef.current.position.y = Math.sin(floatOffset.current) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhongMaterial color={color} wireframe />
    </mesh>
  )
}
