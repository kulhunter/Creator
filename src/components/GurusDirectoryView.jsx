import React from 'react';
import { GURUS_DATA } from '../data/appData';
import { Users, ExternalLink, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export default function GurusDirectoryView() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Users className="w-4 h-4" />
          Los Maestros del Ecosistema
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Directorio de Creadores y Metodologías
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Conoce a los 8 referentes mundiales de los cuales hemos sintetizado las mejores reglas de retención, copywriting, optimización GEO y conversión.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GURUS_DATA.map((guru) => (
          <div
            key={guru.id}
            className="rounded-2xl bg-card border border-border/80 hover:border-primary/50 p-6 space-y-4 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: guru.color }}
                >
                  {guru.avatar}
                </div>
                <div className="flex items-center gap-1.5">
                  {Object.entries(guru.links).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background hover:bg-primary/20 hover:text-primary text-muted-foreground transition-all"
                      title={platform}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-foreground">{guru.name}</h3>
                <p className="text-xs text-primary font-semibold mt-0.5">{guru.role}</p>
              </div>

              {/* Quote */}
              <div className="p-3 rounded-xl bg-background/60 border border-border/60 text-xs italic text-muted-foreground flex gap-2">
                <Quote className="w-4 h-4 text-primary shrink-0 opacity-60" />
                <span>"{guru.famousQuote}"</span>
              </div>

              {/* Core Principles */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-foreground uppercase tracking-wider block">
                  Reglas Maestras:
                </span>
                <ul className="space-y-1.5">
                  {guru.corePrinciples.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-tight">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
