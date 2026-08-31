export const FORMATS_DATA = [
  {
    id: 1,
    title: "Desk POV (Cámara Cenital)",
    category: "Inmersión y Táctil",
    tag: "POV",
    difficulty: "Fácil",
    duration: "40-55s",
    visualCue: "Cámara en picado sobre la mesa. Manos colocando tarjetas, post-its o dibujando esquemas.",
    description: "Graba desde arriba mostrando tu espacio de trabajo. Elimina la fatiga de hablar a cámara y transmite alta didáctica.",
    hookExample: "Deja de organizar tus ideas en la cabeza; haz esto en 3 minutos...",
    structure: [
      { time: "0-3s", audio: "Gancho de quiebre mientras tu mano coloca la primera tarjeta en la mesa.", visual: "Plano cenital, sonido de \x27Thud\x27 al tocar la mesa." },
      { time: "3-15s", audio: "Explicación del problema mostrando una hoja arrugada o tachada.", visual: "Apartas el error con la mano hacia la izquierda (Whoosh SFX)." },
      { time: "15-40s", audio: "Colocas 3 tarjetas en orden: Paso 1, Paso 2, Paso 3.", visual: "Zoom digital sutil en cada tarjeta que entra al encuadre (Click SFX)." },
      { time: "40-50s", audio: "Llamado a la acción mostrando la plantilla final completa.", visual: "Doble tap en la mesa con el dedo señalando el CTA." }
    ]
  },
  {
    id: 2,
    title: "Pantalla Dividida A/B (Error vs. Acierto)",
    category: "Contraste",
    tag: "Split Screen",
    difficulty: "Medio",
    duration: "30-45s",
    visualCue: "Pantalla vertical partida en 2 mitades. Arriba el error cómico/frustrante; abajo la solución fluida.",
    description: "Contraste visual simultáneo. La audiencia compara al instante cómo lo hacen los novatos vs los expertos.",
    hookExample: "La diferencia entre quien gana $1,000 y quien gana $10,000 al mes en [Nicho]...",
    structure: [
      { time: "0-3s", audio: "Texto arriba en rojo y abajo en verde. Sin rodeos.", visual: "Efecto de pantalla dividida con línea divisoria neón." },
      { time: "3-20s", audio: "Muestras arriba la frustración (tiempo perdido, sobrecoste).", visual: "Texto animado arriba con sonido de error (Buzzer SFX)." },
      { time: "20-40s", audio: "Muestras abajo el método optimizado en 3 clics.", visual: "Video fluido abajo con sonido de éxito (Ding SFX)." },
      { time: "40-45s", audio: "Comenta \x27SPLIT\x27 para enviarte la comparativa completa.", visual: "Flecha señalando la sección de comentarios." }
    ]
  },
  {
    id: 3,
    title: "El Doble Personaje (Novato vs. Experto)",
    category: "Contraste",
    tag: "Diálogo",
    difficulty: "Medio",
    duration: "45-60s",
    visualCue: "Dos versiones de ti mismo (con gorra/sin gorra o diferente ropa) dialogando en cortes de 1.5 segundos.",
    description: "El formato de diálogo más viral en redes. Permite plantear las dudas reales de tu cliente ideal y responderlas con autoridad.",
    hookExample: "\x27Oye, ¿por qué nadie ve mis videos si publico todos los días?\x27",
    structure: [
      { time: "0-3s", audio: "Novato hace la pregunta dolorosa con frustración real.", visual: "Plano medio a la izquierda, mirada a la derecha." },
      { time: "3-15s", audio: "Experto responde con una verdad incómoda.", visual: "Corte rápido a la derecha, mirada a la izquierda (Whoosh SFX)." },
      { time: "15-45s", audio: "Intercambio ágil de 3 preguntas y 3 soluciones precisas.", visual: "Cortes cada 2 segundos con subtítulos dinámicos de colores distintos." },
      { time: "45-55s", audio: "Novato: \x27¿Y dónde aprendo eso?\x27 Experto: \x27En mi perfil...\x27", visual: "Guiño a cámara o señalar botón de seguir." }
    ]
  },
  {
    id: 4,
    title: "Telepatía (Lo que Dices vs. Lo que Piensas)",
    category: "Curiosidad",
    tag: "Telepatía",
    difficulty: "Medio",
    duration: "30-45s",
    visualCue: "Tú hablando educadamente a un cliente/jefe, mientras una voz interna con efecto reverb dice la cruda verdad técnica.",
    description: "Humor y empatía instantánea. Expone los dolores no hablados de tu industria.",
    hookExample: "Lo que un [Profesional] realmente piensa cuando le dices [Frase típica]...",
    structure: [
      { time: "0-4s", audio: "Cliente hace petición absurda. Tú sonríes y asientes.", visual: "Sonrisa forzada a cámara." },
      { time: "4-25s", audio: "Voz en off interna con eco revelando la verdad técnica.", visual: "Efecto blanco y negro momentáneo o zoom dramático a los ojos." },
      { time: "25-40s", audio: "La solución real explicada de forma profesional.", visual: "Regreso a color con texto de valor en pantalla." },
      { time: "40-45s", audio: "CTA a seguirte para más contenido sin filtro.", visual: "Icono de campana animada." }
    ]
  },
  {
    id: 5,
    title: "La Pizarra / Sketch con Plumón",
    category: "Didáctica",
    tag: "Palestrinha",
    difficulty: "Fácil",
    duration: "45-60s",
    visualCue: "De pie o sentado frente a una pizarra blanca o rotafolio, dibujando esquemas en vivo con plumón grueso.",
    description: "Genera autoridad docente inmediata. El sonido del plumón sobre el papel/pizarra activa la retención sensorial.",
    hookExample: "Este es el único embudo que necesitas para vender en 2026...",
    structure: [
      { time: "0-3s", audio: "Dibujas un círculo y escribes el nombre del problema.", visual: "Sonido ASMR del plumón rayando la pizarra." },
      { time: "3-20s", audio: "Trazas 3 flechas conectando la causa y el efecto.", visual: "Cámara hace zoom punch-in a cada flecha que dibujas." },
      { time: "20-45s", audio: "Escribes la cifra o solución en grande y la encierras en un recuadro.", visual: "Plano medio amplio mirándote explicar con energía." },
      { time: "45-55s", audio: "Tiras el plumón a la mesa y cierras con el CTA.", visual: "Sonido de \x27Click/Drop\x27 al soltar el marcador." }
    ]
  },
  {
    id: 6,
    title: "El Experimento de los 7 Días",
    category: "Storytelling",
    tag: "Experimento",
    difficulty: "Avanzado",
    duration: "50-60s",
    visualCue: "Tomas consecutivas de diferentes días con reloj/calendario en pantalla, mostrando cambios reales.",
    description: "Narrativa documental de alta retención. La gente no puede dejar de ver para comprobar el resultado final.",
    hookExample: "Probé publicar 3 veces al día usando solo IA por 7 días...",
    structure: [
      { time: "0-3s", audio: "Muestras la métrica inicial en cero.", visual: "Captura de pantalla con número bajo en rojo." },
      { time: "3-15s", audio: "Día 1 a Día 3: La frustración y el primer intento.", visual: "Tomas rápidas de noche trabajando frente a la laptop." },
      { time: "15-35s", audio: "Día 4 a Día 6: El punto de inflexión y el ajuste clave.", visual: "Gráfico de analytics empezando a subir verticalmente." },
      { time: "35-50s", audio: "Día 7: El resultado final y la conclusión real sin humo.", visual: "Métricas finales en verde y conclusiones en viñetas." },
      { time: "50-60s", audio: "CTA para ver el desglose en el siguiente video.", visual: "Texto: \x27Guarda para no perder la parte 2\x27." }
    ]
  },
  {
    id: 7,
    title: "Voiceover Cinematográfico (Narrado)",
    category: "Inmersión y Táctil",
    tag: "Narrado",
    difficulty: "Medio",
    duration: "40-60s",
    visualCue: "Cero tomas hablando a cámara. 100% tomas B-roll estéticas de tu rutina, manos y procesos, con audio cálido.",
    description: "Estética pura. Ideal para marcas personales premium, estilo de vida, arquitectura o tecnología.",
    hookExample: "La verdad sobre por qué estás cansado todo el tiempo no es tu carga de trabajo...",
    structure: [
      { time: "0-4s", audio: "Frase reflexiva con voz grave y pausada.", visual: "Plano detalle de verter café o abrir una libreta en cámara lenta." },
      { time: "4-30s", audio: "Narración de un principio fundamental de tu nicho.", visual: "Cortes suaves cada 3s mostrando diferentes ángulos de tu rutina." },
      { time: "30-50s", audio: "La revelación filosófica y práctica.", visual: "Mirando por la ventana o caminando al atardecer." },
      { time: "50-60s", audio: "CTA discreto en texto en pantalla.", visual: "Texto minimalista blanco centrado." }
    ]
  },
  {
    id: 8,
    title: "Green Screen / React Analítico",
    category: "Curiosidad",
    tag: "Tela Verde",
    difficulty: "Fácil",
    duration: "30-45s",
    visualCue: "Fondo con una noticia, tweet o captura de pantalla real, y tú recortado abajo señalando datos específicos.",
    description: "Aprovecha la autoridad de noticias y terceros para posicionarte como el experto que interpreta los hechos.",
    hookExample: "Mira lo que acaba de anunciar [Empresa/Plataforma] y por qué te afecta hoy mismo...",
    structure: [
      { time: "0-3s", audio: "Señalas el titular con tu dedo en los primeros 2 segundos.", visual: "Titular resaltado en amarillo con zoom." },
      { time: "3-20s", audio: "Lees la línea clave que todos pasaron por alto.", visual: "Subrayado animado sobre el texto de fondo." },
      { time: "20-35s", audio: "Explicas la consecuencia directa para tu cliente.", visual: "Tú en primer plano con gesto de advertencia." },
      { time: "35-45s", audio: "Qué debes hacer hoy para protegerte o aprovecharlo.", visual: "CTA a comentar para recibir el enlace directo." }
    ]
  },
  {
    id: 9,
    title: "El Objeto Metáfora (Storytelling Físico)",
    category: "Storytelling",
    tag: "Metáfora",
    difficulty: "Fácil",
    duration: "30-45s",
    visualCue: "Usas un objeto común (una esponja, un globo, una liga elástica) para explicar un concepto abstracto.",
    description: "Fija el concepto en la memoria a largo plazo del espectador a través de un anclaje físico visual.",
    hookExample: "Tu negocio es exactamente igual a esta esponja seca...",
    structure: [
      { time: "0-4s", audio: "Muestras el objeto interactuando (ej: apretando la esponja).", visual: "Plano cerrado del objeto en acción." },
      { time: "4-25s", audio: "Explicas la analogía (el agua es el tráfico, la esponja es tu embudo).", visual: "Viertes agua sobre la esponja; si está saturada se desborda." },
      { time: "25-40s", audio: "La lección práctica para corregir la fuga.", visual: "Tomas de tu solución real." },
      { time: "40-45s", audio: "CTA para más analogías de crecimiento.", visual: "Texto con palabras clave en mayúsculas." }
    ]
  },
  {
    id: 10,
    title: "Examen Rápido con Cronómetro (Gamificación)",
    category: "Didáctica",
    tag: "Gamificación",
    difficulty: "Fácil",
    duration: "25-35s",
    visualCue: "Pregunta con 3 opciones (A, B, C) y un reloj regresivo animado de 3 segundos.",
    description: "Activa el instinto de competencia del usuario y dispara los comentarios de personas respondiendo.",
    hookExample: "Test de 3 segundos: ¿Cuál de estas 3 opciones es un error en [Nicho]?",
    structure: [
      { time: "0-3s", audio: "Lees la pregunta con voz enérgica.", visual: "Opciones A, B y C aparecen con sonido \x27Pop\x27." },
      { time: "3-6s", audio: "Sonido de \x27Tic-Tac-Tic-Tac\x27 mientras piensas.", visual: "Barra de progreso roja agotándose." },
      { time: "6-25s", audio: "Revelas la respuesta correcta con una justificación técnica que pocos saben.", visual: "Opción correcta titila en verde con sonido de acierto." },
      { time: "25-30s", audio: "Dime en los comentarios si acertaste o fallaste.", visual: "CTA enfocado en generar comentarios masivos." }
    ]
  }
];

