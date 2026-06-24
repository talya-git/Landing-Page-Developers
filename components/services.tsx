import { Reveal } from "@/components/reveal"
import { Search, Palette, Image, Monitor, Rocket } from "lucide-react"

const stages = [
  {
    icon: Search,
    title: "אסטרטגיה ומיצוב",
    items: ["מחקר שוק", "ניתוח מתחרים", "תמהיל דירות", "קהל יעד", "אסטרטגיית מחירים", "בניית סיפור הפרויקט"],
  },
  {
    icon: Palette,
    title: "מיתוג וקריאייטיב",
    items: ["שם לפרויקט", "לוגו ושפה מיתוגית", "ספר מותג", "חומרי מכירה", "מצגות", "ברושורים"],
  },
  {
    icon: Image,
    title: "תוכן וויזואליה",
    items: ["הדמיות חוץ", "הדמיות פנים", "סרטי תדמית", "אנימציות", "סיורים וירטואליים", "צילום מקצועי"],
  },
  {
    icon: Monitor,
    title: "דיגיטל",
    items: ["אתרי פרויקט", "דפי נחיתה", "ניהול קמפיינים", "ניהול לידים", "אוטומציות", "מערכות בקרה"],
  },
  {
    icon: Rocket,
    title: "השקה ומכירות",
    items: ["השקות", "אירועי חשיפה", "ניהול משפך מכירות", "ליווי צוותי מכירה", "בקרת ביצועים", "אופטימיזציה"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-card/40" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            מה אנחנו עושים
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            מהרעיון הראשון ועד תקיעת המזוזה
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            אנחנו מלווים את הפרויקט לאורך כל מחזור החיים שלו ומייצרים עבור היזם מעטפת מלאה תחת קורת גג אחת.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
          {["קרקע", "תכנון", "היתר", "מיתוג", "שיווק", "מכירות", "אכלוס"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full bg-gold/10 px-3 py-1.5 font-medium text-gold">{step}</span>
              {i < 6 && <span className="text-gold/40">←</span>}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-border/70 bg-background/60 p-7 transition-colors hover:border-gold/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{s.title}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-gold" />
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
