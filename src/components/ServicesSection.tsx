import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Youtube, 
  ShoppingBag, 
  Palette, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Tag, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data/portfolioData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForContact,
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-emerald-400" />;
      case 'Youtube':
        return <Youtube className="w-6 h-6 text-red-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-400" />;
      case 'Bot':
      default:
        return <Bot className="w-6 h-6 text-blue-400" />;
    }
  };

  const getGradientBorder = (index: number) => {
    const borders = [
      'hover:border-cyan-500/50',
      'hover:border-emerald-500/50',
      'hover:border-red-500/50',
      'hover:border-amber-500/50',
      'hover:border-purple-500/50',
      'hover:border-blue-500/50',
    ];
    return borders[index % borders.length];
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-slate-950/70 border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            SYEDCORE Offerings &amp; Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Digital Services Built for Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Engineered with high standards, strict deadlines, and clear return on investment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`p-6 rounded-3xl bg-slate-900/80 border border-slate-800 ${getGradientBorder(idx)} transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div>
                {/* Icon & Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60 text-[11px] font-medium">
                    {service.category}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features list snapshot */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Price */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.timeline}</span>
                  </div>
                  <div className="font-bold text-white">
                    <span className="text-[10px] text-slate-400 font-normal mr-1">Starts at</span>
                    <span className="text-cyan-400">{service.startingPrice}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectServiceForContact(service.title)}
                    className="py-2 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer hover:scale-[1.02]"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Service Details */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(title) => onSelectServiceForContact(title)}
      />
    </section>
  );
};
