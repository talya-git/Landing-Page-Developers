export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 text-center md:px-8">
        <p className="max-w-2xl font-heading text-lg leading-relaxed text-gold-soft sm:text-xl">
          "אחרי יותר מ-70 פרויקטים שליווינו, למדנו דבר אחד: השאלה היא לא רק איך משווקים פרויקט. השאלה היא איך בונים אותו כך שהשוק יחכה לו."
        </p>
        <div>
          <img src="/media/logo.png" alt="Oren Cohen Group" className="mx-auto h-14 w-14 rounded-full" />
          <p className="mt-3 font-heading text-sm tracking-[0.2em] text-foreground">אורן כהן גרופ</p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Oren Cohen Group. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  )
}
