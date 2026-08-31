import React, { useState, useEffect } from "react";
import { Sparkles, Bot, Search, Film, Wrench, Lightbulb, PlayCircle, Menu, X, Cpu, DollarSign } from "lucide-react";
import { getAiConfig, AI_PROVIDERS } from "../services/aiEngine";
import AiConfigModal from "./AiConfigModal";

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiConfig, setAiConfig] = useState(getAiConfig());

  useEffect(() => {
    const handleConfigChange = () => setAiConfig(getAiConfig());
    window.addEventListener("creatoros_ai_config_changed", handleConfigChange);
    return () => window.removeEventListener("creatoros_ai_config_changed", handleConfigChange);
  }, []);

  const navItems = [
    { id: "script_ai", label: "Generador de Guiones", icon: Bot, highlight: true },
    { id: "offer_builder", label: "Oferta $100M", icon: DollarSign },
    { id: "audit_profile", label: "Auditoría de Negocio", icon: Search },
    { id: "hooks_pro", label: "Ganchos Virales", icon: Sparkles },
    { id: "formats_simple", label: "32 Formatos", icon: Film },
    { id: "tools_online", label: "Herramientas", icon: Wrench },
    { id: "ai_chat", label: "AI Copilot", icon: Cpu },
    { id: "secrets_masters", label: "Secretos Top", icon: Lightbulb },
    { id: "masterclass", label: "Masterclass", icon: PlayCircle }
  ];

  const getProviderLabel = () => {
    if (aiConfig.provider === AI_PROVIDERS.OLLAMA) return `Ollama (${aiConfig.ollamaModel})`;
    if (aiConfig.provider === AI_PROVIDERS.GROQ) return "Groq (Llama 3.3)";
    if (aiConfig.provider === AI_PROVIDERS.GEMINI) return "Gemini 2.0";
    return "IA Integrada";
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <div 
            onClick={() => setActiveTab("script_ai")}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-black text-base tracking-tight text-white">
                Creator<span className="text-blue-500">OS</span>
              </span>
              <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 hidden sm:inline-block">
                Pro Suite
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : item.highlight
                      ? "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/30"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* AI Settings Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAiModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 flex items-center gap-2 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{getProviderLabel()}</span>
            </button>

            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden p-4 bg-slate-950 border-b border-slate-800 space-y-1.5 animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setMobileOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      <AiConfigModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </>
  );
}
