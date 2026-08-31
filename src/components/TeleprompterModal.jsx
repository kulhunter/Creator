import React, { useState, useEffect, useRef } from "react";
import { X, Play, Pause, RotateCcw, Smartphone, Settings2, ZoomIn, ZoomOut } from "lucide-react";

export default function TeleprompterModal({ isOpen, onClose, scriptText }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [fontSize, setFontSize] = useState(32);
  const [mirror, setMirror] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    let interval = null;
    if (isPlaying && !countdown) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += speed;
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, countdown]);

  const handleStart = () => {
    setCountdown(3);
    const countInt = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countInt);
          setIsPlaying(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    setIsPlaying(false);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-4 sm:p-8">
      {/* Top Controls */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-white">
        <div className="flex items-center gap-3">
          <Smartphone className="w-5 h-5 text-blue-400" />
          <span className="font-black text-sm hidden sm:inline">Teleprompter Profesional</span>
        </div>

        {/* Speed & Font controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-xl text-xs">
            <span className="text-slate-400">Velocidad:</span>
            <button onClick={() => setSpeed(Math.max(1, speed - 1))} className="px-2 py-0.5 hover:bg-slate-800 rounded font-bold">-</button>
            <span className="text-blue-400 font-bold">{speed}x</span>
            <button onClick={() => setSpeed(Math.min(10, speed + 1))} className="px-2 py-0.5 hover:bg-slate-800 rounded font-bold">+</button>
          </div>

          <div className="flex items-center gap-1 bg-slate-900 px-2 py-1 rounded-xl text-xs">
            <span className="text-slate-400">Letra:</span>
            <button onClick={() => setFontSize(Math.max(18, fontSize - 4))} className="p-1 hover:bg-slate-800 rounded"><ZoomOut className="w-3.5 h-3.5" /></button>
            <button onClick={() => setFontSize(Math.min(60, fontSize + 4))} className="p-1 hover:bg-slate-800 rounded"><ZoomIn className="w-3.5 h-3.5" /></button>
          </div>

          <button
            onClick={() => setMirror(!mirror)}
            className={`px-3 py-1 rounded-xl text-xs font-bold ${mirror ? "bg-purple-600 text-white" : "bg-slate-900 text-slate-300"}`}
          >
            Espejo
          </button>
        </div>

        <button onClick={onClose} className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Countdown Overlay */}
      {countdown > 0 && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80">
          <span className="text-8xl font-black text-amber-400 animate-ping">{countdown}</span>
        </div>
      )}

      {/* Scrollable Script Area */}
      <div 
        ref={scrollRef} 
        className={`flex-1 overflow-y-auto max-w-4xl mx-auto w-full py-16 px-4 space-y-8 select-none transition-transform ${mirror ? "scale-x-[-1]" : ""}`}
        style={{ fontSize: `${fontSize}px` }}
      >
        <div className="whitespace-pre-wrap font-bold leading-relaxed text-white text-center">
          {scriptText}
        </div>
      </div>

      {/* Bottom Floating Bar */}
      <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-800">
        <button
          onClick={handleReset}
          className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center gap-1.5 text-xs font-bold"
        >
          <RotateCcw className="w-4 h-4" />
          Reiniciar
        </button>

        {isPlaying ? (
          <button
            onClick={() => setIsPlaying(false)}
            className="px-8 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-black flex items-center gap-2 shadow-lg shadow-amber-600/30"
          >
            <Pause className="w-5 h-5" />
            Pausar
          </button>
        ) : (
          <button
            onClick={handleStart}
            className="px-8 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-black flex items-center gap-2 shadow-lg shadow-emerald-600/30"
          >
            <Play className="w-5 h-5 fill-current" />
            Iniciar Grabación
          </button>
        )}
      </div>
    </div>
  );
}
