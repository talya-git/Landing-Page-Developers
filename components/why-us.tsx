import { Reveal } from "@/components/reveal"

const reasons = [
  {
    num: "01",
    title: "אנחנו מבינים יזמים",
    text: "אנחנו יודעים כמה החלטות, סיכונים ומשאבים מושקעים בכל פרויקט.",
  },
  {
    num: "02",
    title: "אנחנו מחוברים לשטח",
    text: "אנחנו פוגשים מדי יום רוכשים אמיתיים ומבינים מה מניע אותם.",
  },
  {
    num: "03",
    title: "אנחנו מחברים בין כל העולמות",
    text: "אסטרטגיה. מיתוג. קריאייטיב. דיגיטל. מכירות.",
  },
  {
    num: "04",
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
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
            למה אנחנו
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold" />
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-[3.5rem]">
            למה יזמים בוחרים באורן כהן גרופ
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.07] hover:shadow-[0_8px_40px_-12px_rgba(212,175,55,0.15)]">
                <span className="absolute -right-2 -top-4 font-heading text-[5rem] font-bold leading-none text-gold/[0.07] group-hover:text-gold/[0.12] transition-colors">{r.num}</span>
                <div className="relative">
                  <h3 className="font-heading text-xl font-bold text-foreground">{r.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
