import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

export default function PeerBenchmark({ userProfile, selectedCareer }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Peer Benchmarking</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Industry Leader & Peer Benchmark — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Benchmark your skill profile against top 10% senior professionals at leading tech organizations.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Your Percentile Position</div>
            <div className="text-2xl font-extrabold text-cyan-400 mt-1">Top 22%</div>
            <div className="text-xs text-slate-400">Among MCA / Masters Applicants</div>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Top 10% Benchmark Skill Level</div>
            <div className="text-sm font-bold text-emerald-400 mt-1">Python 90%+ • PyTorch • Cloud Architecture</div>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Key Competitive Edge</div>
            <div className="text-sm font-bold text-violet-400 mt-1">Dual Software + Data Science Capability</div>
          </div>
        </div>
      </div>
    </div>
  );
}
