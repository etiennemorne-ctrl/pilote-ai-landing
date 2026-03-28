import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PILOTE AI — Moins d'admin, plus de business",
  description:
    "11 services IA pour les PME francaises. Facturation, contenu, support client, marketing et plus. Un seul abonnement a partir de 49 EUR/mois.",
  keywords: [
    "IA PME",
    "SaaS PME France",
    "automatisation PME",
    "facturation electronique",
    "intelligence artificielle entreprise",
  ],
  openGraph: {
    title: "PILOTE AI — Moins d'admin, plus de business",
    description:
      "11 services IA pour votre PME. Facturation, contenu, support, marketing. A partir de 49 EUR/mois.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
