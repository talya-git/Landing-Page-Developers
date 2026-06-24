import { Reveal } from "@/components/reveal"

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 -z-10 bg-card/40" />
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight text-balance text-gold-gradient sm:text-4xl md:text-5xl">
            רוב הפרויקטים מגיעים לשיווק מאוחר מדי
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-4 text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            <p>היזם משקיע שנים בתכנון. בוחר אדריכלים. עובד מול יועצים. מנהל תקציבים. מקדם היתרים.</p>
            <p>אבל פעמים רבות <span className="text-foreground font-medium">החשיבה השיווקית נכנסת רק כשהפרויקט כבר מוכן לשיווק.</span></p>
            <p>בשלב הזה חלק מההחלטות המשמעותיות ביותר כבר התקבלו:</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {["התמהיל", "המיצוב", "חוויית הלקוח", "הסיפור של הפרויקט", "הבידול מול המתחרים"].map((item) => (
              <div key={item} className="rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-center text-sm font-medium text-foreground">
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-12 text-center">
          <p className="font-heading text-xl text-balance text-gold-soft sm:text-2xl">
            אנחנו מאמינים שהחשיבה על המכירה צריכה להתחיל הרבה לפני המכירה הראשונה.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
