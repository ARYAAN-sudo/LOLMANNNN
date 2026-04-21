'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CodeShowcaseProps {
  title?: string
  code: string
  language?: string
}

export function CodeShowcase({
  title = 'Code Example',
  code,
  language = 'typescript',
}: CodeShowcaseProps) {
  const lines = code.split('\n')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-gradient-to-b from-background/80 to-background/60 border border-primary/30 rounded-lg overflow-hidden tech-border-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-primary/20 bg-primary/10">
        <span className="text-sm font-semibold text-secondary">{title}</span>
        <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="px-6 py-4 text-sm font-mono text-gray-300">
          {lines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.02 }}
              viewport={{ once: true }}
              className="flex"
            >
              <span className="text-gray-600 mr-4 select-none min-w-fit">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">{line || ' '}</span>
            </motion.div>
          ))}
        </pre>
      </div>

      {/* Footer Glow */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary/0" />
    </motion.div>
  )
}
