"use client";
import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";

const STORAGE_KEY = "lian-cookie-consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // small delay so it doesn't pop up at the same moment as the hero
        const t = setTimeout(() => setOpen(true), 900);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage might be unavailable (private mode); show banner anyway
      setOpen(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="הסכמה לעוגיות"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-forest/15 bg-cream/95 px-5 py-4 shadow-[0_24px_60px_-20px_rgba(31,61,43,0.35)] backdrop-blur-md md:inset-x-auto md:right-6 md:bottom-6 md:left-auto md:w-[28rem]"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="text-sm font-medium text-espresso">
            האתר משתמש בעוגיות
          </div>
          <p className="mt-1 text-xs leading-relaxed text-espresso/70">
            אנחנו משתמשים בעוגיות חיוניות בלבד כדי שהאתר יעבוד כמו שצריך.
            המשך הגלישה מהווה הסכמה לתנאי השימוש.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={accept}
              className="rounded-full bg-forest px-4 py-2 text-xs font-medium text-cream transition-all duration-300 hover:bg-forest-deep active:scale-[0.97]"
            >
              אישור
            </button>
          </div>
        </div>
        <button
          type="button"
          aria-label="סגור"
          onClick={accept}
          className="-mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-espresso/55 transition-colors hover:bg-espresso/5 hover:text-espresso"
        >
          <X size={14} weight="bold" />
        </button>
      </div>
    </div>
  );
}
