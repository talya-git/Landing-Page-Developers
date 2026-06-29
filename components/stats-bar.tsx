"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 31, suffix: "", label: "שנות מצוינות בענף הנדל\״ן" },
  { value: 2500, suffix: "+", label: "רוכשים מרוצים בישראל ובעולם" },
  { value: 70, suffix: "+", label: "פרויקטים שליווינו, מיתגנו ושיווקנו" },
]

function useCountUp(target: number, run: boolean, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])
  return value
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const count = useCountUp(value, run)
  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-heading text-5xl font-bold tracking-tight tabular-nums text-gold-shimmer sm:text-6xl md:text-7xl">
        {count}{suffix}
      </p>
      <p className="mt-3 max-w-[14rem] text-sm leading-snug text-foreground/70">{label}</p>
    </div>
  )
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setRun(true); observer.disconnect() } }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.69_0.076_78/0.05)_0%,transparent_60%)]" />

      <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-5 sm:grid-cols-3 sm:gap-6 md:px-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="relative flex justify-center sm:[&:not(:last-child)]:after:absolute sm:[&:not(:last-child)]:after:-left-3 sm:[&:not(:last-child)]:after:top-1/2 sm:[&:not(:last-child)]:after:h-16 sm:[&:not(:last-child)]:after:w-px sm:[&:not(:last-child)]:after:-translate-y-1/2 sm:[&:not(:last-child)]:after:bg-gradient-to-b sm:[&:not(:last-child)]:after:from-transparent sm:[&:not(:last-child)]:after:via-gold/40 sm:[&:not(:last-child)]:after:to-transparent"
            style={run ? { animation: `count-in 0.7s ease ${i * 150}ms both` } : { opacity: 0 }}
          >
            <Stat value={s.value} suffix={s.suffix} label={s.label} run={run} />
          </div>
        ))}
      </div>
    </section>
  )
}
