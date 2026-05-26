import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlowButtonProps {
  children: ReactNode
  variant?: 'cyan' | 'purple' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  download?: boolean | string
  icon?: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

export default function GlowButton({
  children,
  variant = 'cyan',
  size = 'md',
  href,
  download,
  icon,
  className = '',
  onClick,
  type = 'button',
  disabled,
  'aria-label': ariaLabel,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-10 py-5 text-lg',
  }

  const variantClasses = {
    cyan: 'bg-gradient-to-r from-[#00e5ff] to-[#0099cc] text-(--color-bg-primary) font-bold border border-[#00e5ff]/60',
    purple: 'bg-gradient-to-r from-[#9400d3] to-[#6600aa] text-white font-bold border border-[#9400d3]/60',
    outline: 'bg-transparent text-(--color-cyan) font-semibold border border-(--color-cyan)',
  }

  const glowClasses = {
    cyan: 'shadow-[0_0_24px_rgba(0,229,255,0.5),0_0_48px_rgba(0,229,255,0.2)]',
    purple: 'shadow-[0_0_24px_rgba(148,0,211,0.5),0_0_48px_rgba(148,0,211,0.2)]',
    outline: 'shadow-[0_0_20px_rgba(0,229,255,0.2)]',
  }

  const base = `inline-flex items-center gap-2.5 rounded-[var(--radius-btn)] font-[var(--font-heading)] transition-all duration-200 cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        whileHover={{ scale: 1.04, boxShadow: glowClasses[variant] }}
        whileTap={{ scale: 0.97 }}
        className={base}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={base}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  )
}