export const GURUS_DATA = [
  {
    id: "hormozi",
    name: "Alex Hormozi",
    role: "Fundador de Acquisition.com & Autor de $100M Leads",
    avatar: "AH",
    color: "#00E5FF",
    links: {
      youtube: "https://www.youtube.com/@AlexHormozi",
      instagram: "https://www.instagram.com/hormozi",
      website: "https://www.acquisition.com"
    },
    corePrinciples: [
      "Ecuación del Valor: (Resultado Soñado × Percepción de Éxito) / (Tiempo × Esfuerzo Percibido).",
      "Modelo Hook-Retain-Reward: Cada segundo debe pagar dividendos de atención.",
      "Regla del Repropósito 1:30: Crear una pieza pilar y derivar 30 micro-contenidos sin quemar tiempo."
    ],
    famousQuote: "Si das tanto valor gratis que la gente se sienta culpable de no comprarte, el juego está ganado."
  },
  {
    id: "galloway",
    name: "Paddy Galloway & MrBeast",
    role: "Estrategas de Retención en YouTube (Mil Millones de Vistas)",
    avatar: "PG",
    color: "#FF0055",
    links: {
      youtube: "https://www.youtube.com/@PaddyGalloway",
      website: "https://paddygalloway.com"
    },
    corePrinciples: [
      "Ciencia del Click (CTR): La miniatura y el título representan el 70% del éxito de un video.",
      "La Regla del Minuto Cero: Si no entregas la promesa del título en los primeros 10 segundos, la audiencia cae en picado.",
      "Pacing de Micro-Estímulos: Ninguna escena dura más de 2.5 segundos sin cambio de ángulo o sonido."
    ],
    famousQuote: "No hagas videos sobre lo que a ti te gusta hablar; haz videos sobre lo que tu audiencia no puede evitar ver."
  },
  {
    id: "dankoe",
    name: "Dan Koe",
    role: "Pionero del One-Person Business & Filósofo Digital",
    avatar: "DK",
    color: "#9945FF",
    links: {
      youtube: "https://www.youtube.com/@DanKoeTalks",
      x: "https://x.com/thedankoe",
      website: "https://thedankoe.com"
    },
    corePrinciples: [
      "Validación Text-First: Escribe tu tesis en Threads/X. Si resuena en 280 caracteres, amplíala a YouTube.",
      "El Embudo de Autoridad: De ideas cortas a reflexiones profundas y de ahí a una Newsletter semanal.",
      "Venta por Indoctrinación: El contenido no vende con urgencia barata; vende cambiando la visión de mundo del seguidor."
    ],
    famousQuote: "Si no tienes un sistema para distribuir tus ideas, pasarás tu vida ejecutando los sistemas de otros."
  },
  {
    id: "garyvee",
    name: "Gary Vaynerchuk (GaryVee)",
    role: "CEO de VaynerMedia & Pionero de Contenido Masivo",
    avatar: "GV",
    color: "#00FF66",
    links: {
      youtube: "https://www.youtube.com/@garyvee",
      instagram: "https://www.instagram.com/garyvee",
      website: "https://garyvaynerchuk.com"
    },
    corePrinciples: [
      "PAC (Post-Creative Advertising): Publicar múltiples variaciones orgánicas y pagar anuncios solo a las que triunfan.",
      "Day Trading Attention: Estar en la plataforma donde la atención sea más barata antes de que se sature.",
      "Documentar, No Crear: Muestra el proceso real de tu negocio en lugar de inventar guiones artificiales."
    ],
    famousQuote: "El contenido es el rey, pero el contexto es Dios."
  },
  {
    id: "hanah_alef",
    name: "Hanah Franklin & Alef Marqs",
    role: "Creadores de FCC (Formato Creativo de Contenido)",
    avatar: "HA",
    color: "#FF8800",
    links: {
      instagram_hanah: "https://www.instagram.com/hanahfranklin",
      instagram_alef: "https://www.instagram.com/alefadventures",
      website: "https://formatocriativodeconteudo.com.br"
    },
    corePrinciples: [
      "Signature Formats: Estandarizar un formato visual propio (Cenital, Telepatía, Pizarra) para reducir el tiempo de creación.",
      "Eliminación de la Cabeza Parlante: El espectador no quiere ver una cara estática hablando 45 segundos.",
      "Sound Design Activo: Cada transición o texto debe tener su respectivo efecto sonoro (Whoosh, Pop, Click)."
    ],
    famousQuote: "El problema de que no crezcas no es tu nicho ni tu conocimiento; es el formato aburrido en el que lo entregas."
  },
  {
    id: "geo_princeton",
    name: "Princeton GEO Research & Neil Patel",
    role: "Pioneros en Optimización para Motores Generativos (GEO)",
    avatar: "GEO",
    color: "#3B82F6",
    links: {
      website: "https://arxiv.org/abs/2311.09747",
      neil: "https://neilpatel.com"
    },
    corePrinciples: [
      "Citaciones Estadísticas: Los LLMs (ChatGPT, Perplexity, Gemini) priorizan citar fuentes que incluyen datos numéricos exactos.",
      "Estructuración de Entidad Semántica: Definir tu marca con claridad sintáctica para que la IA la reconozca como solución canónica.",
      "Indexación de Transcripciones: Publicar textos completos de videos en la web para alimentar a los rastreadores de IA."
    ],
    famousQuote: "En 2026, si la IA no te conoce, tu negocio es invisible para el 40% de tus futuros clientes."
  }
];

