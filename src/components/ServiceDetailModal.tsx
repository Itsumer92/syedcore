import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Tag, 
  ArrowRight, 
  Wrench, 
  Layers,
  Sparkles
} from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                {service.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Pricing & Timeline Pill bar */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Starting Investment</span>
                <strong className="text-white text-xs sm:text-sm font-bold">{service.startingPrice}</strong>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">Estimated Delivery</span>
                <strong className="text-white text-xs sm:text-sm font-bold">{service.timeline}</strong>
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" /> Key Capabilities &amp; Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
              What You Receive (Deliverables)
            </h4>
            <div className="space-y-1.5">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tech */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-cyan-400" /> Technologies &amp; Tools Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[11px] font-medium text-slate-200">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onBookService(service.title);
              onClose();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
