"use client";

import { motion } from "framer-motion";
import {
  FileText, Bot, PenTool, Search, BarChart3, MessageCircle,
  Target, Mic, FileCheck, Settings, Briefcase, Check, ArrowRight,
  Shield, Globe, Cpu, Users, Sparkles, Zap, Clock, ChevronRight,
  Menu, X, Loader2, CheckCircle2,
} from "lucide-react";
import { useState, useTransition } from "react";
import { joinWaitlist } from "./actions";

/* ============================================================
   DATA
   ============================================================ */

const SERVICES = [
  { icon: FileText, title: "Facturation & Admin", desc: "Factures conformes, relances auto, rapprochement bancaire IA", stat: "-35% d'impayés" },
  { icon: Bot, title: "Assistant Virtuel", desc: "Tri emails, agenda, courriers, suivi administratif", stat: "-3,5h/semaine" },
  { icon: PenTool, title: "Création de Contenu", desc: "LinkedIn, blog SEO, newsletter — en 1 clic", stat: "500x moins cher" },
  { icon: Search, title: "Veille Concurrentielle", desc: "Surveillance concurrents + rapport mensuel IA", stat: "Inclus" },
  { icon: BarChart3, title: "Analyse de Données", desc: "Dashboard KPIs, tendances, alertes prédictives", stat: "10x plus rapide" },
  { icon: MessageCircle, title: "Support Client 24/7", desc: "Chatbot IA sur votre site, escalade intelligente", stat: "-80% tickets" },
  { icon: Target, title: "Marketing Automatisé", desc: "Pipeline leads, séquences email, scoring IA", stat: "+30% leads" },
  { icon: Mic, title: "Comptes Rendus Réunion", desc: "Transcription + résumé + actions extraites", stat: "0% d'oublis" },
  { icon: FileCheck, title: "Audit Documentaire", desc: "Analyse contrats, détection incohérences", stat: "Pré-audit en min." },
  { icon: Settings, title: "Automatisation Admin", desc: "Reporting, sync outils, consolidation, rappels", stat: "-60% temps admin" },
  { icon: Briefcase, title: "Appels d'Offres", desc: "Veille marchés publics + aide rédaction réponse", stat: "+25% CA" },
];

const PLANS = [
  {
    name: "Essentiel",
    price: "49",
    annual: "39",
    target: "TPE · 1-5 salariés",
    features: ["Tous les 11 services", "1 utilisateur", "500 actions IA/mois", "Support email 48h", "Export FEC comptable", "Onboarding self-serve"],
    popular: false,
  },
  {
    name: "Pro",
    price: "99",
    annual: "79",
    target: "PME · 5-25 salariés",
    features: ["Tous les 11 services", "3 utilisateurs (+25 €/user)", "2 000 actions IA/mois", "Support chat + téléphone", "Votre logo sur le widget", "Accès API complet", "Export FEC + Sage", "Onboarding guidé 30 min"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    annual: "Sur devis",
    target: "PME · 25-250 salariés",
    features: ["Tous les 11 services", "10 utilisateurs (+20 €/user)", "10 000+ actions IA/mois", "Support dédié", "Widget full custom", "API + webhooks", "Export tous ERP", "Onboarding accompagné"],
    popular: false,
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

/* ============================================================
   NAVBAR
   ============================================================ */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
          <span className="text-gradient">PILOTE</span>{" "}
          <span className="text-foreground">MA PME</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted font-medium">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#pricing" className="hover:text-foreground transition">Tarifs</a>
          <a href="#experts" className="hover:text-foreground transition">Experts-Comptables</a>
        </div>
        <a href="#waitlist" className="hidden md:inline-flex items-center gap-1 bg-foreground text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition">
          Accès anticipé <ChevronRight className="w-4 h-4" />
        </a>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium bg-white border-b border-border">
          <a href="#services" onClick={() => setOpen(false)} className="py-2">Services</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="py-2">Tarifs</a>
          <a href="#experts" onClick={() => setOpen(false)} className="py-2">Experts-Comptables</a>
          <a href="#waitlist" onClick={() => setOpen(false)} className="bg-foreground text-white text-center py-3 rounded-xl font-bold">Accès anticipé</a>
        </div>
      )}
    </nav>
  );
}

/* ============================================================
   WAITLIST FORM
   ============================================================ */

function WaitlistForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await joinWaitlist(formData);
      setResult(res);
    });
  }

  if (result?.success) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card border border-emerald-200 rounded-2xl p-10 text-center max-w-lg mx-auto shadow-lg">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-5" />
        <h3 className="text-2xl font-bold text-emerald-800 mb-3" style={{ fontFamily: "var(--font-heading)" }}>Bienvenue parmi les pilotes !</h3>
        <p className="text-emerald-600 leading-relaxed">Vous faites partie des premiers inscrits.<br />On vous contacte très bientôt pour votre accès prioritaire.</p>
      </motion.div>
    );
  }

  return (
    <form action={handleSubmit} className="max-w-lg mx-auto bg-card rounded-2xl p-8 md:p-10 shadow-xl border border-border/60">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Prénom <span className="text-red-400">*</span></label>
          <input type="text" id="name" name="name" required placeholder="Sophie" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition text-sm" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold mb-1.5">Entreprise</label>
          <input type="text" id="company" name="company" placeholder="Mon Entreprise" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition text-sm" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-1.5">Email professionnel <span className="text-red-400">*</span></label>
        <input type="email" id="email" name="email" required placeholder="sophie@cabinet-conseil.fr" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition text-sm" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="size" className="block text-sm font-semibold mb-1.5">Taille</label>
          <select id="size" name="size" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition text-sm text-muted">
            <option value="">Choisir...</option>
            <option value="1">Indépendant</option>
            <option value="2-5">2 à 5 salariés</option>
            <option value="6-20">6 à 20 salariés</option>
            <option value="21-50">21 à 50 salariés</option>
            <option value="50+">Plus de 50</option>
          </select>
        </div>
        <div>
          <label htmlFor="pain" className="block text-sm font-semibold mb-1.5">Plus gros défi</label>
          <select id="pain" name="pain" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition text-sm text-muted">
            <option value="">Choisir...</option>
            <option value="admin">Trop d&apos;administratif</option>
            <option value="tresorerie">Visibilité trésorerie</option>
            <option value="factures">Factures et relances</option>
            <option value="contenu">Créer du contenu</option>
            <option value="clients">Support client</option>
            <option value="marketing">Trouver des clients</option>
            <option value="recrutement">Recrutement</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>
      {result && !result.success && <p className="text-red-600 text-sm mb-4 font-medium">{result.message}</p>}
      <button type="submit" disabled={isPending} className="w-full py-4 px-6 bg-accent text-accent-foreground font-bold rounded-xl hover:bg-accent/90 transition disabled:opacity-50 disabled:cursor-not-allowed text-base cursor-pointer shadow-lg shadow-accent/25 flex items-center justify-center gap-2">
        {isPending ? <><Loader2 className="w-5 h-5 animate-spin" /> Inscription...</> : <>Rejoindre la liste d&apos;attente <ArrowRight className="w-5 h-5" /></>}
      </button>
      <p className="text-center text-xs text-muted mt-4">Gratuit · Pas de spam · Accès prioritaire au lancement</p>
    </form>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ===== HERO (Lovable dark style) ===== */}
      <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/20 blur-[100px]" />

        <div className="max-w-5xl mx-auto relative z-10 py-20 lg:py-32 px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">11 services IA · 1 seul abonnement</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]" style={{ fontFamily: "var(--font-heading)" }}>
            Moins d&apos;admin,<br /><span className="text-gradient">plus de business.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            <strong className="text-white">PILOTE MA PME</strong> automatise la facturation, les emails, le marketing, le support client
            et 7 autres tâches chronophages de votre PME. Un seul portail. Une seule IA.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#waitlist" className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-accent/90 transition shadow-lg shadow-accent/25">
              Essai gratuit 14 jours <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 text-white/80 border border-white/20 px-8 py-4 rounded-xl text-base font-medium hover:bg-white/10 hover:text-white transition">
              Découvrir les services
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[{ value: "11", label: "Services IA" }, { value: "49 €", label: "par mois dès" }, { value: "-60%", label: "Temps admin" }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">{s.value}</div>
                <div className="text-sm text-white/50 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES (Lovable glass cards + nos 11 services) ===== */}
      <section id="services" className="py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              11 services, <span className="text-gradient">une seule plateforme</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Chaque service remplace un outil ou un prestataire. Tous inclus dans votre abonnement.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={fadeUp} className="glass-card rounded-2xl p-6 group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                      <span className="inline-block mt-3 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{s.stat}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mt-16 bg-muted-bg rounded-3xl p-10">
            <p className="text-muted text-lg mb-2">
              Coût actuel pour une PME avec 10 outils séparés : <span className="line-through text-red-400 font-semibold ml-1">1 000 – 1 500 €/mois</span>
            </p>
            <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-gradient">PILOTE MA PME : à partir de 49 €/mois, tout inclus</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== COMMENT ÇA MARCHE (notre section, style Lovable) ===== */}
      <section className="py-24 lg:py-32 px-6 bg-muted-bg">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Opérationnel en <span className="text-gradient">5 minutes</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, step: "1", title: "Inscrivez-vous en 2 min", desc: "Email + SIRET. Votre espace se configure automatiquement grâce aux données publiques de votre entreprise." },
              { icon: Settings, step: "2", title: "Connectez vos outils", desc: "Banque, email, agenda. En quelques clics, PILOTE MA PME a le contexte pour vous aider concrètement." },
              { icon: Clock, step: "3", title: "L'IA travaille pour vous", desc: "Chaque lundi, un brief de votre semaine. Factures, relances, contenu, support — tout roule." },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border/40">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Étape {s.step}</div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS (dark section, style Lovable) ===== */}
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { stat: "40 %", desc: "du temps des dirigeants passé sur l'administratif" },
            { stat: "1 500 €", desc: "par mois pour 10 outils séparés et non intégrés" },
            { stat: "84 %", desc: "des projets IA en PME échouent par manque de simplicité" },
            { stat: "70 %", desc: "des PME non prêtes pour la facturation électronique" },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{p.stat}</div>
              <div className="text-sm text-white/50 leading-snug">{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PRICING (Lovable style + nos données) ===== */}
      <section id="pricing" className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Un prix simple, <span className="text-gradient">tout inclus</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Tous les plans incluent les 11 services. La différence : volume, utilisateurs et support.
            </p>
            <p className="text-sm text-accent font-semibold mt-3">14 jours d&apos;essai gratuit · -20 % en annuel</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 flex flex-col ${plan.popular ? "pricing-popular bg-card relative" : "bg-card border border-border"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Le plus populaire</div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{plan.name}</h3>
                  <p className="text-sm text-muted mt-1">{plan.target}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price} €</span>
                  <span className="text-muted">/mois</span>
                  {plan.annual !== "Sur devis" && <p className="text-sm text-muted mt-1">{plan.annual} €/mois en annuel</p>}
                  {plan.annual === "Sur devis" && <p className="text-sm text-muted mt-1">Tarification sur mesure</p>}
                </div>
                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#waitlist"
                  className={`block text-center py-3.5 px-6 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25"
                      : "bg-muted-bg text-foreground hover:bg-border"
                  }`}>
                  Commencer l&apos;essai gratuit <ArrowRight className="inline w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted mt-10">
            Tous les prix sont en euros TTC. 14 jours d&apos;essai gratuit. -20 % sur l&apos;engagement annuel. Sans engagement en mensuel.
          </p>
        </div>
      </section>

      {/* ===== CONFIANCE (notre section, style épuré) ===== */}
      <section className="py-20 px-6 bg-muted-bg">
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-10">
          {[
            { icon: Shield, title: "RGPD natif", desc: "Données hébergées en Europe, chiffrement de bout en bout" },
            { icon: Globe, title: "Factur-X 2026", desc: "Format conforme à la réforme de la facturation électronique" },
            { icon: Cpu, title: "IA sous le capot", desc: "Vous gardez le contrôle. L'IA assiste, elle ne décide jamais seule" },
            { icon: Users, title: "Expert-comptable", desc: "Dashboard dédié pour votre comptable, exports automatisés" },
          ].map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center">
                <div className="w-12 h-12 bg-card rounded-2xl shadow-sm border border-border/60 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-bold text-sm mb-1">{t.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== WAITLIST (notre formulaire fonctionnel) ===== */}
      <section id="waitlist" className="py-24 lg:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Rejoignez les premiers <span className="text-gradient">pilotes</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Lancement prévu été 2026. Les premiers inscrits bénéficient d&apos;un{" "}
              <strong className="text-foreground">accès prioritaire + 1 mois offert</strong>.
            </p>
          </motion.div>
        </div>
        <WaitlistForm />
      </section>

      {/* ===== EXPERT-COMPTABLE (Lovable style) ===== */}
      <section id="experts" className="hero-gradient py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Users className="w-10 h-10 text-accent mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Vous êtes expert-comptable ?
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Recommandez PILOTE MA PME à vos clients. Dashboard dédié, exports FEC, Sage et Cegid, et{" "}
              <strong className="text-white">15 % de commission récurrente</strong> sur chaque client référé.
            </p>
            <a href="#waitlist" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-accent/90 transition shadow-lg shadow-accent/25">
              Devenir partenaire <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="grid grid-cols-2 gap-4">
            {[
              { title: "Dashboard multi-clients", desc: "Vue consolidée de tous vos dossiers PME" },
              { title: "Exports FEC / Sage / Cegid", desc: "Compatible avec vos outils de production" },
              { title: "Alertes pièces manquantes", desc: "Fini les relances manuelles chaque mois" },
              { title: "Revenue share 15 %", desc: "Commission récurrente tant que le client reste" },
            ].map((b) => (
              <div key={b.title} className="glass-card rounded-xl p-5" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h4 className="font-bold text-white text-sm mb-1">{b.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>
            Prêt à piloter votre PME avec l&apos;IA ?
          </h2>
          <p className="text-muted text-lg mb-8">14 jours gratuits. Sans carte bancaire. Sans engagement.</p>
          <a href="#waitlist" className="inline-flex items-center gap-2 bg-accent text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-accent/90 transition shadow-lg shadow-accent/25">
            Démarrer gratuitement <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-gradient">PILOTE</span> MA PME
            </span>
            <span className="text-sm text-muted">Moins d&apos;admin, plus de business.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <span>&copy; 2026 PILOTE MA PME</span>
            <a href="#" className="hover:text-foreground transition">Mentions légales</a>
            <a href="#" className="hover:text-foreground transition">Confidentialité</a>
            <a href="#" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
