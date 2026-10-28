import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck, 
  SlidersHorizontal,
  Code2,
  TrendingUp,
  Youtube,
  ShoppingBag
} from 'lucide-react';
import { PhotoSettings } from '../types';
import { PhotoAvatar } from './PhotoAvatar';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  photoSettings: PhotoSettings;
  onOpenPhotoModal: () => void;
  onOpenSeoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  photoSettings,
  onOpenPhotoModal,
  onOpenSeoModal,
}) => {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden flex items-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Delicate grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Dual Platforms Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 pr-3 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-md">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs tracking-wide border border-cyan-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Dual Platform Synergy
              </span>
              <span className="text-xs text-slate-300 font-medium">
                <span className="text-white font-semibold">syedcore.com</span> + <span className="text-white font-semibold">syed-bhai.page.gd</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Crafting High-Speed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">Web Platforms</span> &amp; Dominant <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">SEO Growth</span>
            </h1>

            {/* Bio Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Assalam-o-Alaikum! I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong> (popularly known as <strong className="text-cyan-300 font-semibold">{PERSONAL_INFO.publicName}</strong>). Computer Science student at <span className="text-slate-200 underline decoration-cyan-500/40 underline-offset-4">Virtual University of Pakistan</span> and founder of <strong className="text-white font-semibold">SYEDCORE</strong>. I build ultra-fast web experiences, top-ranking SEO architectures, and automated business workflows.
            </p>

            {/* Micro Pillars Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              {[
                { icon: Code2, label: 'Full-Stack React & Node' },
                { icon: TrendingUp, label: '100% Complete SEO' },
                { icon: Youtube, label: 'YouTube Automation' },
                { icon: ShoppingBag, label: 'Shopify E-Commerce' },
              ].map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#services"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#portfolio"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 shadow-md transition-all hover:border-slate-500 cursor-pointer"
              >
                <span>View Portfolio</span>
              </a>

              <button
                onClick={onOpenSeoModal}
                className="flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold text-sm transition-all hover:scale-105 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>SEO Scorecard (100/100)</span>
              </button>
            </div>

            {/* Credibility Stats Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                  {PERSONAL_INFO.projectsCompleted}
                </span>
                <span className="text-xs text-slate-400">Projects Delivered</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 block">
                  {PERSONAL_INFO.satisfactionRate}
                </span>
                <span className="text-xs text-slate-400">Client Satisfaction</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">
                  100%
                </span>
                <span className="text-xs text-slate-400">SEO & Core Vitals</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 block">
                  {PERSONAL_INFO.experienceYears}
                </span>
                <span className="text-xs text-slate-400">Tech Experience</span>
              </div>
            </div>

          </div>

          {/* Right Column: User Photo & Framing */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <PhotoAvatar
              settings={photoSettings}
              onOpenFitModal={onOpenPhotoModal}
              size="hero"
              showControlsButton={true}
            />

            {/* Quick helper tip below photo */}
            <div className="mt-4 text-center">
              <button
                onClick={onOpenPhotoModal}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Click here to upload your personal photo or adjust frame fit
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
