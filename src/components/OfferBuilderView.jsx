import React, { useState } from "react";
import { DollarSign, Sparkles, RefreshCw, Check, Copy, ShieldCheck, Gift, Clock, TrendingUp } from "lucide-react";
import { generateWithAI } from "../services/aiEngine";

export default function OfferBuilderView() {
  const [service, setService] = useState("");
  const [price, setPrice] = useState("$500");
  const [dreamOutcome, setDreamOutcome] = useState("Conseguir 10 clientes nuevos este mes");
  const [loading, setLoading] = useState(false);
  const [offerResult, setOfferResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!service.trim()) return;
    setLoading(true);
    setOfferResult("");

    const prompt = `Actúa como Alex Hormozi (autor de $100M Offers).
Crea una Oferta Irresistible completa para:
- Servicio o Producto: "${service}"
- Precio objetivo: "${price}"
- Resultado Soñado del Cliente: "${dreamOutcome}"

Estructura de la Oferta:
1. NOMBRE MAGNETICO DE LA OFERTA
2. PROMESA Y RESULTADO SOÑADO
3. ELIMINACIÓN DE RIESGO & GARANTÍA INCONDICIONAL
4. STACK DE 3 BONOS DE ALTO VALOR PERCIBIDO
5. ESCASEZ O URGENCIA REAL
6. PITCH DE VENTA DE 3 FRASES PARA CERRAR`;

    const systemPrompt = "Eres Alex Hormozi. Creas ofertas de alto valor donde el cliente siente que sería estúpido decir que no.";

    try {
      const res = await generateWithAI(prompt, systemPrompt);
      setOfferResult(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(offerResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
          <DollarSign className="w-4 h-4" />
          GENERADOR DE OFERTAS IRRESISTIBLES ($100M OFFERS)
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Cobra Más y Haz que Decir Que No Sea Estúpido
        </h1>
        <p className="text-sm text-slate-400">
          Basado en la metodología de Alex Hormozi: crea un paquete con garantías, bonos y reducción de riesgo para multiplicar tus ventas.
        </p>
      </div>

      {/* Input */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 space-y-1.5">
            <label className="text-xs font-bold text-slate-300">¿Qué producto o servicio vendes?</label>
            <input
              type="text"
              placeholder="Ej: Asesoría nutricional y plan de entrenamiento personalizado..."
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Precio deseado:</label>
            <input
              type="text"
              placeholder="Ej: $297 / $1,000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="sm:col-span-3 space-y-1.5">
            <label className="text-xs font-bold text-slate-300">¿Cuál es el resultado soñado que quiere tu cliente?</label>
            <input
              type="text"
              placeholder="Ej: Bajar 8 kilos en 60 días sin pasar hambre ni pasar horas en el gimnasio..."
              value={dreamOutcome}
              onChange={(e) => setDreamOutcome(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading || !service.trim()}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.01]"
        >
          {loading ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Estructurando tu Oferta Irresistible...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generar Oferta $100M
            </>
          )}
        </button>
      </div>

      {offerResult && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/40 space-y-6 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Tu Oferta Empaquetada</span>
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? "¡Copiado!" : "Copiar Oferta"}
            </button>
          </div>

          <pre className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-sans text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
            {offerResult}
          </pre>
        </div>
      )}
    </div>
  );
}
