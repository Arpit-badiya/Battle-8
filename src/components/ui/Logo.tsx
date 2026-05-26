type LogoSize = 'sm' | 'md' | 'lg' | 'hero'

interface LogoProps {
  size?: LogoSize
  className?: string
  showWordmark?: boolean
}

export default function Logo({ size = 'md', className = '', showWordmark }: LogoProps) {
  const withWordmark = showWordmark ?? (size === 'md' || size === 'lg')

  const imgClass =
    size === 'sm'
      ? 'h-9 w-9'
      : size === 'lg'
        ? 'h-12 w-12'
        : size === 'hero'
          ? 'h-auto w-full max-h-[220px] max-w-[220px] object-contain'
          : 'h-10 w-10'

  const img = (
    <img
      src="/battle8-logo.png"
      alt="Battle-8"
      className={imgClass}
    />
  )

  if (size === 'hero') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {img}
      </div>
    )
  }

  return (
    <div className={`logo-lockup flex items-center gap-2.5 ${className}`}>
      <div className="flex shrink-0 items-center justify-center rounded-lg border border-(--color-border) bg-(--color-bg-surface) p-1">
        {img}
      </div>
      {withWordmark && (
        <div className="hidden flex-col leading-none sm:flex">
          <span className="font-[var(--font-heading)] text-base font-bold tracking-tight text-white">
            Battle-8
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-(--color-text-muted)">
            Esports Fantasy
          </span>
        </div>
      )}
    </div>
  )
}
