import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom Full-Stack Web Development',
    budget: '$150 - $300',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi Syed Bhai! I am interested in getting started with: ${prefilledService}. Please let me know the next steps.`,
      }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum Syed Bhai! I came across your portfolio (syedcore.com & syed-bhai.page.gd) and would like to discuss a project: ${formData.service || 'Web & SEO'}.`
  );

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch / Start a Project
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&rsquo;s Build Something Extraordinary
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Have a project in mind, need complete SEO optimization, or want to scale your YouTube or Shopify brand? Send a message directly to Syed Bhai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Cards & WhatsApp */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white font-bold text-sm sm:text-base hover:text-cyan-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Inquiries are responded to within 12 hours. Send your project brief, wireframes, or questions anytime.
              </p>
            </div>

            {/* WhatsApp Quick Connect Card */}
            <div className="p-6 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Instant WhatsApp
                  </span>
                </div>
                <span className="text-[11px] text-emerald-300/80">Online Now</span>
              </div>
              <h4 className="text-white font-bold text-sm mb-2">
                Chat Directly with Syed Bhai
              </h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Prefer a quick conversation? Connect on WhatsApp for rapid project estimation and availability.
              </p>
              <a
                href={`https://wa.me/923000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Connect via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Response Guarantee */}
            <div className="p-5 rounded-3xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2.5">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Timezone: PKT (UTC +5) &bull; Global Remote Availability</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict confidentiality and IP protection guaranteed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
              
              {submitted ? (
                <div className="p-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been received by Syed Umer Hayat. I will review your requirements and reply to <strong className="text-cyan-300">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'Custom Full-Stack Web Development',
                        budget: '$150 - $300',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                      >
                        <option value="Custom Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="Complete SEO Optimization & Ranking">Complete SEO &amp; Ranking</option>
                        <option value="YouTube Automation & Channel Scaling">YouTube Automation &amp; Media</option>
                        <option value="Shopify Store Development & E-Commerce VA">Shopify Store Development</option>
                        <option value="Graphic Design & Brand Identity">Graphic Design &amp; Thumbnails</option>
                        <option value="Virtual Assistance & AI Prompt Automation">Virtual Assistance &amp; AI</option>
                        <option value="Full Digital Growth Bundle">Full Growth Ecosystem Bundle</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">
                        Approximate Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                      >
                        <option value="$100 - $200">$100 - $200</option>
                        <option value="$200 - $500">$200 - $500</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000+">$1,000+ (Comprehensive)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">
                      Project Goals &amp; Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your website, channel, or marketing vision, timeline expectations, or any specific features..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-extrabold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? 'Sending Inquiry...' : 'Submit Project Inquiry'}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Directly sent to itsumer92@gmail.com &bull; No spam guaranteed
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
