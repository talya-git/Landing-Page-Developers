import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 bg-[radial-gradient(circle,oklch(0.69_0.076_78/0.06)_0%,transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        {/* Photo */}
        <Reveal>
          <div className="group relative mx-auto max-w-sm" style={{ animation: "float-slow 6s ease-in-out infinite" }}>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-gold/10 opacity-60 blur-sm" />
            <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-gold/40 to-gold/10" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gold/10">
              <img
                src="/media/oren.jpeg"
                alt="אורן כהן"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 right-1/2 translate-x-1/2 rounded-full border border-gold/30 bg-background/95 px-6 py-2.5 text-center shadow-xl backdrop-blur-sm">
              <p className="font-heading text-sm font-semibold text-foreground">אורן כהן</p>
              <p className="text-[11px] tracking-[0.2em] text-gold">FOUNDER</p>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
            מי אנחנו
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            הניסיון שלנו מתחיל הרבה לפני הקמפיין הראשון
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            אורן כהן גרופ פועלת כבר למעלה משלושה עשורים בעולם הנדל"ן. לאורך השנים ליווינו ושיווקנו למעלה מ-70 פרויקטים למגורים. פגשנו אלפי רוכשים. ליווינו יזמים בכל שלבי הדרך.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            צברנו הבנה עמוקה של מה גורם לפרויקט לבלוט, לייצר ביקוש ולהגיע לתוצאות. הניסיון הזה הוא הבסיס לכל החלטה שאנחנו מקבלים עבור הלקוחות שלנו.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { num: "70+", label: "פרויקטים" },
              { num: "30+", label: "שנות ניסיון" },
              { num: "אלפי", label: "לקוחות" },
              { num: "A-Z", label: "ליווי מקצה לקצה" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/50 bg-card/50 p-4 text-center transition-colors hover:border-gold/30">
                <p className="font-heading text-2xl font-bold text-gold">{s.num}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
