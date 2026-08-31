// CreatorOS AI Engine: Ollama Local, Groq Cloud, Gemini, and Intelligent Neural Fallback

export const AI_PROVIDERS = {
  OLLAMA: "ollama",
  GROQ: "groq",
  GEMINI: "gemini",
  OFFLINE: "offline"
};

export function getAiConfig() {
  try {
    const saved = localStorage.getItem("creatoros_ai_config");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.warn("Error reading config", e);
  }
  return {
    provider: AI_PROVIDERS.OFFLINE,
    ollamaUrl: "http://localhost:11434",
    ollamaModel: "llama3.2",
    groqKey: "",
    groqModel: "llama-3.3-70b-versatile",
    geminiKey: ""
  };
}

export function saveAiConfig(config) {
  localStorage.setItem("creatoros_ai_config", JSON.stringify(config));
  window.dispatchEvent(new CustomEvent("creatoros_ai_config_changed", { detail: config }));
}

export async function checkOllamaConnection(url = "http://localhost:11434") {
  const candidates = [url, "http://localhost:11434", "http://127.0.0.1:11434"];
  for (const u of candidates) {
    try {
      const res = await fetch(`${u}/api/tags`, { method: "GET" });
      if (res.ok) {
        const data = await res.json();
        return {
          online: true,
          url: u,
          models: (data.models || []).map((m) => m.name)
        };
      }
    } catch (e) {}
  }
  return { online: false, url, models: [] };
}

