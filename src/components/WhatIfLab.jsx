import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  Sparkles, 
  MapPin, 
  Clock, 
  Briefcase, 
  TrendingUp, 
  Zap, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { runWhatIfSimulation } from '../engine/simulationEngine';

export default function WhatIfLab({ userProfile, careers, selectedCareer, setSelectedCareer }) {
  const [studyHours, setStudyHours] = useState(userProfile.studyHoursPerDay || 4);
  const [location, setLocation] = useState(userProfile.location || 'Bangalore');
  const [projectsCount, setProjectsCount] = useState(userProfile.projectsCount || 2);
  const [internshipCompleted, setInternshipCompleted] = useState(userProfile.internshipCompleted || false);
  const [highAiImpact, setHighAiImpact] = useState(userProfile.highAiImpactToggle || false);

  // Calculate Scenario A (Current Inputs)
  const scenarioA = useMemo(() => {
    return runWhatIfSimulation(userProfile, selectedCareer, {
      studyHoursPerDay: studyHours,
      location,
      projectsCount,
      internshipCompleted,
      highAiImpactToggle: highAiImpact
    });
  }, [userProfile, selectedCareer, studyHours, location, projectsCount, internshipCompleted, highAiImpact]);

  // Calculate Scenario B (Optimized Baseline for comparison: 6 hrs/day + Internship YES + 4 Projects)
  const scenarioB = useMemo(() => {
    return runWhatIfSimulation(userProfile, selectedCareer, {
      studyHoursPerDay: 6,
      location: "Bangalore",
      projectsCount: 4,
      internshipCompleted: true,
      highAiImpactToggle: false
    });
  }, [userProfile, selectedCareer]);

  const resetToDefault = () => {
    setStudyHours(4);
    setLocation('Bangalore');
    setProjectsCount(2);
    setInternshipCompleted(false);
    setHighAiImpact(false);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Banner */}
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Simulation Lab</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Career "What-If" Lab</h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Adjust variables like daily study commitment, location, internship status, and AI disruption to simulate how your future career path and market readiness change in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={resetToDefault}
              className="btn-secondary text-xs flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Inputs
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Controls vs Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Simulation Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sliders className="w-5 h-5 text-cyan-400" />
              <span>Simulation Controls</span>
            </h3>

            {/* Target Career Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Target Career</label>
              <select
                value={selectedCareer.id}
                onChange={(e) => {
                  const found = careers.find(c => c.id === e.target.value);
                  if (found) setSelectedCareer(found);
                }}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all cursor-pointer"
              >
                {careers.map(c => (
                  <option key={c.id} value={c.id}>{c.title} ({c.category})</option>
                ))}
              </select>
            </div>

            {/* Study Hours Slider */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Daily Study Hours
                </span>
                <span className="text-cyan-400 font-bold text-base px-2 py-0.5 bg-cyan-500/10 rounded border border-cyan-500/20">
                  {studyHours} hrs/day
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="8" 
                step="1" 
                value={studyHours}
                onChange={(e) => setStudyHours(Number(e.target.value))}
                className="w-full cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>1 hr (Part-time)</span>
                <span>4 hrs (Standard)</span>
                <span>8 hrs (Intensive Boot)</span>
              </div>
            </div>

            {/* Target Location Select */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Target Job Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
              >
                <option value="Bangalore">Bangalore (Tech Hub +20%)</option>
                <option value="Hyderabad">Hyderabad (Tech Hub +20%)</option>
                <option value="Mumbai">Mumbai (Metro +15%)</option>
                <option value="Chennai">Chennai (Tier-1 +10%)</option>
                <option value="Remote (Global)">Remote / International (+40%)</option>
                <option value="Tier-2 City">Tier-2 City (Standard)</option>
              </select>
            </div>

            {/* Completed Projects Counter */}
            <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-200 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-violet-400" />
                  Portfolio Projects
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setProjectsCount(Math.max(0, projectsCount - 1))}
                    className="w-7 h-7 rounded bg-slate-800 text-white font-bold hover:bg-slate-700"
                  >-</button>
                  <span className="font-bold text-white text-base w-6 text-center">{projectsCount}</span>
                  <button 
                    onClick={() => setProjectsCount(Math.min(6, projectsCount + 1))}
                    className="w-7 h-7 rounded bg-slate-800 text-white font-bold hover:bg-slate-700"
                  >+</button>
                </div>
              </div>
              <p className="text-xs text-slate-400">Higher project counts improve entry difficulty & readiness scores.</p>
            </div>

            {/* Internship Completed Toggle */}
            <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div>
                <div className="text-sm font-semibold text-slate-200">Completed Internship?</div>
                <div className="text-xs text-slate-400">Provides +10% boost to job readiness</div>
              </div>
              <button
                onClick={() => setInternshipCompleted(!internshipCompleted)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  internshipCompleted 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                {internshipCompleted ? 'YES' : 'NO'}
              </button>
            </div>

            {/* AI Market Impact Toggle */}
            <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div>
                <div className="text-sm font-semibold text-amber-300 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  High AI Automation Risk
                </div>
                <div className="text-xs text-slate-400">Simulate market where AI reduces entry-level roles</div>
              </div>
              <button
                onClick={() => setHighAiImpact(!highAiImpact)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  highAiImpact 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                {highAiImpact ? 'ON' : 'OFF'}
              </button>
            </div>

          </div>
        </div>

        {/* Right Column: Real-Time Simulation Dashboard (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Key Metrics Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Job Readiness Score Card */}
            <div className="glass-panel p-5 relative overflow-hidden border-l-4 border-l-cyan-400">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Simulated Job Readiness</div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-white">{scenarioA.jobReadinessScore}%</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                  scenarioA.jobReadinessScore >= 80 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                  scenarioA.jobReadinessScore >= 60 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {scenarioA.jobReadinessScore >= 80 ? 'Job Ready' : scenarioA.jobReadinessScore >= 60 ? 'On Track' : 'Gap to Bridge'}
                </span>
              </div>
              <div className="mt-3 progress-bar-bg">
                <div 
                  className="progress-bar-fill bg-gradient-to-r from-cyan-500 to-violet-500" 
                  style={{ width: `${scenarioA.jobReadinessScore}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-2">Based on current skill profile & {studyHours} hrs/day commitment.</p>
            </div>

            {/* Estimated Learning Timeline Card */}
            <div className="glass-panel p-5 relative overflow-hidden border-l-4 border-l-violet-400">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Time to Job-Ready</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{scenarioA.timelineMonths}</span>
                <span className="text-lg font-bold text-violet-400">Months</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-violet-400" />
                <span>Base ({selectedCareer.timeToJobReadyBase} mo) → Adjusted for {studyHours}h study</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">Completing projects & internship reduces timeline faster.</p>
            </div>

          </div>

          {/* Salary Projections Card */}
          <div className="glass-panel p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span>Salary Career Projections</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">Labor market benchmark model adjusted for {location} location</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                {scenarioA.simulatedSalary.locationBonusLabel}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Year 0 (Entry)</div>
                <div className="text-lg font-bold text-white mt-1">{scenarioA.simulatedSalary.y0}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Starting Package</div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Year 3 (Mid)</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{scenarioA.simulatedSalary.y3}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Mid-level Engineer</div>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                <div className="text-[11px] font-semibold text-slate-400 uppercase">Year 5 (Senior)</div>
                <div className="text-lg font-bold text-violet-400 mt-1">{scenarioA.simulatedSalary.y5}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Lead / Specialist</div>
              </div>
            </div>
          </div>

          {/* Scenario Comparison (Scenario A vs Scenario B) */}
          <div className="glass-panel p-6 space-y-4">
            <h4 className="text-base font-bold text-white flex items-center justify-between">
              <span>Scenario Comparison Lab</span>
              <span className="text-xs text-slate-400 font-normal">Scenario A (Current) vs Scenario B (Optimized)</span>
            </h4>

            <div className="grid grid-cols-2 gap-4 text-xs">
              
              {/* Scenario A */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-cyan-500/30 space-y-2">
                <div className="font-bold text-cyan-300 border-b border-slate-800 pb-1">Scenario A (Your Settings)</div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Study:</span>
                  <span className="text-white font-semibold">{studyHours} hrs/day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white font-semibold">{location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Internship:</span>
                  <span className="text-white font-semibold">{internshipCompleted ? 'YES' : 'NO'}</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between">
                  <span className="text-slate-400 font-medium">Readiness / Time:</span>
                  <span className="text-cyan-400 font-bold">{scenarioA.jobReadinessScore}% in {scenarioA.timelineMonths} mo</span>
                </div>
              </div>

              {/* Scenario B */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-violet-500/30 space-y-2">
                <div className="font-bold text-violet-300 border-b border-slate-800 pb-1">Scenario B (High Intensity)</div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Study:</span>
                  <span className="text-white font-semibold">6 hrs/day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="text-white font-semibold">Bangalore</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Internship:</span>
                  <span className="text-white font-semibold">YES (4 Projects)</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between">
                  <span className="text-slate-400 font-medium">Readiness / Time:</span>
                  <span className="text-violet-400 font-bold">{scenarioB.jobReadinessScore}% in {scenarioB.timelineMonths} mo</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
