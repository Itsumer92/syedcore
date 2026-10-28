import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ShieldCheck, 
  SlidersHorizontal, 
  Send, 
  Code2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PhotoSettings } from '../types';
import { PhotoAvatar } from './PhotoAvatar';

interface NavbarProps {
  photoSettings: PhotoSettings;
  onOpenPhotoModal: () => void;
  onOpenSeoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  photoSettings,
  onOpenPhotoModal,
  onOpenSeoModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Dual Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-extrabold text-lg tracking-wider">
                  SC
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white text-base tracking-tight">
                  SYEDCORE
                </span>
                <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                  Syed Bhai
                </span>
              </div>
              <p className="text-[11px] text-slate-400 -mt-0.5 font-medium">
                Web Dev &bull; SEO &bull; Growth
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools: SEO Inspector, Photo Fit & Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* 100% SEO Badge button */}
            <button
              onClick={onOpenSeoModal}
              title="Inspect 100% SEO, SERP Preview & Schema"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SEO 100%</span>
            </button>

            {/* Photo Avatar with Fit controls */}
            <button
              onClick={onOpenPhotoModal}
              title="Adjust Photo Framing & Upload"
              className="flex items-center gap-2 p-1 pl-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 transition-all hover:border-cyan-500/50 cursor-pointer"
            >
              <span className="text-[11px] font-medium hidden lg:inline">Photo Fit</span>
              <PhotoAvatar settings={photoSettings} size="nav" />
            </button>

            {/* Hire Me / Consultation button */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSeoModal}
              className="p-2 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-bold"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenPhotoModal}
              className="p-1 rounded-full bg-slate-900 border border-slate-700"
            >
              <PhotoAvatar settings={photoSettings} size="nav" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-5 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSeoModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500/15 text-emerald-300 font-bold text-xs border border-emerald-500/30"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Open Complete SEO Scorecard (100/100)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPhotoModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500/15 text-cyan-300 font-bold text-xs border border-cyan-500/30"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Adjust Photo Fit & Upload Picture</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs"
              >
                <Send className="w-4 h-4" />
                <span>Contact Syed Bhai / Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
