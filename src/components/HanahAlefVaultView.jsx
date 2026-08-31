import React from 'react';
import { Video, Sparkles, CheckCircle2, Play, BookOpen, AlertCircle } from 'lucide-react';

export default function HanahAlefVaultView() {
  const modules = [
    { num: '01', title: 'Fundamentos y Métricas Reales', lessons: ['Edutainment vs Profesor Aburrido', 'Stop-rate, Completion-rate y Shares', 'El Síndrome de la Cabeza Parlante', 'Las 4 Fases del Crecimiento'] },
    { num: '02', title: 'Formatos Validados para Copiar', lessons: ['Desk POV (Cámara Cenital)', 'Pantalla Dividida A/B', 'Green Screen Contextual', 'Palestrinha (Mini-Charla en Pizarra)', 'Formato Narrado (B-roll + Voiceover)'] },
    { num: '03', title: 'Ingeniería de Guiones de Retención', lessons: ['Estructura AIDA para Reels', 'Dopamine Loops (Open Loops)', 'Lapidación (Eliminar 40% de grasa)', 'Estructura I.H.C.', 'Estructura Ele, Eu, Você e o Futuro'] },
    { num: '04', title: 'Branding Primitivo e Identidad', lessons: ['Formatos Auténticos sin Copiar', 'Elementos Visuales No Verbales', 'Voz Marcante y Cadencia', 'El Efecto Jornada (Series por Episodios)'] }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Video className="w-4 h-4" />
          Bóveda Forense de Entrenamiento
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Reconstrucción: Formato Creativo de Contenido
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Análisis forense, mapa de aulas y deconstrucción de la metodología de Hanah Franklin y Alef Marqs.
        </p>
      </div>

      {/* Video Ready Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-card to-primary/10 border border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
            <CheckCircle2 className="w-3 h-3" />
            Descargado en tu carpeta de Descargas
          </div>
          <h3 className="text-xl font-bold text-foreground">Masterclass Completa (~37 min en 720p)</h3>
          <p className="text-xs text-muted-foreground">
            Archivo local: <code>formato_criativo_de_conteudo.mp4</code> (186 MB)
          </p>
        </div>
      </div>

      {/* Modules Syllabus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {modules.map((mod) => (
          <div key={mod.num} className="p-6 rounded-2xl bg-card border border-border/80 space-y-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/15 text-primary font-black flex items-center justify-center text-sm border border-primary/30">
                {mod.num}
              </div>
              <h3 className="font-bold text-foreground text-base">{mod.title}</h3>
            </div>

            <ul className="space-y-2">
              {mod.lessons.map((lesson, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
