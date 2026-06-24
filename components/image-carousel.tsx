"use client"

import { useEffect, useState } from "react"

const media = [
  { type: "image" as const, src: "/media/render1.jpeg" },
  { type: "image" as const, src: "/media/render2.jpeg" },
  { type: "image" as const, src: "/media/render3.jpeg" },
  { type: "image" as const, src: "/media/render4.jpeg" },
  { type: "image" as const, src: "/media/render5.jpeg" },
  { type: "image" as const, src: "/media/render6.jpeg" },
  { type: "image" as const, src: "/media/render7.jpeg" },
  { type: "image" as const, src: "/media/render8.jpeg" },
  { type: "video" as const, src: "/media/project-video.mp4" },
]

export function ImageCarousel({ title }: { title: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % media.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="mb-10 text-center font-heading text-3xl font-medium text-gold-gradient sm:text-4xl">
          {title}
        </h2>
        <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl aspect-[16/9]">
          {media.map((item, i) => (
            item.type === "video" ? (
              <video
                key={item.src}
                src={item.src}
                autoPlay={i === current}
                muted
                loop
                playsInline
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
              />
            ) : (
              <img
                key={item.src}
                src={item.src}
                alt={`Project ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
              />
            )
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {media.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-gold" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
