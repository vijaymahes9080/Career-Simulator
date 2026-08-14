import React from 'react';
import { DollarSign, Briefcase, Star, Clock } from 'lucide-react';

export default function GigSimulator({ selectedCareer }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Freelance Market Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Freelance & Gig Economy Simulator — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Simulate contract rates, freelance hourly earnings, client demand, and gig platform competition (Upwork, Toptal, Contract).
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-panel p-5 space-y-2 border-l-4 border-l-cyan-400">
          <div className="text-xs font-bold text-slate-400 uppercase">Estimated Hourly Rate</div>
          <div className="text-2xl font-extrabold text-white">$45 - $95 / hr</div>
          <div className="text-xs text-cyan-400">Global Contract Standard</div>
        </div>

        <div className="glass-panel p-5 space-y-2 border-l-4 border-l-emerald-400">
          <div className="text-xs font-bold text-slate-400 uppercase">Contract Demand Index</div>
          <div className="text-2xl font-extrabold text-emerald-400">High (84%)</div>
          <div className="text-xs text-slate-400">Frequent Enterprise Projects</div>
        </div>

        <div className="glass-panel p-5 space-y-2 border-l-4 border-l-amber-400">
          <div className="text-xs font-bold text-slate-400 uppercase">Client Acquisition Barrier</div>
          <div className="text-2xl font-extrabold text-amber-400">Medium</div>
          <div className="text-xs text-slate-400">Requires Strong Upwork Portfolio</div>
        </div>
      </div>
    </div>
  );
}
