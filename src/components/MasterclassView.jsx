import React from "react";
import { PlayCircle, CheckCircle2 } from "lucide-react";

export default function MasterclassView() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <PlayCircle className="w-4 h-4" />
          CURSO & MASTERCLASS RECONSTRUIDA
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Formato Creativo de Contenido (FCC)
        </h1>
        <p className="text-sm text-slate-400">
          La clase completa de 37 minutos donde se explica el método de ingeniería visual para pasar de ser invisible a convertir clientes.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
        <div className="p-6 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-blue-400 uppercase">Video Masterclass Descargado</span>
            <h3 className="text-lg font-black text-white">formato_criativo_de_conteudo.mp4</h3>
            <p className="text-xs text-slate-400">720p HD | Duración: 37:12 min | Tamaño: 186 MB</p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            Descargado en tu carpeta Descargas
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-sm text-white uppercase tracking-wider">Los 3 Pilares del Método:</h4>
          <div className="space-y-2">
            {[
              "1. La retención se gana con utilería y movimiento en los primeros 3 segundos, no con discursos teóricos.",
              "2. Estandariza un formato propio (Cámara en la mesa, pantalla dividida) para que la audiencia te identifique de inmediato.",
              "3. Nunca vendas dentro del video; pide una palabra clave en comentarios para automatizar la venta privada por mensaje directo."
            ].map((pt, i) => (
              <p key={i} className="text-xs sm:text-sm text-slate-300 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                {pt}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
