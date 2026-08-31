import React, { useState } from "react";
import { HOOK_COLLECTION } from "../data/masterData";
import { Sparkles, Copy, Check, RefreshCw } from "lucide-react";
import { generateWithAI } from "../services/aiEngine";

export default function HookGeneratorProView() {
  const [topic, setTopic] = useState("Vender servicios online");
  const [customHooks, setCustomHooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleGenerateCustom = async () => {
    if (!topic.trim()) return;
    setLoading(true);

    const prompt = `Genera 5 ganchos (hooks) de 3 segundos para videos de TikTok/Reels sobre este tema: "${topic}".
Deben ser frases cortas, en español natural, que rompan una creencia común o generen urgencia inmediata sin sonar a robot.`;

    try {
      const res = await generateWithAI(prompt, "Eres un copywriter experto en hooks virales para redes sociales.");
      const lines = res.split("\n").filter((l) => l.trim().length > 5);
      setCustomHooks(lines.slice(0, 5));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <Sparkles className="w-4 h-4" />
          LABORATORIO DE GANCHOS (HOOKS)
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Ganchos que Paran el Scroll en 3 Segundos
        </h1>
        <p className="text-sm text-slate-400">
          Usa los ganchos validados o genera 5 ganchos personalizados con Inteligencia Artificial para tu nicho.
        </p>
      </div>

      {/* AI Hook Generator */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Escribe tu tema (ej: Cómo bajar de peso, Invertir en bienes raíces...)"
            className="flex-1 p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleGenerateCustom}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Generar con IA
          </button>
        </div>

        {customHooks.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <span className="text-xs font-bold text-blue-400 uppercase">Ganchos Generados para ti:</span>
            {customHooks.map((h, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs">
                <span className="text-white font-bold">{h}</span>
                <button
                  onClick={() => handleCopy(h, `custom_${i}`)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold shrink-0"
                >
                  {copiedIdx === `custom_${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preset Categories */}
      <div className="space-y-6">
        {HOOK_COLLECTION.map((cat, ci) => (
          <div key={ci} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div>
              <h3 className="text-base font-bold text-white">{cat.category}</h3>
              <p className="text-xs text-slate-400">{cat.desc}</p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {cat.hooks.map((hk, hi) => {
                const uniqueKey = `${ci}_${hi}`;
                return (
                  <div
                    key={hi}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-blue-500/40 flex items-center justify-between gap-4 transition-all"
                  >
                    <span className="text-xs font-semibold text-slate-200">"{hk}"</span>
                    <button
                      onClick={() => handleCopy(hk, uniqueKey)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0"
                    >
                      {copiedIdx === uniqueKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedIdx === uniqueKey ? "Copiado" : "Copiar"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
