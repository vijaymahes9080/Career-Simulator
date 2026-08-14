import React, { useState } from 'react';
import { HelpCircle, RefreshCw, CheckCircle2, ChevronRight } from 'lucide-react';

export default function MockInterview({ selectedCareer }) {
  const [activeTab, setActiveTab] = useState('technical');

  const questions = {
    technical: [
      `How do you handle missing values and outliers in high-dimensional datasets for ${selectedCareer.title}?`,
      `Explain the difference between L1 (Lasso) and L2 (Ridge) regularization and when to choose each.`,
      `Walk through how you would optimize a slow database query operating on 10 million rows.`
    ],
    behavioral: [
      `Describe a time when your predictive model produced unexpected results. How did you diagnose and communicate this to business stakeholders?`,
      `How do you prioritize competing deadlines between shipping a project fast vs perfecting model performance?`
    ],
    systemDesign: [
      `Design a real-time analytics pipeline capable of ingesting 50,000 events/sec with under 100ms latency.`
    ]
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Interview Readiness Prep</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              AI Mock Interview Prep Generator — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Practice real technical, behavioral, and system design interview questions tailored specifically to your target career role.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          {['technical', 'behavioral', 'systemDesign'].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                activeTab === type
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {type} Questions
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {questions[activeTab].map((q, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="font-bold text-sm text-white flex items-start gap-2">
                <span className="text-cyan-400">Q{idx + 1}:</span>
                <span>{q}</span>
              </div>
              <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                <span>Difficulty: Medium-High</span>
                <span className="text-cyan-400 font-medium cursor-pointer hover:underline">View Model Answer →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
