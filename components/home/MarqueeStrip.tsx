const text =
  '✦ LUXURY RESIDENCES · VADODARA ✦ 3 BHK & 4 BHK · ALKAPURI ✦ RERA REGISTERED ✦ READY TO MOVE IN 2026 ✦ '

export default function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-gold py-3">
      <div className="marquee-track flex whitespace-nowrap">
        <span className="inline-block px-4 font-body text-xs font-medium uppercase tracking-[0.25em] text-bg">
          {text}
          {text}
        </span>
        <span className="inline-block px-4 font-body text-xs font-medium uppercase tracking-[0.25em] text-bg" aria-hidden>
          {text}
          {text}
        </span>
      </div>
    </div>
  )
}
