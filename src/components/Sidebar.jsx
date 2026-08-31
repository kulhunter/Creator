import React from "react";
import {
  LayoutDashboard,
  Film,
  Sparkles,
  FileText,
  Share2,
  Cpu,
  Users,
  FolderGit2,
  Video,
  Calendar,
  Layers
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Panel General", icon: LayoutDashboard, badge: "Hub" },
    { id: "formats", label: "32 Formatos Creativos", icon: Film, badge: "FCC" },
    { id: "hooks", label: "Generador de Hooks", icon: Sparkles, badge: "50+" },
    { id: "script_builder", label: "Constructor de Guiones", icon: FileText, badge: "IA" },
    { id: "omnichannel", label: "Estrategia 360", icon: Share2, badge: "2026" },
    { id: "geo_audit", label: "Auditoría IA (GEO)", icon: Cpu, badge: "Nuevo" },
    { id: "gurus", label: "Directorio de Maestros", icon: Users, badge: "8 Top" },
    { id: "hanah_alef", label: "Bóveda Hanah & Alef", icon: Video, badge: "Curso" },
    { id: "github_tools", label: "Stack Open Source", icon: FolderGit2, badge: "Repos" },
    { id: "planner", label: "Planificador Semanal", icon: Calendar, badge: "Live" }
  ];

  return (
    <aside className="w-full md:w-64 border-r border-slate-800 bg-slate-950/50 backdrop-blur-md p-4 flex flex-col gap-1 md:min-h-[calc(100vh-65px)]">
      <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
        Navegación del Sistema
      </div>
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-400"}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-900 border border-slate-800 text-blue-400"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto hidden md:block p-3.5 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900 border border-slate-800 text-xs">
        <div className="flex items-center gap-2 font-bold text-slate-100 mb-1">
          <Layers className="w-4 h-4 text-blue-500" />
          <span>CreatorOS v2.5</span>
        </div>
        <p className="text-slate-400 text-[11px] leading-relaxed">
          Diseñado para escalar audiencias y convertir tráfico orgánico en clientes.
        </p>
      </div>
    </aside>
  );
}
