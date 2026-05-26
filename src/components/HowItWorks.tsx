import { motion } from 'framer-motion'
import { Download, Users, Trophy } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'

const steps = [
  {
    icon: Download,
    title: 'Install the APK',
    description: 'Download Battle-8 directly to your Android phone. Quick setup, no app store wait.',
    meta: 'Free · Android 8.0+',
  },
  {
    icon: Users,
    title: 'Draft your squad',
    description: 'Pick eight pros from India\'s competitive pool and enter contests that match your style.',
    meta: '200+ players',
  },
  {
    icon: Trophy,
    title: 'Compete & cash out',
    description: 'Follow live matches, climb the board, and collect rewards when you finish on top.',
    meta: 'Live payouts',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding border-t border-(--color-border)">
      <div className="container-main">
        <SectionTitle
          badge="Get started"
          title="Three steps to"
          highlight="your first win"
          subtitle="From install to first contest in minutes — designed for mobile-first players."
        />

        <ol className="relative grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div
            aria-hidden
            className="absolute top-12 right-[16%] left-[16%] hidden h-px bg-(--color-border) lg:block"
          />

          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative list-none"
            >
              <div className="surface-card flex h-full flex-col p-6 lg:p-8">
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--color-brand-dim) font-[var(--font-heading)] text-lg font-bold text-brand">
                    {i + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-(--color-border) bg-(--color-bg-surface)">
                    <step.icon size={22} className="text-(--color-text-secondary)" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white font-[var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-(--color-text-secondary)">
                  {step.description}
                </p>
                <span className="inline-flex w-fit rounded-full border border-(--color-border) bg-(--color-bg-surface) px-3 py-1 text-xs font-medium text-(--color-text-muted)">
                  {step.meta}
                </span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
