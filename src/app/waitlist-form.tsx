"use client";

import { useState, useTransition } from "react";
import { joinWaitlist } from "./actions";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

export function WaitlistForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await joinWaitlist(formData);
      setResult(res);
    });
  }

  if (result?.success) {
    return (
      <div className="bg-white border border-emerald-200 rounded-3xl p-10 text-center max-w-lg mx-auto shadow-lg shadow-emerald-500/5 animate-fade-up">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-5" />
        <h3 className="text-2xl font-extrabold text-emerald-800 mb-3">
          Bienvenue parmi les pilotes\ !
        </h3>
        <p className="text-emerald-600 leading-relaxed">
          Vous faites partie des premiers inscrits.
          <br />
          On vous contacte tr\ès bient\ôt pour votre acc\ès prioritaire.
        </p>
        <div className="mt-6 pt-6 border-t border-emerald-100 text-sm text-emerald-500">
          Partagez PILOTE\ AI \à un dirigeant de PME qui en a besoin
        </div>
      </div>
    );
  }

  return (
    <form
      action={handleSubmit}
      className="max-w-lg mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/5 border border-border/60"
    >
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
            Pr\énom <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Sophie"
            className="w-full px-4 py-3 rounded-xl border border-border bg-muted-bg/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-1.5">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Mon Entreprise"
            className="w-full px-4 py-3 rounded-xl border border-border bg-muted-bg/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
          Email professionnel <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="sophie@cabinet-conseil.fr"
          className="w-full px-4 py-3 rounded-xl border border-border bg-muted-bg/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="size" className="block text-sm font-semibold text-foreground mb-1.5">
            Taille
          </label>
          <select
            id="size"
            name="size"
            className="w-full px-4 py-3 rounded-xl border border-border bg-muted-bg/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm text-muted"
          >
            <option value="">Choisir...</option>
            <option value="1">Ind\épendant</option>
            <option value="2-5">2 \à 5 salari\és</option>
            <option value="6-20">6 \à 20 salari\és</option>
            <option value="21-50">21 \à 50 salari\és</option>
            <option value="50+">Plus de 50</option>
          </select>
        </div>
        <div>
          <label htmlFor="pain" className="block text-sm font-semibold text-foreground mb-1.5">
            Plus gros d\éfi
          </label>
          <select
            id="pain"
            name="pain"
            className="w-full px-4 py-3 rounded-xl border border-border bg-muted-bg/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition text-sm text-muted"
          >
            <option value="">Choisir...</option>
            <option value="admin">Trop d&apos;administratif</option>
            <option value="tresorerie">Visibilit\é tr\ésorerie</option>
            <option value="factures">Factures et relances</option>
            <option value="contenu">Cr\éer du contenu</option>
            <option value="clients">Support client</option>
            <option value="marketing">Trouver des clients</option>
            <option value="recrutement">Recrutement</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      {result && !result.success && (
        <p className="text-red-600 text-sm mb-4 font-medium">{result.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 px-6 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base cursor-pointer hover:-translate-y-0.5 flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Inscription en cours...
          </>
        ) : (
          <>
            Rejoindre la liste d&apos;attente
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted mt-4">
        Gratuit &middot; Pas de spam &middot; Acc\ès prioritaire au lancement
      </p>
    </form>
  );
}
