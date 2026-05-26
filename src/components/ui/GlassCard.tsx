import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -3 }}
      className={`surface-card transition-shadow duration-300 hover:border-(--color-border-strong) hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </motion.div>
  )
}
