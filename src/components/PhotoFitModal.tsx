import React, { useState, useRef } from 'react';
import { PhotoSettings } from '../types';
import { 
  X, 
  Upload, 
  Link as LinkIcon, 
  ZoomIn, 
  Move, 
  RotateCcw, 
  Check, 
  Sparkles,
  Camera,
  Layers
} from 'lucide-react';
import defaultPortraitImg from '../assets/images/syed_umer_portrait_1793214816259.jpg';

interface PhotoFitModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: PhotoSettings;
  onSaveSettings: (settings: PhotoSettings) => void;
}

const PRESET_AVATARS = [
  {
    name: 'Executive Studio (Default)',
    url: defaultPortraitImg,
    zoom: 100,
    panX: 0,
    panY: 0
  },
  {
    name: 'Tech & Code Workspace',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    zoom: 105,
    panX: 0,
    panY: -5
  },
  {
    name: 'Creative Founder',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    zoom: 100,
    panX: 0,
    panY: 0
  },
  {
    name: 'Modern Strategist',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    zoom: 100,
    panX: 0,
    panY: 0
  }
];

export const PhotoFitModal: React.FC<PhotoFitModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
}) => {
  const [draft, setDraft] = useState<PhotoSettings>({ ...settings });
  const [urlInput, setUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setDraft((prev) => ({
            ...prev,
            url: event.target!.result as string,
            zoom: 100,
            panX: 0,
            panY: 0,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      setDraft((prev) => ({
        ...prev,
        url: urlInput.trim(),
        zoom: 100,
        panX: 0,
        panY: 0,
      }));
      setUrlInput('');
    }
  };

  const handleResetFit = () => {
    setDraft({
      ...draft,
      zoom: 100,
      panX: 0,
      panY: 0,
      shape: 'squircle',
      glowColor: 'cyan',
    });
  };

  const handleSave = () => {
    onSaveSettings(draft);
    onClose();
  };

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
        return 'rounded-[2rem]';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Profile Photo & Framing Fit Studio
              </h3>
              <p className="text-xs text-slate-400">
                Upload your real photo, adjust exact zoom & positioning so it fits perfectly!
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

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left: Real-time Live Preview */}
            <div className="md:col-span-5 flex flex-col items-center justify-center bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Live Frame Preview
              </span>

              <div className={`relative w-[220px] h-[270px] ${getShapeClasses(draft.shape)} p-1.5 bg-gradient-to-b from-white/10 to-transparent border border-cyan-500/40 shadow-xl overflow-hidden`}>
                <div className={`w-full h-full overflow-hidden ${getShapeClasses(draft.shape)} bg-slate-900`}>
                  <img
                    src={draft.url}
                    alt="Syed Umer Hayat Preview"
                    className="w-full h-full object-cover transition-transform duration-75 select-none"
                    style={{
                      transform: `scale(${draft.zoom / 100}) translate(${draft.panX}%, ${draft.panY}%)`,
                      objectPosition: 'center 20%',
                    }}
                  />
                </div>
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs font-medium text-slate-300">
                  Scale: <span className="text-cyan-400">{draft.zoom}%</span> | Pan: <span className="text-cyan-400">X:{draft.panX}% Y:{draft.panY}%</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Proportionally locked — zero distortion or stretching
                </p>
              </div>
            </div>

            {/* Right: Controls & Adjustments */}
            <div className="md:col-span-7 space-y-5">
              
              {/* Photo Source: Upload or Paste URL */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  1. Photo Source
                </label>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 text-xs font-medium transition-all"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Your Photo</span>
                  </button>

                  <form onSubmit={handleUrlSubmit} className="flex-1 min-w-[200px] flex gap-1">
                    <input
                      type="url"
                      placeholder="Or paste image URL..."
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                    <button
                      type="submit"
                      disabled={!urlInput.trim()}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-medium border border-slate-700"
                    >
                      <LinkIcon className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Presets */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Or Pick Curated Presets:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PRESET_AVATARS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setDraft((prev) => ({
                          ...prev,
                          url: preset.url,
                          zoom: preset.zoom,
                          panX: preset.panX,
                          panY: preset.panY,
                        }))
                      }
                      className={`flex items-center gap-2 p-1.5 rounded-xl border text-left transition-all ${
                        draft.url === preset.url
                          ? 'border-cyan-500 bg-cyan-500/10 text-cyan-200'
                          : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/50 text-slate-400'
                      }`}
                    >
                      <img
                        src={preset.url}
                        alt={preset.name}
                        className="w-8 h-8 rounded-lg object-cover"
                      />
                      <span className="text-[11px] font-medium truncate">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders for Perfect Fit */}
              <div className="space-y-3.5 p-3.5 bg-slate-950/40 rounded-2xl border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <ZoomIn className="w-4 h-4 text-cyan-400" />
                    Zoom / Scale ({draft.zoom}%)
                  </span>
                  <button
                    onClick={() => setDraft((p) => ({ ...p, zoom: 100 }))}
                    className="text-[11px] text-slate-400 hover:text-cyan-300"
                  >
                    Reset (100%)
                  </button>
                </div>
                <input
                  type="range"
                  min="80"
                  max="160"
                  value={draft.zoom}
                  onChange={(e) => setDraft((p) => ({ ...p, zoom: Number(e.target.value) }))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="flex items-center gap-1">
                        <Move className="w-3.5 h-3.5" /> Horizontal (X)
                      </span>
                      <span className="text-cyan-400 text-[11px]">{draft.panX}%</span>
                    </div>
                    <input
                      type="range"
                      min="-40"
                      max="40"
                      value={draft.panX}
                      onChange={(e) => setDraft((p) => ({ ...p, panX: Number(e.target.value) }))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="flex items-center gap-1">
                        <Move className="w-3.5 h-3.5 rotate-90" /> Vertical (Y)
                      </span>
                      <span className="text-cyan-400 text-[11px]">{draft.panY}%</span>
                    </div>
                    <input
                      type="range"
                      min="-40"
                      max="40"
                      value={draft.panY}
                      onChange={(e) => setDraft((p) => ({ ...p, panY: Number(e.target.value) }))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>
                </div>
              </div>

              {/* Shape & Glow */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Frame Shape:
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(['squircle', 'rounded-3xl', 'rounded-xl', 'circle'] as const).map((shape) => (
                      <button
                        key={shape}
                        type="button"
                        onClick={() => setDraft((p) => ({ ...p, shape }))}
                        className={`px-2.5 py-1.5 rounded-xl border text-xs capitalize text-center transition-all ${
                          draft.shape === shape
                            ? 'border-cyan-500 bg-cyan-500/20 text-cyan-200 font-semibold'
                            : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:bg-slate-800'
                        }`}
                      >
                        {shape.replace('rounded-', '')}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                    Aura Glow Accent:
                  </label>
                  <div className="flex items-center gap-2 pt-1">
                    {[
                      { id: 'cyan', color: 'bg-cyan-400 ring-cyan-500/50' },
                      { id: 'indigo', color: 'bg-indigo-400 ring-indigo-500/50' },
                      { id: 'emerald', color: 'bg-emerald-400 ring-emerald-500/50' },
                      { id: 'amber', color: 'bg-amber-400 ring-amber-500/50' },
                    ].map((glow) => (
                      <button
                        key={glow.id}
                        type="button"
                        onClick={() => setDraft((p) => ({ ...p, glowColor: glow.id as any }))}
                        className={`w-7 h-7 rounded-full ${glow.color} transition-all cursor-pointer ${
                          draft.glowColor === glow.id
                            ? 'ring-4 ring-offset-2 ring-offset-slate-900 scale-110'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                        title={`${glow.id} glow`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <button
            type="button"
            onClick={handleResetFit}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Perfect Fit</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Save & Apply Fit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
