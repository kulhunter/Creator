import React, { useState } from "react";
import { Volume2, MessageSquare, Copy, Check, Play } from "lucide-react";

export default function OnlineToolsView() {
  const [activeTool, setActiveTool] = useState("sfx");
  const [copiedBio, setCopiedBio] = useState(false);
  const [bioInput, setBioInput] = useState({ name: "Carlos", specialty: "Entrenador Online", city: "Santiago", hook: "Pierde 5kg en 60 días" });

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
      console.log("Audio not supported", e);
    }
  };

  const generatedBio = "🔥 " + bioInput.hook + " sin dietas extremas\n📍 " + bioInput.specialty + " | " + bioInput.city + "\n👥 +50 personas transformadas\n👇 Toca aquí abajo para escribirnos directo al WhatsApp:";

  const copyBio = () => {
    navigator.clipboard.writeText(generatedBio);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          HERRAMIENTAS 100% GRATUITAS EN LÍNEA
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Caja de Herramientas del Creador
        </h1>
        <p className="text-sm text-slate-400">
          Todo lo que necesitas para producir tus videos sin instalar programas complejos ni pagar suscripciones.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveTool("sfx")}
          className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTool === "sfx"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          <Volume2 className="w-4 h-4" />
          Botonera de Efectos de Sonido (SFX)
        </button>

        <button
          onClick={() => setActiveTool("bio")}
          className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
            activeTool === "bio"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Generador de Biografías
        </button>
      </div>

      {activeTool === "sfx" && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Efectos de Sonido Reales (Haz Clic para Escuchar)</h3>
            <p className="text-xs text-slate-400">
              Estos son los 5 sonidos obligatorios que hacen que un video no aburra. Pruébalos en vivo:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: "whoosh", name: "Whoosh", desc: "Para transiciones y textos que entran volando." },
              { id: "pop", name: "Pop", desc: "Para cuando señalas algo o sale un sticker." },
              { id: "ding", name: "Ding / Campana", desc: "Para cuando das una respuesta correcta." },
              { id: "buzzer", name: "Buzzer / Error", desc: "Para cuando muestras lo que la gente hace mal." },
              { id: "click", name: "Click", desc: "Para cuando pides que toquen el botón o comenten." }
            ].map((s) => (
              <div
                key={s.id}
                onClick={() => playSound(s.id)}
                className="cursor-pointer p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="space-y-1">
                  <span className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">{s.name}</span>
                  <p className="text-[11px] text-slate-400">{s.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTool === "bio" && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">Generador de Biografías que Convierten Visitas en Clientes</h3>
            <p className="text-xs text-slate-400">Rellena tus datos y copia la biografía formateada con emojis para tu Instagram o TikTok.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Tu Especialidad o Negocio:</label>
              <input
                type="text"
                value={bioInput.specialty}
                onChange={(e) => setBioInput({ ...bioInput, specialty: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Tu Ciudad o Modalidad:</label>
              <input
                type="text"
                value={bioInput.city}
                onChange={(e) => setBioInput({ ...bioInput, city: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-slate-300">La Promesa o Resultado que entregas:</label>
              <input
                type="text"
                value={bioInput.hook}
                onChange={(e) => setBioInput({ ...bioInput, hook: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-blue-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400">Vista Previa de tu Biografía</span>
              <button
                onClick={copyBio}
                className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1"
              >
                {copiedBio ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedBio ? "¡Copiada!" : "Copiar"}
              </button>
            </div>
            <pre className="text-sm font-sans text-white whitespace-pre-wrap leading-relaxed">
              {generatedBio}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
