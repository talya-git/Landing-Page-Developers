"use client"

import { Reveal } from "@/components/reveal"

function FloatingInput({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div className="group relative">
      <input
        type={type}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pb-3 pt-6 text-sm text-foreground backdrop-blur-sm transition-all focus:border-gold/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold/30"
      />
      <label className="pointer-events-none absolute right-4 top-2 text-[11px] font-medium tracking-wide text-gold/70 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-gold/70">
        {label}
      </label>
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <img
        src="/media/render4.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70" />

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
          <div className="mt-12 overflow-hidden rounded-3xl border border-gold/30 bg-white/[0.08] p-1 shadow-[0_8px_60px_-12px_rgba(212,175,55,0.25)] backdrop-blur-2xl">
            <div className="rounded-[20px] border border-gold/20 bg-white/[0.12] p-8 md:p-10 backdrop-blur-2xl">
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingInput label="שם" />
                  <FloatingInput label="חברה" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingInput label="טלפון" type="tel" />
                  <FloatingInput label="אימייל" type="email" />
                </div>

                <div className="group relative">
                  <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-muted-foreground backdrop-blur-sm transition-all focus:border-gold/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold/30">
                    <option value="">שלב הפרויקט</option>
                    <option value="planning">תכנון</option>
                    <option value="permit">היתר</option>
                    <option value="branding">מיתוג</option>
                    <option value="marketing">שיווק</option>
                    <option value="sales">מכירות</option>
                  </select>
                  <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative mt-3 overflow-hidden rounded-full bg-gradient-to-r from-gold to-gold/80 px-10 py-4.5 text-base font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_rgba(212,175,55,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_32px_-4px_rgba(212,175,55,0.5)] active:scale-[0.98]"
                >
                  <span className="relative z-10">בואו נדבר על הפרויקט שלכם</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
