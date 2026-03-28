import { WaitlistForm } from "./waitlist-form";

const SERVICES = [
  {
    icon: "&#128176;",
    title: "Facturation intelligente",
    desc: "Factures conformes 2026, relances auto, rapprochement bancaire IA",
    tag: "Obligatoire sept 2026",
  },
  {
    icon: "&#129302;",
    title: "Assistant virtuel",
    desc: "Tri emails, agenda, courriers, suivi administratif",
    tag: null,
  },
  {
    icon: "&#9997;",
    title: "Creation de contenu",
    desc: "Posts LinkedIn, articles SEO, newsletters en 1 clic",
    tag: "Le plus demande",
  },
  {
    icon: "&#128269;",
    title: "Veille concurrentielle",
    desc: "Surveillance concurrents, rapport mensuel automatise",
    tag: null,
  },
  {
    icon: "&#128200;",
    title: "Analyse de donnees",
    desc: "Dashboard KPIs, tendances, alertes predictives",
    tag: null,
  },
  {
    icon: "&#128172;",
    title: "Support client 24/7",
    desc: "Chatbot IA sur votre site, escalade intelligente",
    tag: "ROI immediat",
  },
  {
    icon: "&#127919;",
    title: "Marketing automatise",
    desc: "Pipeline leads, sequences email, scoring IA",
    tag: null,
  },
  {
    icon: "&#127908;",
    title: "Comptes rendus reunion",
    desc: "Transcription, resume, actions extraites automatiquement",
    tag: null,
  },
  {
    icon: "&#128196;",
    title: "Audit documentaire",
    desc: "Analyse contrats, detection incoherences, alertes echeances",
    tag: null,
  },
  {
    icon: "&#9881;",
    title: "Automatisation admin",
    desc: "Reporting, sync outils, consolidation, rappels",
    tag: null,
  },
  {
    icon: "&#128204;",
    title: "Appels d'offres",
    desc: "Veille marches publics, scoring, aide a la redaction",
    tag: null,
  },
];

const PLANS = [
  {
    name: "Essentiel",
    price: "49",
    period: "/mois",
    annual: "39 EUR/mois en annuel",
    target: "TPE, 1-5 salaries",
    features: [
      "11 services inclus",
      "1 utilisateur",
      "500 actions IA/mois",
      "Support email",
    ],
    cta: "Rejoindre la liste",
    highlight: false,
  },
  {
    name: "Pro",
    price: "99",
    period: "/mois",
    annual: "79 EUR/mois en annuel",
    target: "PME, 5-25 salaries",
    features: [
      "11 services inclus",
      "3 utilisateurs (+25 EUR/user)",
      "2 000 actions IA/mois",
      "Support chat + telephone",
      "Widget a vos couleurs",
      "Acces API",
    ],
    cta: "Rejoindre la liste",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    annual: "A partir de 199 EUR/mois",
    target: "PME, 25-250 salaries",
    features: [
      "11 services inclus",
      "10 utilisateurs (+20 EUR/user)",
      "10 000+ actions IA/mois",
      "Support dedie",
      "Full custom branding",
      "API + webhooks",
      "Onboarding accompagne",
    ],
    cta: "Nous contacter",
    highlight: false,
  },
];

