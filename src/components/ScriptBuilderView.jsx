import React, { useState } from 'react';
import { FileText, Wand2, Copy, Check, Sparkles, Download, Layers } from 'lucide-react';

export default function ScriptBuilderView() {
  const [formula, setFormula] = useState('pas');
  const [topic, setTopic] = useState('Cómo dejar de ser invisible en redes sociales');
  const [niche, setNiche] = useState('Creadores de Contenido / Negocios Digitales');
  const [format, setFormat] = useState('Desk POV (Cámara Cenital)');
  const [ctaWord, setCtaWord] = useState('FORMATO');
  const [copied, setCopied] = useState(false);

  const generateScriptText = () => {
    return `=====================================================
GUION ESTRATÉGICO 360 - FORMATO CREATIVO
=====================================================
TEMA: ${topic}
NICHO: ${niche}
FORMATO: ${format}
FÓRMULA: ${formula.toUpperCase()}
PALABRA CLAVE CTA: ${ctaWord}

-----------------------------------------------------
ESTRUCTURA DE RODAJE EN 3 COLUMNAS:
-----------------------------------------------------

[00:00 - 00:03] GANCHO DOBLE (0 A 3 SEG)
• AUDIO / VOZ: "¿Publicas todos los días en ${niche} y sientes que nadie te ve? Deja de hacer esto hoy..."
• VISUAL: ${format}. Plano cerrado con movimiento.
• SFX: Whoosh rápido + Punch-in zoom a la mesa.

[00:03 - 00:10] EL ERROR INVISIBLE / AGITACIÓN
• AUDIO / VOZ: "La mayoría cree que necesita más seguidores para vender, pero la realidad es que tu formato actual aburre en el segundo 1."
• VISUAL: Muestras una hoja arrugada o un ejemplo fallido y lo apartas con la mano.
• SFX: Buzzer / Paper crumple.

[00:10 - 00:35] LA SOLUCIÓN EN 3 PASOS
• AUDIO / VOZ: "Para solucionar esto solo necesitas 3 pasos: Paso 1, cambia el ángulo a plano cenital. Paso 2, añade un estímulo visual cada 2.5s. Paso 3, elimina el saludo inicial."
• VISUAL: Colocas 3 tarjetas o esquemas numerados en orden sobre la mesa.
• SFX: Click / Ding en cada tarjeta colocada.

[00:35 - 00:45] CLÍMAX Y PRUEBA DE RESULTADO
• AUDIO / VOZ: "Al aplicar este cambio, pasamos una cuenta de 300 visitas a más de 120,000 en 14 días sin pagar anuncios."
• VISUAL: Muestras captura de analítica en verde sobre la mesa.
• SFX: Subida de tono sutil (Riser).

[00:45 - 00:50] LLAMADO A LA ACCIÓN (CONVERSIÓN ORGÁNICA)
• AUDIO / VOZ: "Comenta la palabra '${ctaWord}' aquí abajo y te envío la plantilla exacta por privado."
• VISUAL: Doble toque con el dedo sobre la mesa señalando la zona de comentarios.
• SFX: Click de botón.
=====================================================`;
  };

  const scriptText = generateScriptText();

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([scriptText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Guion_${topic.replace(/\s+/g, '_').slice(0, 30)}.md`;
    a.click();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <FileText className="w-4 h-4" />
          Constructor Inteligente de Roteiros
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Generador de Guiones en 3 Columnas
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          Estructura guiones listos para teleprompter o grabación directa, con tiempo exacto, texto verbal y efectos visuales/sonoros.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls Column */}
        <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-4">
          <div className="flex items-center gap-2 font-bold text-sm text-foreground mb-2">
            <Wand2 className="w-4 h-4 text-primary" />
            Parámetros del Video
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">Fórmula de Copywriting:</label>
            <select
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary"
            >
              <option value="pas">PAS (Problema - Agitación - Solución)</option>
              <option value="ihc">IHC (Impacto - Historia - Conexión)</option>
              <option value="aida">AIDA (Atención - Interés - Deseo - Acción)</option>
              <option value="ele_eu">Ele, Eu, Você e o Futuro</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">Formato Creativo:</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary"
            >
              <option value="Desk POV (Cámara Cenital)">Desk POV (Cámara Cenital)</option>
              <option value="Pantalla Dividida A/B">Pantalla Dividida A/B</option>
              <option value="Doble Personaje (Diálogo)">Doble Personaje (Diálogo)</option>
              <option value="Telepatía (Lo que piensas vs dices)">Telepatía (Lo que piensas vs dices)</option>
              <option value="La Pizarra con Plumón">La Pizarra con Plumón</option>
              <option value="Voiceover Cinematográfico">Voiceover Cinematográfico</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">Tema del Video:</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">Nicho / Público Objetivo:</label>
            <input
              type="text"
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-foreground">Palabra Clave para DM (CTA):</label>
            <input
              type="text"
              value={ctaWord}
              onChange={(e) => setCtaWord(e.target.value.toUpperCase())}
              className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-sm text-foreground font-mono font-bold text-primary focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Script Preview Column */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-card border border-border/80 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Vista Previa del Guión Generado
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-background/80 text-xs font-semibold text-foreground flex items-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  Descargar .MD
                </button>
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-primary/20 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? '¡Copiado!' : 'Copiar Guión'}
                </button>
              </div>
            </div>

            <pre className="p-4 rounded-xl bg-background/90 border border-border text-xs text-foreground font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[500px]">
              {scriptText}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
