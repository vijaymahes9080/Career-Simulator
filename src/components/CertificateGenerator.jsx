import React from 'react';
import { Award, Download, Printer, CheckCircle } from 'lucide-react';

export default function CertificateGenerator({ userProfile, selectedCareer, currentTwinMatch }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Simulation Verification</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Official Career Simulation Certificate
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Export and share your officially verified Career Digital Twin readiness report for resume attachments and academic project submission.
            </p>
          </div>

          <button onClick={handlePrint} className="btn-primary text-xs flex items-center gap-2">
            <Printer className="w-4 h-4" />
            Print / Export PDF Report
          </button>
        </div>
      </div>

      {/* Official Certificate Card */}
      <div className="glass-panel p-8 border-2 border-cyan-500/40 bg-gradient-to-b from-slate-900/90 to-slate-950/90 text-center space-y-6 max-w-3xl mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-500 mx-auto flex items-center justify-center shadow-lg shadow-cyan-500/30">
          <Award className="w-8 h-8 text-white" />
        </div>

        <div className="space-y-1">
          <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Career Simulator AI Intelligence Platform</h3>
          <h2 className="text-2xl font-extrabold text-white">Certificate of Simulation Readiness</h2>
        </div>

        <p className="text-sm text-slate-300">This is to certify that</p>
        <div className="text-2xl font-extrabold text-gradient">{userProfile.name}</div>
        <p className="text-xs text-slate-400">Master of Computer Applications (MCA)</p>

        <div className="py-4 border-y border-slate-800 space-y-2">
          <div className="text-xs text-slate-400">Target Career Path Simulated:</div>
          <div className="text-lg font-bold text-white">{selectedCareer.title}</div>
          <div className="text-sm font-semibold text-emerald-400">Verified Twin Readiness: {currentTwinMatch}% Match</div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-slate-500 pt-2">
          <span>Date: {new Date().toLocaleDateString()}</span>
          <span>Verification ID: CS-2026-9080-VM</span>
          <span>Platform: Career Simulator Engine</span>
        </div>
      </div>
    </div>
  );
}
