import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Globe, 
  TrendingUp, 
  Layers, 
  Code2,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image & Title Banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-200/80 mt-0.5">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Key Metrics Highlight Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <span className="text-base sm:text-xl font-extrabold text-cyan-400 block">
                  {metric.value}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Long Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Executive Summary &amp; Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Deliverables */}
          {project.deliverables && (
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Key Deliverables &amp; Outcomes
              </h4>
              <div className="space-y-2">
                {project.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Technologies &amp; Methods
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <div className="text-xs text-slate-400">
            {project.clientCountry && (
              <span>Audience / Client: <strong className="text-slate-200">{project.clientCountry}</strong></span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
