import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, ArrowRight, CornerDownLeft, RefreshCcw } from 'lucide-react';
import { runWhatIfSimulation } from '../engine/simulationEngine';

export default function AiAgent({ userProfile, careers, setSelectedCareer, setActiveTab }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello Vijay! I'm your AI Career Simulation Agent. Ask me any career scenario question like 'What happens if I choose cybersecurity?' or 'What if I study 5 hours/day?' to simulate your potential future.",
      timestamp: 'Just now'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    "What happens if I choose cybersecurity?",
    "What if I don't know Linux?",
    "What if I choose Data Engineering instead of Data Science?",
    "What if I study 5 hours/day and get an internship in Bangalore?"
  ];

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let responseText = "";
      let careerToTarget = careers.find(c => c.id === 'data-scientist');
      let simulatedData = null;

      const lower = query.toLowerCase();

      if (lower.includes('cyber') || lower.includes('security')) {
        careerToTarget = careers.find(c => c.id === 'cybersecurity-specialist') || careers[0];
        simulatedData = runWhatIfSimulation(userProfile, careerToTarget);
        responseText = `Cybersecurity Path Simulated!\n\nHere is your projected timeline for Cybersecurity Specialist:\n• Month 0–6: Networking (TCP/IP) + Linux Hardening\n• Month 6–12: Ethical Hacking & SIEM Tools (Splunk)\n• Year 1–2: SOC Analyst (7.5 - 17 LPA)\n• Year 3–5: Security Engineer / Red Teamer (24 - 42 LPA)\n\nSimulated Job Readiness: ${simulatedData.jobReadinessScore}% in ${simulatedData.timelineMonths} months.`;
      } else if (lower.includes('linux')) {
        careerToTarget = careers.find(c => c.id === 'cybersecurity-specialist') || careers[0];
        simulatedData = runWhatIfSimulation(userProfile, careerToTarget, { studyHoursPerDay: 2 });
        responseText = `Without prior Linux experience, your estimated learning timeline increases by ~2 months to build OS fundamentals.\n\nRecommended Adjustment:\n• Add 3 weeks of Linux Bash Shell & Permission Hardening before starting Ethical Hacking tools.\n• Timeline adjusted to ${simulatedData.timelineMonths + 2} months.`;
      } else if (lower.includes('data engineer') || lower.includes('engineering')) {
        careerToTarget = careers.find(c => c.id === 'data-engineer') || careers[1];
        simulatedData = runWhatIfSimulation(userProfile, careerToTarget);
        responseText = `Data Engineering Simulation:\n\nBecause your profile already has 70% SQL proficiency, your compatibility score is 82% (higher than Data Scientist).\n\nKey Advantages:\n• Lower competition density (68% vs 82%)\n• Lower AI automation risk (28%)\n• Estimated 0-Year Starting Salary: ${simulatedData.simulatedSalary.y0}`;
      } else if (lower.includes('5 hours') || lower.includes('hours')) {
        simulatedData = runWhatIfSimulation(userProfile, careers[0], { studyHoursPerDay: 5, internshipCompleted: true });
        responseText = `Simulating 5 hours/day + Internship commitment in Bangalore:\n\n• Job Readiness Score: ${simulatedData.jobReadinessScore}%\n• Accelerated Timeline: Ready in ${simulatedData.timelineMonths} Months!\n• Starting Salary Benchmark: ${simulatedData.simulatedSalary.y0}`;
      } else {
        simulatedData = runWhatIfSimulation(userProfile, careers[0]);
        responseText = `Career Path Simulated for ${careers[0].title}:\n\nBased on labor-market intelligence for your profile:\n• Projected Readiness: ${simulatedData.jobReadinessScore}%\n• Estimated Timeline: ${simulatedData.timelineMonths} months\n• Entry Difficulty: Medium-High\n• 5-Year Salary Target: ${simulatedData.simulatedSalary.y5}`;
      }

      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: responseText,
        careerRef: careerToTarget,
        timestamp: 'Just now'
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>Conversational AI Intelligence</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              AI Career Assistant Agent
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Ask questions in plain English to simulate potential career options, assess background constraints, and recalculate timelines dynamically.
            </p>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="glass-panel flex flex-col h-[560px] overflow-hidden border border-slate-800">
        
        {/* Sample Prompt Chips Header */}
        <div className="bg-slate-900/90 p-3.5 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">Quick Prompts:</span>
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs whitespace-nowrap transition-colors border border-slate-700"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                msg.sender === 'user' ? 'bg-cyan-500 text-white' : 'bg-violet-500/20 border border-violet-500/40 text-violet-300'
              }`}>
                {msg.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5 text-violet-400" />}
              </div>

              <div className={`max-w-xl p-4 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-cyan-500/20 border border-cyan-500/30 text-white rounded-tr-none'
                  : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-line'
              }`}>
                {msg.text}

                {msg.careerRef && (
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Target: {msg.careerRef.title}</span>
                    <button
                      onClick={() => {
                        setSelectedCareer(msg.careerRef);
                        setActiveTab('whatif');
                      }}
                      className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      Open in What-If Lab <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400 italic">
              <Bot className="w-4 h-4 text-violet-400 animate-spin" />
              AI Simulation Agent is recalculating labor-market parameters...
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center gap-3">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask a scenario question (e.g. 'What if I study 5 hrs/day?')..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={() => handleSendMessage()}
            className="btn-primary py-3 px-5 flex items-center gap-2"
          >
            <span>Simulate</span>
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
