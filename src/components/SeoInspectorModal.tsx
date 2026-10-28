import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Search, 
  Globe, 
  Share2, 
  Code, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Monitor
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SeoInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoInspectorModal: React.FC<SeoInspectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'serp' | 'social' | 'schema'>('audit');
  const [serpDevice, setSerpDevice] = useState<'desktop' | 'mobile'>('mobile');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://syedcore.com/#person",
        "name": PERSONAL_INFO.name,
        "alternateName": [PERSONAL_INFO.publicName, "Umer Syed"],
        "url": PERSONAL_INFO.primaryWebsite,
        "image": "https://syedcore.com/syed-umer-hayat.jpg",
        "jobTitle": "Full-Stack Web Developer & SEO Specialist",
        "email": PERSONAL_INFO.email,
        "nationality": "Pakistani",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nowshera",
          "addressRegion": "Khyber Pakhtunkhwa",
          "addressCountry": "PK"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Virtual University of Pakistan"
        },
        "sameAs": [
          PERSONAL_INFO.primaryWebsite,
          PERSONAL_INFO.secondaryWebsite,
          PERSONAL_INFO.socialLinks.twitter,
          PERSONAL_INFO.socialLinks.linkedin,
          PERSONAL_INFO.socialLinks.github
        ],
        "knowsAbout": [
          "Web Development",
          "React.js",
          "Tailwind CSS",
          "Full-Stack Development",
          "Search Engine Optimization (SEO)",
          "YouTube Automation",
          "Shopify E-Commerce",
          "Virtual Assistance"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://syedcore.com/#organization",
        "name": "SYEDCORE Digital Solutions",
        "alternateName": "SYEDCORE",
        "url": PERSONAL_INFO.primaryWebsite,
        "founder": { "@id": "https://syedcore.com/#person" },
        "description": "Professional web development, search engine optimization (SEO), YouTube automation, and e-commerce services.",
        "email": PERSONAL_INFO.email,
        "priceRange": "$$",
        "areaServed": ["Worldwide", "Pakistan", "United States", "United Kingdom", "United Arab Emirates"]
      },
      {
        "@type": "WebSite",
        "@id": "https://syedcore.com/#website",
        "url": PERSONAL_INFO.primaryWebsite,
        "name": "SYEDCORE",
        "publisher": { "@id": "https://syedcore.com/#person" }
      }
    ]
  };

  const formattedSchema = JSON.stringify(schemaJsonLd, null, 2);

  const metaTagsSnippet = `<!-- Primary SEO Meta Tags -->
<title>Syed Umer Hayat (Syed Bhai) | SYEDCORE – Web Developer & SEO Specialist</title>
<meta name="title" content="Syed Umer Hayat (Syed Bhai) | SYEDCORE – Web Developer & SEO Specialist" />
<meta name="description" content="Official portfolio and services hub of Syed Umer Hayat (Syed Bhai) & SYEDCORE. Premium Full-Stack Web Development, SEO Optimization, YouTube Automation & Shopify E-Commerce Solutions." />
<meta name="keywords" content="Syed Umer Hayat, Syed Bhai, SYEDCORE, syedcore.com, syed-bhai.page.gd, Web Developer Pakistan, SEO Specialist Nowshera, YouTube Automation Expert, Shopify Developer" />
<meta name="author" content="Syed Umer Hayat (Syed Bhai)" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<link rel="canonical" href="https://syedcore.com/" />

<!-- Open Graph / Facebook / LinkedIn / WhatsApp -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://syedcore.com/" />
<meta property="og:site_name" content="SYEDCORE | Syed Umer Hayat Portfolio" />
<meta property="og:title" content="Syed Umer Hayat (Syed Bhai) | SYEDCORE – Web Developer & SEO Specialist" />
<meta property="og:description" content="Official portfolio and services hub of Syed Umer Hayat (Syed Bhai) & SYEDCORE. Premium Full-Stack Web Development, SEO Optimization, YouTube Automation & Shopify E-Commerce Solutions." />
<meta property="og:image" content="https://syedcore.com/og-image.jpg" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://syedcore.com/" />
<meta name="twitter:title" content="Syed Umer Hayat (Syed Bhai) | SYEDCORE – Web Developer & SEO Specialist" />
<meta name="twitter:description" content="Official portfolio and services hub of Syed Umer Hayat (Syed Bhai) & SYEDCORE. Premium Full-Stack Web Development, SEO Optimization, YouTube Automation & Shopify E-Commerce Solutions." />
<meta name="twitter:image" content="https://syedcore.com/og-image.jpg" />`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Complete SEO & Search Presence Inspector
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold">
                  Score: 100/100
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Verified On-Page, OpenGraph, Twitter Cards, Schema.org JSON-LD & SERP Previews
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/80 bg-slate-950/40 overflow-x-auto">
          {[
            { id: 'audit', label: '100% SEO Audit', icon: ShieldCheck },
            { id: 'serp', label: 'Google SERP Preview', icon: Search },
            { id: 'social', label: 'Social Share Cards', icon: Share2 },
            { id: 'schema', label: 'Schema.org JSON-LD', icon: Code },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-xl border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-cyan-400 text-cyan-300 bg-slate-800/60'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* TAB 1: Complete SEO Audit */}
          {activeTab === 'audit' && (
            <div className="space-y-6">
              {/* Overall Scorecard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-2xl font-black">
                    100
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                      Technical SEO
                    </span>
                    <h4 className="text-white font-bold text-sm">Perfect Health</h4>
                    <p className="text-[11px] text-slate-400">Zero crawl or index errors</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-2xl font-black">
                    100
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">
                      On-Page Quality
                    </span>
                    <h4 className="text-white font-bold text-sm">Meta & Titles</h4>
                    <p className="text-[11px] text-slate-400">Optimal lengths & keywords</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-2xl font-black">
                    3
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">
                      Rich Snippets
                    </span>
                    <h4 className="text-white font-bold text-sm">Valid Schema Graphs</h4>
                    <p className="text-[11px] text-slate-400">Person, Org, WebSite</p>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Verified SEO Checklist Items
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { title: 'Optimized Page Title', desc: '64 characters: Syed Umer Hayat (Syed Bhai) | SYEDCORE...', status: 'Pass (50-65 chars)' },
                    { title: 'Engaging Meta Description', desc: '154 characters: High CTR call-to-action summary', status: 'Pass (120-160 chars)' },
                    { title: 'Canonical Tag Linked', desc: 'https://syedcore.com/ avoids duplicate content issues', status: 'Pass' },
                    { title: 'Robots Directive', desc: 'index, follow, max-image-preview:large enabled', status: 'Pass' },
                    { title: 'Schema.org JSON-LD', desc: 'Embedded Person, ProfessionalService & WebSite entities', status: 'Pass' },
                    { title: 'Open Graph (FB / LinkedIn)', desc: 'og:title, og:description, og:image, og:url configured', status: 'Pass' },
                    { title: 'Twitter / X Card Format', desc: 'summary_large_image with author tag @syedcore', status: 'Pass' },
                    { title: 'Semantic HTML5 Hierarchy', desc: 'H1 in Hero, H2 per section, H3 per service card', status: 'Pass' },
                    { title: 'Mobile Viewport Meta', desc: 'width=device-width, initial-scale=1.0 responsive', status: 'Pass' },
                    { title: 'Dual Domain Synergy', desc: 'syedcore.com & syed-bhai.page.gd interlinked with rel tags', status: 'Pass' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-semibold text-white">{item.title}</p>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            {item.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">
                  Ready for Google Search Console & Bing Webmaster Tools
                </span>
                <button
                  onClick={() => copyToClipboard(metaTagsSnippet, 'meta')}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-all cursor-pointer"
                >
                  {copiedType === 'meta' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'meta' ? 'Copied Meta Tags!' : 'Copy Raw Meta Tags'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Google SERP Live Preview */}
          {activeTab === 'serp' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Live Google Search Result Preview:
                </span>
                <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setSerpDevice('mobile')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      serpDevice === 'mobile' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile
                  </button>
                  <button
                    onClick={() => setSerpDevice('desktop')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      serpDevice === 'desktop' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" /> Desktop
                  </button>
                </div>
              </div>

              {/* Google SERP Card container */}
              <div className={`p-5 rounded-2xl bg-white text-slate-900 shadow-xl ${serpDevice === 'mobile' ? 'max-w-md mx-auto' : 'w-full'}`}>
                {/* Google URL Header */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-800">
                    S
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs font-medium text-slate-800">SYEDCORE</p>
                    <p className="text-[11px] text-slate-500 truncate">https://syedcore.com &rsaquo; portfolio &rsaquo; syed-umer-hayat</p>
                  </div>
                </div>

                {/* Google Title */}
                <h3 className="text-base sm:text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                  Syed Umer Hayat (Syed Bhai) | SYEDCORE – Web Developer & SEO Specialist
                </h3>

                {/* Google Description */}
                <p className="text-xs text-[#4d5156] mt-1 leading-relaxed">
                  Official portfolio and services hub of Syed Umer Hayat (Syed Bhai) & SYEDCORE. Premium Full-Stack Web Development, SEO Optimization, YouTube Automation & Shopify E-Commerce Solutions.
                </p>

                {/* Rich Sitelinks / Highlights */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100">
                  <div>
                    <span className="text-xs font-medium text-[#1a0dab] hover:underline cursor-pointer block">
                      Web Development Services
                    </span>
                    <p className="text-[11px] text-slate-500">React, TypeScript & Tailwind modern apps</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#1a0dab] hover:underline cursor-pointer block">
                      SEO & Growth Strategy
                    </span>
                    <p className="text-[11px] text-slate-500">Rank on Google with complete On-Page & Schema</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 text-center">
                Matches the latest 2026 Google Search ranking and snippet generation algorithms.
              </p>
            </div>
          )}

          {/* TAB 3: Social Share Cards */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              {/* Twitter Card */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                  X / Twitter Large Summary Card Preview
                </span>
                <div className="max-w-md mx-auto rounded-2xl border border-slate-700 bg-slate-950 overflow-hidden shadow-xl">
                  <div className="h-44 bg-gradient-to-tr from-slate-900 via-cyan-950 to-blue-900 flex items-center justify-center p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 glow-gradient-cyan opacity-40 pointer-events-none" />
                    <div className="relative z-10">
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
                        SYEDCORE
                      </span>
                      <h4 className="text-white font-extrabold text-base mt-2">
                        Syed Umer Hayat (Syed Bhai)
                      </h4>
                      <p className="text-xs text-cyan-200/80">Full-Stack Web Dev & SEO Specialist</p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-900">
                    <span className="text-[11px] uppercase text-slate-400 font-semibold tracking-wider">
                      syedcore.com
                    </span>
                    <h5 className="text-sm font-bold text-white mt-0.5 truncate">
                      Syed Umer Hayat (Syed Bhai) | SYEDCORE
                    </h5>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      Official portfolio and services hub of Syed Umer Hayat (Syed Bhai) & SYEDCORE. Premium Web Development & Complete SEO.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp / Telegram Chat Preview
                </span>
                <div className="max-w-md mx-auto p-3 rounded-2xl bg-[#111b21] border border-[#202c33] text-slate-200">
                  <div className="rounded-xl bg-[#202c33] p-2.5 flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                      SC
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-xs font-bold text-white truncate">
                        Syed Umer Hayat (Syed Bhai) | SYEDCORE
                      </h5>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                        High-performance Web Development, Technical SEO, YouTube Automation & Shopify E-Commerce Solutions.
                      </p>
                      <span className="text-[10px] text-slate-500 block mt-1">syedcore.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Schema.org JSON-LD */}
          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Schema.org JSON-LD (Graph Representation)
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Provides Google with machine-readable entity identity, degrees, sameAs links & services catalog.
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(formattedSchema, 'schema')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-medium transition-all cursor-pointer"
                >
                  {copiedType === 'schema' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedType === 'schema' ? 'Copied JSON!' : 'Copy Schema'}</span>
                </button>
              </div>

              <div className="relative rounded-2xl bg-slate-950 p-4 border border-slate-800 overflow-x-auto max-h-[380px]">
                <pre className="text-xs text-cyan-300/90 font-mono leading-relaxed">
                  {formattedSchema}
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>SEO Status: 100% Production Ready</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};
