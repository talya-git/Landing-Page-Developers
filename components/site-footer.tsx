export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <img src="/media/logo.png" alt="Oren Cohen Group" className="h-16 w-16 rounded-full" />
        <div>
          <p className="font-heading text-lg tracking-[0.2em] text-foreground">אורן כהן גרופ</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            מיתוג ושיווק לפרויקטים יוקרתיים. 31 שנות מצוינות בנדל״ן.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Oren Cohen Group. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
