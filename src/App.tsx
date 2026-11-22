import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheExperienceSection } from './components/TheExperienceSection';
import { TheMethodSection } from './components/TheMethodSection';
import { YourSessionSection } from './components/YourSessionSection';
import { AboutFernanda } from './components/AboutFernanda';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#202126] flex flex-col font-sans selection:bg-[#8276C9] selection:text-white">
      {/* Top Navbar: 4 Editorial Chapters + Book Your Session */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Editorial Hero */}
        <Hero />

        {/* Chapter 1: THE EXPERIENCE */}
        <TheExperienceSection />

        {/* Chapter 2: THE METHOD (com o Accordion das 5 Perguntas Obrigatórias) */}
        <TheMethodSection />

        {/* Chapter 3: YOUR SESSION (com o Simulador Discreto de Tempo Poupado) */}
        <YourSessionSection />

        {/* Chapter 4: ABOUT (Fernanda B. Faria e Propósito) */}
        <AboutFernanda />

        {/* Chapter 5: BOOK YOUR SESSION (Agendamento no WhatsApp) */}
        <BookingForm />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Concierge */}
      <FloatingWhatsApp />
    </div>
  );
}
