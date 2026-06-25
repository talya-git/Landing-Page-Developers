import type { Metadata, Viewport } from 'next'
import { Varela_Round, Rubik } from 'next/font/google'
import './globals.css'

const varelaRound = Varela_Round({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['400'],
})

const rubik = Rubik({
  variable: '--font-heebo',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'אורן כהן גרופ | מעטפת מיתוג ושיווק ליזמים',
  description: 'חבילת מיתוג ושיווק מלאה ליזמי נדל"ן. הדמיות, תוכניות מכירה, חוברות שיווקיות וקמפיינים דיגיטליים.',
}

export const viewport: Viewport = {
  themeColor: '#0c0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${varelaRound.variable} ${rubik.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
