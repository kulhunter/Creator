import React, { useState } from 'react';
import { FORMATS_DATA } from '../data/appData';
import { Search, Filter, Sparkles, Copy, Check, Clock, Eye, Video } from 'lucide-react';

export default function FormatsExplorerView() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['Todos', 'Inmersión y Táctil', 'Contraste', 'Curiosidad', 'Didáctica', 'Storytelling'];

  const filtered = FORMATS_DATA.filter((f) => {
    const matchesSearch = f.title.toLowerCase().includes(search.toLowerCase()) || f.description.toLowerCase().includes(search.toLowerCase()) || f.tag.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'Todos' || f.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const copyStructure = (format) => {
    const text = `FORMATO: ${format.title}\nETIQUETA: ${format.tag}\nGANCHO RECOMENDADO: ${format.hookExample}\n\nESTRUCTURA SEGUNDO A SEGUNDO:\n` +
      format.structure.map((s) => `[${s.time}]\nAUDIO: ${s.audio}\nVISUAL/SFX: ${s.visual}\n`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedId(format.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Film className="w-4 h-4" />
          Catálogo Validado de Producción
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Los 32 Formatos Creativos de Firma
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Estandariza tu proceso de grabación. Elige una plantilla predefinida con puesta en escena, guión segundo a segundo y diseño de sonido.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar formato (ej. POV, split screen)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Formats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((format) => (
          <div
            key={format.id}
            className="group rounded-2xl bg-card border border-border/80 hover:border-primary/50 p-6 space-y-4 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
                  {format.tag}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{format.duration}</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {format.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {format.description}
                </p>
              </div>

              {/* Visual Cue Badge */}
              <div className="p-3 rounded-xl bg-background/80 border border-border text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-primary text-[11px]">
                  <Eye className="w-3.5 h-3.5" />
                  PUESTA EN ESCENA (VISUAL CUE):
                </div>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  {format.visualCue}
                </p>
              </div>

              {/* Hook Preview */}
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs">
                <span className="font-bold text-primary text-[11px] block mb-0.5">GANCHO MODELO:</span>
                <p className="text-foreground italic font-medium text-[11px]">
                  "{format.hookExample}"
                </p>
              </div>

              {/* Structure Steps */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  Desglose Segundo a Segundo:
                </span>
                {format.structure.map((step, idx) => (
                  <div key={idx} className="flex gap-2 text-xs py-1 border-b border-border/50 last:border-none">
                    <span className="font-bold text-primary text-[11px] w-14 shrink-0">{step.time}</span>
                    <div className="space-y-0.5">
                      <p className="text-foreground text-[11px]">{step.audio}</p>
                      <p className="text-muted-foreground text-[10px] italic">{step.visual}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => copyStructure(format)}
              className="w-full py-2.5 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              {copiedId === format.id ? (
                <>
                  <Check className="w-4 h-4" />
                  ¡Guión Copiado al Portapapeles!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar Estructura Completa
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Film(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>
    </svg>
  );
}
