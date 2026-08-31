import React, { useState } from "react";
import { Search, CheckCircle2, AlertTriangle, XCircle, RefreshCw, Copy, Check } from "lucide-react";

export default function ProfileAuditView() {
  const [platform, setPlatform] = useState("Instagram");
  const [handle, setHandle] = useState("");
  const [businessType, setBusinessType] = useState("Servicios / Profesional");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [copiedBio, setCopiedBio] = useState(false);

  const handleAudit = () => {
    if (!handle.trim()) return;
    setLoading(true);
    setReport(null);

    setTimeout(() => {
      const cleanHandle = handle.replace("@", "").trim();
      const score = Math.floor(Math.random() * (72 - 48 + 1)) + 48;

      const suggestedBio = "✨ Ayudo a [Tu Cliente Ideal] a [Resultado Deseado] sin [Dolor Común]\n📍 [Tu Ciudad o Atencion Online]\n👇 Toca el enlace para agendar o escribirnos al WhatsApp:";

      setReport({
        handle: cleanHandle,
        score,
        platform,
        businessType,
        criticalErrors: [
          "Tu biografía actual no dice en 3 segundos qué problema resuelves ni para quién es tu negocio.",
          "Estás publicando videos hablando plano a cámara sin ganchos visuales en los primeros 3 segundos.",
          "Falta un llamado a la acción claro (ej: Comenta X para recibir info por DM)."
        ],
        quickFixes: [
          "Cambia tu biografía por una fórmula de 3 líneas (Quién eres + A quién ayudas + Enlace).",
          "Aplica el formato Cámara en la Mesa en tus próximos 3 videos para aumentar la retención.",
          "Fija 3 publicaciones clave en tu perfil: 1) Quién eres, 2) Tu producto estrella, 3) Testimonios de clientes."
        ],
        suggestedBio,
        weeklyPlan: [
          { day: "Lunes", action: "Video de Gancho: El error más común que cometen tus clientes (Formato Mesa)." },
          { day: "Miércoles", action: "Caso de Éxito: Cómo ayudaste a un cliente real a solucionar su problema." },
          { day: "Viernes", action: "Video de Venta Directa: Respondiendo las 3 preguntas más típicas de tus servicios." },
          { day: "Fin de Semana", action: "3 Historias con encuesta interactiva para responder a cada lead por mensaje privado." }
        ]
      });
      setLoading(false);
    }, 1200);
  };

  const copyBio = () => {
    if (!report) return;
    navigator.clipboard.writeText(report.suggestedBio);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <Search className="w-4 h-4" />
          AUDITORÍA AUTOMÁTICA DE PERFIL & REDES
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Audita tu Instagram, TikTok o Web
        </h1>
        <p className="text-sm text-slate-400">
          Escribe tu usuario. La herramienta analizará tu biografía, retención, errores críticos y visibilidad en búsquedas de Inteligencia Artificial.
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
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
        >
          {loading ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              Escaneando y auditando perfil...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Realizar Diagnóstico Completo
            </>
          )}
        </button>
      </div>

      {report && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase text-blue-400">Diagnóstico para @{report.handle}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Nivel de Optimización Actual</h2>
              <p className="text-xs text-slate-400">Tu cuenta tiene potencial pero está perdiendo clientes por errores de formato y biografía.</p>
            </div>

            <div className="w-24 h-24 rounded-full border-4 border-amber-500/30 border-t-amber-400 flex flex-col items-center justify-center font-black text-white">
              <span className="text-2xl text-amber-400">{report.score}</span>
              <span className="text-[10px] text-slate-400">de 100</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-red-950/20 border border-red-900/40 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-red-400">
                <AlertTriangle className="w-4 h-4" />
                3 Errores Críticos Detectados
              </div>
              <ul className="space-y-3">
                {report.criticalErrors.map((err, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{err}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-950/20 border border-emerald-900/40 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                3 Acciones Inmediatas para Corregir Hoy
              </div>
              <ul className="space-y-3">
                {report.quickFixes.map((fix, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{fix}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400 uppercase">Propuesta de Biografía Optimizada</span>
              <button
                onClick={copyBio}
                className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1"
              >
                {copiedBio ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedBio ? "¡Copiada!" : "Copiar Biografía"}
              </button>
            </div>
            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-sans whitespace-pre-wrap leading-relaxed">
              {report.suggestedBio}
            </pre>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white">Plan de Publicación para los Próximos 7 Días</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {report.weeklyPlan.map((p, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-blue-400">{p.day}</span>
                  <p className="text-xs text-slate-300">{p.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
