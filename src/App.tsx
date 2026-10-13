import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrafficSavingsCalculator } from './components/TrafficSavingsCalculator';
import { SuitAndTechSection } from './components/SuitAndTechSection';
import { ComparisonSection } from './components/ComparisonSection';
import { AudienceSegments } from './components/AudienceSegments';
import { NeighborhoodsSP } from './components/NeighborhoodsSP';
import { SafetyEthicsSection } from './components/SafetyEthicsSection';
import { InstagramFeedGMB } from './components/InstagramFeedGMB';
import { BookingForm } from './components/BookingForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Traffic and Time Savings Calculator for SP */}
        <TrafficSavingsCalculator />

        {/* Technology & Official 8 Benefits */}
        <SuitAndTechSection />

        {/* Comparison: In-Home vs Physical Studios */}
        <ComparisonSection />

        {/* Solutions by Audience Personas */}
        <AudienceSegments />

        {/* São Paulo Local SEO & Neighborhoods */}
        <NeighborhoodsSP />

        {/* Biosafety, CREF & Transparent Contraindications */}
        <SafetyEthicsSection />

        {/* Social Proof: Instagram @frequency.body & Google Reviews */}
        <InstagramFeedGMB />

        {/* Interactive WhatsApp Trial Booking Form */}
        <BookingForm />

        {/* High-Intent SEO FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
