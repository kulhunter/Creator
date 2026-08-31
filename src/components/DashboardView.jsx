import React from "react";
import { Sparkles, ArrowRight, Zap, Target, TrendingUp, Cpu } from "lucide-react";

export default function DashboardView({ setActiveTab }) {
  const quickStats = [
    { label: "Formatos Validados", value: "32 Plantillas", icon: Zap, color: "from-amber-500 to-orange-500", tab: "formats" },
    { label: "Biblioteca de Ganchos", value: "50+ Hooks", icon: Sparkles, color: "from-blue-500 to-cyan-500", tab: "hooks" },
    { label: "Herramientas GitHub", value: "5 Open Source", icon: Cpu, color: "from-purple-500 to-pink-500", tab: "github_tools" },
    { label: "Canales Omnicanal", value: "6 Plataformas", icon: TrendingUp, color: "from-emerald-500 to-teal-500", tab: "omnichannel" }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 p-8 md:p-10 shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            EL SISTEMA SOCIAL MEDIA 360 (2026-2027)
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Crea contenido que <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent">retiene, posiciona en IA y vende</span>.
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Combina los principios de los 8 mejores creadores del mundo (Hormozi, MrBeast, Dan Koe, Hanah & Alef) con herramientas open source y optimización para ChatGPT y Perplexity.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab("script_builder")}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
            >
              <Zap className="w-4 h-4" />
              Crear Guión con IA
            </button>
            <button
              onClick={() => setActiveTab("formats")}
              className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-sm flex items-center gap-2 transition-all"
            >
              Explorar los 32 Formatos
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              onClick={() => setActiveTab(stat.tab)}
              className="group cursor-pointer p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">{stat.label}</span>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white shadow-md`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3 Pillars Roadmap */}
      <div className="p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white">El Embudo de Conversión 360</h2>
          <p className="text-xs text-slate-400">Flujo científico desde el descubrimiento hasta el cierre de venta</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs">
              1
            </div>
            <h3 className="font-bold text-white text-sm">Atracción Visual (Reels / TikTok)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formatos de firma como Desk POV, Pantalla Dividida o Metáforas con corte cada 2.5s para captar no-seguidores.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-xs">
              2
            </div>
            <h3 className="font-bold text-white text-sm">Confianza & GEO (YouTube / Threads)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Videos de 20-30 min y posts de texto indexables por ChatGPT y Perplexity para construir autoridad canónica.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs">
              3
            </div>
            <h3 className="font-bold text-white text-sm">Conversión en DM (ManyChat)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Llamados a palabras clave en comentarios que activan flujos de cualificación y venta en privado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
