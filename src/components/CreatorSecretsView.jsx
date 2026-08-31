import React from "react";
import { GURUS_DATA } from "../data/masterData";
import { Lightbulb, CheckCircle2 } from "lucide-react";

export default function CreatorSecretsView() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <Lightbulb className="w-4 h-4" />
          ESTRATEGIAS DE LOS MAESTROS
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Secretos de Quienes Facturan Millones
        </h1>
        <p className="text-sm text-slate-400">
          Las reglas innegociables de los mayores referentes del mundo explicadas en una sola frase aplicable hoy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GURUS_DATA.map((g, i) => (
          <div key={i} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-sm hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-black text-lg text-white">{g.name}</span>
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">{g.role}</span>
            </div>

            <p className="text-sm text-slate-200 italic font-medium leading-relaxed">
              "{g.coreIdea}"
            </p>

            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
              <span className="font-bold text-slate-300">Regla Fundamental:</span>
              <p>{g.rule}</p>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-900/40 text-xs space-y-1">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                CÓMO APLICARLO HOY:
              </span>
              <p className="text-slate-300">{g.action}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
