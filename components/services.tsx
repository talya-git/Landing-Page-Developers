import { Reveal } from "@/components/reveal"
import { Search, Palette, Image, Monitor, Rocket } from "lucide-react"

const stages = [
  {
    icon: Search,
    num: "01",
    title: "אסטרטגיה ומיצוב",
    items: ["מחקר שוק", "ניתוח מתחרים", "גיבוש תמהיל הדירות", "הגדרת קהלי יעד", "אסטרטגיית תמחור", "בניית סיפור הפרויקט"],
  },
  {
    icon: Palette,
    num: "02",
    title: "מיתוג וקריאייטיב",
    items: ["שם לפרויקט", "לוגו ושפה מותגית", "ספר מותג", "חומרי מכירה", "מצגות", "ברושורים"],
  },
  {
    icon: Image,
    num: "03",
    title: "תוכן והמחשה חזותית",
    items: ["הדמיות חוץ", "הדמיות פנים", "סרטי תדמית", "אנימציות", "סיורים וירטואליים", "צילום מקצועי"],
  },
  {
    icon: Monitor,
    num: "04",
    title: "דיגיטל",
    items: ["אתרי פרויקט", "דפי נחיתה", "ניהול קמפיינים", "ניהול לידים", "אוטומציות", "מערכות בקרה"],
  },
  {
    icon: Rocket,
    num: "05",
    title: "השקה ומכירות",
    items: ["השקות", "אירועי חשיפה", "ניהול משפך המכירות", "ליווי צוותי מכירה", "בקרת ביצועים", "אופטימיזציה"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card/60 via-background to-card/40" />
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-96 w-96 bg-[radial-gradient(circle,oklch(0.69_0.076_78/0.12)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-96 w-96 bg-[radial-gradient(circle,oklch(0.69_0.076_78/0.08)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
            מה אנחנו עושים
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold" />
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-[3.5rem]">
            מהרעיון הראשון ועד קביעת המזוזה
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            אנו מלווים את הפרויקט לאורך כל מחזור חייו ומעניקים ליזם מעטפת מקצועית מלאה — תחת קורת גג אחת.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm sm:text-base">
            {["קרקע", "תכנון", "היתר", "מיתוג", "שיווק", "מכירות", "אכלוס"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-6 py-3 font-semibold text-gold transition-all hover:bg-gold/20 hover:scale-105">{step}</span>
                {i < 6 && <span className="text-lg text-gold/40">←</span>}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stages.slice(0, 3).map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_8px_40px_-12px_rgba(212,175,55,0.2)] hover:-translate-y-1">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 bg-[radial-gradient(circle,oklch(0.69_0.076_78/0.15)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="flex items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold shadow-inner transition-transform duration-500 group-hover:scale-110">
                    <s.icon className="h-7 w-7" />
                  </div>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-foreground">{s.title}</h3>
                
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-border/40 pt-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group-hover:text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/60 group-hover:bg-gold transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-6">
          {stages.slice(3).map((s, i) => (
            <Reveal key={s.title} delay={(i + 3) * 100}>
              <div className="group relative flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-8 transition-all duration-500 hover:border-gold/50 hover:shadow-[0_8px_40px_-12px_rgba(212,175,55,0.2)] hover:-translate-y-1">
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 bg-[radial-gradient(circle,oklch(0.69_0.076_78/0.15)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="flex items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold shadow-inner transition-transform duration-500 group-hover:scale-110">
                    <s.icon className="h-7 w-7" />
                  </div>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-foreground">{s.title}</h3>
                
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-border/40 pt-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group-hover:text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/60 group-hover:bg-gold transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
