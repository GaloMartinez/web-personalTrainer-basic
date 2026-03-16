import React from 'react'
import { AnimateIn } from './AnimateIn'

interface SectionHeaderProps {
  tag: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ tag, title, description, align = 'center', className }: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div className={`${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className ?? ''}`}>
      <AnimateIn>
        <span className={`section-tag ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-4 h-px" style={{ backgroundColor: 'var(--color-brand-500)' }} />
          {tag}
          {isCenter && <span className="w-4 h-px" style={{ backgroundColor: 'var(--color-brand-500)' }} />}
        </span>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="section-title text-white mb-4">{title}</h2>
      </AnimateIn>

      {description && (
        <AnimateIn delay={0.2}>
          <p className="text-white/50 text-lg leading-relaxed">{description}</p>
        </AnimateIn>
      )}
    </div>
  )
}
