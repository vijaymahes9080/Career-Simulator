import React, { useState } from 'react';
import { Shuffle, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateCompatibility } from '../engine/simulationEngine';

export default function CareerPivot({ userProfile, careers }) {
  const [fromDomain, setFromDomain] = useState('Mechanical / Non-IT');

  const pivotProfiles = {
    'Mechanical / Non-IT': { transferablePct: 40, boostSkills: ['Python', 'Statistics & Math'], transitionTime: 9 },
    'Commerce / Finance': { transferablePct: 55, boostSkills: ['SQL', 'Power BI / Tableau'], transitionTime: 7 },
    'Web Development': { transferablePct: 75, boostSkills: ['JavaScript / TypeScript', 'Python'], transitionTime: 5 },
    'BCA / BSc CS': { transferablePct: 80, boostSkills: ['SQL', 'Linux & Bash'], transitionTime: 4 }
  };

  const activePivot = pivotProfiles[fromDomain] || pivotProfiles['Mechanical / Non-IT'];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-3">
              <Shuffle className="w-3.5 h-3.5" />
              <span>Domain Transition Engine</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Career Pivot & Transferable Skill Simulator
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Simulate switching into high-demand tech roles from non-CS degrees or adjacent industries. Calculate your transferable skill overlap.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Select Current Background:</label>
          <select
            value={fromDomain}
            onChange={(e) => setFromDomain(e.target.value)}
            className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
          >
            <option value="Mechanical / Non-IT">Mechanical / Non-IT Engineering</option>
            <option value="Commerce / Finance">Commerce / Finance / Business</option>
            <option value="Web Development">Frontend / Traditional Web Dev</option>
            <option value="BCA / BSc CS">BCA / BSc Computer Science</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Transferable Skill Overlap</div>
            <div className="text-2xl font-extrabold text-cyan-400 mt-1">{activePivot.transferablePct}%</div>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Estimated Pivot Transition Time</div>
            <div className="text-2xl font-extrabold text-violet-400 mt-1">{activePivot.transitionTime} Months</div>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Key Transferable Strengths</div>
            <div className="text-sm font-bold text-emerald-400 mt-1">{activePivot.boostSkills.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
