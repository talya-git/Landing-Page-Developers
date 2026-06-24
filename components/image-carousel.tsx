"use client"

import { useEffect, useState } from "react"

const images = [
  "/media/render1.jpeg",
  "/media/render2.jpeg",
  "/media/render3.jpeg",
  "/media/render4.jpeg",
  "/media/render5.jpeg",
  "/media/render6.jpeg",
  "/media/render7.jpeg",
]

export function ImageCarousel({ title }: { title: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
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
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Project render ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
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
