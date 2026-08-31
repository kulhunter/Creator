import React, { useState } from "react";
import { HOOK_CATEGORIES } from "../data/easyData";
import { Sparkles, Copy, Check } from "lucide-react";

export default function HookGeneratorProView() {
  const [niche, setNiche] = useState("Marketing / Negocios");
  const [error, setError] = useState("publicar sin formato");
  const [goal, setGoal] = useState("conseguir clientes");
  const [selectedCat, setSelectedCat] = useState("provocador");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const currentCat = HOOK_CATEGORIES.find((c) => c.id === selectedCat) || HOOK_CATEGORIES[0];

  const getHookText = (template) => {
    return template
      .replace(/{nicho}/g, niche || "tu nicho")
      .replace(/{error}/g, error || "hacerlo de la forma tradicional")
      .replace(/{meta}/g, goal || "tener resultados");
  };

  const handleCopy = (idx, text) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <Sparkles className="w-4 h-4" />
          LABORATORIO DE GANCHOS (HOOKS)
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Ganchos Virales que Paran el Scroll
        </h1>
        <p className="text-sm text-slate-400">
          Elige la emoción que quieres transmitir y obtén frases de 3 segundos probadas para que no pasen de largo de tus videos.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-xl">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300">Tu Tema o Nicho:</label>
          <input
            type="text"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300">El Error que cometen:</label>
          <input
            type="text"
            value={error}
            onChange={(e) => setError(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-300">La Meta o Resultado:</label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {HOOK_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCat === cat.id
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3">
        {currentCat.hooks.map((template, idx) => {
          const hookText = getHookText(template);
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Opción {idx + 1}</span>
                <p className="text-base font-bold text-white">"{hookText}"</p>
              </div>

              <button
                onClick={() => handleCopy(idx, hookText)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-950 hover:bg-blue-600 hover:text-white border border-slate-800 text-xs font-bold text-slate-300 flex items-center justify-center gap-1.5 transition-all"
              >
                {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedIndex === idx ? "¡Copiado!" : "Copiar"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
