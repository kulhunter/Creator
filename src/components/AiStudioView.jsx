import React, { useState } from "react";
import { Bot, Send, RefreshCw, Sparkles, User, Copy, Check } from "lucide-react";
import { generateWithAI } from "../services/aiEngine";

export default function AiStudioView() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "¡Hola! Soy tu Copiloto Estratégico de CreatorOS. ¿En qué puedo ayudarte hoy? Puedo crear ganchos, estructurar ofertas de Hormozi, revisar tus guiones o planificar tu contenido para la semana."
    }
  ]);
  const [input, setInput] = useState("");
  const [persona, setPersona] = useState("Director Creativo (Retención FCC)");
  const [loading, setLoading] = useState(false);

  const personas = [
    { label: "Director Creativo (Retención FCC)", prompt: "Eres un director creativo experto en retención visual, cortes rápidos y ganchos de 3 segundos." },
    { label: "Estratega $100M Offers (Alex Hormozi)", prompt: "Eres Alex Hormozi. Creas ofertas irresistibles con garantías de riesgo cero y bonos de alto valor." },
    { label: "Experto en Búsquedas de IA (GEO)", prompt: "Eres un especialista en Generative Engine Optimization para que ChatGPT y Perplexity recomienden este negocio." }
  ];

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");

    const newHistory = [...messages, { role: "user", content: userMsg }];
    setMessages(newHistory);
    setLoading(true);

    const activePersona = personas.find((p) => p.label === persona) || personas[0];

    try {
      const aiReply = await generateWithAI(userMsg, activePersona.prompt);
      setMessages([...newHistory, { role: "assistant", content: aiReply }]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col animate-fadeIn">
      {/* Header & Persona Selector */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-400" />
            AI Copilot de Negocio & Contenido
          </h2>
          <p className="text-xs text-slate-400">Conversa en vivo con IAs especializadas para resolver cualquier duda.</p>
        </div>

        <select
          value={persona}
          onChange={(e) => setPersona(e.target.value)}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-blue-400 focus:outline-none focus:border-blue-500"
        >
          {personas.map((p) => (
            <option key={p.label} value={p.label}>{p.label}</option>
          ))}
        </select>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4 rounded-3xl bg-slate-900/60 border border-slate-800">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {m.role === "assistant" && (
              <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
            <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
            El Copiloto está redactando...
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escribe tu consulta o pide un gancho / guión para tu negocio..."
          className="flex-1 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold flex items-center justify-center shadow-lg shadow-blue-600/30"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