export const GITHUB_TOOLS_DATA = [
  {
    id: "postiz",
    name: "Postiz",
    repo: "gitroomhq/postiz-app",
    url: "https://github.com/gitroomhq/postiz-app",
    stars: "14k+",
    category: "Programación Omnicanal con IA",
    description: "La mejor alternativa open-source a Buffer y Hootsuite. Programa en TikTok, Instagram, Threads, X, YouTube, LinkedIn y Pinterest con IA integrada.",
    dockerCommand: "docker run -p 3000:3000 --env-file .env gitroomhq/postiz-app",
    useCase: "Centralizar la subida y programación automática de todo el contenido semanal desde tu propio servidor."
  },
  {
    id: "faster_whisper",
    name: "Faster-Whisper",
    repo: "SYSTRAN/faster-whisper",
    url: "https://github.com/SYSTRAN/faster-whisper",
    stars: "12k+",
    category: "Transcripción y Subtítulos",
    description: "Re-implementación hasta 4 veces más rápida de OpenAI Whisper usando CTranslate2. Ideal para subtítulos dinámicos e indexación GEO.",
    dockerCommand: "pip install faster-whisper",
    useCase: "Extraer la transcripción exacta palabra por palabra en segundos para alimentar CapCut o tu blog."
  },
  {
    id: "auto_editor",
    name: "Auto-Editor",
    repo: "WyattBlue/auto-editor",
    url: "https://github.com/WyattBlue/auto-editor",
    stars: "4.5k+",
    category: "Edición Automática de Pacing",
    description: "Herramienta de línea de comandos que detecta silencios, pausas y respiraciones y las elimina automáticamente de videos y audios.",
    dockerCommand: "pip install auto-editor && auto-editor video.mp4 --margin 0.1s",
    useCase: "Reducir un video de 10 minutos a 3 minutos de ritmo puro sin cortes manuales tediosos."
  },
  {
    id: "videolingo",
    name: "VideoLingo",
    repo: "Huanshere/VideoLingo",
    url: "https://github.com/Huanshere/VideoLingo",
    stars: "8k+",
    category: "Doblaje y Localización Global",
    description: "Sistema completo de traducción, doblaje con clonación de voz y subtitulado estilo Netflix para internacionalizar tus videos.",
    dockerCommand: "git clone https://github.com/Huanshere/VideoLingo.git && cd VideoLingo && streamlit run st.py",
    useCase: "Traducir y doblar tus mejores Reels al inglés, portugués o francés para multiplicar tu audiencia x5."
  },
  {
    id: "remotion",
    name: "Remotion",
    repo: "remotion-dev/remotion",
    url: "https://github.com/remotion-dev/remotion",
    stars: "20k+",
    category: "Video Programático en React",
    description: "Crea videos animados, gráficos de datos y plantillas dinámicas escribiendo código React en lugar de usar After Effects.",
    dockerCommand: "npx create-video@latest",
    useCase: "Generar videos masivos con datos de clientes, tablas de clasificación y animaciones matemáticas limpias."
  }
];

