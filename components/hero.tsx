"use client"

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <img
        src="/media/render3.jpeg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_40%,transparent_40%,oklch(0.15_0.012_265/0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <div className="mt-12 mb-6" style={{ animation: "fade-up 0.8s ease both" }}>
          <img src="/media/logo.png" alt="Oren Cohen Group" className="mx-auto h-20 w-20 rounded-full drop-shadow-[0_2px_16px_rgba(212,175,55,0.3)]" />
        </div>

        <h1
          className="font-heading text-4xl font-bold leading-[1.2] tracking-[-0.02em] text-balance text-gold-shimmer drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl"
          style={{ animation: "fade-up 0.9s ease 0.1s both" }}
        >
          יש פרויקטים שנבנים.
          <br />
          <span className="text-foreground">ויש פרויקטים שנבנים כדי להצליח.</span>
        </h1>

        <p
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg"
          style={{ animation: "fade-up 0.9s ease 0.25s both" }}
        >
          באורן כהן גרופ אנחנו מלווים יזמים משלב החשיבה והתכנון, דרך המיתוג, ההדמיות, השיווק והמכירות ועד האכלוס.
        </p>
        <p
          className="mt-4 text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg"
          style={{ animation: "fade-up 0.9s ease 0.3s both" }}
        >
          עם ניסיון של למעלה מ-70 פרויקטים, אנחנו יודעים להפוך חזון יזמי לפרויקט שהשוק יודע לזהות, לרצות ולבחור.
        </p>

        <div
          className="mt-10"
          style={{ animation: "fade-up 0.9s ease 0.4s both" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            קבעו פגישת היכרות
          </a>
        </div>
      </div>
    </section>
  )
}
