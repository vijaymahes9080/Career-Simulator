import React from 'react';
import { Plane, Flag, CheckCircle } from 'lucide-react';

export default function VisaRelocation({ selectedCareer }) {
  const visaData = [
    { country: 'United States', visa: 'H-1B / O-1 STEM', difficulty: 'High (Lottery)', point: 'High Demand for ML/Data roles' },
    { country: 'United Kingdom', visa: 'Global Tech Nation Visa', difficulty: 'Medium', point: 'Fast-track for AI Engineers' },
    { country: 'Germany / EU', visa: 'EU Blue Card', difficulty: 'Low-Medium', point: 'Recognized CS / Tech degrees' },
    { country: 'Canada', visa: 'Express Entry Tech Stream', difficulty: 'Medium', point: 'Points boost for MCA / Masters' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <Plane className="w-3.5 h-3.5" />
              <span>Immigration Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Global Tech Visa & Relocation Simulator — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Analyze work visa eligibility, points thresholds, and tech relocation opportunities across major international markets.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visaData.map((item, idx) => (
          <div key={idx} className="glass-panel p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-white flex items-center gap-2">
                <Flag className="w-4 h-4 text-cyan-400" />
                {item.country}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {item.difficulty}
              </span>
            </div>
            <div className="text-xs text-cyan-300 font-semibold">{item.visa}</div>
            <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">{item.point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
