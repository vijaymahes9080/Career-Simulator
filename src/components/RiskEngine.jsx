import React, { useState } from 'react';
import { ShieldAlert, AlertCircle, Info, CheckCircle2, Flame, Bot, Compass } from 'lucide-react';

export default function RiskEngine({ selectedCareer }) {
  const risks = selectedCareer.riskExplanations || {};

  const riskFactors = [
    {
      id: 'competition',
      label: 'Competition Density',
      score: selectedCareer.competition,
      tag: selectedCareer.competitionLabel,
      explanation: risks.competition || "High candidate volume in market.",
      mitigation: "Build 3+ production portfolio projects and acquire hands-on internship proof."
    },
    {
      id: 'entryBarrier',
      label: 'Entry Barrier & Math Rigor',
      score: selectedCareer.entryBarrier,
      tag: selectedCareer.entryBarrierLabel,
      explanation: risks.entryBarrier || "Requires multi-disciplinary technical foundations.",
      mitigation: "Master core algorithms, statistics, and system fundamentals early in your timeline."
    },
    {
      id: 'automationRisk',
      label: 'AI Automation Disruption',
      score: selectedCareer.automationRisk,
      tag: selectedCareer.automationRiskLabel,
      explanation: risks.automationRisk || "Routine tasks being automated by LLMs & AutoML.",
      mitigation: "Move up the value chain from basic coding to AI system architecture and business context."
    },
    {
      id: 'skillVolatility',
      label: 'Skill Volatility Rate',
      score: selectedCareer.skillVolatility,
      tag: selectedCareer.skillVolatilityLabel,
      explanation: risks.skillVolatility || "Fast-moving frameworks and tooling ecosystem.",
      mitigation: "Focus on immutable fundamentals (Data Structures, SQL, Networking) rather than transient syntax."
    },
    {
      id: 'locationDependency',
      label: 'Location Concentration',
      score: selectedCareer.locationDependency,
      tag: selectedCareer.locationDependencyLabel,
      explanation: risks.locationDependency || "Salaries concentrated in major tier-1 tech hubs.",
      mitigation: "Target remote global companies or relocate to major hubs (Bangalore, Hyderabad, NCR)."
    }
  ];

  // Calculate overall risk index
  const avgRisk = Math.round(
    riskFactors.reduce((acc, curr) => acc + curr.score, 0) / riskFactors.length
  );

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-semibold mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Risk Intelligence Engine</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Career Risk Engine — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Unbiased, multidimensional risk assessment explaining market entry obstacles, automation threats, competition pressure, and mitigation strategies.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-rose-500/30 p-4 rounded-2xl flex items-center gap-4">
            <div className="text-center">
              <div className="text-xs font-semibold text-slate-400 uppercase">Composite Risk Index</div>
              <div className="text-3xl font-extrabold text-rose-400 mt-0.5">{avgRisk}/100</div>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-xs text-slate-300">
              <div className="font-semibold text-white">Risk Rating</div>
              <div className="text-amber-400 font-bold">
                {avgRisk > 75 ? 'High Risk' : avgRisk > 55 ? 'Moderate Risk' : 'Low Risk'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Dimension Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {riskFactors.map((factor) => {
          let meterColor = "bg-gradient-to-r from-emerald-500 to-amber-500";
          let badgeStyle = "bg-amber-500/20 text-amber-300 border-amber-500/30";

          if (factor.score >= 75) {
            meterColor = "bg-gradient-to-r from-amber-500 to-rose-500";
            badgeStyle = "bg-rose-500/20 text-rose-300 border-rose-500/30";
          } else if (factor.score < 45) {
            meterColor = "bg-gradient-to-r from-emerald-500 to-cyan-500";
            badgeStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
          }

          return (
            <div key={factor.id} className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-rose-400" />
                  <span>{factor.label}</span>
                </h3>

                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${badgeStyle}`}>
                  {factor.score}% ({factor.tag})
                </span>
              </div>

              {/* Progress Meter */}
              <div className="progress-bar-bg">
                <div className={`progress-bar-fill ${meterColor}`} style={{ width: `${factor.score}%` }} />
              </div>

              {/* Context Explanation */}
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5 text-xs">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  Why does this risk exist?
                </div>
                <p className="text-slate-400 leading-relaxed">{factor.explanation}</p>
              </div>

              {/* Mitigation Strategy */}
              <div className="bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-500/20 space-y-1 text-xs">
                <div className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  How to mitigate:
                </div>
                <p className="text-emerald-200/80 leading-relaxed">{factor.mitigation}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
