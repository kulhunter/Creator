import React, { useState } from "react";
import { FORMATS_32 } from "../data/masterData";
import { Film, Eye, Check, Copy } from "lucide-react";

export default function FormatsVisualView() {
  const [selectedCat, setSelectedCat] = useState("Todos");
  const [copiedId, setCopiedId] = useState(null);

  const categories = ["Todos", "Sin Rostro / Fácil", "Alta Retención", "Autoridad", "Entretenido"];

  const filtered = selectedCat === "Todos" 
    ? FORMATS_32 
    : FORMATS_32.filter((f) => f.category.includes(selectedCat));

  const handleCopy = (format) => {
    const text = `FORMATO: ${format.title}\n\nCÓMO PONER LA CÁMARA:\n${format.cameraSetup}\n\nGANCHO MODELO:\n"${format.exampleHook}"\n\nPASOS:\n${format.actionSteps.join("\n")}`;
    navigator.clipboard.writeText(text);
    setCopiedId(format.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <Film className="w-4 h-4" />
          BIBLIOTECA DE FORMATOS CREATIVOS FCC
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Deja de Grabar Videos Aburridos
        </h1>
        <p className="text-sm text-slate-400">
          Usa formatos visuales probados para que tu contenido sea reconocible al instante y retenga a la audiencia.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCat(c)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCat === c
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Format Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((f) => (
          <div
            key={f.id}
            className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {f.badge}
                </span>
                <span className="text-[11px] font-bold text-slate-500">{f.category}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{f.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{f.whyItWorks}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                <span className="font-bold text-blue-400 flex items-center gap-1.5 text-[11px]">
                  <Eye className="w-3.5 h-3.5" />
                  CÓMO GRABAR:
                </span>
                <p className="text-slate-300">{f.cameraSetup}</p>
              </div>

              <div className="p-3 rounded-2xl bg-blue-950/30 border border-blue-800/30 text-xs">
                <span className="font-bold text-blue-400 text-[10px] block mb-0.5">EJEMPLO DE GANCHO:</span>
                <p className="text-slate-200 italic">"{f.exampleHook}"</p>
              </div>
            </div>

            <button
              onClick={() => handleCopy(f)}
              className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-blue-600 hover:text-white border border-slate-800 text-xs font-bold text-slate-300 flex items-center justify-center gap-2 transition-all"
            >
              {copiedId === f.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copiedId === f.id ? "¡Copiado!" : "Copiar Estructura"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
