"use client";

import { useState, useTransition } from "react";
import { joinWaitlist } from "./actions";

export function WaitlistForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    position?: number;
  } | null>(null);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await joinWaitlist(formData);
      setResult(res);
    });
  }

  if (result?.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center max-w-lg mx-auto">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-emerald-800 mb-2">
          {result.message}
        </h3>
        {result.position && (
          <p className="text-emerald-600">
            Vous etes en position <strong>#{result.position}</strong> sur la
            liste d&apos;attente.
          </p>
        )}
        <p className="text-emerald-600 mt-2 text-sm">
          On vous contacte dans les prochains jours pour un acces prioritaire.
        </p>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
            Prenom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Sophie"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-muted mb-1">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Mon Entreprise SAS"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
          Email professionnel *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="sophie@cabinet-conseil.fr"
          className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="size" className="block text-sm font-medium text-muted mb-1">
          Taille de votre entreprise
        </label>
        <select
          id="size"
          name="size"
          className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
        >
          <option value="">Choisir...</option>
          <option value="1">Independant / 1 personne</option>
          <option value="2-5">2 a 5 salaries</option>
          <option value="6-20">6 a 20 salaries</option>
          <option value="21-50">21 a 50 salaries</option>
          <option value="50+">Plus de 50 salaries</option>
        </select>
      </div>

      <div>
        <label htmlFor="pain" className="block text-sm font-medium text-muted mb-1">
          Votre plus gros defi au quotidien ?
        </label>
        <select
          id="pain"
          name="pain"
          className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
        >
          <option value="">Choisir...</option>
          <option value="admin">Trop d&apos;administratif</option>
          <option value="tresorerie">Visibilite sur la tresorerie</option>
          <option value="factures">Factures et relances</option>
          <option value="contenu">Creer du contenu (LinkedIn, blog)</option>
          <option value="clients">Support client chronophage</option>
          <option value="marketing">Trouver de nouveaux clients</option>
          <option value="recrutement">Recrutement</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {result && !result.success && (
        <p className="text-red-600 text-sm">{result.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 px-6 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed text-lg cursor-pointer"
      >
        {isPending ? "Inscription en cours..." : "Rejoindre la liste d'attente"}
      </button>

      <p className="text-center text-sm text-muted">
        Gratuit. Pas de spam. Acces prioritaire au lancement.
      </p>
    </form>
  );
}
