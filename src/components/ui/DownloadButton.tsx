import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { APK_DOWNLOAD_URL } from '../../constants/download'

interface DownloadButtonProps {
  size?: 'sm' | 'md' | 'lg'
  showMeta?: boolean
  className?: string
  fullWidth?: boolean
  onClick?: () => void
}

const sizeClasses = {
  sm: '!py-2.5 !px-4 !text-sm',
  md: '',
  lg: '!py-4 !px-8 !text-base',
}

export default function DownloadButton({
  size = 'md',
  showMeta = false,
  className = '',
  fullWidth = false,
  onClick,
}: DownloadButtonProps) {
  const button = (
    <motion.a
      href={APK_DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`btn-download ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      aria-label="Download Battle-8 APK"
    >
      <Download size={size === 'sm' ? 16 : 18} strokeWidth={2.25} aria-hidden />
      Download APK
    </motion.a>
  )

  if (!showMeta) {
    return button
  }

  return (
    <div className={`flex flex-col items-center gap-2 ${fullWidth ? 'w-full' : 'items-center lg:items-start'}`}>
      {button}
      <p className="text-xs font-medium text-brand">Latest Version Available</p>
      <p className="text-xs text-(--color-text-muted)">Supports Android 8.0+</p>
    </div>
  )
}
