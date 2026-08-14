import React, { useState } from 'react';
import { GitCommit, Calendar, BookOpen, Code, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CareerTimeline({ selectedCareer }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const filteredMilestones = (selectedCareer.milestones || []).filter(m => {
    if (activeFilter === 'all') return true;
    return m.milestoneType === activeFilter;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-3">
              <GitCommit className="w-3.5 h-3.5" />
              <span>Simulated Roadmap</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Career Timeline — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Follow the projected milestone-by-milestone progression from fundamental skill acquisition to junior roles and long-term senior specialization.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {['all', 'learning', 'project', 'internship', 'job'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === filter
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Visual Timeline */}
      <div className="glass-panel p-6 md:p-8">
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
          
          {filteredMilestones.map((m, idx) => {
            const isSelected = selectedMilestone === idx;
            
            // Badge styles
            let badgeBg = "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
            if (m.milestoneType === 'project') badgeBg = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
            if (m.milestoneType === 'internship') badgeBg = "bg-amber-500/20 text-amber-300 border-amber-500/30";
            if (m.milestoneType === 'job') badgeBg = "bg-violet-500/20 text-violet-300 border-violet-500/30";

            return (
              <div key={idx} className="relative group">
                
                {/* Node Bullet Point */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 bg-slate-950 flex items-center justify-center transition-all ${
                  isSelected ? 'border-cyan-400 shadow-lg shadow-cyan-500/50 scale-125' : 'border-slate-700 group-hover:border-violet-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-slate-500 group-hover:bg-violet-400'}`} />
                </div>

                {/* Milestone Box */}
                <div 
                  onClick={() => setSelectedMilestone(isSelected ? null : idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/40 shadow-xl shadow-cyan-500/10'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${badgeBg}`}>
                        {m.period}
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {m.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="capitalize">{m.milestoneType} Phase</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-cyan-400' : ''}`} />
                    </div>

                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(m.skills || []).map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 flex items-center gap-1.5">
                        <BookOpen className="w-3 h-3 text-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Recommended Projects / Expanded info */}
                  {m.projects && m.projects.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80">
                      <div className="text-xs font-semibold text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-emerald-400" />
                        Key Milestone Output / Portfolio Project:
                      </div>
                      <ul className="space-y-1">
                        {m.projects.map((proj, pIdx) => (
                          <li key={pIdx} className="text-xs text-emerald-300 font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{proj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
}
