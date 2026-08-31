import React, { useState, useEffect } from "react";
import { X, Cpu, Check, AlertCircle, RefreshCw, Key, Server, Sparkles, ExternalLink } from "lucide-react";
import { getAiConfig, saveAiConfig, checkOllamaConnection, AI_PROVIDERS } from "../services/aiEngine";

export default function AiConfigModal({ isOpen, onClose }) {
  const [config, setConfig] = useState(getAiConfig());
  const [ollamaStatus, setOllamaStatus] = useState({ checking: false, online: false, models: [] });
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const current = getAiConfig();
      setConfig(current);
      if (current.provider === AI_PROVIDERS.OLLAMA) {
        testOllama(current.ollamaUrl);
      }
    }
  }, [isOpen]);

  const testOllama = async (url) => {
    setOllamaStatus({ checking: true, online: false, models: [] });
    const result = await checkOllamaConnection(url);
    setOllamaStatus({ checking: false, online: result.online, models: result.models });
    if (result.online && result.models.length > 0 && !result.models.includes(config.ollamaModel)) {
      setConfig((prev) => ({ ...prev, ollamaModel: result.models[0] }));
    }
  };

  const handleSave = () => {
    saveAiConfig(config);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Configuración del Motor de IA</h3>
              <p className="text-xs text-slate-400">Selecciona qué Inteligencia Artificial impulsará toda tu app</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Provider Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: AI_PROVIDERS.OFFLINE, label: "IA Integrada", sub: "Sin Configurar", icon: Sparkles },
            { id: AI_PROVIDERS.OLLAMA, label: "Ollama Local", sub: "100% Gratis", icon: Server },
            { id: AI_PROVIDERS.GROQ, label: "Groq Cloud", sub: "Llama 3.3", icon: Key },
            { id: AI_PROVIDERS.GEMINI, label: "Google Gemini", sub: "Flash 2.0", icon: Cpu }
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => setConfig({ ...config, provider: p.id })}
              className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between gap-2 ${
                config.provider === p.id
                  ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                  : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <p.icon className={`w-4 h-4 ${config.provider === p.id ? "text-blue-400" : "text-slate-500"}`} />
              <div>
                <span className="text-xs font-bold block">{p.label}</span>
                <span className="text-[10px] text-slate-500">{p.sub}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Provider Config */}
        {config.provider === AI_PROVIDERS.OFFLINE && (
          <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/40 text-xs text-slate-300 space-y-1">
            <span className="font-bold text-blue-400">✨ Modo IA Integrada Activo:</span>
            <p>Utiliza el motor heurístico y síntesis neuronal en tu navegador. Funciona de inmediato sin necesidad de instalar nada ni ingresar claves.</p>
          </div>
        )}

        {config.provider === AI_PROVIDERS.OLLAMA && (
          <div className="space-y-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-blue-400" />
                Conexión con Ollama Local
              </span>
              <button
                onClick={() => testOllama(config.ollamaUrl)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1"
              >
                {ollamaStatus.checking ? <RefreshCw className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
                Probar
              </button>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400">URL del Servidor Ollama:</label>
              <input
                type="text"
                value={config.ollamaUrl}
                onChange={(e) => setConfig({ ...config, ollamaUrl: e.target.value })}
                placeholder="http://localhost:11434"
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Connection Status Badge */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Estado de Conexión:</span>
              {ollamaStatus.checking ? (
                <span className="text-amber-400 flex items-center gap-1">Verificando...</span>
              ) : ollamaStatus.online ? (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Conectado ({ollamaStatus.models.length} modelos)
                </span>
              ) : (
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> No conectado
                </span>
              )}
            </div>

            {/* Model Dropdown */}
            {ollamaStatus.online && ollamaStatus.models.length > 0 && (
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400">Modelo Seleccionado:</label>
                <select
                  value={config.ollamaModel}
                  onChange={(e) => setConfig({ ...config, ollamaModel: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
                >
                  {ollamaStatus.models.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-bold text-slate-300">💡 ¿Cómo activar CORS en Ollama?</span>
              <p>Ejecuta en tu terminal:</p>
              <code className="block p-1.5 rounded bg-slate-950 text-blue-400 font-mono text-[10px]">
                OLLAMA_ORIGINS="*" ollama serve
              </code>
            </div>
          </div>
        )}

        {config.provider === AI_PROVIDERS.GROQ && (
          <div className="space-y-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white">Groq API (Llama 3.3 70B Ultra Rápido)</span>
              <a
                href="https://console.groq.com/keys"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                Obtener Clave Gratis <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400">Tu Clave API de Groq (gsk_...):</label>
              <input
                type="password"
                value={config.groqKey}
                onChange={(e) => setConfig({ ...config, groqKey: e.target.value })}
                placeholder="gsk_xxxxxxxxxxxxxxxxxxxx"
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>
          </div>
        )}

        {config.provider === AI_PROVIDERS.GEMINI && (
          <div className="space-y-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white">Google Gemini API (Flash 2.0)</span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1 text-[11px]"
              >
                Obtener Clave Gratis <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-400">Tu Clave API de Google AI Studio:</label>
              <input
                type="password"
                value={config.geminiKey}
                onChange={(e) => setConfig({ ...config, geminiKey: e.target.value })}
                placeholder="AIzaSy..."
                className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center gap-1.5 shadow-lg shadow-blue-600/30"
          >
            {saveSuccess ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
            {saveSuccess ? "¡Guardado!" : "Aplicar Configuración"}
          </button>
        </div>
      </div>
    </div>
  );
}
