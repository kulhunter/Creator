import React from "react";
import { Sparkles, GitBranch, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
          <Sparkles className="w-5 h-5 text-white animate-pulse" />
        </div>
        <div>
          <span className="font-extrabold text-lg tracking-tight text-white">
            Creator<span className="text-blue-500 font-black">OS</span>
          </span>
          <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full">
            2026-2027 Pro
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/kulhunter/Creator"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-xs font-semibold transition-all text-slate-200"
        >
          <GitBranch className="w-4 h-4 text-blue-400" />
          <span className="hidden md:inline">kulhunter/Creator</span>
        </a>
      </div>
    </header>
  );
}
