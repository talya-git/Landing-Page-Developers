import { Reveal } from "@/components/reveal"

const reasons = [
  {
    title: "אנחנו מבינים יזמים",
    text: "אנחנו יודעים כמה החלטות, סיכונים ומשאבים מושקעים בכל פרויקט.",
  },
  {
    title: "אנחנו מחוברים לשטח",
    text: "אנחנו פוגשים מדי יום רוכשים אמיתיים ומבינים מה מניע אותם.",
  },
  {
    title: "אנחנו מחברים בין כל העולמות",
    text: "אסטרטגיה. מיתוג. קריאייטיב. דיגיטל. מכירות.",
  },
  {
    title: "אנחנו חושבים לטווח ארוך",
    text: "לא רק איך להשיק את הפרויקט. איך לבנות לו הצלחה לאורך שנים.",
  },
]

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <img
        src="/media/render3.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            למה יזמים בוחרים באורן כהן גרופ
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="rounded-2xl border border-border/70 bg-card/70 p-7 backdrop-blur-sm">
                <h3 className="font-heading text-xl font-bold text-foreground">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
