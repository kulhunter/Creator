import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, Clock, Plus, Trash2 } from 'lucide-react';

export default function WeeklyPlannerView() {
  const defaultPlan = [
    { day: 'Lunes', task: 'Validación en Texto (Threads / X)', format: 'Hilo de 5 lecciones', done: true },
    { day: 'Martes', task: 'Guionizado en 3 Columnas', format: 'Desk POV + Split Screen', done: false },
    { day: 'Miércoles', task: 'Grabación en Bloque (Batch)', format: '1 Long-form + 5 Shorts', done: false },
    { day: 'Jueves', task: 'Poda y Edición Dinámica', format: 'Auto-Editor + Sound Design', done: false },
    { day: 'Viernes', task: 'Programación Omnicanal', format: 'Postiz (Reels, TikTok, YT)', done: false },
    { day: 'Sábado/Dom', task: 'Conversión y Cierre', format: 'Stories + DMs ManyChat', done: false }
  ];

  const [plan, setPlan] = useState(defaultPlan);

  const toggle = (idx) => {
    const updated = [...plan];
    updated[idx].done = !updated[idx].done;
    setPlan(updated);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Calendar className="w-4 h-4" />
          Sistema de Ejecución Continua
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground">
          Planificador Semanal de Alto Rendimiento
        </h1>
        <p className="text-sm text-muted-foreground max-w-3xl">
          El método de los creadores profesionales: crea en bloques de tiempo estructurados para nunca sufrir bloqueo creativo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plan.map((item, idx) => (
          <div
            key={idx}
            onClick={() => toggle(idx)}
            className={`cursor-pointer p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
              item.done
                ? 'bg-primary/10 border-primary/50 text-foreground shadow-md'
                : 'bg-card border-border/80 hover:border-primary/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-primary">
                {item.day}
              </span>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold ${
                item.done ? 'bg-primary text-white' : 'border border-border'
              }`}>
                {item.done && <CheckCircle2 className="w-3.5 h-3.5" />}
              </div>
            </div>

            <div>
              <h3 className={`font-bold text-sm ${item.done ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {item.task}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Entregable: <span className="font-semibold text-foreground">{item.format}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
