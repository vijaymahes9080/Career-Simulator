import React from 'react';
import { BookOpen, ExternalLink, Code2, Star } from 'lucide-react';

export default function AiMentor({ selectedCareer }) {
  const recommendations = [
    { title: `Complete Hands-on ${selectedCareer.requiredSkills[0]?.name || 'Python'} Masterclass`, type: 'Project Course', time: '3 weeks', rating: '4.9 ⭐' },
    { title: `Build Enterprise ${selectedCareer.title} Portfolio Repository`, type: 'GitHub Project', time: '4 weeks', rating: '5.0 ⭐' },
    { title: `Contribute to Open Source ML/Data Infrastructure Tooling`, type: 'Open Source', time: 'Ongoing', rating: '4.8 ⭐' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Curated Mentorship Engine</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              AI Mentorship & Learning Resource Guide — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Top curated learning paths, open source contribution targets, and project tutorials recommended for your current profile.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 space-y-4">
        {recommendations.map((item, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-bold text-sm text-white">{item.title}</div>
              <div className="text-xs text-slate-400">{item.type} • Estimated Duration: {item.time}</div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-amber-400">{item.rating}</span>
              <button className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1">
                <span>Start</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
