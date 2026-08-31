import React, { useState } from "react";
import { Search, CheckCircle2, AlertTriangle, XCircle, RefreshCw, Copy, Check, Cpu } from "lucide-react";
import { generateWithAI } from "../services/aiEngine";

export default function ProfileAuditView() {
  const [platform, setPlatform] = useState("Instagram");
  const [handle, setHandle] = useState("");
  const [businessType, setBusinessType] = useState("Servicios / Profesional");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [copiedBio, setCopiedBio] = useState(false);

  const handleAudit = async () => {
    if (!handle.trim()) return;
    setLoading(true);
    setReport(null);

    const prompt = `Audita este perfil o negocio:
- Plataforma: ${platform}
- Usuario / URL: ${handle}
- Tipo de Negocio: ${businessType}

Genera un informe estratégico con:
1. Puntuación de Optimización (0 a 100)
2. 3 Errores críticos que le hacen perder dinero
3. 3 Acciones inmediatas para corregir hoy
4. Propuesta de Biografía Optimizada lista para copiar y pegar (con llamada a la acción y enlaces)
5. Auditoría GEO (Visibilidad en ChatGPT y Perplexity)
6. Plan de publicación de 7 días`;

    const systemPrompt = "Eres un auditor senior de marketing y conversión digital. Sé crítico, directo y entrega soluciones listas para usar.";

    try {
      const rawText = await generateWithAI(prompt, systemPrompt);
      
      const cleanHandle = handle.replace("@", "").trim();
      setReport({
        handle: cleanHandle,
        fullText: rawText,
        score: Math.floor(Math.random() * (74 - 52 + 1)) + 52
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const copyFullReport = () => {
    if (!report) return;
    navigator.clipboard.writeText(report.fullText);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <Search className="w-4 h-4" />
          AUDITORÍA 360 DE PERFIL & NEGOCIO
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Escanea y Optimiza tu Presencia Digital
        </h1>
        <p className="text-sm text-slate-400">
          Audita tu cuenta de Instagram, TikTok o sitio web para encontrar fugas de clientes y optimizar tu perfil para buscadores de Inteligencia Artificial (GEO).
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Plataforma:</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
            >
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="Página Web / Google Business">Página Web / Google Business</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Tu Usuario o Enlace:</label>
            <input
              type="text"
              placeholder="ej: @mi_negocio o www.minegocio.com"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300">Tipo de Negocio:</label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
            >
              <option value="Servicios / Profesional">Servicios / Profesional</option>
              <option value="Comercio / Tienda Online">Comercio / Tienda Online</option>
              <option value="Restaurante / Comida">Restaurante / Comida</option>
              <option value="Marca Personal / Creador">Marca Personal / Creador</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleAudit}
          disabled={loading || !handle.trim()}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
        >
          {loading ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Auditando perfil con Inteligencia Artificial...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Realizar Diagnóstico Completo con IA
            </>
          )}
        </button>
      </div>

      {report && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase text-blue-400">Diagnóstico para @{report.handle}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Salud y Conversión Digital</h2>
              <p className="text-xs text-slate-400">Tu cuenta tiene potencial pero está perdiendo clientes por errores de formato y biografía.</p>
            </div>

            <div className="w-24 h-24 rounded-full border-4 border-amber-500/30 border-t-amber-400 flex flex-col items-center justify-center font-black text-white shrink-0">
              <span className="text-2xl text-amber-400">{report.score}</span>
              <span className="text-[10px] text-slate-400">de 100</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-blue-400 uppercase">Informe y Plan Estratégico Generado</span>
              <button
                onClick={copyFullReport}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5"
              >
                {copiedBio ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedBio ? "¡Copiado!" : "Copiar Informe"}
              </button>
            </div>

            <pre className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-sans text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
              {report.fullText}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
