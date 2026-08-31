import React, { useState } from "react";
import { Volume2, MessageSquare, Copy, Check, Play, Send, Calendar } from "lucide-react";

export default function OnlineToolsView() {
  const [activeTab, setActiveTab] = useState("sfx");
  const [copied, setCopied] = useState(false);

  // Real Web Audio Synthesizer
  const playSound = (type) => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === "whoosh") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === "pop") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === "ding") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(987.77, now);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      } else if (type === "buzzer") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(120, now);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === "click") {
        osc.type = "square";
        osc.frequency.setValueAtTime(1200, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.03);
        osc.start(now);
        osc.stop(now + 0.03);
      }
    } catch (e) {
      console.warn("AudioContext error", e);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          CAJA DE HERRAMIENTAS ONLINE
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Recursos Gratuitos de Producción & Cierre
        </h1>
        <p className="text-sm text-slate-400">
          Efectos de sonido sintetizados en vivo, guiones de cierre de ventas por mensaje directo y generador de bios.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveTab("sfx")}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTab === "sfx" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-900 text-slate-400"
          }`}
        >
          <Volume2 className="w-4 h-4" />
          Botonera de Efectos (SFX)
        </button>
        <button
          onClick={() => setActiveTab("dm_scripts")}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTab === "dm_scripts" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-900 text-slate-400"
          }`}
        >
          <Send className="w-4 h-4" />
          Guiones de Venta por DM
        </button>
      </div>

      {activeTab === "sfx" && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Efectos de Sonido Reales (Haz Clic para Escuchar)</h3>
            <p className="text-xs text-slate-400">Diseñados para colocar en el corte de cada 2.5 segundos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: "whoosh", name: "Whoosh (Transición)", desc: "Cuando aparece un texto o cambias de plano." },
              { id: "pop", name: "Pop (Sticker o Botón)", desc: "Cuando señalas algo en pantalla." },
              { id: "ding", name: "Ding / Acierto", desc: "Para resaltar la solución correcta." },
              { id: "buzzer", name: "Buzzer / Error", desc: "Para mostrar el error que cometen." },
              { id: "click", name: "Click de Cámara", desc: "En el llamado a la acción final." }
            ].map((s) => (
              <div
                key={s.id}
                onClick={() => playSound(s.id)}
                className="cursor-pointer p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 flex items-center justify-between group transition-all"
              >
                <div className="space-y-0.5">
                  <span className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">{s.name}</span>
                  <p className="text-[11px] text-slate-400">{s.desc}</p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "dm_scripts" && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Guión de Cierre en 3 Pasos para Mensajes Privados</h3>
            <p className="text-xs text-slate-400">Cuando alguien comente tu palabra clave, usa esta conversación para agendar o vender.</p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
              <span className="font-bold text-blue-400">MENSAJE 1 (Entregar el valor prometido):</span>
              <p className="text-slate-200">"¡Hola [Nombre]! Vi que comentaste en el video. Aquí tienes el enlace directo a la plantilla: [ENLACE]. Por cierto, ¿actualmente estás buscando [Meta] para tu propio negocio o estás empezando desde cero?"</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
              <span className="font-bold text-emerald-400">MENSAJE 2 (Identificar el obstáculo):</span>
              <p className="text-slate-200">"Entiendo totalmente. La mayoría de nuestros clientes pasaban exactamente por lo mismo antes de implementar [Solución]. ¿Qué es lo que más te ha costado resolver hasta ahora?"</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
              <span className="font-bold text-purple-400">MENSAJE 3 (Cierre / Llamada de 15 minutos):</span>
              <p className="text-slate-200">"Si quieres, podemos revisar tu caso particular en una llamada rápida de 15 minutos sin costo y te muestro el paso a paso exacto para solucionarlo. ¿Te vendría mejor el martes o el jueves?"</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
