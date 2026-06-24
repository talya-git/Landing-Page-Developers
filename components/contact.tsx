"use client"

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
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative mx-auto max-w-2xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            כל פרויקט מתחיל בחזון.
            <br />
            הצלחה מתחילה בתכנון נכון של הדרך אליו.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-foreground/80">
            אם אתם מחפשים שותף שמבין יזמות, מבין שיווק ומבין אנשים - נשמח להכיר את הפרויקט הבא שלכם.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 rounded-2xl border border-gold/20 bg-background/80 p-8 shadow-2xl backdrop-blur-md">
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gold">שם</label>
                  <input
                    type="text"
                    placeholder="השם שלכם"
                    className="rounded-lg border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gold">חברה</label>
                  <input
                    type="text"
                    placeholder="שם החברה"
                    className="rounded-lg border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gold">טלפון</label>
                  <input
                    type="tel"
                    placeholder="מספר טלפון"
                    className="rounded-lg border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gold">אימייל</label>
                  <input
                    type="email"
                    placeholder="כתובת אימייל"
                    className="rounded-lg border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gold">שלב הפרויקט</label>
                <select className="rounded-lg border border-border/60 bg-card/60 px-4 py-3 text-sm text-muted-foreground transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30">
                  <option value="">בחרו שלב...</option>
                  <option value="planning">תכנון</option>
                  <option value="permit">היתר</option>
                  <option value="branding">מיתוג</option>
                  <option value="marketing">שיווק</option>
                  <option value="sales">מכירות</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-3 rounded-full bg-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gold/30"
              >
                בואו נדבר על הפרויקט שלכם
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
