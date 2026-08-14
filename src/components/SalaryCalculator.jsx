import React, { useState } from 'react';
import { DollarSign, Globe, Calculator, ArrowRight } from 'lucide-react';

export default function SalaryCalculator({ selectedCareer }) {
  const [city, setCity] = useState('Bangalore');

  const pppData = {
    'Bangalore': { mult: 1.0, costIndex: 'Baseline', usdEquiv: '$25,000 - $45,000 / yr' },
    'San Francisco': { mult: 4.5, costIndex: 'High Cost of Living (3.8x)', usdEquiv: '$135,000 - $210,000 / yr' },
    'London': { mult: 3.2, costIndex: 'High Cost of Living (2.6x)', usdEquiv: '£65,000 - £110,000 / yr' },
    'Remote Global': { mult: 2.2, costIndex: 'Global Currency Advantage (2.2x)', usdEquiv: '$60,000 - $110,000 / yr' },
  };

  const activePpp = pppData[city] || pppData['Bangalore'];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Purchasing Power Parity</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Global Salary & PPP Purchasing Power Calculator
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              Compare global compensation standards across tech hubs adjusting for local living costs, taxation, and purchasing power parity.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-panel p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Select Global City / Market:</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
          >
            <option value="Bangalore">Bangalore, India (Tech Hub Base)</option>
            <option value="San Francisco">San Francisco, USA (Silicon Valley)</option>
            <option value="London">London, UK (European Hub)</option>
            <option value="Remote Global">Remote (Global USD Contract)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Estimated Annual Compensation</div>
            <div className="text-xl font-extrabold text-emerald-400 mt-1">{activePpp.usdEquiv}</div>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Cost of Living Factor</div>
            <div className="text-sm font-bold text-slate-200 mt-1">{activePpp.costIndex}</div>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-semibold uppercase">Real Purchasing Power Rank</div>
            <div className="text-sm font-bold text-cyan-400 mt-1">Top 5% Local Income Segment</div>
          </div>
        </div>
      </div>
    </div>
  );
}
