import { Reveal } from "@/components/reveal"
import { Palette, BookOpen, Image, PenTool, Film, LayoutGrid } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "מיתוג מלא לפרויקט",
    text: "בחירת שם, עיצוב לוגו, בניית שפה שיווקית, סטוריטלינג וסלוגן מרכזי.",
  },
  {
    icon: BookOpen,
    title: "חוברת שיווקית מעוצבת",
    text: "תוכן שיווקי, עיקרי מפרט טכני, ספקים מובילים ודוגמאות ויזואליות.",
  },
  {
    icon: LayoutGrid,
    title: "קונספט עיצובי ומפרט טכני",
    text: "גיבוש קונספט עיצובי ומפרט טכני המותאם לקהל היעד ולשפת הפרויקט.",
  },
  {
    icon: Image,
    title: "הדמיות פנים וחוץ",
    text: "הדמיות ברמה גבוהה לצורכי שיווק, מכירה ופרסום.",
  },
  {
    icon: PenTool,
    title: "תוכניות מכירה ושילוט",
    text: "תוכניות מכירה צבעוניות ומעוצבות, גדר מדברת ושילוט מיתוגי למתחם הפרויקט.",
  },
  {
    icon: Film,
    title: "סרטון תדמית ותוכן דיגיטלי",
    text: "סרטון תדמית מקצועי, רילסים ותוכן שיווקי שוטף לרשתות החברתיות ולפרסום דיגיטלי.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-card/40" />
      <div className="pointer-events-none absolute -top-20 right-0 -z-10 h-96 w-96 gold-glow opacity-60" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <span className="h-px w-6 bg-gold" />
            מה אנחנו מספקים
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            מעטפת מיתוג ושיווק מלאה לפרויקט
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            כל מה שהפרויקט שלכם צריך כדי לבלוט, למשוך רוכשים ולמכור מהר יותר.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-border/70 bg-background/60 p-7 transition-colors hover:border-gold/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
