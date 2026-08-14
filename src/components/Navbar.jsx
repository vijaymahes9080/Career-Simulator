import React from 'react';
import { 
  Sliders, 
  GitCommit, 
  BarChart3, 
  ShieldAlert, 
  Scale, 
  UserCheck, 
  Bot,
  Sparkles,
  FileText,
  TrendingUp,
  Shuffle,
  Layers,
  Calculator,
  HelpCircle,
  BookOpen,
  DollarSign,
  ShieldCheck,
  Plane,
  Users,
  HeartPulse,
  GitPullRequest,
  Lightbulb,
  Award
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, userProfile, currentTwinMatch }) {
  const navItems = [
    { id: 'whatif', label: 'What-If Lab', icon: Sliders, badge: 'Centerpiece' },
    { id: 'timeline', label: 'Timeline', icon: GitCommit },
    { id: 'skillgap', label: 'Skill Gap', icon: BarChart3 },
    { id: 'risk', label: 'Risk Engine', icon: ShieldAlert },
    { id: 'compare', label: 'Compare', icon: Scale },
    { id: 'twin', label: 'Digital Twin', icon: UserCheck },
    { id: 'aiagent', label: 'AI Agent', icon: Bot, badge: 'AI' },
    { id: 'resume', label: 'Resume Parser', icon: FileText, badge: 'New' },
    { id: 'trends', label: 'Market Trends', icon: TrendingUp },
    { id: 'pivot', label: 'Career Pivot', icon: Shuffle },
    { id: 'skilltree', label: 'Skill Tree', icon: Layers },
    { id: 'ppp', label: 'Global PPP', icon: Calculator },
    { id: 'mock', label: 'Mock Interview', icon: HelpCircle },
    { id: 'mentor', label: 'AI Mentor', icon: BookOpen },
    { id: 'gig', label: 'Gig Freelance', icon: DollarSign },
    { id: 'ethics', label: 'AI Ethics Risk', icon: ShieldCheck },
    { id: 'visa', label: 'Global Visas', icon: Plane },
    { id: 'peer', label: 'Peer Benchmark', icon: Users },
    { id: 'burnout', label: 'Burnout Index', icon: HeartPulse },
    { id: 'opensource', label: 'Open Source', icon: GitPullRequest },
    { id: 'projects', label: 'Project Ideas', icon: Lightbulb },
    { id: 'cert', label: 'Certificate', icon: Award, badge: 'Export' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel mb-8 border-b border-[var(--border-color)] px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('whatif')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--cyan-primary)] to-[var(--violet-primary)] flex items-center justify-center shadow-lg shadow-[var(--cyan-glow)]">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-gradient">Career Simulator</h1>
              <span className="text-[10px] font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                AI Platform v2.0
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)]">Future Scenario & Career Decision Engine</p>
          </div>
        </div>

        {/* Nav Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto w-full md:w-auto py-1 scrollbar-none max-w-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Digital Twin Quick Pill */}
        <div className="hidden lg:flex items-center gap-3 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-1.5 text-xs">
          <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
            <UserCheck className="w-4 h-4 text-violet-400" />
          </div>
          <div>
            <div className="font-semibold text-slate-200">{userProfile.name}</div>
            <div className="text-[11px] text-slate-400">
              Twin Match: <span className="text-emerald-400 font-bold">{currentTwinMatch}%</span>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
