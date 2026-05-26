import { Download } from 'lucide-react'
import Logo from './ui/Logo'

const footerLinks = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-bg-primary)">
      <div className="container-main py-16 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo size="lg" showWordmark />
            <p className="mt-4 text-sm leading-relaxed text-(--color-text-secondary)">
              India&apos;s esports fantasy arena — draft squads, play live contests,
              and earn real rewards on Android.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-(--color-text-muted)">
                Product
              </p>
              <nav className="flex flex-col gap-2" aria-label="Footer">
                <a href="#features" className="text-sm text-(--color-text-secondary) hover:text-white">
                  Features
                </a>
                <a href="#how-it-works" className="text-sm text-(--color-text-secondary) hover:text-white">
                  How it works
                </a>
                <a href="#trust" className="text-sm text-(--color-text-secondary) hover:text-white">
                  Trust
                </a>
              </nav>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-(--color-text-muted)">
                Legal
              </p>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-(--color-text-secondary) hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:text-right">
            <p className="mb-4 text-sm text-(--color-text-secondary)">Ready to play?</p>
            <a
              href="/downloads/battle8-latest.apk"
              download="battle8-latest.apk"
              className="btn-primary inline-flex"
            >
              <Download size={18} />
              Download APK
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-(--color-border) py-6">
        <div className="container-main flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-(--color-text-muted)">
            © {new Date().getFullYear()} Battle-8. All rights reserved.
          </p>
          <p className="text-xs text-(--color-text-muted)">
            Play responsibly · 18+ where applicable
          </p>
        </div>
      </div>
    </footer>
  )
}
