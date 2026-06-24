import { Reveal } from "@/components/reveal"
import { Shield, Paintbrush, Users, FileCheck } from "lucide-react"

const features = [
  { icon: FileCheck, text: "ליווי משפטי ובירוקרטי מלא מול כל הגורמים" },
  { icon: Paintbrush, text: "עיצוב, שיפוץ והתאמה אישית של הנכס" },
  { icon: Users, text: "ניהול ספקים, קבלנים ויבואנים מהשורה הראשונה" },
  { icon: Shield, text: "פיקוח ובקרת איכות בכל שלב עד למפתח" },
]

export function Overseas() {
  return (
    <section id="overseas" className="relative overflow-hidden py-14 md:py-20">
      <img
        src="/media/luxury-interior.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-l from-background via-background/70 to-background/95" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <span className="inline-flex items-center justify-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            למה לעשות את זה לבד?
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            רכישה או שיפוץ נכס יוקרתי הוא תהליך ארוך ומורכב
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            עורכי דין, אדריכלים, מעצבי פנים, קבלנים, יבואנים, ספקים ורשויות מקומיות —
            רכישה ושיפוץ נכסי יוקרה דורשת סינון ובחירה קפדנית של נותני השירותים וניהול של עשרות גורמים במקביל. אנחנו מרכזים את הכול תחת קורת גג אחת, כדי שתוכלו להנות מהתהליך והתוצאה בלי כאבי הראש וחוסר הוודאות הנלוווה.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.text} delay={i * 80}>
              <div className="flex items-center gap-4 rounded-xl border border-border/70 bg-card/70 p-5 text-right backdrop-blur-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <f.icon className="h-5 w-5" />
                </div>
                <p className="leading-relaxed text-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 font-heading text-xl text-balance text-gold-soft sm:text-2xl">
            אתם לא קונים רק שירות איכותי- אתם קונים שקט נפשי.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
