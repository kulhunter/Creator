import React, { useState } from 'react';
import { GITHUB_TOOLS_DATA } from '../data/appData';
import { FolderGit2, Star, ExternalLink, Terminal, Copy, Check, Cpu } from 'lucide-react';

export default function GithubToolsView() {
  const [copiedId, setCopiedId] = useState(null);

  const copyCommand = (id, cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <FolderGit2 className="w-4 h-4" />
          Suite Open Source para Creadores
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Herramientas de GitHub Listas para Usar
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Ahorra miles de dólares en suscripciones. Automatiza programación, corte de silencios, transcripción y subtítulos con herramientas libres.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GITHUB_TOOLS_DATA.map((tool) => (
          <div
            key={tool.id}
            className="rounded-2xl bg-card border border-border/80 hover:border-primary/50 p-6 space-y-4 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-primary/15 text-primary border border-primary/30">
                  {tool.category}
                </span>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-background hover:bg-primary hover:text-white border border-border text-xs font-bold text-foreground transition-all"
                >
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{tool.stars}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>

              <div>
                <h3 className="text-xl font-black text-foreground">{tool.name}</h3>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">{tool.repo}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-background/80 border border-border text-xs space-y-1">
                <span className="font-bold text-primary text-[11px] block">CASO DE USO EN TU FLUJO:</span>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  {tool.useCase}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  Comando de Instalación / Ejecución:
                </span>
                <div className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-foreground flex items-center justify-between gap-2 overflow-x-auto">
                  <code className="text-[11px] text-primary">{tool.dockerCommand}</code>
                  <button
                    onClick={() => copyCommand(tool.id, tool.dockerCommand)}
                    className="p-1.5 rounded-lg hover:bg-card text-muted-foreground hover:text-foreground shrink-0 transition-colors"
                  >
                    {copiedId === tool.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
