import {
  FileText, Bot, PenTool, Search, BarChart3, MessageCircle,
  Target, Mic, FileCheck, Settings, Briefcase, Check, ArrowRight,
  Shield, Globe, Cpu, Users, Zap, Clock, ChevronRight,
} from "lucide-react";
import { WaitlistForm } from "./waitlist-form";

const SERVICES = [
  {
    icon: FileText,
    title: "Facturation intelligente",
    desc: "Factures conformes Factur-X, relances automatiques, rapprochement bancaire par IA. Prêt pour septembre 2026.",
    tag: "Obligatoire sept. 2026",
    tagColor: "bg-red-50 text-red-700",
  },
  {
    icon: Bot,
    title: "Assistant virtuel",
    desc: "Tri de vos emails par priorité, gestion d’agenda, génération de courriers et suivi administratif.",
    tag: null,
    tagColor: "",
  },
  {
    icon: PenTool,
    title: "Création de contenu",
    desc: "Posts LinkedIn dans votre ton, articles SEO optimisés, newsletters — générés en un clic.",
    tag: "Le + demandé",
    tagColor: "bg-primary-light text-primary",
  },
  {
    icon: Search,
    title: "Veille concurrentielle",
    desc: "Surveillance de vos concurrents, analyse des tendances, rapport de synthèse mensuel automatisé.",
    tag: null,
    tagColor: "",
  },
  {
    icon: BarChart3,
    title: "Analyse de données",
    desc: "Tableau de bord simplifié pour dirigeants : KPIs, tendances, alertes prédictives. Sans Excel.",
    tag: null,
    tagColor: "",
  },
  {
    icon: MessageCircle,
    title: "Support client 24/7",
    desc: "Chatbot IA intégré à votre site. Répond à vos clients jour et nuit, escalade si nécessaire.",
    tag: "ROI immédiat",
    tagColor: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Target,
    title: "Marketing automatisé",
    desc: "Capture de leads, scoring intelligent, séquences email personnalisées. Du prospect au client.",
    tag: null,
    tagColor: "",
  },
  {
    icon: Mic,
    title: "Comptes rendus de réunion",
    desc: "Transcription automatique, résumé structuré, extraction des décisions et actions à suivre.",
    tag: null,
    tagColor: "",
  },
  {
    icon: FileCheck,
    title: "Audit documentaire",
    desc: "Analyse de vos contrats et procédures. Détection d’incohérences, alertes sur les échéances.",
    tag: null,
    tagColor: "",
  },
  {
    icon: Settings,
    title: "Automatisation admin",
    desc: "Reporting automatisé, synchronisation de vos outils, consolidation de données, rappels intelligents.",
    tag: null,
    tagColor: "",
  },
  {
    icon: Briefcase,
    title: "Appels d’offres",
    desc: "Veille des marchés publics, scoring de pertinence, aide à la rédaction de vos réponses.",
    tag: null,
    tagColor: "",
  },
];

