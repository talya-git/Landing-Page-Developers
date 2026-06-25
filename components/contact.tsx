"use client"

import { Reveal } from "@/components/reveal"
import { Phone, Mail, Globe } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.523 5.26l-.999 3.648 3.965-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  )
}

const CONTACTS = [
  {
    label: "ואטסאפ",
    sub: "שיחה ישירה עם הצוות",
    href: "https://wa.me/972545596052",
    icon: WhatsAppIcon,
  },
  {
    label: "התקשרו אלינו",
    sub: "02-663-4070",
    href: "tel:+97226634070",
    icon: Phone,
  },
  {
    label: "אימייל",
    sub: "atoz@orencohengroup.com",
    href: "mailto:atoz@orencohengroup.com",
    icon: Mail,
  },
  {
    label: "האתר שלנו",
    sub: "מחלקת A-Z",
    href: "https://www.orencohengroup.com/he/a-z/",
    icon: Globe,
  },
]

function FloatingInput({ label, type = "text", name }: { label: string; type?: string; name: string }) {
  return (
    <div className="group relative">
      <input
        type={type}
        name={name}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pb-3 pt-6 text-sm text-foreground backdrop-blur-sm transition-all focus:border-gold/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold/30"
      />
      <label className="pointer-events-none absolute right-4 top-2 text-[11px] font-medium tracking-wide text-gold transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-foreground peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-gold">
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
              <form className="flex flex-col gap-5" onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget
                const data = new FormData(form)
                data.append("access_key", "5514f7b1-41aa-44b2-8012-6da1bf9fe913")
                data.append("subject", "פנייה חדשה מדף יזמים")
                data.append("from_name", "דף נחיתה יזמים")
                await fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
                form.reset()
                alert("תודה! פנייתכם נשלחה בהצלחה. נחזור אליכם בהקדם.")
              }}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingInput label="שם" name="name" />
                  <FloatingInput label="חברה" name="company" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingInput label="טלפון" type="tel" name="phone" />
                  <FloatingInput label="אימייל" type="email" name="email" />
                </div>

                <div className="group relative">
                  <select name="stage" className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-foreground backdrop-blur-sm transition-all focus:border-gold/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-gold/30">
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

        <Reveal delay={200}>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-5 text-center backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/[0.1]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="font-heading text-sm font-semibold text-foreground">{c.label}</span>
                <span className="text-[10px] text-muted-foreground break-all">{c.sub}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
