import React, { useState } from 'react';
import { HOOKS_LIBRARY } from '../data/appData';
import { Sparkles, Copy, Check, Shuffle, RefreshCw, Wand2, ArrowRight } from 'lucide-react';

export default function HookGeneratorView() {
  const [niche, setNiche] = useState('Marketing Digital');
  const [error, setError] = useState('bailar en TikTok');
  const [goal, setGoal] = useState('conseguir clientes de alto valor');
  const [timeframe, setTimeframe] = useState('14 días');
  const [tool, setTool] = useState('ChatGPT');
  const [copiedId, setCopiedId] = useState(null);

  const getCustomizedHook = (template) => {
    return template
      .replace(/\[Nicho\]/g, niche || '[Nicho]')
      .replace(/\[Error Común\]/g, error || '[Error Común]')
      .replace(/\[Resultado Deseado\]/g, goal || '[Resultado Deseado]')
      .replace(/\[Resultado Extraordinario\]/g, goal || '[Resultado Extraordinario]')
      .replace(/\[Dolor Habitual\]/g, 'gastar miles en anuncios')
      .replace(/\[Tiempo\]/g, timeframe || '[Tiempo]')
      .replace(/\[Método\]/g, 'este sistema de 3 pasos')
      .replace(/\[Monto\/Tiempo\]/g, '$3,500 y 6 meses');
  };

  const copyHook = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const presets = [
    { label: 'E-commerce', n: 'Tiendas Online', e: 'hacer descuentos locos', g: 'duplicar el margen de beneficio', t: '30 días' },
    { label: 'Fitness / Salud', n: 'Pérdida de Grasa', e: 'hacer 2 horas de cardio diario', g: 'quemar grasa sin pasar hambre', t: '21 días' },
    { label: 'B2B / Agencias', n: 'Ventas B2B', e: 'mandar mensajes fríos masivos', g: 'cerrar contratos de $5k', t: '7 días' },
    { label: 'Creadores / Cursos', n: 'Cursos Online', e: 'publicar sin formato fijo', g: 'viralizar con retención > 70%', t: '14 días' }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Sparkles className="w-4 h-4" />
          Laboratorio de Ganchos Magnéticos
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Generador de Hooks de Alta Retención
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          El 70% del éxito de un video se decide en los primeros 3 segundos. Rellena tus variables de nicho y genera decenas de ganchos listos para grabar.
        </p>
      </div>

      {/* Preset Pills */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold text-muted-foreground mr-1">Presets Rápidos:</span>
        {presets.map((p, i) => (
          <button
            key={i}
            onClick={() => {
              setNiche(p.n);
              setError(p.e);
              setGoal(p.g);
              setTimeframe(p.t);
            }}
            className="px-3 py-1 rounded-lg bg-card hover:bg-card/80 border border-border text-xs font-semibold text-foreground hover:border-primary/40 transition-all"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Customizer Inputs */}
      <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 font-bold text-sm text-foreground">
          <Wand2 className="w-4 h-4 text-primary" />
          Configura tus Variables de Nicho
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">Tu Nicho / Industria:</label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">El Error Típico que Cometen:</label>
            <input
              type="text"
              value={error}
              onChange={(e) => setError(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">El Resultado Deseado:</label>
            <input
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">Plazo / Tiempo Realista:</label>
            <input
              type="text"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      {/* Generated Hooks Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {HOOKS_LIBRARY.map((item) => {
          const generated = getCustomizedHook(item.text);
          return (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-card border border-border/80 hover:border-primary/40 space-y-3 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
                    {item.type}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono flex items-center gap-1">
                    SFX: {item.sfx}
                  </span>
                </div>
                <p className="text-foreground font-bold text-sm leading-snug pt-1">
                  "{generated}"
                </p>
              </div>

              <button
                onClick={() => copyHook(item.id, generated)}
                className="w-full py-2 rounded-xl border border-border bg-background hover:bg-primary hover:text-white text-foreground text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                {copiedId === item.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    ¡Hook Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-primary" />
                    Copiar Gancho
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
