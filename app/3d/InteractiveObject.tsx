'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'

interface InteractiveObjectProps {
  color?: string | number
  size?: number
  onClick?: () => void
}

export function InteractiveObject({
  color = 0xff00ff,
  size = 1,
  onClick,
}: InteractiveObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const { scale } = useSpring({
    scale: isHovered ? 1.3 : isClicked ? 1.5 : 1,
  })

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.02
  })

  const handlePointerEnter = () => {
    setIsHovered(true)
  }

  const handlePointerLeave = () => {
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsClicked(!isClicked)
    onClick?.()
  }

  return (
    <mesh
      ref={meshRef}
      scale={scale}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >
      <octahedronGeometry args={[size, 2]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isHovered ? 0.8 : 0.4}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}
