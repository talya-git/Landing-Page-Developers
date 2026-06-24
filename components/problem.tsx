import { Reveal } from "@/components/reveal"
import { Users, HelpCircle, ShieldAlert, MapPin, Briefcase, DollarSign } from "lucide-react"

const pains = [
  { icon: Users, text: "התקשרות העסקה והפעלה של בעלי מקצוע שונים" },
  { icon: Briefcase, text: "הצורך להיות ״מנהל הפרויקט״ המקצועי בעצמכם" },
  { icon: HelpCircle, text: "חוסר וודאות לגבי הנסיון וטיב העבודה של בעלי המקצוע שבחרתם" },
  { icon: MapPin, text: "החלטות מורכבות שצריך לקבל בזמן אמת" },
  { icon: ShieldAlert, text: "ידע מוגבל וחוסר נסיון בהשוואת מחירים וטיב המוצרים" },
  { icon: DollarSign, text: "מחירי קנייה ויכולת מיקוח מוגבלת כקונה יחיד לעומת כוח קנייה של גוף מקצועי ומנוסה שרוכש בהיקפים גדולים" },
]

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-card/40" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            האתגר
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-[-0.04em] text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            רכישה או שיפוץ נכס יוקרתי הוא אתגר מורכב.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.text} delay={i * 70}>
              <div className="group flex h-full items-start gap-4 rounded-xl border border-border/70 bg-background/60 p-6 transition-colors hover:border-gold/40">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="pt-1.5 leading-relaxed text-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={120}>
          <p className="font-heading text-xl text-balance text-gold-soft sm:text-2xl">
            אתם צריכים גוף שאפשר לסמוך עליו- מקצועי, אמין, בעל מוניטין ונסיון מוכח של שלושה עשורים ומאות משפחות מרוצות, כוח קנייה, מוצרים איכותיים ומחירים מיוחדים שלא תוכלו לקבל במקום אחר.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
