import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ScriptGeneratorView from "./components/ScriptGeneratorView";
import HookGeneratorProView from "./components/HookGeneratorProView";
import ProfileAuditView from "./components/ProfileAuditView";
import FormatsVisualView from "./components/FormatsVisualView";
import OnlineToolsView from "./components/OnlineToolsView";
import CreatorSecretsView from "./components/CreatorSecretsView";
import MasterclassView from "./components/MasterclassView";

export default function App() {
  const [activeTab, setActiveTab] = useState("script_ai");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full overflow-y-auto">
        {activeTab === "script_ai" && <ScriptGeneratorView />}
        {activeTab === "hooks_pro" && <HookGeneratorProView />}
        {activeTab === "audit_profile" && <ProfileAuditView />}
        {activeTab === "formats_simple" && <FormatsVisualView />}
        {activeTab === "tools_online" && <OnlineToolsView />}
        {activeTab === "secrets_masters" && <CreatorSecretsView />}
        {activeTab === "masterclass" && <MasterclassView />}
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 text-center text-xs text-slate-500">
        CreatorOS Pro © 2026-2027 • Diseñado para que cualquier persona o negocio cree contenido que retiene y vende.
      </footer>
    </div>
  );
}
