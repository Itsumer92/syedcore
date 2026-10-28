import React from 'react';
import { ExternalLink, Globe, Zap, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DualHubBanner: React.FC = () => {
  return (
    <section className="py-10 border-y border-slate-800/80 bg-slate-950/60 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-blue-950/20 to-indigo-950/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            Unified Digital Presence
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Synergizing Two Flagship Digital Foundations
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Bringing together the technical depth of <strong className="text-slate-200">syedcore.com</strong> and the high-conversion growth systems of <strong className="text-slate-200">syed-bhai.page.gd</strong> into this master portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: syedcore.com */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-black text-sm">
                    SC
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      syedcore.com
                    </h3>
                    <p className="text-xs text-slate-400">Core Digital Hub &amp; Engineering</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-bold border border-cyan-500/30">
                  Primary Domain
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                My personal tech ecosystem showcasing full-stack web engineering, custom responsive software architectures, academic credentials, and software development practices.
              </p>

              <div className="space-y-2 mb-5">
                {[
                  'Full-Stack Web Engineering (React & Node)',
                  'Semantic HTML5 & Complete Technical SEO',
                  'High-Performance Portfolio & Tech Showcase',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Authority
              </span>
              <a
                href={PERSONAL_INFO.primaryWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 text-xs font-semibold transition-all group-hover:translate-x-0.5"
              >
                <span>Visit syedcore.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: syed-bhai.page.gd */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-sm">
                    SB
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      syed-bhai.page.gd
                    </h3>
                    <p className="text-xs text-slate-400">Growth &amp; Automation Funnel</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-500/30">
                  Landing Portal
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                The conversion-focused service gateway built under the community handle &ldquo;Syed Bhai&rdquo; tailored for YouTube automation, Shopify store setup, and virtual assistance.
              </p>

              <div className="space-y-2 mb-5">
                {[
                  'YouTube Channel Scaling & High-CTR Thumbnails',
                  'Shopify Store Development & Dropship Operations',
                  'E-Commerce Virtual Assistance & AI Prompting',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-blue-400" /> Active Lead Funnel
              </span>
              <a
                href={PERSONAL_INFO.secondaryWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 text-xs font-semibold transition-all group-hover:translate-x-0.5"
              >
                <span>Visit syed-bhai.page.gd</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
