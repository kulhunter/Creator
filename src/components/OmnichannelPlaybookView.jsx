import React from "react";
import { Share2, Video, MessageSquare, MapPin, Cpu, CheckCircle2, Globe, Radio } from "lucide-react";

export default function OmnichannelPlaybookView() {
  const platforms = [
    { name: "Instagram", icon: Video, role: "Centro de Conversión", desc: "Reels para no seguidores, Carruseles para guardados, Stories + ManyChat para venta en DM." },
    { name: "TikTok", icon: Radio, role: "Motor de Búsqueda", desc: "TikTok SEO indexando palabras clave en pantalla y audio; series para retención de perfil." },
    { name: "Threads & X", icon: MessageSquare, role: "Laboratorio Text-First", desc: "Validar ganchos y tesis en texto antes de invertir tiempo en producción audiovisual." },
    { name: "YouTube (Shorts + Long)", icon: Video, role: "Monopolio de Confianza", desc: "Shorts para atraer suscriptores y videos de 20-30m para convertir desconocidos en fans." },
    { name: "Google Business", icon: MapPin, role: "Autoridad Local", desc: "Publicaciones semanales sincronizadas, reseñas con palabras clave y geoetiquetado." },
    { name: "Motores de IA (GEO)", icon: Cpu, role: "Búsqueda Generativa", desc: "Optimización de entidad para ser citado en ChatGPT Search, Perplexity, Gemini y Claude." }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
          <Share2 className="w-4 h-4" />
          Ecosistema Omnicanal 360
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white">
          Estrategia Canal por Canal (2026-2027)
        </h1>
        <p className="text-sm text-slate-400 max-w-3xl">
          Cómo interconectar cada plataforma para que un solo esfuerzo de creación alimente todo tu embudo de ventas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {platforms.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-sm hover:border-blue-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  {p.role}
                </span>
                <Icon className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
