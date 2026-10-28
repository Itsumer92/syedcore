import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Calendar, 
  Languages, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Terminal, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, TIMELINE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'philosophy' | 'timeline'>('bio');

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Profile &amp; Background
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet Syed Umer Hayat (<span className="text-cyan-400">Syed Bhai</span>)
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Founder of SYEDCORE &bull; Computer Science Undergrad @ Virtual University of Pakistan &bull; Full-Stack &amp; Growth Specialist
          </p>
        </div>

        {/* Grid Layout: Left Quick Profile Card, Right Tabbed Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                Quick Professional Profile
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Higher Education</span>
                    <strong className="text-white font-semibold">BS Computer Science (BSCS)</strong>
                    <p className="text-slate-400 text-[11px]">Virtual University of Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Location</span>
                    <strong className="text-white font-semibold">{PERSONAL_INFO.location}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Direct Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 font-semibold hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <Languages className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Languages</span>
                    <strong className="text-white font-semibold">English (Fluent), Urdu (Native), Pashto (Native)</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block font-medium">Core Brand Identities</span>
                    <strong className="text-white font-semibold">SYEDCORE (syedcore.com) &bull; Syed Bhai (syed-bhai.page.gd)</strong>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="mt-5 p-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-300">Open for Freelance &amp; Contracts</span>
                </div>
                <a
                  href="#contact"
                  className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 underline"
                >
                  Contact Now &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Story & Journey */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
              
              {/* Tabs Bar */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-2xl border border-slate-800 mb-6 overflow-x-auto">
                {[
                  { id: 'bio', label: 'My Journey', icon: Terminal },
                  { id: 'education', label: 'Virtual University', icon: GraduationCap },
                  { id: 'philosophy', label: 'Core Philosophy', icon: BookOpen },
                  { id: 'timeline', label: 'Experience Timeline', icon: Calendar },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: Bio & Journey */}
              {activeTab === 'bio' && (
                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    I am a computer science professional and builder from Nowshera, Pakistan. Over the past 4+ years, I have navigated both the academic world of software engineering and the rapid execution of digital freelance agency work.
                  </p>
                  <p>
                    Under the brand <strong className="text-white font-semibold">SYEDCORE</strong>, I focus on engineering blazing-fast, modern websites that don&rsquo;t just look aesthetically pleasing, but score <span className="text-cyan-400 font-semibold">100/100 on Google Lighthouse</span> and rank organically in search.
                  </p>
                  <p>
                    Concurrently, via my growth portal <strong className="text-white font-semibold">syed-bhai.page.gd</strong>, I help YouTube creators automate channel operations (with high-CTR thumbnails and video SEO) and help e-commerce entrepreneurs set up profitable, automated Shopify storefronts.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
                      <strong className="text-white font-semibold text-xs block mb-1">
                        Fast &amp; Responsive Code
                      </strong>
                      <p className="text-[11px] text-slate-400">
                        Zero bloat, pixel-perfect responsiveness across phones, tablets, and wide monitors.
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
                      <strong className="text-white font-semibold text-xs block mb-1">
                        Rank-First Architecture
                      </strong>
                      <p className="text-[11px] text-slate-400">
                        Deep Schema.org JSON-LD, semantic tags, and optimized OpenGraph social share cards.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Education & Virtual University */}
              {activeTab === 'education' && (
                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        Bachelor of Science in Computer Science (BSCS)
                      </h4>
                      <p className="text-cyan-300 text-xs">Virtual University of Pakistan</p>
                      <p className="text-slate-400 text-xs mt-1">
                        Rigorous focus on software engineering, computer algorithms, relational databases, web architecture, and object-oriented programming.
                      </p>
                    </div>
                  </div>

                  <p>
                    My academic curriculum equips me with a deep theoretical understanding that differentiates my work from simple template customizers:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Data Structures & Algorithmic Optimization',
                      'Object Oriented Analysis & Design (OOAD)',
                      'Database Management Systems & SQL',
                      'Web Application Engineering & Security',
                      'Human-Computer Interaction (HCI) & UI Principles',
                      'Operating Systems & Networking Fundamentals'
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Philosophy */}
              {activeTab === 'philosophy' && (
                <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    My work is driven by three non-negotiable principles:
                  </p>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                      <span className="text-cyan-400 font-bold text-xs">01. Speed &amp; Zero Bloat</span>
                      <h5 className="text-white font-semibold text-xs mt-0.5">Performance is a Feature</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Websites that load in over 2 seconds lose 40% of their visitors. Every site I engineer is optimized for sub-second delivery.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                      <span className="text-blue-400 font-bold text-xs">02. Measurable Business ROI</span>
                      <h5 className="text-white font-semibold text-xs mt-0.5">Growth Over Fluff</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Whether it is higher Google search rankings through complete SEO, or high-CTR thumbnails for YouTube, every deliverable has clear business impact.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                      <span className="text-emerald-400 font-bold text-xs">03. Transparent Communication</span>
                      <h5 className="text-white font-semibold text-xs mt-0.5">Reliable Partnership</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Frequent milestone updates, organized documentation, and post-launch support you can count on.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Timeline */}
              {activeTab === 'timeline' && (
                <div className="space-y-4">
                  {TIMELINE.map((item, idx) => (
                    <div key={idx} className="relative pl-6 pb-4 border-l border-slate-800 last:border-l-0 last:pb-0">
                      <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-slate-950" />
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                        {item.period}
                      </span>
                      <h4 className="text-white font-bold text-xs sm:text-sm mt-0.5">
                        {item.title} &bull; <span className="text-slate-300 font-normal">{item.organization}</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
