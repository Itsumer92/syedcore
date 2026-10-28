/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PhotoSettings } from './types';
import { DEFAULT_PHOTO_SETTINGS } from './components/PhotoAvatar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualHubBanner } from './components/DualHubBanner';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillsSection } from './components/SkillsSection';
import { PricingCalculator } from './components/PricingCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PhotoFitModal } from './components/PhotoFitModal';
import { SeoInspectorModal } from './components/SeoInspectorModal';

const LOCAL_STORAGE_KEY = 'syed_user_photo_fit_v2';

export default function App() {
  const [photoSettings, setPhotoSettings] = useState<PhotoSettings>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read saved photo fit settings', e);
    }
    return DEFAULT_PHOTO_SETTINGS;
  });

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
  const [contactPrefill, setContactPrefill] = useState<string>('');

  const handleSavePhotoSettings = (newSettings: PhotoSettings) => {
    setPhotoSettings(newSettings);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSettings));
    } catch (e) {
      console.warn('Could not save photo fit settings to localStorage', e);
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setContactPrefill(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEstimatedPlan = (summary: string) => {
    setContactPrefill(summary);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navigation Header */}
      <Navbar
        photoSettings={photoSettings}
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        onOpenSeoModal={() => setIsSeoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Syed's Framed Photo */}
        <Hero
          photoSettings={photoSettings}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
          onOpenSeoModal={() => setIsSeoModalOpen(true)}
        />

        {/* Dual Hub Banner: syedcore.com & syed-bhai.page.gd synergy */}
        <DualHubBanner />

        {/* About & Profile Section (Virtual University, BSCS, Syed Bhai) */}
        <AboutSection />

        {/* Core Services Section */}
        <ServicesSection
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Portfolio & Case Studies (syedcore, syed-bhai, shopify, etc.) */}
        <PortfolioSection />

        {/* Skills & Technologies Matrix */}
        <SkillsSection />

        {/* Interactive Pricing Estimator */}
        <PricingCalculator
          onSelectEstimatedPlan={handleSelectEstimatedPlan}
        />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Contact & Consultation Section */}
        <ContactSection prefilledService={contactPrefill} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        onOpenSeoModal={() => setIsSeoModalOpen(true)}
      />

      {/* Interactive Photo Framing & Fit Modal */}
      <PhotoFitModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        settings={photoSettings}
        onSaveSettings={handleSavePhotoSettings}
      />

      {/* Complete SEO Inspector & Audit Modal (100% Score, SERP, Social, Schema) */}
      <SeoInspectorModal
        isOpen={isSeoModalOpen}
        onClose={() => setIsSeoModalOpen(false)}
      />

    </div>
  );
}
