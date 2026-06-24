import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="relative border-b border-border/50 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Photo */}
        <Reveal>
          <div className="group relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-2xl border border-gold/25" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/media/oren.jpeg"
                alt="אורן כהן"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <span className="inline-flex items-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            מי אנחנו
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
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
              <div key={s.label} className="text-center">
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
