import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PILOTE MA PME — Moins d'admin, plus de business",
  description:
    "11 services IA pour les PME françaises. Facturation, contenu, support client, marketing et plus. Un seul abonnement à partir de 49 €/mois.",
  keywords: [
    "IA PME",
    "SaaS PME France",
    "automatisation PME",
    "facturation électronique",
    "intelligence artificielle entreprise",
    "pilote ma PME",
  ],
  openGraph: {
    title: "PILOTE MA PME — Moins d'admin, plus de business",
    description:
      "11 services IA pour votre PME. Facturation, contenu, support, marketing. À partir de 49 €/mois.",
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
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
