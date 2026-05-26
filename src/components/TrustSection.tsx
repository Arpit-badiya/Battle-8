import { motion } from 'framer-motion'
import { Lock, Zap, Sparkles } from 'lucide-react'
import AnimatedCounter from './ui/AnimatedCounter'
import SectionTitle from './ui/SectionTitle'

const stats = [
  { label: 'Active players', value: 5000, suffix: '+', prefix: '' },
  { label: 'Matches played', value: 200, suffix: '+', prefix: '' },
  // { label: 'Rewards paid', value: 100000000, suffix: '+', prefix: '₹' },
]

const trustItems = [
  {
    icon: Lock,
    title: 'Secure authentication',
    description: 'Google OAuth with encrypted sessions and protected account data.',
  },
  {
    icon: Zap,
    title: 'Low-latency servers',
    description: 'Infrastructure tuned for fast score updates during peak match hours.',
  },
  // {
  //   icon: Activity,
  //   title: 'Official live data',
  //   description: 'Fantasy points tied to verified match feeds as plays happen.',
  // },
  {
    icon: Sparkles,
    title: 'Smooth on any phone',
    description: 'Interface optimised for mid-range Android — responsive and lightweight.',
  },
]

export default function TrustSection() {
  return (
    <section id="trust" className="section-padding border-t border-(--color-border) bg-(--color-bg-elevated)">
      <div className="container-main">
        <SectionTitle
          badge="Trust"
          title="Built for players who"
          highlight="take it seriously"
          subtitle="Transparent stats, reliable uptime, and a product team focused on fair play."
        />

        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="surface-card px-6 py-8 text-center"
            >
              <p className="text-3xl font-bold text-brand sm:text-4xl font-[var(--font-heading)]">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={2000}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-(--color-text-secondary)">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-(--color-border) bg-(--color-bg-card) p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-(--color-brand-dim)">
                <item.icon size={18} className="text-brand" />
              </div>
              <h3 className="mb-1.5 text-sm font-bold text-white font-[var(--font-heading)]">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-(--color-text-secondary)">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