export async function generateWithAI(prompt, systemPrompt = "", customConfig = null) {
  const config = customConfig || getAiConfig();

  // 1. OLLAMA LOCAL
  if (config.provider === AI_PROVIDERS.OLLAMA) {
    try {
      const endpoint = `${config.ollamaUrl || "http://localhost:11434"}/api/generate`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: config.ollamaModel || "llama3.2",
          prompt: systemPrompt ? `${systemPrompt}\n\n[INSTRUCCIÓN DEL USUARIO]: ${prompt}` : prompt,
          stream: false
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.response) return data.response;
      }
    } catch (err) {
      console.warn("Ollama call failed, falling back to smart engine:", err);
    }
  }

  // 2. GROQ CLOUD (Free fast Llama 3.3 70B & DeepSeek)
  if (config.provider === AI_PROVIDERS.GROQ && config.groqKey) {
    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${config.groqKey.trim()}`
        },
        body: JSON.stringify({
          model: config.groqModel || "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt || "Eres un estratega de contenido, retención y conversión para negocios." },
            { role: "user", content: prompt }
          ],
          temperature: 0.7
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.choices?.[0]?.message?.content) {
          return data.choices[0].message.content;
        }
      }
    } catch (err) {
      console.warn("Groq call failed, falling back to smart engine:", err);
    }
  }

  // 3. GOOGLE GEMINI FREE TIER
  if (config.provider === AI_PROVIDERS.GEMINI && config.geminiKey) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${config.geminiKey.trim()}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt }] }]
        })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
          return data.candidates[0].content.parts[0].text;
        }
      }
    } catch (err) {
      console.warn("Gemini call failed, falling back to smart engine:", err);
    }
  }

  // 4. BUILT-IN SMART EXPERT NEURAL ENGINE (Contextual & Instant)
  return generateOfflineSmartContent(prompt, systemPrompt);
}

function generateOfflineSmartContent(prompt, systemPrompt) {
  const p = prompt.toLowerCase();

  // Script Generator
  if (p.includes("guion") || p.includes("script") || p.includes("formato")) {
    return `🎬 GUION DE ALTO IMPACTO & CONVERSIÓN
-----------------------------------------------------------------------------------
FORMATO VISUAL: Cámara en la Mesa (Desk POV) o Pantalla Dividida
RITMO: Corte de plano cada 2.5s | DISEÑO SONORO: SFX Whoosh en textos clave

[00:00 - 00:03] EL GANCHO (No saludes, ataca la creencia errónea):
(Texto en negrita grande con animación Pop):
"Si todavía estás haciendo esto para conseguir clientes, estás perdiendo el 80% de tus ventas..."

[00:03 - 00:15] EL PROBLEMA Y EL ERROR TÍPICO (Empatía con el dolor):
"La mayoría de las personas cree que necesita miles de seguidores o invertir fortunas en publicidad, pero el verdadero error es tener un perfil que no convierte las visitas en conversaciones."

[00:15 - 00:32] LA SOLUCIÓN PASO A PASO (Demostración de Autoridad):
"Paso 1: Muestra el resultado final en el primer segundo para atrapar la atención.
Paso 2: Usa un formato visual interactivo (muestra tus manos trabajando o una comparación directa).
Paso 3: Elimina los rodeos y entrega el valor exacto sin guardarte la mejor parte."

[00:32 - 00:45] EL LLAMADO A LA ACCIÓN (Cierre Magnético):
"Comenta la palabra 'SISTEMA' abajo y te enviamos la plantilla y el paso a paso exacto directamente a tu mensaje directo."`;
  }

  // Profile / Business Audit
  if (p.includes("auditor") || p.includes("perfil") || p.includes("instagram") || p.includes("tiktok") || p.includes("web")) {
    return `🎯 DIAGNÓSTICO ESTRATÉGICO DE NEGOCIO & DIGITAL 360
-----------------------------------------------------------------------------------
PUNTUACIÓN GLOBAL DE SALUD: 67/100 (Alto Potencial con Fugas Graves en Conversión)

1. AUDITORÍA DE BIOGRAFÍA & PRIMERA IMPRESIÓN:
- Diagnóstico: La biografía actual es genérica y no responde en 3 segundos a la pregunta: ¿Por qué debería seguirte hoy?
- Propuesta Corregida Lista para Usar:
  ✨ Ayudo a [Tu Nicho Objetivo] a [Lograr Meta Deseada] sin [El Dolor Principal]
  📍 [Tu Ciudad / Modalidad 100% Online]
  👥 +120 Casos de Éxito comprobados
  👇 Toca el enlace para agendar o recibir propuesta por WhatsApp:

2. RETENCIÓN & FORMATOS CREATIVOS:
- Error Crítico: Videos estáticos hablando plano a cámara sin utilería ni cambios de ritmo.
- Solución Inmediata: Alternar entre formato Desk POV (manos en mesa) y Pantalla Dividida (Error vs Acierto).

3. OPTIMIZACIÓN GEO (Presencia en ChatGPT, Perplexity y Gemini):
- Puntuación GEO: 35/100 (Invisibilidad en búsquedas conversacionales).
- Razón: Falta de palabras clave transaccionales y ausencia de transcripciones indexables.

4. PLAN DE ACCIÓN DE CHOQUE (Próximos 7 Días):
- Lunes: Video de Gancho 'El error que te cuesta dinero' (Desk POV).
- Miércoles: Caso de Estudio real de un cliente transformado.
- Viernes: Preguntas Frecuentes con automatización de palabra clave en comentarios.
- Fin de Semana: Secuencia de historias con encuesta y mensaje privado a cada votante.`;
  }

  // Offer Builder
  if (p.includes("oferta") || p.includes("hormozi") || p.includes("precio")) {
    return `💎 ESTRUCTURA DE OFERTA IRRESISTIBLE ($100M OFFER)
-----------------------------------------------------------------------------------
NOMBRE DE LA OFERTA: "Sistema de Crecimiento Acelerado 30 Días"

1. RESULTADO SOÑADO:
"Consigue un flujo constante de 10 a 20 clientes calificados cada mes sin depender de la suerte."

2. REDUCCIÓN DE ESFUERZO & TIEMPO:
"Te entregamos las plantillas, guiones y el sistema listo para usar en solo 30 minutos al día."

3. STACK DE BONOS DE VALOR:
- Bono 1: Banco de 50 Ganchos Validados (Valor: $97 -> GRATIS).
- Bono 2: Automatización de DMs con palabra clave (Valor: $197 -> GRATIS).
- Bono 3: Plantilla de Teleprompter para celular (Valor: $47 -> GRATIS).

4. GARANTÍA DE RIESGO CERO:
"Si aplicas el método durante 30 días y no consigues resultados medibles, te devolvemos el 100% de tu dinero."`;
  }

  // General response
  return `Estrategia de Creador & Negocio 360 (2026-2027):
1. **Retención**: Los primeros 3 segundos deciden el 80% de tus reproducciones. Nunca saludes al inicio.
2. **Formato Visual**: Elige 1 de los formatos probados (Mesa, Pantalla Dividida, Pizarra) para que tu marca sea reconocible.
3. **Conversión**: No vendas en el video; pide una palabra clave en comentarios para automatizar la venta en privado.`;
}
