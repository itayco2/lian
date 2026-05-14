import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import "./globals.css";

const display = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lian Gardens — גננות יוקרתית | עיצוב, הקמה ותחזוקה",
  description:
    "Lian Gardens — גננות מקצועית בשרון ובמרכז. תחזוקת גינות, עיצוב והקמה, גיזום עצים ומערכות השקיה חכמות. ייעוץ אישי ועבודה מדויקת.",
  metadataBase: new URL("https://lian-gardens.vercel.app"),
  openGraph: {
    title: "Lian Gardens — גננות יוקרתית",
    description: "גינות שמתוכננות לחיות איתך.",
    locale: "he_IL",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body className="grain bg-cream text-espresso antialiased">{children}</body>
    </html>
  );
}
