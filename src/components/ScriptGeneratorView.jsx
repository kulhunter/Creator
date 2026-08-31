import React, { useState } from "react";
import { Bot, Sparkles, Copy, Check, Smartphone, RefreshCw, Eye, X } from "lucide-react";

export default function ScriptGeneratorView() {
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("Vender un producto o servicio");
  const [format, setFormat] = useState("Cámara en la Mesa (Desk POV)");
  const [loading, setLoading] = useState(false);
  const [scriptData, setScriptData] = useState(null);
  const [copied, setCopied] = useState(false);
  const [teleprompterOpen, setTeleprompterOpen] = useState(false);

  const presets = [
    { label: "🍕 Comida / Restaurante", b: "Tengo una pizzería artesanal y quiero que la gente venga los fines de semana" },
    { label: "💼 Servicios Profesionales", b: "Soy psicóloga y atiendo consultas online para personas con ansiedad" },
    { label: "👗 Ropa / Tienda Online", b: "Vendo ropa deportiva femenina con telas que no se transparentan" },
    { label: "🛠️ Negocio Local", b: "Tengo un taller mecánico y quiero que la gente confíe en mi diagnóstico" }
  ];

  const handleGenerate = () => {
    if (!business.trim()) return;
    setLoading(true);
    setScriptData(null);

    setTimeout(() => {
      const lower = business.toLowerCase();
      let hook = "";
      let problem = "";
      let solution = "";
      let proof = "";
      let cta = "";
      let visualCue = "";

      if (format.includes("Mesa")) {
        visualCue = "Celular apuntando hacia abajo a tu mesa. Tus manos van colocando elementos u hojas en orden.";
      } else if (format.includes("Dividida")) {
        visualCue = "Pantalla dividida: Arriba lo que hace la mayoría con frustración; abajo tu forma rápida.";
      } else if (format.includes("Doble")) {
        visualCue = "Grábate haciendo de cliente con una duda y luego de experto respondiendo con seguridad.";
      } else {
        visualCue = "Plano medio cercano, mirando a la cámara con energía y hablando como a un amigo.";
      }

      if (lower.includes("comida") || lower.includes("pizza") || lower.includes("restaurante") || lower.includes("café")) {
        hook = "Si todavía estás pidiendo comida sin saber este detalle, estás perdiendo tu dinero...";
        problem = "La mayoría de los lugares usan ingredientes congelados para ahorrar costos y te cobran como si fuera fresco.";
        solution = "Nosotros hacemos la masa con fermentación de 48 horas y salsa de tomates naturales. Miren la diferencia en la textura cuando sale del horno.";
        proof = "Por eso más de 500 personas nos eligen cada semana en nuestra ciudad.";
        cta = "Comenta la palabra PROBAR y te enviamos un 20% de descuento directo a tu WhatsApp para este fin de semana.";
      } else if (lower.includes("psic") || lower.includes("terapia") || lower.includes("salud") || lower.includes("coach") || lower.includes("abogad")) {
        hook = "El 90% de las personas cree que esto es normal, pero en realidad es una señal de alerta...";
        problem = "Pasas semanas intentando resolver esto por tu cuenta con videos de internet, pero la ansiedad sigue creciendo.";
        solution = "En solo 3 sesiones personalizadas identificamos la raíz del problema y te damos herramientas prácticas aplicables desde el día 1.";
        proof = "Ya hemos acompañado a más de 120 personas a recuperar su tranquilidad.";
        cta = "Escríbeme la palabra CONSULTA por mensaje directo y te explico cómo podemos trabajar juntos.";
      } else if (lower.includes("ropa") || lower.includes("tienda") || lower.includes("producto") || lower.includes("zapat")) {
        hook = "No compres ropa por internet antes de hacerle esta prueba de 5 segundos...";
        problem = "Compraste algo que en la foto se veía increíble, pero al recibirlo la calidad era pésima y transparente.";
        solution = "Miren la prueba de estiramiento y costura de nuestras prendas. No se trasluce, no pierde el color y se ajusta a tu cuerpo.";
        proof = "Más de 1,500 clientas felices con envíos garantizados a todo el país.";
        cta = "Toca el enlace de nuestro perfil y usa el código PRIMERAVENTA para envío gratis hoy.";
      } else {
        hook = "Si estás buscando " + business.slice(0, 35) + "... deja de cometer este error común.";
        problem = "La mayoría de las personas pierde tiempo y dinero buscando opciones baratas que al final salen caras.";
        solution = "Nuestro método te ahorra todo ese dolor de cabeza entregándote resultados garantizados y soporte directo.";
        proof = "Hemos ayudado a decenas de clientes a solucionar esto en tiempo récord.";
        cta = "Comenta la palabra INFO abajo y te enviamos todos los detalles y precios por privado.";
      }

      setScriptData({
        hook,
        problem,
        solution,
        proof,
        cta,
        visualCue,
        format
      });
      setLoading(false);
    }, 1000);
  };

  const getFullScriptText = () => {
    if (!scriptData) return "";
    return `🎬 GUION LISTO PARA GRABAR (${scriptData.format})
PUESTA EN ESCENA: ${scriptData.visualCue}

[00:00 - 00:03] GANCHO:
"${scriptData.hook}"

[00:03 - 00:15] PROBLEMA:
"${scriptData.problem}"

[00:15 - 00:35] SOLUCIÓN:
"${scriptData.solution}"
"${scriptData.proof}"

[00:35 - 00:45] CIERRE:
"${scriptData.cta}"`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFullScriptText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
          <Bot className="w-4 h-4" />
          GENERADOR DE GUIONES INTELIGENTE
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Crea tu Guión de Video en 30 Segundos
        </h1>
        <p className="text-sm text-slate-400">
          Escribe lo que vendes o tu idea. La IA generará el gancho, la explicación paso a paso y la llamada a la acción lista para vender.
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-400">Prueba con un ejemplo rápido:</span>
          <div className="flex flex-wrap gap-2">
            {presets.map((p, i) => (
              <button
                key={i}
                onClick={() => setBusiness(p.b)}
                className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-all"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-white">¿De qué trata tu negocio o qué quieres explicar en el video?</label>
            <textarea
              rows={3}
              placeholder="Ej: Tengo una pastelería en Santiago y vendo tortas personalizadas para cumpleaños..."
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 resize-none transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400">¿Qué formato prefieres?</label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Cámara en la Mesa (Desk POV)">Cámara en la Mesa (Desk POV) - ¡Más fácil!</option>
                <option value="Pantalla Dividida (Error vs Acierto)">Pantalla Dividida (Error vs Acierto)</option>
                <option value="Doble Personaje (Tú vs Tú)">Doble Personaje (Tú vs Tú)</option>
                <option value="Hablando a Cámara Directo">Hablando a Cámara Directo</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400">¿Cuál es tu objetivo?</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Vender un producto o servicio">Vender un producto o servicio</option>
                <option value="Conseguir más seguidores">Conseguir más seguidores</option>
                <option value="Demostrar que soy experto en mi tema">Demostrar que soy experto en mi tema</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !business.trim()}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01]"
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generando tu guión perfecto...
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

      {scriptData && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-blue-500/40 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Tu Guión de 45 Segundos</span>
              <h3 className="text-xl font-black text-white">{scriptData.format}</h3>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setTeleprompterOpen(true)}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition-all"
              >
                <Smartphone className="w-4 h-4" />
                Modo Teleprompter (Para Grabar)
              </button>
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "¡Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-xs space-y-1">
            <span className="font-bold text-blue-400 flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              CÓMO PONER LA CÁMARA:
            </span>
            <p className="text-slate-300">{scriptData.visualCue}</p>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                <span>PASO 1: EL GANCHO (Segundos 0 a 3)</span>
                <span className="text-[10px] text-slate-500 font-mono">No saludes aquí</span>
              </div>
              <p className="text-base font-bold text-white leading-relaxed">
                "{scriptData.hook}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-slate-400">
                PASO 2: EL ERROR O DUDA COMÚN (Segundos 3 a 15)
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                "{scriptData.problem}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-xs font-bold text-emerald-400">
                PASO 3: TU SOLUCIÓN Y DEMOSTRACIÓN (Segundos 15 a 35)
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                "{scriptData.solution}"
              </p>
              <p className="text-xs text-slate-400 italic mt-1">
                "{scriptData.proof}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-blue-900/50 space-y-1">
              <div className="text-xs font-bold text-cyan-400">
                PASO 4: LLAMADO A LA ACCIÓN PARA VENDER (Segundos 35 a 45)
              </div>
              <p className="text-sm font-bold text-white leading-relaxed">
                "{scriptData.cta}"
              </p>
            </div>
          </div>
        </div>
      )}

      {teleprompterOpen && scriptData && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-6 sm:p-12">
          <div className="flex items-center justify-between text-white border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-purple-400" />
              <span className="font-bold text-sm">Modo Teleprompter (Apoya tu celular y lee mirando al lente)</span>
            </div>
            <button 
              onClick={() => setTeleprompterOpen(false)}
              className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="max-w-3xl mx-auto w-full py-8 text-center space-y-8 overflow-y-auto max-h-[70vh]">
            <div className="text-amber-400 text-2xl sm:text-4xl font-black leading-tight">
              "{scriptData.hook}"
            </div>
            <div className="text-slate-300 text-xl sm:text-2xl font-semibold leading-relaxed">
              "{scriptData.problem}"
            </div>
            <div className="text-emerald-400 text-xl sm:text-3xl font-bold leading-relaxed">
              "{scriptData.solution}"
            </div>
            <div className="text-cyan-400 text-2xl sm:text-3xl font-black leading-tight">
              "{scriptData.cta}"
            </div>
          </div>

          <div className="text-center text-xs text-slate-500">
            Presiona la X arriba para cerrar.
          </div>
        </div>
      )}
    </div>
  );
}
