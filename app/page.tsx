import { SiteHeader } from "@/components/site-header"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { ImageCarousel } from "@/components/image-carousel"
import { PlansCarousel } from "@/components/plans-carousel"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-[55] bg-grain opacity-[0.035] mix-blend-soft-light" />

      <ScrollProgress />
      <SiteHeader />
      {/* מסך 1 - Hero */}
      <Hero />
      {/* מסך 2 - הכאב של היזם */}
      <Problem />
      {/* מסך 3 - מי אנחנו */}
      <About />
      {/* מסך 4 - מה אנחנו עושים */}
      <Services />
      {/* מסך 5 - למה יזמים עובדים איתנו */}
      <WhyUs />
      {/* מסך 6 - פרויקטים (הדמיות + תוכניות) */}
      <ImageCarousel title="הדמיות מפרויקטים שלנו" />
      <PlansCarousel />
      {/* מסך 8 - קריאה לפעולה */}
      <Contact />
      <SiteFooter />

      {/* Mobile sticky CTA */}
      <a
        href="#contact"
        className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-full bg-gold py-3.5 text-sm font-semibold text-primary-foreground shadow-2xl shadow-gold/30 lg:hidden"
      >
        קבעו פגישת היכרות
      </a>
    </main>
  )
}
