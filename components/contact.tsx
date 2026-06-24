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
          <img src="/media/a-z.png" alt="A-Z" className="mx-auto mb-6 h-20 w-auto" />
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
          <form className="mt-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="שם"
                className="w-full border-0 border-b border-gold/30 bg-transparent px-1 py-3 text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none"
              />
              <input
                type="text"
                placeholder="חברה"
                className="w-full border-0 border-b border-gold/30 bg-transparent px-1 py-3 text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <input
                type="tel"
                placeholder="טלפון"
                className="w-full border-0 border-b border-gold/30 bg-transparent px-1 py-3 text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none"
              />
              <input
                type="email"
                placeholder="אימייל"
                className="w-full border-0 border-b border-gold/30 bg-transparent px-1 py-3 text-foreground placeholder:text-foreground/40 transition-colors focus:border-gold focus:outline-none"
              />
            </div>
            <select className="w-full border-0 border-b border-gold/30 bg-transparent px-1 py-3 text-foreground/40 transition-colors focus:border-gold focus:outline-none">
              <option value="">שלב הפרויקט</option>
              <option value="planning">תכנון</option>
              <option value="permit">היתר</option>
              <option value="branding">מיתוג</option>
              <option value="marketing">שיווק</option>
              <option value="sales">מכירות</option>
            </select>
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="rounded-full bg-gold px-10 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-gold/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-gold/30"
              >
                בואו נדבר על הפרויקט שלכם
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
