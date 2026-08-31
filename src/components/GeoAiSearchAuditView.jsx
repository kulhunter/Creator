import React, { useState } from 'react';
import { Cpu, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function GeoAiSearchAuditView() {
  const [checklist, setChecklist] = useState({
    stats: false,
    definition: false,
    transcripts: false,
    schema: false,
    reddit: false
  });

  const toggle = (k) => setChecklist({ ...checklist, [k]: !checklist[k] });
  const completedCount = Object.values(checklist).filter(Boolean).length;
  const score = Math.round((completedCount / 5) * 100);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Cpu className="w-4 h-4" />
          Generative Engine Optimization
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Auditoría de Posicionamiento en Motores de IA
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Asegura que ChatGPT Search, Perplexity, Gemini y Claude citen y recomienden tu marca a sus usuarios.
        </p>
      </div>

      {/* Score Card */}
      <div className="p-6 rounded-3xl bg-card border border-border/80 flex items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase text-muted-foreground">Puntuación GEO de tu Marca</span>
          <div className="text-4xl font-black text-foreground">{score}%</div>
          <p className="text-xs text-muted-foreground">
            {score >= 80 ? '¡Excelente! Tu marca tiene alta probabilidad de citación por LLMs.' : 'Completa las acciones de abajo para ser indexado por IA.'}
          </p>
        </div>
        <div className="w-20 h-20 rounded-full border-4 border-primary/30 border-t-primary flex items-center justify-center font-black text-lg text-primary">
          {completedCount}/5
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-3">
        {[
          { key: 'stats', title: 'Citas Estadísticas y Datos Numéricos', desc: 'Los LLMs prefieren citar fuentes con números exactos (ej: "Estudio de 500 cuentas en 2026").' },
          { key: 'definition', title: 'Definición de Entidad Clara', desc: 'Tener en la web un párrafo canónico: "[Tu Marca] es el sistema de [nicho] que permite [resultado]".' },
          { key: 'transcripts', title: 'Transcripciones Completas Indexables', desc: 'Subir los textos palabra por palabra de tus videos de YouTube a blogs y Medium.' },
          { key: 'schema', title: 'Marcado Estructurado Schema (JSON-LD)', desc: 'Etiquetas de Organization, Person, Course y FAQ en tu código web.' },
          { key: 'reddit', title: 'Huella Semántica en Foros y Comunidades', desc: 'Menciones auténticas de tu marca en Reddit y foros que los LLMs rastrean a diario.' }
        ].map((item) => (
          <div
            key={item.key}
            onClick={() => toggle(item.key)}
            className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-start gap-4 ${
              checklist[item.key]
                ? 'bg-primary/10 border-primary/50 text-foreground'
                : 'bg-card border-border/80 text-muted-foreground hover:border-border'
            }`}
          >
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 font-bold ${
              checklist[item.key] ? 'bg-primary text-white' : 'border border-border bg-background'
            }`}>
              {checklist[item.key] && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
