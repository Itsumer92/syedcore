import React from 'react';
import { 
  ArrowUp, 
  ShieldCheck, 
  SlidersHorizontal, 
  Sparkles, 
  Mail, 
  ExternalLink,
  Heart
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPhotoModal: () => void;
  onOpenSeoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPhotoModal,
  onOpenSeoModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-cyan-400 text-lg">
                  SC
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  SYEDCORE
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Syed Umer Hayat &bull; <span className="text-cyan-400">Syed Bhai</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Official consolidated portfolio and services platform. Specializing in high-performance Web Engineering, Complete SEO Optimization, YouTube Channel Automation, and Shopify Store Management.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onOpenSeoModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SEO 100/100 Verified</span>
              </button>

              <button
                onClick={onOpenPhotoModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Photo Fit</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">Profile &amp; Biography</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">All Services &amp; Packages</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-300 transition-colors">Featured Portfolio &amp; Case Studies</a></li>
              <li><a href="#skills" className="hover:text-cyan-300 transition-colors">Skills &amp; Tech Stack</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">Cost Estimator</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact &amp; Hire Me</a></li>
            </ul>
          </div>

          {/* Dual Flagship Sites Links */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">
              Flagship Web Properties
            </span>
            <div className="space-y-2.5">
              <a
                href={PERSONAL_INFO.primaryWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
              >
                <div>
                  <strong className="text-xs font-semibold text-white group-hover:text-cyan-300 block">
                    syedcore.com
                  </strong>
                  <span className="text-[11px] text-slate-400">Core Tech Hub &amp; Digital Ecosystem</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.secondaryWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 flex items-center justify-between group transition-all"
              >
                <div>
                  <strong className="text-xs font-semibold text-white group-hover:text-blue-300 block">
                    syed-bhai.page.gd
                  </strong>
                  <span className="text-[11px] text-slate-400">Growth, YouTube &amp; Shopify Landing</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              BS in Computer Science &bull; Virtual University of Pakistan
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-slate-400 font-semibold">{PERSONAL_INFO.name}</strong> (Syed Bhai). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> &bull; 100% SEO
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
