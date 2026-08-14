import React from 'react';
import { BarChart3, CheckCircle, AlertTriangle, ArrowUpRight, Zap, Target } from 'lucide-react';
import { calculateSkillGap } from '../engine/simulationEngine';

export default function SkillGapRadar({ userProfile, selectedCareer }) {
  const { gapList, overallReadiness } = calculateSkillGap(userProfile.skills, selectedCareer);

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Skill Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Skill Gap Radar — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              AI-driven skill analysis identifying exact strengths, skill gaps, and learning priorities needed to meet market requirements.
            </p>
          </div>

          {/* Overall Readiness Gauge Pill */}
          <div className="bg-slate-900/90 border border-cyan-500/30 p-4 rounded-2xl flex items-center gap-4">
            <div className="text-center">
              <div className="text-xs font-semibold text-slate-400 uppercase">Skill Match</div>
              <div className="text-3xl font-extrabold text-cyan-400 mt-0.5">{overallReadiness}%</div>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-xs text-slate-300">
              <div className="font-semibold text-white">Gap Analysis</div>
              <div className="text-slate-400">{gapList.filter(g => g.achievedPct < 70).length} Skills Need Focus</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Visual Gap Bars (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-6 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              Required Skills vs Current Profile
            </span>
            <span className="text-xs text-slate-400 font-normal">Target Level: 100% Benchmark</span>
          </h3>

          <div className="space-y-5">
            {gapList.map((item, idx) => {
              let barColor = "bg-gradient-to-r from-emerald-500 to-cyan-500";
              let statusTag = "Mastered / High";
              let statusBg = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";

              if (item.achievedPct < 50) {
                barColor = "bg-gradient-to-r from-rose-500 to-amber-500";
                statusTag = "Critical Gap";
                statusBg = "bg-rose-500/20 text-rose-300 border-rose-500/30";
              } else if (item.achievedPct < 75) {
                barColor = "bg-gradient-to-r from-amber-500 to-cyan-500";
                statusTag = "Developing";
                statusBg = "bg-amber-500/20 text-amber-300 border-amber-500/30";
              }

              return (
                <div key={idx} className="space-y-2 bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{item.skillName}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${statusBg}`}>
                        {statusTag}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-300">
                      Current: <span className="text-cyan-400">{item.currentLevel}%</span> / Req: {item.requiredLevel}%
                    </div>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="progress-bar-bg">
                    <div 
                      className={`progress-bar-fill ${barColor}`} 
                      style={{ width: `${Math.min(100, item.achievedPct)}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                    <span>Readiness: {item.achievedPct}%</span>
                    <span>Gap: {item.gapPct}% remaining</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Actionable Recommendations (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Prioritized Learning Plan</span>
            </h3>

            <div className="space-y-3">
              {gapList
                .filter(item => item.achievedPct < 80)
                .sort((a, b) => a.achievedPct - b.achievedPct)
                .map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-cyan-300">Priority {idx + 1}: {item.skillName}</span>
                      <span className="text-xs font-bold text-amber-400">+{item.gapPct}% Need</span>
                    </div>

                    <p className="text-xs text-slate-300">
                      Target level is {item.requiredLevel}%. Focus on build exercises and dedicated projects in this area during Month 1–3 of your career timeline.
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/60">
                      <span>Estimated effort: {Math.max(2, Math.round(item.gapPct / 15))} weeks</span>
                      <span className="text-cyan-400 font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                        View Resources <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
