import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WhatIfLab from './components/WhatIfLab';
import CareerTimeline from './components/CareerTimeline';
import SkillGapRadar from './components/SkillGapRadar';
import RiskEngine from './components/RiskEngine';
import CareerComparison from './components/CareerComparison';
import DigitalTwin from './components/DigitalTwin';
import AiAgent from './components/AiAgent';

import { CAREERS, INITIAL_USER_PROFILE } from './data/careersData';
import { calculateCompatibility } from './engine/simulationEngine';
import { Sparkles, Terminal, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('whatif');
  const [userProfile, setUserProfile] = useState(INITIAL_USER_PROFILE);
  const [selectedCareer, setSelectedCareer] = useState(CAREERS[0]); // Data Scientist

  const currentTwinMatch = calculateCompatibility(userProfile, selectedCareer);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-slate-100 flex flex-col font-sans">
      
      {/* Top Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userProfile={userProfile}
        currentTwinMatch={currentTwinMatch}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 pb-16">
        {activeTab === 'whatif' && (
          <WhatIfLab
            userProfile={userProfile}
            careers={CAREERS}
            selectedCareer={selectedCareer}
            setSelectedCareer={setSelectedCareer}
          />
        )}

        {activeTab === 'timeline' && (
          <CareerTimeline
            selectedCareer={selectedCareer}
          />
        )}

        {activeTab === 'skillgap' && (
          <SkillGapRadar
            userProfile={userProfile}
            selectedCareer={selectedCareer}
          />
        )}

        {activeTab === 'risk' && (
          <RiskEngine
            selectedCareer={selectedCareer}
          />
        )}

        {activeTab === 'compare' && (
          <CareerComparison
            userProfile={userProfile}
            careers={CAREERS}
          />
        )}

        {activeTab === 'twin' && (
          <DigitalTwin
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            careers={CAREERS}
          />
        )}

        {activeTab === 'aiagent' && (
          <AiAgent
            userProfile={userProfile}
            careers={CAREERS}
            setSelectedCareer={setSelectedCareer}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="glass-panel border-t border-[var(--border-color)] py-8 px-4 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              CS
            </div>
            <span className="font-semibold text-slate-200">Career Simulator Platform</span>
            <span>— AI-Powered Career Decision Intelligence Engine</span>
          </div>

          <div className="italic text-cyan-400/90 font-medium">
            "Don't ask AI which career you should choose. Simulate the career before you choose it."
          </div>

          <div className="text-slate-400">
            Developer: <span className="text-white font-semibold">Vijay Mahes</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
