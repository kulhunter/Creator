import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardView from "./components/DashboardView";
import AiStudioView from "./components/AiStudioView";
import FormatsExplorerView from "./components/FormatsExplorerView";
import HookGeneratorView from "./components/HookGeneratorView";
import ScriptBuilderView from "./components/ScriptBuilderView";
import GurusDirectoryView from "./components/GurusDirectoryView";
import GithubToolsView from "./components/GithubToolsView";
import HanahAlefVaultView from "./components/HanahAlefVaultView";
import OmnichannelPlaybookView from "./components/OmnichannelPlaybookView";
import GeoAiSearchAuditView from "./components/GeoAiSearchAuditView";
import WeeklyPlannerView from "./components/WeeklyPlannerView";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full overflow-y-auto">
          {activeTab === "dashboard" && <DashboardView setActiveTab={setActiveTab} />}
          {activeTab === "ai_studio" && <AiStudioView />}
          {activeTab === "formats" && <FormatsExplorerView />}
          {activeTab === "hooks" && <HookGeneratorView />}
          {activeTab === "script_builder" && <ScriptBuilderView />}
          {activeTab === "gurus" && <GurusDirectoryView />}
          {activeTab === "github_tools" && <GithubToolsView />}
          {activeTab === "hanah_alef" && <HanahAlefVaultView />}
          {activeTab === "omnichannel" && <OmnichannelPlaybookView />}
          {activeTab === "geo_audit" && <GeoAiSearchAuditView />}
          {activeTab === "planner" && <WeeklyPlannerView />}
        </main>
      </div>
    </div>
  );
}