export const HOOKS_LIBRARY = [
  { id: 1, type: "Quiebre de Creencia", text: "Deja de hacer [Error Común] si quieres lograr [Resultado Deseado]...", sfx: "Whoosh + Punch-in" },
  { id: 2, type: "Resultado Primero", text: "Así es como logré [Resultado Extraordinario] en solo [Tiempo] sin [Dolor Habitual]...", sfx: "Ding + Zoom" },
  { id: 3, type: "Alerta de Urgencia", text: "Si tienes un negocio en [Nicho], tienes que ver esto antes de que termine el mes...", sfx: "Alarma / Buzzer" },
  { id: 4, type: "El Secreto Oculto", text: "Hay una regla en [Nicho] de la que el 90% de los gurús nunca habla públicamente...", sfx: "Whoosh grave + Suspenso" },
  { id: 5, type: "Comparativa Directa", text: "Mira la diferencia exacta entre cómo lo hace un novato vs. un profesional...", sfx: "Click Split Screen" },
  { id: 6, type: "Ahorro de Tiempo", text: "Guarda este video porque te va a ahorrar más de 10 horas de trabajo esta semana...", sfx: "Bookmark Click" },
  { id: 7, type: "Experimento Real", text: "Probé aplicar [Método] durante 14 días seguidos y estos fueron los números reales...", sfx: "Tic Tac Reloj" },
  { id: 8, type: "La Pregunta Incómoda", text: "¿Alguna vez sentiste que estás haciendo todo bien en [Nicho] y aun así nadie te ve?", sfx: "Heartbeat sutil" },
  { id: 9, type: "El Atajo Tecnológico", text: "Esta herramienta de IA gratuita hace en 30 segundos lo que a ti te toma 3 horas...", sfx: "Pop + Sparkle" },
  { id: 10, type: "Confesión de Error", text: "Perdí más de [Monto/Tiempo] por cometer este error que tú probablemente estás cometiendo hoy...", sfx: "Thud bajo" }
];
