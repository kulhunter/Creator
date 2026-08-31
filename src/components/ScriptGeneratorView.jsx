import React, { useState } from "react";
import { Bot, Sparkles, Copy, Check, Smartphone, RefreshCw, Eye, Layers } from "lucide-react";
import { generateWithAI } from "../services/aiEngine";
import { FORMATS_32 } from "../data/masterData";
import TeleprompterModal from "./TeleprompterModal";

export default function ScriptGeneratorView() {
  const [business, setBusiness] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [goal, setGoal] = useState("Vender producto o servicio por WhatsApp / DM");
  const [selectedFormat, setSelectedFormat] = useState("mesa_pov");
  const [loading, setLoading] = useState(false);
  const [generatedScript, setGeneratedScript] = useState("");
  const [copied, setCopied] = useState(false);
  const [teleprompterOpen, setTeleprompterOpen] = useState(false);

  const presets = [
    { label: "🍕 Restaurante / Comida", b: "Pizzería artesanal en Santiago con masa de 48h", a: "Parejas y familias que buscan comer rico" },
    { label: "💼 Psicóloga / Terapia", b: "Sesiones de terapia online para ansiedad y estrés", a: "Profesionales de 25-45 años abrumados" },
    { label: "👗 Ropa / E-commerce", b: "Ropa deportiva femenina que no se trasluce", a: "Mujeres activas que entrenan" },
    { label: "🛠️ Taller Mecánico / Local", b: "Mecánica automotriz honesta y con garantía", a: "Dueños de autos cansados de malas experiencias" }
  ];

  const handleGenerate = async () => {
    if (!business.trim()) return;
    setLoading(true);
    setGeneratedScript("");

    const formatObj = FORMATS_32.find((f) => f.id === selectedFormat) || FORMATS_32[0];

    const prompt = `Actúa como un Director Creativo experto en videos de alta retención (método FCC / Hormozi).
Genera un guión de video de 45 segundos para este negocio:
- Negocio / Oferta: "${business}"
- Audiencia Objetivo: "${targetAudience || 'Clientes potenciales'}"
- Objetivo del Video: "${goal}"
- Formato Visual a Utilizar: "${formatObj.title}" (${formatObj.cameraSetup})

Estructura obligatoria del Guión:
1. PUESTA EN ESCENA: Cómo colocar la cámara, objetos o utilería.
2. [00:00 - 00:03] GANCHO VISUAL & VERBAL: Frase que ataca una creencia errónea o dolor inmediato. Sin saludos.
3. [00:03 - 00:15] EL PROBLEMA O ERROR TÍPICO: Empatía directa con el cliente.
4. [00:15 - 00:32] LA SOLUCIÓN Y DEMOSTRACIÓN: Paso a paso claro en pantalla.
5. [00:32 - 00:45] LLAMADO A LA ACCIÓN (CTA): Una sola palabra clave para automatizar respuesta por mensaje directo (DM o WhatsApp).`;

    const systemPrompt = "Eres el director creativo de CreatorOS. Tus guiones son directos, sin palabras de relleno, con alto ritmo visual y orientados a la conversión.";

    try {
      const response = await generateWithAI(prompt, systemPrompt);
      setGeneratedScript(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <Bot className="w-4 h-4" />
          ESTUDIO DE GUIONES DE ALTA RETENCIÓN
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Crea Guiones que Atrapan y Venden
        </h1>
        <p className="text-sm text-slate-400">
          Selecciona tu formato visual y deja que la IA redacte un guión estructurado en 4 bloques listo para grabar y leer en teleprompter.
        </p>
      </div>

      {/* Input Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
        {/* Quick Presets */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-400">Ejemplos rápidos para probar:</span>
          <div className="flex flex-wrap gap-2">
            {presets.map((p, i) => (
              <button
                key={i}
                onClick={() => { setBusiness(p.b); setTargetAudience(p.a); }}
                className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-all"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-white">¿Qué vendes o qué quieres explicar en el video?</label>
            <textarea
              rows={2}
              placeholder="Ej: Asesoría legal para personas que quieren comprar su primera casa sin estafas..."
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="w-full p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 resize-none placeholder:text-slate-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">¿Para quién es? (Audiencia):</label>
              <input
                type="text"
                placeholder="Ej: Emprendedores, Familias..."
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Formato Visual FCC:</label>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
              >
                {FORMATS_32.map((f) => (
                  <option key={f.id} value={f.id}>{f.title} ({f.badge})</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Objetivo del Video:</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Vender por WhatsApp / DM">Vender por WhatsApp / DM</option>
                <option value="Conseguir más seguidores y alcance">Conseguir más seguidores</option>
                <option value="Posicionarme como la máxima autoridad">Autoridad y Confianza</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !business.trim()}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01]"
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generando Guión con Inteligencia Artificial...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generar Guión Listo para Grabar
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Script Display */}
      {generatedScript && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-blue-500/40 space-y-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Resultado del Generador</span>
              <h3 className="text-xl font-black text-white">Guión Optimizado para Conversión</h3>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setTeleprompterOpen(true)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition-all"
              >
                <Smartphone className="w-4 h-4" />
                Abrir Teleprompter
              </button>
              <button
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "¡Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          <pre className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-sans text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
            {generatedScript}
          </pre>
        </div>
      )}

      <TeleprompterModal
        isOpen={teleprompterOpen}
        onClose={() => setTeleprompterOpen(false)}
        scriptText={generatedScript}
      />
    </div>
  );
}
