"use client"

import { Reveal } from "@/components/reveal"

const pains = [
  "התמהיל",
  "המיצוב",
  "חוויית הלקוח",
  "הסיפור של הפרויקט",
  "הבידול מול המתחרים",
]

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/60 to-background" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,oklch(0.69_0.076_78/0.08)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-[3.5rem]">
            רוב הפרויקטים מגיעים לשיווק מאוחר מדי
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-4 text-center text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            <p>היזם משקיע שנים בתכנון. בוחר אדריכלים. עובד מול יועצים. מנהל תקציבים. מקדם היתרים.</p>
            <p className="text-foreground/90 font-medium">אבל פעמים רבות החשיבה השיווקית נכנסת רק כשהפרויקט כבר מוכן לשיווק.</p>
            <p>בשלב הזה חלק מההחלטות המשמעותיות ביותר כבר התקבלו:</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {pains.map((item, i) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-gold/5 px-5 py-3.5 text-sm font-semibold text-gold shadow-lg shadow-gold/5 transition-all hover:scale-105 hover:border-gold/60 hover:shadow-gold/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-14 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-2xl bg-gold/5 blur-xl" />
            <p className="relative font-heading text-xl font-medium text-balance text-foreground sm:text-2xl md:text-[1.7rem] leading-relaxed">
              אנחנו מאמינים שהחשיבה על המכירה צריכה להתחיל
              <br className="hidden sm:block" />
              <span className="text-gold-gradient font-bold"> הרבה לפני המכירה הראשונה.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
