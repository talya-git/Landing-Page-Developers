import { Reveal } from "@/components/reveal"

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-14 md:py-20">
      <img
        src="/media/render4.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative mx-auto max-w-2xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            כל פרויקט מתחיל בחזון.
            <br />
            הצלחה מתחילה בתכנון נכון של הדרך אליו.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            אם אתם מחפשים שותף שמבין יזמות, מבין שיווק ומבין אנשים - נשמח להכיר את הפרויקט הבא שלכם.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form className="mt-10 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="שם"
              className="rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
            <input
              type="text"
              placeholder="חברה"
              className="rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
            <input
              type="tel"
              placeholder="טלפון"
              className="rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
            <input
              type="email"
              placeholder="אימייל"
              className="rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
            <select className="rounded-xl border border-border bg-background/60 px-4 py-3 text-muted-foreground focus:border-gold focus:outline-none">
              <option value="">שלב הפרויקט</option>
              <option value="planning">תכנון</option>
              <option value="permit">היתר</option>
              <option value="branding">מיתוג</option>
              <option value="marketing">שיווק</option>
              <option value="sales">מכירות</option>
            </select>
            <button
              type="submit"
              className="mt-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              בואו נדבר על הפרויקט שלכם
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
