import React, { useState } from 'react';
import { UserCheck, Sparkles, Plus, CheckCircle, RefreshCw, Trophy, BookOpen, Layers } from 'lucide-react';
import { calculateCompatibility } from '../engine/simulationEngine';

export default function DigitalTwin({ userProfile, setUserProfile, careers }) {
  const [skillEdit, setSkillEdit] = useState({ name: 'Python', increment: 10 });
  const [lastUpdateLog, setLastUpdateLog] = useState(null);

  const handleLevelUpSkill = (skillName, boostVal = 10) => {
    const currentVal = userProfile.skills[skillName] || 50;
    const newVal = Math.min(100, currentVal + boostVal);

    // Calculate before compatibility scores
    const beforeScores = careers.map(c => ({
      title: c.title,
      score: calculateCompatibility(userProfile, c)
    }));

    // Mutate profile
    const updatedProfile = {
      ...userProfile,
      skills: {
        ...userProfile.skills,
        [skillName]: newVal
      }
    };

    setUserProfile(updatedProfile);

    // Calculate after compatibility scores
    const afterScores = careers.map(c => ({
      title: c.title,
      score: calculateCompatibility(updatedProfile, c)
    }));

    setLastUpdateLog({
      skillName,
      beforeVal: currentVal,
      afterVal: newVal,
      beforeScores,
      afterScores
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Personal Career Digital Twin</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Your Personal Career Digital Twin
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Your digital twin is a dynamic AI model representing your skills, education, and portfolio. As you acquire new certifications or skills, your twin recalculates your career compatibility in real-time.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-violet-500/30 p-4 rounded-2xl flex items-center gap-4">
            <div className="text-center">
              <div className="text-xs font-semibold text-slate-400 uppercase">Twin Status</div>
              <div className="text-sm font-extrabold text-emerald-400 mt-0.5">ACTIVE & SYNCED</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: Twin Profile vs Live Simulation Trigger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Twin Profile Overview (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* User Card */}
          <div className="glass-panel p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-500 to-cyan-500 flex items-center justify-center font-bold text-white text-lg">
                  VM
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{userProfile.name}</h3>
                  <p className="text-xs text-slate-400">{userProfile.degree} • {userProfile.location}</p>
                </div>
              </div>

              <span className="text-xs font-bold px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">
                Fresher (0 yrs)
              </span>
            </div>

            {/* Current Digital Twin Skills Inventory */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Digital Twin Skills Inventory</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {Object.entries(userProfile.skills).map(([skill, level]) => (
                  <div key={skill} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="font-semibold text-slate-200">{skill}</span>
                    <span className="font-bold text-cyan-400">{level}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Skill Level-Up Interactive Trigger */}
          <div className="glass-panel p-6 space-y-4 bg-slate-900/40">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Simulate Skill Acquisition / Certification</span>
            </h4>
            <p className="text-xs text-slate-300">
              Select a skill and simulate completing a new course or certification to observe how your Digital Twin's compatibility updates instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <select
                value={skillEdit.name}
                onChange={(e) => setSkillEdit({ ...skillEdit, name: e.target.value })}
                className="w-full sm:w-2/3 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
              >
                {Object.keys(userProfile.skills).map(s => (
                  <option key={s} value={s}>{s} (Current: {userProfile.skills[s]}%)</option>
                ))}
              </select>

              <button
                onClick={() => handleLevelUpSkill(skillEdit.name, 10)}
                className="w-full sm:w-1/3 btn-primary text-xs justify-center py-2.5"
              >
                <Plus className="w-4 h-4" />
                Level Up (+10%)
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Live Compatibility Matrix & Simulation Log (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Target Compatibility Matrix */}
          <div className="glass-panel p-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Trophy className="w-5 h-5 text-emerald-400" />
              <span>Live Twin Compatibility Matrix</span>
            </h3>

            <div className="space-y-3">
              {careers.map((career) => {
                const fitScore = calculateCompatibility(userProfile, career);
                return (
                  <div key={career.id} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-white">{career.title}</div>
                      <div className="text-xs text-slate-400">{career.category}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-base font-extrabold text-cyan-400">{fitScore}%</div>
                        <div className="text-[10px] text-slate-400">Match Score</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Last Simulation Update Log Card */}
          {lastUpdateLog && (
            <div className="glass-panel p-6 space-y-3 border-l-4 border-l-cyan-400 bg-slate-900/80 animate-fade-in">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Digital Twin Recalculation Log
              </div>

              <div className="text-sm font-semibold text-white">
                Skill Updated: <span className="text-cyan-300">{lastUpdateLog.skillName}</span>
                <span className="text-slate-400 font-normal"> ({lastUpdateLog.beforeVal}% → </span>
                <span className="text-emerald-400 font-bold">{lastUpdateLog.afterVal}%</span>
                <span className="text-slate-400 font-normal">)</span>
              </div>

              <div className="pt-2 space-y-1.5 text-xs text-slate-300 border-t border-slate-800">
                <div className="font-medium text-slate-400">Target Compatibility Changes:</div>
                {lastUpdateLog.afterScores.map((item, idx) => {
                  const beforeItem = lastUpdateLog.beforeScores[idx];
                  const diff = item.score - beforeItem.score;
                  return (
                    <div key={item.title} className="flex justify-between items-center bg-slate-950/60 px-3 py-1.5 rounded">
                      <span>{item.title}</span>
                      <span className="font-bold">
                        {beforeItem.score}% → <span className="text-emerald-400">{item.score}%</span>
                        {diff > 0 && <span className="text-emerald-400 text-[11px] ml-1.5">(+{diff}%)</span>}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
