import type { Metadata, Viewport } from 'next'
import { Assistant, Heebo } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const heebo = Heebo({
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
      className={`${assistant.variable} ${heebo.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
