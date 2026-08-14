import React, { useState } from 'react';
import { FileText, Sparkles, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { calculateCompatibility } from '../engine/simulationEngine';

export default function ResumeAnalyzer({ userProfile, setUserProfile, careers, setActiveTab }) {
  const [resumeText, setResumeText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [extractedResult, setExtractedResult] = useState(null);

  const handleAnalyzeResume = () => {
    if (!resumeText.trim()) return;

    setAnalyzing(true);
    setExtractedResult(null);

    setTimeout(() => {
      // Intelligent extraction parser simulation
      const textLower = resumeText.toLowerCase();
      const detectedSkills = { ...userProfile.skills };

      if (textLower.includes('python')) detectedSkills['Python'] = Math.min(100, (detectedSkills['Python'] || 50) + 15);
      if (textLower.includes('sql') || textLower.includes('database')) detectedSkills['SQL'] = Math.min(100, (detectedSkills['SQL'] || 50) + 15);
      if (textLower.includes('machine learning') || textLower.includes('ml') || textLower.includes('scikit')) detectedSkills['Machine Learning'] = Math.min(100, (detectedSkills['Machine Learning'] || 40) + 20);
      if (textLower.includes('react') || textLower.includes('javascript') || textLower.includes('node')) detectedSkills['React / Next.js'] = Math.min(100, (detectedSkills['React / Next.js'] || 60) + 15);
      if (textLower.includes('docker') || textLower.includes('kubernetes') || textLower.includes('aws')) detectedSkills['Docker & Kubernetes'] = Math.min(100, (detectedSkills['Docker & Kubernetes'] || 30) + 20);

      const updatedProfile = {
        ...userProfile,
        skills: detectedSkills,
        projectsCount: Math.min(6, (userProfile.projectsCount || 2) + 1)
      };

      setUserProfile(updatedProfile);

      setExtractedResult({
        detectedCount: 5,
        topStrengths: ['Python Data Extraction', 'SQL Database Queries', 'Frontend Component Architecture'],
        suggestedCareer: careers[0],
        compatibilityScore: calculateCompatibility(updatedProfile, careers[0])
      });

      setAnalyzing(false);
    }, 1000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>AI Resume Parser</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Resume & Portfolio AI Skill Extractor
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Paste your resume or GitHub project description. Our NLP algorithm extracts skill proficiencies and updates your Career Digital Twin automatically.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 glass-panel p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Paste Resume Text / Project Overview</span>
          </h3>

          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={8}
            placeholder="Paste your resume text, summary, skills list, or GitHub portfolio README here..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-mono"
          />

          <div className="flex justify-end">
            <button
              onClick={handleAnalyzeResume}
              disabled={analyzing || !resumeText.trim()}
              className="btn-primary text-xs"
            >
              {analyzing ? 'Extracting Skills...' : 'Analyze & Sync with Digital Twin'}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          {extractedResult ? (
            <div className="glass-panel p-6 space-y-4 border-l-4 border-l-emerald-400 bg-slate-900/80 animate-fade-in">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Skills Successfully Extracted & Synced!</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="text-slate-300 font-semibold">Detected Key Competencies:</div>
                <div className="flex flex-wrap gap-2">
                  {extractedResult.topStrengths.map((str, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      {str}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs flex justify-between items-center">
                <span>Updated Twin Match ({extractedResult.suggestedCareer.title}):</span>
                <span className="font-extrabold text-emerald-400 text-base">{extractedResult.compatibilityScore}%</span>
              </div>

              <button
                onClick={() => setActiveTab('twin')}
                className="w-full btn-secondary text-xs justify-center flex items-center gap-2 mt-2"
              >
                <span>View Digital Twin</span>
                <UserCheck className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="glass-panel p-6 text-center text-slate-400 space-y-3">
              <FileText className="w-12 h-12 text-slate-600 mx-auto" />
              <div className="text-sm font-semibold text-slate-300">Ready to Scan</div>
              <p className="text-xs max-w-xs mx-auto">
                Paste your resume on the left to benchmark your skills instantly against market standards.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
