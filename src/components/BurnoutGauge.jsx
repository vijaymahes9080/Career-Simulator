import React from 'react';
import { HeartPulse, Clock, Smile } from 'lucide-react';

export default function BurnoutGauge({ selectedCareer }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Work-Life Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Work-Life Balance & Burnout Risk Index — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Model average weekly working hours, on-call expectations, remote flexibility, and long-term sustainability.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-panel p-5 space-y-2 border-l-4 border-l-emerald-400">
          <div className="text-xs font-bold text-slate-400 uppercase">Avg Weekly Work Hours</div>
          <div className="text-2xl font-extrabold text-white">42 - 45 hrs / week</div>
          <div className="text-xs text-emerald-400">Standard Tech Load</div>
        </div>

        <div className="glass-panel p-5 space-y-2 border-l-4 border-l-cyan-400">
          <div className="text-xs font-bold text-slate-400 uppercase">On-Call Requirement</div>
          <div className="text-2xl font-extrabold text-cyan-400">Low to Medium</div>
          <div className="text-xs text-slate-400">Less On-Call than SRE / DevOps</div>
        </div>

        <div className="glass-panel p-5 space-y-2 border-l-4 border-l-violet-400">
          <div className="text-xs font-bold text-slate-400 uppercase">Work-Life Satisfaction</div>
          <div className="text-2xl font-extrabold text-violet-400">8.4 / 10</div>
          <div className="text-xs text-slate-400">High Job Satisfaction</div>
        </div>
      </div>
    </div>
  );
}
