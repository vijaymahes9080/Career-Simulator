import React from 'react';
import { GitPullRequest, Star, Sparkles } from 'lucide-react';

export default function OpenSourceImpact({ selectedCareer }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <GitPullRequest className="w-3.5 h-3.5" />
              <span>Open Source Multiplier</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Open Source GitHub Contribution Impact Engine
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Calculate how active open-source contributions, pull requests, and starred repositories directly boost recruiter response rates and starting package negotiations.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Recruiter Outbound Inquiries</div>
            <div className="text-2xl font-extrabold text-emerald-400 mt-1">3.4x Higher</div>
            <div className="text-xs text-slate-400">With Public GitHub Activity</div>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Salary Offer Premium</div>
            <div className="text-2xl font-extrabold text-cyan-400 mt-1">+18% Premium</div>
            <div className="text-xs text-slate-400">For Proven Maintainer Proof</div>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Target Repositories</div>
            <div className="text-sm font-bold text-violet-400 mt-1">Scikit-Learn, PyTorch, LangChain</div>
          </div>
        </div>
      </div>
    </div>
  );
}
