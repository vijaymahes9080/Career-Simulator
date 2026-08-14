import React from 'react';
import { TrendingUp, Globe, Users, ArrowUpRight, Zap } from 'lucide-react';

export default function MarketTrends({ selectedCareer }) {
  const trends = [
    { year: '2024', jobOpenings: '120,000+', avgSalary: selectedCareer.salaryRange.y0.median, remotePct: '35%' },
    { year: '2025', jobOpenings: '145,000+', avgSalary: selectedCareer.salaryRange.y3.median, remotePct: '42%' },
    { year: '2026 (Now)', jobOpenings: '180,000+', avgSalary: selectedCareer.salaryRange.y3.max, remotePct: '48%' },
    { year: '2027 (Proj)', jobOpenings: '225,000+', avgSalary: selectedCareer.salaryRange.y5.median, remotePct: '55%' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Labor Market Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Hiring Demand & Market Trends — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Analyze multi-year job posting volume, remote work adoption rates, and hiring velocity trends powered by labor-market data models.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {trends.map((t, idx) => (
          <div key={idx} className="glass-panel p-5 space-y-2 border-l-4 border-l-cyan-400">
            <div className="text-xs font-bold text-slate-400 uppercase">{t.year} Market Snapshot</div>
            <div className="text-xl font-extrabold text-white">{t.jobOpenings}</div>
            <div className="text-xs text-cyan-400 font-semibold">Median Salary: {t.avgSalary}</div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1 pt-1 border-t border-slate-800">
              <Globe className="w-3 h-3 text-emerald-400" />
              <span>Remote Jobs: {t.remotePct}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
