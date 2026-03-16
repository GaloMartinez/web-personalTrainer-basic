interface StarRatingProps {
  className?: string
  starClassName?: string
}

export function StarRating({ className = 'flex items-center gap-1', starClassName = 'text-brand-400 text-xs' }: StarRatingProps) {
  return (
    <div className={className}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={starClassName}>★</span>
      ))}
    </div>
  )
}
