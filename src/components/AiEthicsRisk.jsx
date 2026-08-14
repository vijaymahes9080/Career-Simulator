import React from 'react';
import { ShieldCheck, AlertTriangle, FileText } from 'lucide-react';

export default function AiEthicsRisk({ selectedCareer }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Governance & Ethics</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              AI Governance, Ethics & Compliance Risk Module
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Evaluate regulatory compliance requirements (EU AI Act, GDPR, Responsible AI) for {selectedCareer.title} roles.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 space-y-4">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="font-bold text-sm text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>EU AI Act High-Risk Model Compliance</span>
          </div>
          <p className="text-xs text-slate-300">
            Engineers building predictive hiring, scoring, or automated decision algorithms must implement audit logs and bias mitigations.
          </p>
        </div>
      </div>
    </div>
  );
}
