import React, { useState } from 'react';
import { Scale, Check, Trophy, Sparkles, ArrowRight, Award } from 'lucide-react';
import { calculateCompatibility } from '../engine/simulationEngine';

export default function CareerComparison({ userProfile, careers }) {
  const [selectedIds, setSelectedIds] = useState(['data-scientist', 'data-engineer', 'ai-engineer']);

  const comparedCareers = careers.filter(c => selectedIds.includes(c.id));

  // Find best compatibility match
  const bestFit = comparedCareers.reduce((prev, current) => {
    const prevFit = calculateCompatibility(userProfile, prev);
    const currFit = calculateCompatibility(userProfile, current);
    return currFit > prevFit ? current : prev;
  }, comparedCareers[0] || careers[0]);

  const bestFitScore = calculateCompatibility(userProfile, bestFit);

  const toggleCareer = (id) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 2) {
        setSelectedIds(selectedIds.filter(item => item !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        setSelectedIds([selectedIds[1], selectedIds[2], id]);
      }
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>Multi-Career Decision Matrix</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Career Path Comparison
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Compare possible futures side-by-side. Analyze entry barriers, coding requirements, learning timelines, and AI automation risks across target technical paths.
            </p>
          </div>
        </div>
      </div>

      {/* Select Career Chips */}
      <div className="glass-panel p-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Select 2-3 Careers:</span>
        {careers.map(c => {
          const isSelected = selectedIds.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => toggleCareer(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isSelected 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md' 
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              {c.title}
            </button>
          );
        })}
      </div>

      {/* Algorithmic Best Fit Card */}
      {bestFit && (
        <div className="glass-panel p-6 border-l-4 border-l-emerald-400 bg-gradient-to-r from-emerald-950/20 to-slate-900/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Top Recommendation for your profile
                </div>
                <h3 className="text-xl font-extrabold text-white mt-0.5">
                  Best Fit: {bestFit.title} — <span className="text-emerald-400">{bestFitScore}% Compatibility</span>
                </h3>
              </div>
            </div>

            <div className="text-xs text-slate-300 max-w-md bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="font-semibold text-white">Why this fits best:</span> Strong alignment with your MCA degree, high Python/SQL proficiency, and optimal balance between math requirements and rapid time to job-ready.
            </div>
          </div>
        </div>
      )}

      {/* Comparison Table Matrix */}
      <div className="glass-panel overflow-hidden border border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800">
                <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/4">Factor / Metric</th>
                {comparedCareers.map(c => {
                  const score = calculateCompatibility(userProfile, c);
                  return (
                    <th key={c.id} className="p-4 text-center border-l border-slate-800">
                      <div className="font-bold text-base text-white">{c.title}</div>
                      <div className="text-xs font-semibold text-cyan-400 mt-1">
                        {score}% Compatibility
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60 text-xs">
              
              {/* Entry Difficulty */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">Entry Difficulty</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-medium text-slate-200">
                    {c.entryBarrierLabel} ({c.entryBarrier}%)
                  </td>
                ))}
              </tr>

              {/* Math Requirement */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">Math & Stat Rigor</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-medium text-slate-200">
                    {c.mathRequirement >= 80 ? 'High' : c.mathRequirement >= 60 ? 'Medium' : 'Low'} ({c.mathRequirement}%)
                  </td>
                ))}
              </tr>

              {/* Coding Requirement */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">Coding Requirement</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-medium text-slate-200">
                    {c.codingRequirement >= 90 ? 'Very High' : c.codingRequirement >= 75 ? 'High' : 'Medium'} ({c.codingRequirement}%)
                  </td>
                ))}
              </tr>

              {/* Future Demand */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">Future Demand</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-bold text-emerald-400">
                    {c.demandLabel} ({c.demandIndex}%)
                  </td>
                ))}
              </tr>

              {/* Competition Level */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">Competition</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-medium text-slate-200">
                    {c.competitionLabel} ({c.competition}%)
                  </td>
                ))}
              </tr>

              {/* Learning Time */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">Time to Job-Ready</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-bold text-cyan-300">
                    {c.timeToJobReadyBase}–{c.timeToJobReadyBase + 3} Months
                  </td>
                ))}
              </tr>

              {/* AI Automation Risk */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">AI Automation Risk</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-medium text-amber-300">
                    {c.automationRiskLabel} ({c.automationRisk}%)
                  </td>
                ))}
              </tr>

              {/* Starting Salary */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">Starting Salary (Year 0)</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-bold text-white">
                    {c.salaryRange.y0.median}
                  </td>
                ))}
              </tr>

              {/* 5-Year Salary */}
              <tr>
                <td className="p-4 font-semibold text-slate-300">5-Year Salary (Senior)</td>
                {comparedCareers.map(c => (
                  <td key={c.id} className="p-4 text-center border-l border-slate-800 font-bold text-violet-400 text-sm">
                    {c.salaryRange.y5.median}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
