import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  TrendingUp,
  Maximize2
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Websites', 'SEO & Growth', 'YouTube & Media', 'Shopify Stores'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Work &amp; Case Studies
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proven Results Across Web, SEO &amp; E-Commerce
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Explore live digital products engineered by Syed Umer Hayat (Syed Bhai).
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-bold scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 overflow-hidden shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Project Image & Overlay */}
              <div>
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/90 border border-white/10 text-cyan-300 text-[11px] font-semibold backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Flagship Highlight if syedcore or syed-bhai */}
                  {(project.id === 'syedcore-platform' || project.id === 'syed-bhai-hub') && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold backdrop-blur-md">
                      Flagship Platform
                    </span>
                  )}

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full bg-cyan-500 text-slate-950 hover:scale-110 transition-transform shadow-lg cursor-pointer"
                      title="View Detailed Case Study"
                    >
                      <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-slate-900 text-white hover:scale-110 transition-transform border border-slate-700 shadow-lg cursor-pointer"
                        title="Visit Live Platform"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-200/80 mb-3 font-medium">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 mb-4">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-xs font-bold text-cyan-400 block">{m.value}</span>
                        <span className="text-[10px] text-slate-400">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-lg bg-slate-800/80 text-[11px] text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
