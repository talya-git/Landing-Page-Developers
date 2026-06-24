"use client"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <img
        src="/media/render3.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_40%,transparent_40%,oklch(0.15_0.012_265/0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <div className="mt-12 mb-6" style={{ animation: "fade-up 0.8s ease both" }}>
          <img src="/media/a-z.png" alt="Oren Cohen Group" className="mx-auto h-40 sm:h-48 md:h-56 w-auto drop-shadow-[0_2px_16px_rgba(212,175,55,0.3)]" />
        </div>

        <h1
          className="font-heading text-5xl font-bold leading-[1.1] tracking-[-0.04em] text-balance text-gold-shimmer drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-7xl md:text-[5.25rem]"
          style={{ animation: "fade-up 0.9s ease 0.1s both" }}
        >
          מעטפת מיתוג ושיווק
          <br />
          מלאה לפרויקט שלכם
        </h1>

        <p
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg"
          style={{ animation: "fade-up 0.9s ease 0.25s both" }}
        >
          אורן כהן גרופ מציעה ליזמים חבילת מיתוג ושיווק מקצועית - מבחירת שם ועיצוב לוגו, דרך הדמיות ברמה הגבוהה ביותר, תוכניות מכירה ועד קמפיינים דיגיטליים שמוכרים.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animation: "fade-up 0.9s ease 0.4s both" }}
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/5 px-8 py-4 text-base font-medium text-gold transition-colors hover:bg-gold hover:text-white"
          >
            מה אנחנו מציעים
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            בואו נדבר
          </a>
        </div>
      </div>
    </section>
  )
}
