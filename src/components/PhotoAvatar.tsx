import React from 'react';
import { PhotoSettings } from '../types';
import { SlidersHorizontal, Sparkles, CheckCircle2 } from 'lucide-react';
import defaultPortraitImg from '../assets/images/syed_umer_portrait_1793214816259.jpg';

interface PhotoAvatarProps {
  settings: PhotoSettings;
  onOpenFitModal?: () => void;
  size?: 'hero' | 'nav' | 'card' | 'modal';
  showControlsButton?: boolean;
}

export const DEFAULT_PHOTO_SETTINGS: PhotoSettings = {
  url: defaultPortraitImg,
  zoom: 100,
  panX: 0,
  panY: 0,
  shape: 'squircle',
  glowColor: 'cyan',
  badge: 'Available for Hire'
};

export const PhotoAvatar: React.FC<PhotoAvatarProps> = ({
  settings,
  onOpenFitModal,
  size = 'hero',
  showControlsButton = true,
}) => {
  const getShapeClasses = (shape: PhotoSettings['shape']) => {
    switch (shape) {
      case 'circle':
        return 'rounded-full';
      case 'rounded-xl':
        return 'rounded-2xl';
      case 'rounded-3xl':
        return 'rounded-3xl';
      case 'squircle':
      default:
        return 'rounded-[2.2rem]';
    }
  };

  const getGlowStyles = (color: PhotoSettings['glowColor']) => {
    switch (color) {
      case 'indigo':
        return {
          glow: 'shadow-[0_0_50px_rgba(99,102,241,0.35)] border-indigo-500/50',
          gradient: 'from-indigo-500/30 via-purple-500/10 to-transparent',
          badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
        };
      case 'emerald':
        return {
          glow: 'shadow-[0_0_50px_rgba(16,185,129,0.35)] border-emerald-500/50',
          gradient: 'from-emerald-500/30 via-teal-500/10 to-transparent',
          badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        };
      case 'amber':
        return {
          glow: 'shadow-[0_0_50px_rgba(245,158,11,0.35)] border-amber-500/50',
          gradient: 'from-amber-500/30 via-orange-500/10 to-transparent',
          badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        };
      case 'cyan':
      default:
        return {
          glow: 'shadow-[0_0_50px_rgba(6,182,212,0.35)] border-cyan-500/50',
          gradient: 'from-cyan-500/30 via-blue-500/10 to-transparent',
          badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
        };
    }
  };

  const glowConfig = getGlowStyles(settings.glowColor);
  const shapeClass = getShapeClasses(settings.shape);

  // If size is 'nav'
  if (size === 'nav') {
    return (
      <div className="relative inline-block group">
        <div className={`w-9 h-9 overflow-hidden ${shapeClass} border border-cyan-500/40 shadow-sm bg-slate-900`}>
          <img
            src={settings.url}
            alt="Syed Umer Hayat (Syed Bhai)"
            className="w-full h-full object-cover transition-transform duration-300"
            style={{
              transform: `scale(${settings.zoom / 100}) translate(${settings.panX}%, ${settings.panY}%)`,
              objectPosition: 'center center',
            }}
          />
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full" />
      </div>
    );
  }

  // If size is 'hero'
  return (
    <div className="relative mx-auto flex flex-col items-center justify-center">
      {/* Outer ambient glow halo */}
      <div
        className={`absolute -inset-2 bg-gradient-to-tr ${glowConfig.gradient} ${shapeClass} blur-2xl opacity-70 animate-pulse transition-all duration-700 pointer-events-none`}
      />

      {/* Main Image Container with perfect fit containment */}
      <div
        className={`relative w-[280px] h-[330px] sm:w-[340px] sm:h-[400px] md:w-[380px] md:h-[450px] ${shapeClass} p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-transparent border ${glowConfig.glow} backdrop-blur-md overflow-hidden transition-all duration-300`}
      >
        {/* Inner frame */}
        <div className={`relative w-full h-full overflow-hidden ${shapeClass} bg-[#0b1120]`}>
          <img
            src={settings.url}
            alt="Syed Umer Hayat - Syed Bhai | SYEDCORE"
            loading="eager"
            className="w-full h-full object-cover select-none transition-transform duration-150 ease-out"
            style={{
              transform: `scale(${settings.zoom / 100}) translate(${settings.panX}%, ${settings.panY}%)`,
              objectPosition: 'center 20%',
            }}
          />

          {/* Subtle gradient vignette to blend base */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

          {/* Quick Fit Controls Button (Hover/Always visible trigger) */}
          {showControlsButton && onOpenFitModal && (
            <button
              onClick={onOpenFitModal}
              title="Adjust Photo Framing & Fit"
              className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 text-xs font-medium backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Fit / Edit Photo</span>
            </button>
          )}

          {/* Bottom Card Identity Plate */}
          <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
            <div className="min-w-0 pr-2">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm sm:text-base tracking-tight truncate">
                  Syed Umer Hayat
                </span>
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              </div>
              <p className="text-xs text-slate-400 truncate">
                Founder, SYEDCORE & Syed Bhai
              </p>
            </div>
            <div className={`shrink-0 px-2 py-0.5 rounded-full border text-[11px] font-semibold flex items-center gap-1 ${glowConfig.badgeBg}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pill: BSCS @ Virtual University */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          BS Computer Science &bull; Virtual University
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-md shadow-sm">
          📍 Nowshera, PK
        </span>
      </div>
    </div>
  );
};