const PAIN_POINTS = [
  { stat: "40%", desc: "du temps des dirigeants PME passe sur l'administratif" },
  { stat: "1 500 EUR", desc: "par mois pour 10 outils separes non integres" },
  { stat: "84%", desc: "des projets IA en PME echouent par manque de simplicite" },
  { stat: "70%", desc: "des PME non pretes pour la facturation electronique 2026" },
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-primary">PILOTE</span>{" "}
            <span className="text-foreground">AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="#services" className="hover:text-foreground transition">
              Services
            </a>
            <a href="#pricing" className="hover:text-foreground transition">
              Tarifs
            </a>
            <a href="#waitlist" className="hover:text-foreground transition">
              Liste d&apos;attente
            </a>
          </div>
          <a
            href="#waitlist"
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition"
          >
            Acces anticipe
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-amber-50 text-amber-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Facturation electronique obligatoire en septembre 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Moins d&apos;admin,
            <br />
            <span className="text-primary">plus de business.</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            11 services IA pour votre PME. Facturation, contenu, support
            client, marketing et plus.{" "}
            <strong className="text-foreground">
              Un seul abonnement, un seul outil.
            </strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#waitlist"
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition shadow-lg shadow-primary/20"
            >
              Rejoindre la liste d&apos;attente
            </a>
            <a
              href="#services"
              className="text-muted px-8 py-4 rounded-xl text-lg font-medium hover:text-foreground transition"
            >
              Decouvrir les services &#8595;
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span>&#10003; 14 jours d&apos;essai gratuit</span>
            <span>&#10003; Heberge en Europe (RGPD)</span>
            <span>&#10003; Conforme facturation 2026</span>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-16 px-6 bg-muted-bg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PAIN_POINTS.map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {p.stat}
                </div>
                <div className="text-sm text-muted leading-snug">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              11 services, un seul outil
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Tout ce dont votre PME a besoin pour gagner du temps, de
              l&apos;argent et de la serenite. L&apos;IA travaille sous le capot
              — vous voyez juste les resultats.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="relative bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition group"
              >
                {s.tag && (
                  <span className="absolute top-4 right-4 bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                )}
                <div
                  className="text-3xl mb-3"
                  dangerouslySetInnerHTML={{ __html: s.icon }}
                />
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted text-lg">
              Cout actuel pour une PME avec 10 outils separes :{" "}
              <span className="line-through">1 000 - 1 500 EUR/mois</span>
            </p>
            <p className="text-2xl font-bold text-primary mt-2">
              PILOTE AI : a partir de 49 EUR/mois tout inclus
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-muted-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Comment ca marche
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Inscrivez-vous en 2 min",
                desc: "Email + SIRET. Votre espace est configure automatiquement avec les donnees de votre entreprise.",
              },
              {
                step: "2",
                title: "Connectez vos outils",
                desc: "Banque, email, agenda. En quelques clics, PILOTE AI a le contexte pour vous aider.",
              },
              {
                step: "3",
                title: "L'IA travaille pour vous",
                desc: "Chaque lundi matin, un brief de votre semaine. Factures, relances, contenu, support — tout roule.",
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Un prix simple, tous les services inclus
            </h2>
            <p className="text-lg text-muted">
              Pas de modules payants. Pas de tokens. Pas de surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 ${
                  plan.highlight
                    ? "bg-primary text-white shadow-2xl shadow-primary/20 md:scale-105"
                    : "bg-white border border-border"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                    Le plus populaire
                  </span>
                )}
                <div className="text-sm font-medium opacity-80 mb-1">
                  {plan.target}
                </div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-lg opacity-70">{plan.period}</span>
                  )}
                </div>
                <div
                  className={`text-sm mb-6 ${
                    plan.highlight ? "opacity-70" : "text-muted"
                  }`}
                >
                  {plan.annual}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      className={`flex items-start gap-2 text-sm ${
                        plan.highlight ? "" : "text-muted"
                      }`}
                    >
                      <span className={plan.highlight ? "text-accent" : "text-success"}>
                        &#10003;
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`block text-center py-3 px-6 rounded-xl font-bold transition ${
                    plan.highlight
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary text-white hover:bg-primary-dark"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted mt-8">
            Tous les prix sont en EUR TTC. 14 jours d&apos;essai gratuit.
            Remise -20% sur l&apos;engagement annuel. Sans engagement mensuel.
          </p>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 px-6 bg-muted-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "&#128274;", text: "RGPD compliant, heberge en Europe" },
              { icon: "&#127466;&#127482;", text: "Factur-X conforme 2026" },
              { icon: "&#129302;", text: "IA sous le capot, vous gardez le controle" },
              { icon: "&#128101;", text: "Dashboard expert-comptable integre" },
            ].map((t, i) => (
              <div key={i}>
                <div
                  className="text-3xl mb-2"
                  dangerouslySetInnerHTML={{ __html: t.icon }}
                />
                <p className="text-sm text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la liste d&apos;attente
          </h2>
          <p className="text-lg text-muted">
            Lancement prevu ete 2026. Les premiers inscrits auront un{" "}
            <strong className="text-foreground">
              acces prioritaire + 1 mois offert
            </strong>
            .
          </p>
        </div>
        <WaitlistForm />
      </section>

      {/* EC SECTION */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vous etes expert-comptable ?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Recommandez PILOTE AI a vos clients PME. Dashboard dedie, exports
            FEC/Sage/Cegid, et{" "}
            <strong className="text-white">15% de commission recurrente</strong>{" "}
            sur chaque client refere.
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition"
          >
            Devenir partenaire
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold">
              <span className="text-primary">PILOTE</span> AI
            </span>
            <span className="text-sm text-muted ml-4">
              Moins d&apos;admin, plus de business.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <span>&#169; 2026 PILOTE AI</span>
            <a href="#" className="hover:text-foreground transition">
              Mentions legales
            </a>
            <a href="#" className="hover:text-foreground transition">
              Confidentialite
            </a>
            <a href="#" className="hover:text-foreground transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
