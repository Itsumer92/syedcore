import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  Zap
} from 'lucide-react';

interface PricingCalculatorProps {
  onSelectEstimatedPlan: (summary: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  onSelectEstimatedPlan,
}) => {
  const [projectType, setProjectType] = useState<'web' | 'seo' | 'youtube' | 'shopify' | 'bundle'>('web');
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'express'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['seo-schema']);

  const basePrices: Record<string, { base: number; label: string; days: string }> = {
    web: { base: 199, label: 'Custom Full-Stack Web App / Portfolio', days: '5 - 7 Days' },
    seo: { base: 149, label: 'Complete SEO Optimization & Ranking', days: '4 - 6 Days' },
    youtube: { base: 120, label: 'YouTube Automation & 10x Thumbnails', days: '3 - 5 Days' },
    shopify: { base: 180, label: 'Turnkey Shopify Store & E-Commerce VA', days: '5 - 7 Days' },
    bundle: { base: 399, label: 'Complete Business Ecosystem (Web + SEO + Media)', days: '10 - 14 Days' },
  };

  const addonsList = [
    { id: 'seo-schema', label: 'Advanced Schema.org JSON-LD & Rich Snippets', price: 40 },
    { id: 'speed-tuning', label: '100/100 Google Core Web Vitals Speed Tuning', price: 50 },
    { id: 'extra-thumbnails', label: '5 Premium High-CTR YouTube Thumbnails', price: 35 },
    { id: 'support-60', label: '60 Days Priority Maintenance & Bug Fixes', price: 65 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentBase = basePrices[projectType];
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = addonsList.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const speedMultiplier = timelineSpeed === 'express' ? 1.25 : 1.0;
  const grandTotal = Math.round((currentBase.base + addonsTotal) * speedMultiplier);

  const handleInquire = () => {
    const addonNames = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');
    const summary = `${currentBase.label} ($${grandTotal} Est.) with ${timelineSpeed === 'express' ? 'Express Delivery' : 'Standard Delivery'}${addonNames ? ` + Add-ons: ${addonNames}` : ''}`;
    onSelectEstimatedPlan(summary);
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing Estimator
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Project Investment
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            No hidden costs. Get an instant estimate for your website, SEO, YouTube or Shopify package.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Options */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Project Type */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                  1. Select Primary Service:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'web', title: 'Web Development', desc: 'React / Next.js / Tailwind' },
                    { id: 'seo', title: 'Complete SEO & Ranking', desc: 'Technical & On-Page' },
                    { id: 'youtube', title: 'YouTube Automation', desc: 'Thumbnails, Scripts & SEO' },
                    { id: 'shopify', title: 'Shopify E-Commerce', desc: 'Turnkey Store & VA' },
                    { id: 'bundle', title: 'Full Growth Bundle', desc: 'Web + SEO + Media Pack' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        projectType === item.id
                          ? 'border-cyan-500 bg-cyan-500/15 text-white shadow-md'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <strong className="text-xs font-bold">{item.title}</strong>
                        {projectType === item.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                      </div>
                      <p className="text-[11px] text-slate-400">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Turnaround Speed */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                  2. Delivery Speed:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTimelineSpeed('standard')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      timelineSpeed === 'standard'
                        ? 'border-cyan-500 bg-cyan-500/15 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">Standard Delivery</span>
                      {timelineSpeed === 'standard' && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>
                    <span className="text-[11px] text-slate-400">{currentBase.days}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTimelineSpeed('express')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      timelineSpeed === 'express'
                        ? 'border-cyan-500 bg-cyan-500/15 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 text-amber-400" /> Express 48-72h
                      </span>
                      {timelineSpeed === 'express' && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>
                    <span className="text-[11px] text-amber-300/80">+25% Priority Queue</span>
                  </button>
                </div>
              </div>

              {/* Step 3: Add-Ons */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                  3. Performance Add-Ons:
                </label>
                <div className="space-y-2">
                  {addonsList.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'border-cyan-500/60 bg-cyan-500/10 text-white'
                            : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                              isSelected
                                ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                                : 'border-slate-600'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-medium">{addon.label}</span>
                        </div>
                        <span className="text-xs font-bold text-cyan-400 shrink-0">
                          +${addon.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Estimate Summary Card */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950 border border-cyan-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                    Estimate Summary
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    Live Calculation
                  </span>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Base Service ({currentBase.label.split(' ')[0]})</span>
                    <span className="font-semibold text-white">${currentBase.base}</span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Add-ons ({selectedAddons.length})</span>
                      <span className="font-semibold text-white">+${addonsTotal}</span>
                    </div>
                  )}

                  {timelineSpeed === 'express' && (
                    <div className="flex items-center justify-between text-amber-300">
                      <span>Express Priority Turnaround</span>
                      <span className="font-semibold">+25%</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-800 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">Estimated Total</span>
                      <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        ${grandTotal}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-slate-400 block">Est. Time</span>
                      <span className="text-xs font-bold text-white flex items-center gap-1 justify-end">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        {timelineSpeed === 'express' ? '48 - 72 Hours' : currentBase.days}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Includes 30 days post-launch warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>100% SEO, OpenGraph &amp; Schema structured data included</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleInquire}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Lock In This Estimate &amp; Inquire</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
