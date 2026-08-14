import React from 'react';
import { Layers, Award, CheckCircle2, Lock } from 'lucide-react';

export default function SkillTree({ selectedCareer }) {
  const questNodes = [
    { level: 1, name: 'Python Core Fundamentals', status: 'unlocked', xp: 500 },
    { level: 2, name: 'Relational SQL & Data Modeling', status: 'unlocked', xp: 750 },
    { level: 3, name: 'Machine Learning Algorithms & PyTorch', status: 'in-progress', xp: 1200 },
    { level: 4, name: 'MLOps, Docker & FastAPI Deployment', status: 'locked', xp: 1800 },
    { level: 5, name: 'LLM Fine-Tuning & Vector Databases', status: 'locked', xp: 2500 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Gamified Mastery System</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Skill Tree & Quest Progression — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Unlock technical quest nodes sequentially as you level up your skill tree from foundational syntax to advanced distributed architecture.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 md:p-8 space-y-4">
        {questNodes.map((node) => (
          <div
            key={node.level}
            className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
              node.status === 'unlocked'
                ? 'bg-slate-900/90 border-emerald-500/40 text-white'
                : node.status === 'in-progress'
                ? 'bg-slate-900/90 border-cyan-500/40 text-white shadow-lg shadow-cyan-500/10'
                : 'bg-slate-950/50 border-slate-800/80 opacity-60 text-slate-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                node.status === 'unlocked' ? 'bg-emerald-500/20 text-emerald-400' :
                node.status === 'in-progress' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'
              }`}>
                Lvl {node.level}
              </div>
              <span className="font-bold text-sm">{node.name}</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="font-semibold text-amber-400">+{node.xp} XP</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 uppercase font-bold">
                {node.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
