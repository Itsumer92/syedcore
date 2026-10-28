import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-slate-950/70 border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Client Reviews &amp; Trust
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Endorsed by Founders &amp; Creators Worldwide
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Read what clients say about working with Syed Umer Hayat (Syed Bhai).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-cyan-400/40 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-cyan-500/40"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {t.clientName}
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      {t.role}, <span className="text-slate-300">{t.company}</span>
                    </p>
                    <span className="text-[10px] text-slate-500">{t.location}</span>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] font-medium text-cyan-300 border border-slate-700">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
