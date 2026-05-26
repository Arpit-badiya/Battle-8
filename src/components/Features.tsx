import GlassCard from './ui/GlassCard'
import SectionTitle from './ui/SectionTitle'
import { Swords, Users, Timer, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Swords,
    title: 'Fantasy battles',
    description: 'Enter live tournaments with squads built from real pro players and match-day strategy.',
  },
  // {
  //   icon: Trophy,
  //   title: 'Live leaderboards',
  //   description: 'Track rank, points, and payouts as matches unfold — no refresh spam required.',
  // },
  // {
  //   icon: Gift,
  //   title: 'Real rewards',
  //   description: 'Cash prizes and exclusive perks for top performers across weekly contests.',
  // },
  {
    icon: Users,
    title: 'Squad drafting',
    description: 'Curate an 8-player roster from India\'s competitive scene with salary-cap depth.',
  },
  {
    icon: Timer,
    title: 'Instant results',
    description: 'Scores sync the moment official stats land. Know where you stand immediately.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure login',
    description: 'Google sign-in with encrypted sessions so your account and winnings stay protected.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding border-t border-(--color-border) bg-(--color-bg-elevated)">
      <div className="container-main">
        <SectionTitle
          badge="Platform"
          title="Everything built for"
          highlight="competitive play"
          subtitle="A focused toolkit for esports fans who want clarity, speed, and fair contests — not clutter."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feat, i) => (
            <GlassCard key={feat.title} delay={i * 0.06} className="p-6 lg:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-(--color-brand-dim)">
                <feat.icon size={20} className="text-brand" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white font-[var(--font-heading)]">
                {feat.title}
              </h3>
              <p className="text-sm leading-relaxed text-(--color-text-secondary)">
                {feat.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
