import React from 'react';
import { Code, Lightbulb, ExternalLink } from 'lucide-react';

export default function ProjectIdeasGenerator({ selectedCareer }) {
  const projects = [
    { name: `Real-Time ${selectedCareer.title} Analytics Engine`, difficulty: 'Advanced', tech: 'Python, FastAPI, Docker, PostgreSQL' },
    { name: `Distributed Stream Processor for Market Events`, difficulty: 'Intermediate', tech: 'Kafka, PySpark, AWS S3' },
    { name: `LLM-Powered Domain Agent with Vector RAG`, difficulty: 'Advanced', tech: 'PyTorch, Qdrant, Streamlit' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Tailored Project Generator</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Portfolio Project Ideas — {selectedCareer.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Stand out to top tech recruiters with killer portfolio project specifications targeted directly to fill missing skills in your profile.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((proj, idx) => (
          <div key={idx} className="glass-panel p-5 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-white">{proj.name}</h3>
              <p className="text-xs text-slate-400 mt-1">Tech Stack: <span className="text-cyan-300 font-mono">{proj.tech}</span></p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
              {proj.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
