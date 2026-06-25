"use client"

import { useRef, useState } from "react"

export function Hero() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1)

  const handleVideo1End = () => {
    setActiveVideo(2)
    video2Ref.current?.play()
  }

  const handleVideo2End = () => {
    setActiveVideo(1)
    video1Ref.current?.play()
  }

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <video
        ref={video1Ref}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeVideo === 1 ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        playsInline
        poster="/media/render3.jpeg"
        onEnded={handleVideo1End}
      >
        <source src="/media/video2.mp4" type="video/mp4" />
      </video>
      <video
        ref={video2Ref}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeVideo === 2 ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        onEnded={handleVideo2End}
      >
        <source src="/media/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="absolute inset-0 [background:radial-gradient(120%_80%_at_50%_40%,transparent_40%,oklch(0.15_0.012_265/0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <div className="mt-12 mb-6" style={{ animation: "fade-up 0.8s ease both" }}>
          <img src="/media/a-z.png" alt="Oren Cohen Group" className="mx-auto h-32 sm:h-36 md:h-40 w-auto drop-shadow-[0_2px_16px_rgba(212,175,55,0.3)]" />
        </div>

        <h1
          className="font-heading text-4xl font-bold leading-[1.2] tracking-[-0.02em] text-balance text-gold-shimmer drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl"
          style={{ animation: "fade-up 0.9s ease 0.1s both" }}
        >
          יש פרויקטים שנבנים.
          <br />
          <span>ויש פרויקטים שנבנים כדי להצליח.</span>
        </h1>

        <p
          className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg"
          style={{ animation: "fade-up 0.9s ease 0.25s both" }}
        >
          באורן כהן גרופ אנחנו מלווים יזמים משלב החשיבה והתכנון,
          <br />
          דרך המיתוג, ההדמיות, השיווק והמכירות ועד האכלוס.
        </p>
        <p
          className="mt-4 text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg"
          style={{ animation: "fade-up 0.9s ease 0.3s both" }}
        >
          עם ניסיון של למעלה מ-70 פרויקטים, אנחנו יודעים להפוך חזון יזמי לפרויקט שהשוק יודע לזהות, לרצות ולבחור.
        </p>

        <div
          className="mt-8 hidden sm:block"
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
