'use client'

import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3 }}
        className="absolute inset-0 text-primary blur-[0.5px]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 58%)',
        }}
      >
        {text}
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3, delay: 0.1 }}
        className="absolute inset-0 text-accent blur-[0.5px] translate-x-1"
        style={{
          clipPath: 'polygon(0 60%, 100% 50%, 100% 100%, 0 100%)',
        }}
      >
        {text}
      </motion.div>
      <span>{text}</span>
    </div>
  )
}
