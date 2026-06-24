import { Reveal } from "@/components/reveal"
import { UserCheck, MapPinned, Layers } from "lucide-react"

const points = [
  { icon: UserCheck, title: "רשת מומחים נבחרת", text: "אנשי מקצוע שנבחרו בקפידה, עם רשומת הצלחות מוכחת אצל לקוחותינו." },
  { icon: MapPinned, title: "כל היבט תחת קורת גג אחת", text: "משפטי, עיצובי, פיננסי, ספקים ויבואנים וניהול נכסים." },
  { icon: Layers, title: "ליווי חלק ובטוח", text: "כל שלב מטופל בפיקוח צוות המשרד, למען האינטרסים שלכם בלבד." },
]

export function Solution() {
  return (
    <section id="solution" className="relative py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Video */}
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gold/10 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <video
                className="aspect-[9/13] w-full object-cover sm:aspect-[4/5]"
                autoPlay
                muted
                loop
                playsInline
                poster="/media/luxury-interior.png"
              >
                <source src="/media/video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <span className="inline-flex items-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            הפתרון
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            אז מה זה A-Z?
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            A-Z הוא שירות מלא המכסה כל היבט במסע הנדל"ני שלכם: מתמיכה משפטית דרך פיננסים, תכנון ועיצוב ברמות הגבוהות ביותר וקשר ישיר עם ספקים מקומיים ויבואנים נבחרים ללא גורמי ביניים ובמחירים שלא תוכלו לקבל בשום מקום אחר. אנחנו מוודאים שכל שלב יהיה חלק, בטוח, ומטופל על ידי אנשי המקצוע הטובים ביותר שהומלצו בחום ע"י לקוחות העבר שלנו בתום העבודה.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{p.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
