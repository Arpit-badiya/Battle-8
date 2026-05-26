import { motion } from 'framer-motion'

interface SectionTitleProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
}

export default function SectionTitle({ badge, title, highlight, subtitle }: SectionTitleProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className="mb-12 max-w-2xl"
    >
      {badge && <span className="section-badge mb-4">{badge}</span>}
      <h2 className="text-3xl font-bold text-white sm:text-4xl font-[var(--font-heading)]">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-brand">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-(--color-text-secondary) sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.header>
  )
}
