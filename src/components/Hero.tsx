import { motion } from 'framer-motion'
import { Download, ArrowRight, Shield, Zap, Smartphone } from 'lucide-react'
import Logo from './ui/Logo'

const highlights = [
  { icon: Shield, text: 'Secure sign-in' },
  { icon: Zap, text: 'Live scoring' },
  { icon: Smartphone, text: 'Android ready' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-[4.25rem] hero-mesh">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade opacity-60" />

      <div className="container-main relative z-10 flex min-h-[calc(100vh-4.25rem)] flex-col items-center gap-12 py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-20">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-xl flex-1 flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="section-badge mb-6">India&apos;s esports fantasy platform</span>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] font-[var(--font-heading)]">
            Draft pros.
            <br />
            <span className="text-brand">Win for real.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-(--color-text-secondary) sm:text-lg">
            Build your squad from India&apos;s top esports talent, join live contests,
            and climb leaderboards — all from one polished Android app.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="/downloads/battle8-latest.apk"
              download="battle8-latest.apk"
              className="btn-primary w-full sm:w-auto"
            >
              <Download size={18} />
              Download free APK
            </a>
            <a href="#how-it-works" className="btn-ghost w-full sm:w-auto">
              See how it works
              <ArrowRight size={16} className="text-(--color-text-muted)" />
            </a>
          </div>

          <p className="mt-3 text-xs text-(--color-text-muted)">
            Android 8.0+ · Direct install · No Play Store required
          </p>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-(--color-text-secondary)">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--color-brand-dim)">
                  <Icon size={14} className="text-brand" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Logo showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full max-w-[340px] flex-1 items-center justify-center lg:max-w-[400px]"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-[2rem] bg-(--color-brand-dim) blur-3xl"
          />
          <div className="relative w-full rounded-[2rem] border border-(--color-border-strong) bg-(--color-bg-elevated)/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-10">
            <div className="flex flex-col items-center gap-6">
              <Logo size="hero" className="w-full justify-center" />
              <div className="w-full border-t border-(--color-border) pt-6 text-center">
                <p className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.2em] text-(--color-text-muted)">
                  Season live
                </p>
                <p className="mt-1 text-2xl font-bold text-white font-[var(--font-heading)]">
                  500K+ <span className="text-base font-medium text-(--color-text-secondary)">players</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
