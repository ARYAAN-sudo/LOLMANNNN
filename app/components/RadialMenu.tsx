'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings, BarChart3, FileText, MessageSquare, LogOut } from 'lucide-react'

interface MenuItem {
  label: string
  icon: React.ReactNode
  onClick: () => void
  color: string
}

interface RadialMenuProps {
  isOpen: boolean
  onToggle: () => void
  menuItems: MenuItem[]
}

export function RadialMenu({ isOpen, onToggle, menuItems }: RadialMenuProps) {
  const radius = 120
  const angleSlice = (Math.PI * 2) / menuItems.length

  return (
    <div className="relative w-32 h-32">
      {/* Center Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary border-2 border-secondary flex items-center justify-center z-20 hover:shadow-lg hover:shadow-primary/50 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Settings size={24} className="text-background" />
      </motion.button>

      {/* Radial Menu Items */}
      {isOpen &&
        menuItems.map((item, index) => {
          const angle = angleSlice * index - Math.PI / 2
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={item.onClick}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${item.color} flex items-center justify-center hover:shadow-lg transition-all`}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.button>
          )
        })}
    </div>
  )
}