const PLANS = [
  {
    name: "Essentiel",
    price: "49 €",
    period: "/mois",
    annual: "soit 39 €/mois en annuel",
    target: "Idéal pour les TPE · 1 à 5 salariés",
    features: [
      "Les 11 services inclus",
      "1 utilisateur",
      "500 actions IA / mois",
      "Support par email",
      "Export comptable FEC",
    ],
    cta: "Rejoindre la liste d’attente",
    highlight: false,
  },
  {
    name: "Pro",
    price: "99 €",
    period: "/mois",
    annual: "soit 79 €/mois en annuel",
    target: "Pour les PME · 5 à 25 salariés",
    features: [
      "Les 11 services inclus",
      "3 utilisateurs (+25 €/utilisateur)",
      "2 000 actions IA / mois",
      "Support chat + téléphone",
      "Widget à vos couleurs",
      "Accès API",
      "Export Sage / Cegid / ACD",
    ],
    cta: "Rejoindre la liste d’attente",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    annual: "À partir de 199 €/mois",
    target: "PME · 25 à 250 salariés",
    features: [
      "Les 11 services inclus",
      "10 utilisateurs (+20 €/utilisateur)",
      "Actions IA illimitées",
      "Support dédié",
      "Branding 100 % personnalisé",
      "API + webhooks",
      "Onboarding accompagné",
    ],
    cta: "Nous contacter",
    highlight: false,
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ========== NAVBAR ========== */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            <span className="gradient-text">PILOTE</span>{" "}
            <span className="text-foreground">AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted font-medium">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#pricing" className="hover:text-foreground transition">Tarifs</a>
            <a href="#waitlist" className="hover:text-foreground transition">Accès anticipé</a>
          </div>
          <a
            href="#waitlist"
            className="bg-foreground text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition"
          >
            Accès anticipé <ChevronRight className="inline w-4 h-4 ml-1" />
          </a>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="hero-gradient pt-36 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent-light text-amber-800 text-sm font-semibold px-4 py-2 rounded-full mb-8 shadow-sm">
              <Zap className="w-4 h-4" />
              Facturation électronique obligatoire en septembre 2026
            </div>
          </div>

          <h1 className="animate-fade-up stagger-1 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
            Moins d&apos;admin,
            <br />
            <span className="gradient-text">plus de business.</span>
          </h1>

          <p className="animate-fade-up stagger-2 text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            <strong className="font-semibold text-foreground">11 services IA</strong> pour votre PME.
            Facturation, contenu, support client, marketing{" "}
            <span className="text-muted">et bien plus.</span>
            <br />
            <strong className="font-semibold text-foreground">Un seul abonnement. Un seul outil.</strong>
          </p>

          <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#waitlist"
              className="group bg-gradient-to-r from-primary to-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Rejoindre la liste d&apos;attente
              <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="text-muted px-8 py-5 rounded-2xl text-lg font-medium hover:text-foreground transition border border-transparent hover:border-border"
            >
              Découvrir les services
            </a>
          </div>

          <div className="animate-fade-up stagger-4 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" /> 14 jours d&apos;essai gratuit
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" /> Hébergé en Europe (RGPD)
            </span>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-success" /> Conforme Factur-X 2026
            </span>
          </div>
        </div>
      </section>

      {/* ========== CHIFFRES CLÉS ========== */}
      <section className="py-20 px-6 bg-foreground text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { stat: "40 %", desc: "du temps des dirigeants passé sur l’administratif" },
              { stat: "1 500 €", desc: "par mois pour 10 outils séparés et non intégrés" },
              { stat: "84 %", desc: "des projets IA en PME échouent par manque de simplicité" },
              { stat: "70 %", desc: "des PME non prêtes pour la facturation électronique" },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {p.stat}
                </div>
                <div className="text-sm text-slate-400 leading-snug">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Tout-en-un</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              11 services, <span className="gradient-text">un seul outil</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Tout ce dont votre PME a besoin pour gagner du temps, de l&apos;argent
              et de la sérénité. L&apos;IA travaille sous le capot &mdash;
              vous voyez juste les résultats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="card-glow relative border border-border/60 p-6 group"
                >
                  {s.tag && (
                    <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${s.tagColor}`}>
                      {s.tag}
                    </span>
                  )}
                  <div className="w-11 h-11 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 bg-muted-bg rounded-3xl p-10">
            <p className="text-muted text-lg mb-2">
              Coût actuel pour une PME avec 10 outils séparés :
              <span className="line-through ml-2 text-red-400 font-semibold">1 000 – 1 500 €/mois</span>
            </p>
            <p className="text-3xl font-extrabold gradient-text">
              PILOTE AI : à partir de 49 €/mois, tout inclus
            </p>
          </div>
        </div>
      </section>

      {/* ========== COMMENT ÇA MARCHE ========== */}
      <section className="py-24 px-6 bg-muted-bg dot-pattern">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Simple</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Opérationnel en <span className="gradient-text">5 minutes</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                icon: Zap,
                title: "Inscrivez-vous en 2 min",
                desc: "Email + SIRET. Votre espace se configure automatiquement grâce aux données publiques de votre entreprise.",
              },
              {
                step: "2",
                icon: Settings,
                title: "Connectez vos outils",
                desc: "Banque, email, agenda. En quelques clics, PILOTE AI a le contexte pour vous aider concrètement.",
              },
              {
                step: "3",
                icon: Clock,
                title: "L’IA travaille pour vous",
                desc: "Chaque lundi, un brief de votre semaine. Factures, relances, contenu, support — tout roule.",
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border/40">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Étape {s.step}</div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Tarifs</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Un prix simple, <span className="gradient-text">tous les services inclus</span>
            </h2>
            <p className="text-lg text-muted">
              Pas de modules payants. Pas de tokens. Pas de surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-primary to-purple-600 text-white md:scale-105 pricing-glow"
                    : "bg-white border border-border hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">
                    Le plus populaire
                  </span>
                )}
                <div className={`text-sm font-medium mb-1 ${plan.highlight ? "text-white/70" : "text-muted"}`}>
                  {plan.target}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-lg ${plan.highlight ? "text-white/60" : "text-muted"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <div className={`text-sm mb-8 ${plan.highlight ? "text-white/60" : "text-muted"}`}>
                  {plan.annual}
                </div>
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-accent" : "text-success"}`} />
                      <span className={plan.highlight ? "" : "text-muted"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-white text-primary hover:bg-white/90 hover:shadow-lg"
                      : "bg-foreground text-white hover:bg-foreground/90"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted mt-10">
            Tous les prix sont en euros TTC. 14 jours d&apos;essai gratuit.
            Remise de 20 % sur l&apos;engagement annuel. Sans engagement en mensuel.
          </p>
        </div>
      </section>

      {/* ========== CONFIANCE ========== */}
      <section className="py-20 px-6 bg-muted-bg">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: Shield, title: "RGPD natif", desc: "Données hébergées en Europe, chiffrement de bout en bout" },
              { icon: Globe, title: "Factur-X 2026", desc: "Format conforme à la réforme de la facturation électronique" },
              { icon: Cpu, title: "IA sous le capot", desc: "Vous gardez le contrôle. L’IA assiste, elle ne décide jamais seule" },
              { icon: Users, title: "Expert-comptable", desc: "Dashboard dédié pour votre comptable, exports automatisés" },
            ].map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-border/60 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{t.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WAITLIST ========== */}
      <section id="waitlist" className="py-24 px-6 hero-gradient">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Accès anticipé</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Rejoignez les premiers <span className="gradient-text">pilotes</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Lancement prévu été 2026. Les premiers inscrits bénéficient d&apos;un{" "}
            <strong className="text-foreground">accès prioritaire + 1 mois offert</strong>.
          </p>
        </div>
        <WaitlistForm />
      </section>

      {/* ========== EXPERT-COMPTABLE ========== */}
      <section className="py-20 px-6 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
            Vous êtes expert-comptable ?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Recommandez PILOTE AI à vos clients PME. Dashboard dédié,
            exports FEC, Sage et Cegid, et{" "}
            <strong className="text-white">15 % de commission récurrente</strong>{" "}
            sur chaque client référé.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-white text-foreground px-10 py-4 rounded-2xl text-lg font-bold hover:bg-slate-100 transition-all duration-300 hover:shadow-lg"
          >
            Devenir partenaire <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight">
              <span className="gradient-text">PILOTE</span> AI
            </span>
            <span className="text-sm text-muted">
              Moins d&apos;admin, plus de business.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <span>&copy; 2026 PILOTE AI</span>
            <a href="#" className="hover:text-foreground transition">Mentions légales</a>
            <a href="#" className="hover:text-foreground transition">Confidentialité</a>
            <a href="#" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
