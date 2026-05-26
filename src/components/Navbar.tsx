import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './ui/Logo'
import DownloadButton from './ui/DownloadButton'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Trust', href: '#trust' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-(--color-border) bg-(--color-bg-primary)/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-main flex h-[4.25rem] items-center justify-between">
        <a href="#" className="rounded-lg outline-offset-4 focus-visible:outline-2 focus-visible:outline-(--color-brand)">
          <Logo size="md" />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-(--color-text-secondary) transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <DownloadButton size="sm" className="hidden md:inline-flex" />

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[4.25rem] z-40 bg-(--color-bg-primary)/98 backdrop-blur-xl md:hidden"
          >
            <div className="container-main flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-lg font-medium text-(--color-text-secondary) hover:bg-(--color-bg-surface) hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <DownloadButton
                fullWidth
                className="mt-4"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
