import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Youtube, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  Award,
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Search className="w-4 h-4 text-emerald-400" />;
      case 2:
        return <Youtube className="w-4 h-4 text-red-400" />;
      case 3:
      default:
        return <Bot className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-950/70 border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Proficiencies &amp; Stack
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Backed by Computer Science principles at Virtual University and hundreds of hours of real-world freelance deployment.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-slate-900 border border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-500/10 scale-105'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {getCategoryIcon(activeCategoryIndex)}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {SKILL_CATEGORIES[activeCategoryIndex].name}
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              {SKILL_CATEGORIES[activeCategoryIndex].skills.length} Competencies Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs font-extrabold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Badge */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full compliance with 2026 Core Web Vitals &amp; Modern Frameworks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>CS Undergrad &bull; Virtual University of Pakistan</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
